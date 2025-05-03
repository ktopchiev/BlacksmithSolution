using Blacksmith.Core.Application.DTOs;
using Blacksmith.Core.Application.ServiceContracts.User;
using Blacksmith.Core.Domain.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Blacksmith.UI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly UserManager<IdentityUser> _userManager;

        public UserController(IUserService userService, UserManager<IdentityUser> userManager)
        {
            _userService = userService;
            _userManager = userManager;
        }

        [HttpPost("login")]
        [AllowAnonymous]
        public async Task<IActionResult> Login([FromBody] LoginModel userLogin)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState.Select(x => x.Value!.Errors)
                .Where(y => y.Count > 0)
                .ToList());

            var token = await _userService.Login(userLogin);

            if (token == null || token == string.Empty) return BadRequest(new { message = "Username or password is incorrect." });

            var user = await _userManager.Users.FirstOrDefaultAsync(x => x.UserName == userLogin.UserName);

            var response = new UserResponse
            {
                UserName = user!.UserName!,
                Email = user.Email!,
                Token = token,
            };

            return Ok(response);
        }

        [Authorize]
        [HttpPost("refresh")]
        public async Task<ActionResult<UserResponse>> Refresh()
        {
            var user = await _userManager.FindByNameAsync(User.Identity!.Name!);
            var userToken = await _userService.GetCurrentUserAsync(User.Identity!.Name!);

            var userResponse = new UserResponse
            {
                UserName = user.UserName,
                Email = user.Email,
                Token = userToken,
            };

            return Ok(userResponse);
        }

        [HttpPost("register")]
        public async Task<ActionResult<string>> Register(UserAddRequest userAddRequest)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState.Select(x => x.Value!.Errors)
                .Where(y => y.Count > 0)
                .ToList());

            if (userAddRequest.UserName == "" || userAddRequest.Email == "") return BadRequest("Username and Email cannot be empty!");

            var result = await _userService.Register(userAddRequest);

            if (!result.Contains("Succeeded") || string.IsNullOrEmpty(result)) return BadRequest();

            return Ok(result);

        }
    }
}