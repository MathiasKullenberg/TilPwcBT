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
    [Route("api/matches")]
    [ApiController]
    public class UserMatchesController : ControllerBase
    {

        private readonly ServerAndAdminContext _context;
        public UserMatchesController(ServerAndAdminContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetMatches()
        {
            var request = Request;

            JWToken jwt = new JWToken();
            if (!jwt.ValidateToken(jwt.GetToken(request), out long UserId))
            {
                return BadRequest("Not Authorized");
            }

            List<UserMatchesModel> userMatchesModels = new List<UserMatchesModel>();

            userMatchesModels = _context.UserMatchesModel.Where(x => x.UserId == UserId).ToList();

            return Ok(JsonConvert.SerializeObject(userMatchesModels));
        }

        [HttpPost]
        public IActionResult PostMatches([FromBody]UserMatchesModel userMatchesModel)
        {
            var request = Request;

            JWToken jwt = new JWToken();
            if (!jwt.ValidateToken(jwt.GetToken(request), out long UserId))
            {
                return BadRequest("Not Authorized");
            }

            try
            {
                userMatchesModel.CreateDate = DateTime.Now;
                userMatchesModel.UserId = UserId;

                _context.UserMatchesModel.Add(userMatchesModel);
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
