using Blacksmith.Core.Application.DTOs;
using Blacksmith.Core.Domain.Helpers;
using Blacksmith.Core.Domain.Models;

namespace Blacksmith.Core.Application.ServiceContracts
{
    public interface IItemGetterService
    {
        Task<PaginatedList<ItemResponse>?> GetAllItemsAsync(ItemParams itemParams);
        Task<ItemResponse?> GetItemByIdAsync(Guid itemId);
        Task<ItemFilters> GetItemFiltersAsync();
    }
}