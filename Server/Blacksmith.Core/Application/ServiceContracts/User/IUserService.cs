using Blacksmith.Core.Application.DTOs;
using Blacksmith.Core.Domain.Models;
using Microsoft.AspNetCore.Identity;

namespace Blacksmith.Core.Application.ServiceContracts.User
{
    public interface IUserService
    {
        Task<string> Login(LoginModel userLogin);
        Task<string> GetCurrentUserAsync(string userName);
        Task<IdentityResult> Register(UserAddRequest userAddRequest);
    }
}