using Blacksmith.Core.Application.ServiceContracts.User;
using Blacksmith.Core.Domain.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Blacksmith.UI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("Login")]
        [AllowAnonymous]
        public async Task<IActionResult> Login(LoginModel userLogin)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState.Select(x => x.Value.Errors)
                                                                    .Where(y => y.Count > 0)
                                                                    .ToList());

            var token = await _userService.Login(userLogin);

            if (token == null || token == string.Empty) return BadRequest(new { message = "Username or password is incorrect." });

            return Ok(token);
        }
    }
}