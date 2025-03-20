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
    }
}