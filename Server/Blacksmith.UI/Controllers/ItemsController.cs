using Blacksmith.Core.Application.DTOs;
using Blacksmith.Core.Application.ServiceContracts;
using Blacksmith.Core.Domain.Helpers;
using Blacksmith.Core.Domain.Models;
using Microsoft.AspNetCore.Mvc;

namespace Blacksmith.UI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemsController : ControllerBase
    {
        private readonly IItemAdderService _itemAdderService;
        private readonly IItemGetterService _itemGetterService;

        public ItemsController(IItemAdderService itemAdderService, IItemGetterService itemGetterService)
        {
            _itemAdderService = itemAdderService;
            _itemGetterService = itemGetterService;
        }

        [HttpGet]
        public async Task<ActionResult<PaginatedList<ItemResponse>>> GetAllItemsAsync([FromQuery] ItemParams itemParams)
        {
            var paginatedItemList = await _itemGetterService.GetAllItemsAsync(itemParams);

            if (paginatedItemList == null) return NoContent();

            return Ok(paginatedItemList);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ItemResponse>> GetItemByIdAsync(Guid id)
        {
            ItemResponse? itemResponse = await _itemGetterService.GetItemByIdAsync(id);

            if (itemResponse == null) return NotFound();

            return Ok(itemResponse);
        }

        [HttpGet("filters")]
        public async Task<ActionResult<ItemFilters>> GetItemFiltersAsync()
        {
            var itemFilters = await _itemGetterService.GetItemFiltersAsync();

            if (itemFilters == null) return NoContent();

            return Ok(itemFilters);
        }

        [HttpPost]
        public async Task<ActionResult<ItemResponse>> AddItemAsync(ItemAddRequest itemAddRequest)
        {
            if (itemAddRequest == null) return BadRequest();

            return Ok(await _itemAdderService.AddItemAsync(itemAddRequest));
        }
    }
}
