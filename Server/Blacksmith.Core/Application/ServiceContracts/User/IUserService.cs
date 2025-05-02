using Blacksmith.Core.Application.DTOs;
using Blacksmith.Core.Domain.Models;

namespace Blacksmith.Core.Application.ServiceContracts.User
{
    public interface IUserService
    {
        Task<string> Login(LoginModel userLogin);
        Task<string> GetCurrentUserAsync(string userName);
        Task<string> Register(UserAddRequest userAddRequest);
    }
}