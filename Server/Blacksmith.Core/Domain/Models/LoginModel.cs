using System.ComponentModel.DataAnnotations;

namespace Blacksmith.Core.Domain.Models
{
    public class LoginModel
    {
        [Required]
        public required string UserName { get; set; }
        [Required]
        public required string Password { get; set; }
    }
}