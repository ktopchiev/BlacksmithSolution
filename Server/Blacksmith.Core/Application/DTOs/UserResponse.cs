namespace Blacksmith.Core.Application.DTOs
{
    public class UserResponse
    {
        public required string UserName { get; set; }
        public required string Email { get; set; }
        public required string Token { get; set; }
    }
}