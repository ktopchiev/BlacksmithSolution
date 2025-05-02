using Blacksmith.Core.Domain.Models;
using Microsoft.AspNetCore.Identity;

namespace Blacksmith.Core.Domain.RepositoryContracts
{
    public interface IUserRepository
    {
        Task<List<IdentityUser>> GetUsersAsync();
        Task<IList<string>> GetUserRolesAsync(IdentityUser user);
        Task<IdentityUser> GetUserByNameAsync(string userName);
        Task<IdentityResult> AddNewUserAsync(IdentityUser user, string password);
    }
}