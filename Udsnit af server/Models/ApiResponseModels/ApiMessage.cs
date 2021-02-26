using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServerAndAdmin.Models.ApiResponseModels
{
    public class ApiMessage
    {
        public string Value { get; set; } = null;
        public string Message { get; set; }
        public int Code { get; set; }
    }
}
