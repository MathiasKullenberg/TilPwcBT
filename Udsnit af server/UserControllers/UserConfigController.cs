using Microsoft.AspNetCore.Mvc;

using Newtonsoft.Json;

using ServerAndAdmin.Data;
using ServerAndAdmin.Functions;
using ServerAndAdmin.Models;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServerAndAdmin.UserControllers
{
    [Route("api/config")]
    [ApiController]
    public class UserConfigController : ControllerBase
    {
        private readonly ServerAndAdminContext _context;
        public UserConfigController(ServerAndAdminContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetConfig()
        {
            var request = Request;

            JWToken jwt = new JWToken();
            if (!jwt.ValidateToken(jwt.GetToken(request), out long UserId))
            {
                return BadRequest("Not Authorized");
            }


            UserConfigModel userConfig = _context.UserConfigModel
                .Where(x => x.UserId == UserId)
                .OrderByDescending(x => x.CreateDate).SingleOrDefault();

            if(userConfig == null)
            {
                return BadRequest("No data were found");
            }

            return Ok(JsonConvert.SerializeObject(userConfig));
        }

        [HttpPost]
        public IActionResult PostEvents([FromBody] UserConfigModel userConfig)
        {
            var request = Request;

            JWToken jwt = new JWToken();
            if (!jwt.ValidateToken(jwt.GetToken(request), out long UserId))
            {
                return BadRequest("Not Authorized");
            }

            try
            {
                userConfig.UserId = UserId;
                userConfig.CreateDate = DateTime.Now;

                _context.UserConfigModel.Add(userConfig);
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
