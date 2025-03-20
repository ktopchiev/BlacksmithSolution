using Blacksmith.Core.Application.DTOs;
using Blacksmith.Core.Application.ServiceContracts;
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
        public async Task<ActionResult<List<ItemResponse>>> GetAllItemsAsync()
        {
            return Ok(await _itemGetterService.GetAllItemsAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ItemResponse>> GetItemByIdAsync(Guid itemId)
        {
            ItemResponse itemResponse = await _itemGetterService.GetItemByIdAsync(itemId);

            if (itemResponse == null) return NotFound();

            return itemResponse;
        }

        [HttpPost]
        public async Task<ActionResult<ItemResponse>> AddItemAsync(ItemAddRequest itemAddRequest)
        {
            if (itemAddRequest == null) return BadRequest();

            return Ok(await _itemAdderService.AddItemAsync(itemAddRequest));
        }
    }
}
