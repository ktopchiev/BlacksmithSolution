using Blacksmith.Core.Application.DTOs;
using Blacksmith.Core.Application.ServiceContracts;
using Blacksmith.Core.Domain.Entities;
using Blacksmith.Core.Domain.Helpers;
using Blacksmith.Core.Domain.Models;
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

        public async Task<PaginatedList<ItemResponse>?> GetAllItemsAsync(ItemParams itemParams)
        {
            PaginatedList<ItemResponse> itemList = await _itemRepository.GetAllItemsAsync(itemParams);

            if (itemList == null || !itemList.Items.Any()) return null;

            return itemList;
        }



        public async Task<ItemResponse?> GetItemByIdAsync(Guid itemId)
        {
            if (itemId == Guid.Empty) throw new ArgumentNullException(nameof(itemId));

            Item? item = await _itemRepository.GetItemByIdAsync(itemId);

            if (item == null) return null;

            return item.ToItemResponse();
        }

        public async Task<ItemFilters> GetItemFiltersAsync()
        {
            return await _itemRepository.GetItemFiltersAsync();
        }
    }
}