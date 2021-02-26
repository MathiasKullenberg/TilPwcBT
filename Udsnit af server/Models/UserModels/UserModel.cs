using System;
using System.Collections.Generic;
using System.Linq;
using System.Security;
using System.Threading.Tasks;

namespace ServerAndAdmin.Models
{ 
    public enum UserType
    {
        Free, Basic, Premium
    }
    public class UserModel
    {
        public long Id { get; set; }
        public string UserName { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string Gender { get; set; }
        public string Phone { get; set; }
        public string Mail { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public UserType UserType { get; set; }
        public string Password { get; set; }
        public int Salt { get; set; }
        public DateTime CreateDate { get; set; }
    }

    public class PublicUserModel
    {
        public long Id { get; set; }
        public string UserName { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public UserType UserType { get; set; }
        public DateTime CreateDate { get; set; }
    }
}
