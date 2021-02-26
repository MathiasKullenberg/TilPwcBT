using Microsoft.AspNetCore.Mvc;

using Newtonsoft.Json;

using ServerAndAdmin.Data;
using ServerAndAdmin.Functions;
using ServerAndAdmin.Models.EventModels;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServerAndAdmin.UserControllers
{
    [Route("api/public/event")]
    [ApiController]
    public class UserEventController : ControllerBase
    {
        private readonly ServerAndAdminContext _context;
        public UserEventController(ServerAndAdminContext context)
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

            List<EventModel> eventModels = new List<EventModel>();


            if (Category == "All" && Type != Models.EventModels.Type.All)
            {
                eventModels = _context.EventModel
                .Where(x => x.CreateDate > StartTime)
                .Where(x => x.CreateDate < EndTime)
                .Where(x => x.Type == Type)
                .ToList();
            }
            else if (Type == Models.EventModels.Type.All && Category != "All")
            {
                eventModels = _context.EventModel
                .Where(x => x.CreateDate > StartTime)
                .Where(x => x.CreateDate < EndTime)
                .Where(x => x.Category == Category)
                .ToList();
            }
            else if (Type == Models.EventModels.Type.All && Category == "All")
            {
                eventModels = _context.EventModel
                .Where(x => x.CreateDate > StartTime)
                .Where(x => x.CreateDate < EndTime)
                .ToList();
            }
            else
            {
                eventModels = _context.EventModel
                .Where(x => x.CreateDate > StartTime)
                .Where(x => x.CreateDate < EndTime)
                .Where(x => x.Type == Type)
                .Where(x => x.Category == Category)
                .ToList();
            }


            if(eventModels.Count == 0)
            {
                return BadRequest("No data were found");
            }

            return Ok(JsonConvert.SerializeObject(eventModels));
        }

    }
}
