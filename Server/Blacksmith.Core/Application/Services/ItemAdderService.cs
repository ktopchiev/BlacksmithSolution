using Blacksmith.Core.Application.DTOs;
using Blacksmith.Core.Application.ServiceContracts;
using Blacksmith.Core.Domain.Entities;
using Blacksmith.Core.Domain.Helpers;
using Blacksmith.Core.Domain.RepositoryContracts;

namespace Blacksmith.Core.Application.Services
{
    public class ItemAdderService : IItemAdderService
    {
        private readonly IItemRepository _itemRepository;

        public ItemAdderService(IItemRepository itemRepository)
        {
            _itemRepository = itemRepository;
        }

        public async Task<ItemResponse> AddItemAsync(ItemAddRequest itemAddRequest)
        {
            if (itemAddRequest == null) throw new ArgumentNullException(nameof(itemAddRequest));

            ValidationHelper.ModelValidation(itemAddRequest);

            Item item = itemAddRequest.ToItem();

            Item resultItem = await _itemRepository.AddItemAsync(item);

            return resultItem!.ToItemResponse()!;
        }
    }
}
