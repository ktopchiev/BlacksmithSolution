using Blacksmith.Core.Application.DTOs;

namespace Blacksmith.Core.Application.ServiceContracts
{
    public interface IItemAdderService
    {
        Task<ItemResponse> AddItemAsync(ItemAddRequest itemAddRequest);
    }
}
