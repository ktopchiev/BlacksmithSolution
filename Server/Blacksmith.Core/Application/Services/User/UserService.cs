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

            if (!await _userManager.CheckPasswordAsync(user, userLogin.Password)) return string.Empty;

            if (user == null) return string.Empty;

            var tokenHandler = new JwtSecurityTokenHandler();
            var jwtKey = Encoding.ASCII.GetBytes(_conf["Jwt:Key"]);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]{
                    new Claim(ClaimTypes.Name, userLogin.UserName),
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(jwtKey), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            string userToken = tokenHandler.WriteToken(token);

            return userToken;
        }
    }
}