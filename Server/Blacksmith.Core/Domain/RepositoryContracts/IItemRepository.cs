using Blacksmith.Core.Application.DTOs;
using Blacksmith.Core.Domain.Entities;
using Blacksmith.Core.Domain.Helpers;
using Blacksmith.Core.Domain.Models;

namespace Blacksmith.Core.Domain.RepositoryContracts
{
    public interface IItemRepository
    {
        Task<Item> AddItemAsync(Item item);
        Task<Item?> GetItemByIdAsync(Guid itemId);
        Task<bool> UpdateItemAsync(Item item, Guid itemId);
        Task<bool> DeleteItemAsync(Guid itemId);
        Task<PaginatedList<ItemResponse>> GetAllItemsAsync(ItemParams itemParams);
    }
}
