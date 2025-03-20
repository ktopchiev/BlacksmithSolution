using Blacksmith.Core.Application.DTOs;
using Blacksmith.Core.Domain.Entities;

namespace Blacksmith.Core.Application.ServiceContracts
{
    public interface IItemGetterService
    {
        Task<List<ItemResponse>> GetAllItemsAsync();
        Task<ItemResponse> GetItemByIdAsync(Guid itemId);
    }
}