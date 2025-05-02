using Blacksmith.Core.Domain.Models;

namespace Blacksmith.Core.Domain.RepositoryContracts
{
    public interface IUserRepository
    {
        Task<List<User>> GetUsersAsync();
        Task<IList<string>> GetUserRolesAsync(User user);
        Task<User> GetUserByNameAsync(string userName);
    }
}