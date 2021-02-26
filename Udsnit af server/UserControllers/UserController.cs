
using Microsoft.AspNetCore.Mvc;

using Newtonsoft.Json;

using ServerAndAdmin.Data;
using ServerAndAdmin.Functions;
using ServerAndAdmin.Models;
using ServerAndAdmin.Models.Password;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ServerAndAdmin.UserControllers
{
    [Route("api/user")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly ServerAndAdminContext _context;
        public UserController(ServerAndAdminContext context)
        {
            _context = context;
        }
        

        [HttpPost]
        [Route("login")]
        public IActionResult Login()
        {
            var re = Request;
            var headers = re.Headers;

            string UserName = null;
            string Password = null;

            if (headers.ContainsKey("UserName"))
            {
                UserName = headers["UserName"];
            }

            if (headers.ContainsKey("Password"))
            {
                Password = headers["Password"];
            }


            UserModel user = _context.UserModel.Where(x => x.UserName == UserName).First();
            PasswordModel passwordModel = new PasswordModel { IntSalt = user.Salt, StrPassword = user.Password };

            long userId = user.Id;

            if (HashedPassword.ComparePasswords(passwordModel, Password)) 
            {
                JWToken jwToken = new JWToken();
                string token = jwToken.GenerateToken(user.Id, "User");

                return Ok(token);
            }
            else
            {
                return BadRequest("Not authorized");
            }
        }


        [HttpPost]
        [Route("create")]
        public IActionResult CreateUser([FromBody]UserModel userModel)
        {
            var re = Request;
            var headers = re.Headers;
            string password;

            UserModel user = _context.UserModel.SingleOrDefault(x => x.UserName == userModel.UserName);
            if (user != null)
            {
                return BadRequest("Username is already in use");
            }


            if (headers.ContainsKey("Password"))
            {
                password = headers["Password"];

                if(password.Length < 8)
                {
                    return BadRequest("Password need to be 8 characters or longer");
                }
                else if (!password.Any(char.IsUpper))
                {
                    return BadRequest("Password should contain an uppercase letter");
                }
            }
            else
            {
                return BadRequest("No password provided");
            }

            PasswordModel passwordModel = HashedPassword.Create(password);

            userModel.Password = passwordModel.StrPassword;
            userModel.Salt = passwordModel.IntSalt;
            userModel.CreateDate = DateTime.Now;

            _context.UserModel.Add(userModel);
            _context.SaveChanges();

            return Ok("User Created");
        }


        [HttpPost]
        [Route("checkUserName")]
        public bool CheckIfUserNameExists(string UserName)
        {
            int userCount = _context.UserModel.Where(x => x.UserName == UserName).Count();

            if(userCount == 0)
            {
                return false;
            }
            else
            {
                return true;
            }
        }


        [HttpGet]
        public IActionResult GetUser()
        {
            var request = Request;

            JWToken jwt = new JWToken();
            if (!jwt.ValidateToken(jwt.GetToken(request), out long UserId))
            {
                return BadRequest("Not Authorized");
            }

            UserModel userModel = _context.UserModel.SingleOrDefault(x => x.Id == UserId);

            PublicUserModel publicUserModel = new PublicUserModel
            {
                Id = userModel.Id,
                UserName = userModel.UserName,
                LastName = userModel.LastName,
                FirstName = userModel.FirstName,
                Country = userModel.Country,
                City = userModel.City,
                UserType = userModel.UserType,
                CreateDate = userModel.CreateDate
            };

            return Ok(JsonConvert.SerializeObject(publicUserModel));
        }
    }
}
