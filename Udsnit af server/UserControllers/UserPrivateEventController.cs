using Microsoft.AspNetCore.Mvc;

using Newtonsoft.Json;

using ServerAndAdmin.Data;
using ServerAndAdmin.Functions;
using ServerAndAdmin.Models;
using ServerAndAdmin.Models.EventModels;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServerAndAdmin.UserControllers
{
    [Route("api/user/private/events")]
    [ApiController]
    public class UserPrivateEventController : ControllerBase
    {
        private readonly ServerAndAdminContext _context;
        public UserPrivateEventController(ServerAndAdminContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetEvents(DateTime StartTime, DateTime EndTime, Models.EventModels.Type Type = Models.EventModels.Type.All, string Category = "All")
        {
            var request = Request;

            JWToken jwt = new JWToken();
            if (!jwt.ValidateToken(jwt.GetToken(request), out long UserId))
            {
                return BadRequest("Not Authorized");
            }


            List<UserPrivateEventsModel> userPrivateEventsModels = _context.UserPrivateEventsModel.Where(x => x.UserId == UserId).ToList();

            if (userPrivateEventsModels.Count == 0)
            {
                return BadRequest("No data were found");
            }

            return Ok(JsonConvert.SerializeObject(userPrivateEventsModels));
        }

        [HttpPost]
        public IActionResult PostEvents([FromBody]UserPrivateEventsModel userPrivateEventsModel)
        {
            var request = Request;

            JWToken jwt = new JWToken();
            if (!jwt.ValidateToken(jwt.GetToken(request), out long UserId))
            {
                return BadRequest("Not Authorized");
            }

            try
            {
                userPrivateEventsModel.UserId = UserId;
                userPrivateEventsModel.CreateDate = DateTime.Now;

                _context.UserPrivateEventsModel.Add(userPrivateEventsModel);
                _context.SaveChanges();

                return Ok("Added model to database");
            }
            catch
            {
                return BadRequest("Could not add model to database");
            }
        }
    }
}
