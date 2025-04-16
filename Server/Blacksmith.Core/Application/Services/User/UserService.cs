using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Blacksmith.Core.Application.ServiceContracts.User;
using Blacksmith.Core.Domain.Models;
using Blacksmith.Core.Domain.RepositoryContracts;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace Blacksmith.Core.Application.Services.User
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly IConfiguration _conf;
        private readonly UserManager<IdentityUser> _userManager;

        public UserService(IUserRepository userRepository, IConfiguration configuration, UserManager<IdentityUser> userManager)
        {
            _userRepository = userRepository;
            _conf = configuration;
            _userManager = userManager;
        }

        public async Task<string> Login(LoginModel userLogin)
        {

            var users = await _userRepository.GetUsersAsync();
            var user = users.Find(u => u.UserName == userLogin.UserName);

            if (user == null) return string.Empty;

            var userRoles = await _userRepository.GetUserRolesAsync(user);

            if (!await _userManager.CheckPasswordAsync(user, userLogin.Password)) return string.Empty;

            return GetToken(user, userRoles);
        }

        private string GetToken(IdentityUser user, IList<string> userRoles)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var jwtKey = Encoding.ASCII.GetBytes(_conf["Jwt:Key"]);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity([
                    new Claim(ClaimTypes.Name, user.UserName),
                    new Claim(ClaimTypes.Email, user.Email),
                ]),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(jwtKey), SecurityAlgorithms.HmacSha256Signature)
            };

            foreach (var role in userRoles)
            {
                tokenDescriptor.Subject.AddClaim(new Claim(ClaimTypes.Role, role));
            }

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }
    }
}