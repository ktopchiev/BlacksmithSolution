using Blacksmith.Core.Application.DTOs;
using Blacksmith.Core.Application.ServiceContracts;
using Blacksmith.Core.Domain.Entities;
using Blacksmith.Core.Domain.RepositoryContracts;

namespace Blacksmith.Core.Application.Services
{
    public class ItemGetterService : IItemGetterService
    {
        private readonly IItemRepository _itemRepository;

        public ItemGetterService(IItemRepository itemRepository)
        {
            _itemRepository = itemRepository;
        }

        public async Task<List<ItemResponse>> GetAllItemsAsync()
        {
            var items = await _itemRepository.GetAllItemsAsync();
            return items.Select(i => i.ToItemResponse()).ToList();
        }

        
        public async Task<ItemResponse?> GetItemByIdAsync(Guid itemId)
        {
            if (itemId == Guid.Empty) throw new ArgumentNullException(nameof(itemId));

            Item item = await _itemRepository.GetItemByIdAsync(itemId);

            return item.ToItemResponse();
        }
    }
}