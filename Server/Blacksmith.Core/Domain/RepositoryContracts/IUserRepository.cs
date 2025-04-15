using Microsoft.AspNetCore.Identity;

namespace Blacksmith.Core.Domain.RepositoryContracts
{
    public interface IUserRepository
    {
        Task<List<IdentityUser>> GetUsersAsync();
    }
}