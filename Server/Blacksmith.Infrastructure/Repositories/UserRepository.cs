using Blacksmith.Core.Domain.RepositoryContracts;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Blacksmith.Infrastructure.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly UserManager<IdentityUser> _userManager;

        public UserRepository(UserManager<IdentityUser> userManager)
        {
            _userManager = userManager;
        }

        public Task<List<IdentityUser>> GetUsersAsync()
        {
            return _userManager.Users.ToListAsync();
        }
    }
}