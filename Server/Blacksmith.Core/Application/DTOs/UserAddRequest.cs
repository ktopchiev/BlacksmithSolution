using Microsoft.AspNetCore.Identity;

namespace Blacksmith.Core.Application.DTOs
{
    public class UserAddRequest
    {
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }

    public static class UserAddRequestExtension
    {
        public static IdentityUser ToUser(this UserAddRequest userAddRequest)
        {
            return new IdentityUser
            {
                UserName = userAddRequest.UserName,
                Email = userAddRequest.Email
            };
        }
    }
}