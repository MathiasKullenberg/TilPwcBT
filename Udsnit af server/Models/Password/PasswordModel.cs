using ServerAndAdmin.Functions;
using ServerAndAdmin.Models.ApiResponseModels;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServerAndAdmin.Models.Password
{
    public class PasswordModel
    {
        public string StrPassword { get; set; }
        public int IntSalt { get; set; }
    }
}
