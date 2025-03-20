using Blacksmith.Core.Domain.Entities;

namespace Blacksmith.Core.Domain.RepositoryContracts
{
    public interface IItemRepository
    {
        Task<Item> AddItemAsync(Item item);
        Task<Item?> GetItemByIdAsync(Guid itemId);
        Task<bool> UpdateItemAsync(Item item, Guid itemId);
        Task<bool> DeleteItemAsync(Guid itemId);
        Task<List<Item>> GetAllItemsAsync();
    }
}
