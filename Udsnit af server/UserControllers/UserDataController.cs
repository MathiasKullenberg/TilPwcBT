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
    [Route("api/user/data")]
    [ApiController]
    public class UserDataController : ControllerBase
    {
        private readonly ServerAndAdminContext _context;
        public UserDataController(ServerAndAdminContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetUserData()
        {
            var request = Request;

            JWToken jwt = new JWToken();
            if (!jwt.ValidateToken(jwt.GetToken(request), out long UserId))
            {
                return BadRequest("Not Authorized");
            }

            List<UserDataModel> userDataModels = new List<UserDataModel>();

            userDataModels = _context.UserDataModel.Where(x => x.Id == UserId).ToList();

            return Ok(JsonConvert.SerializeObject(userDataModels));
        }

        [HttpPost]
        public IActionResult PostUserData([FromBody]UserDataModel userDataModel)
        {
            var request = Request;

            JWToken jwt = new JWToken();
            if (!jwt.ValidateToken(jwt.GetToken(request), out long UserId))
            {
                return BadRequest("Not Authorized");
            }

            try
            {
                userDataModel.CreateDate = DateTime.Now;
                userDataModel.UserId = UserId;
                _context.UserDataModel.Add(userDataModel);
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
