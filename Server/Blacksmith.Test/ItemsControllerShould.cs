using System.Net;
using Blacksmith.Core.Application.DTOs;
using Blacksmith.Core.Application.ServiceContracts;
using Blacksmith.Core.Application.Services;
using Blacksmith.Core.Domain.Entities;
using Blacksmith.Core.Domain.Helpers;
using Blacksmith.Core.Domain.Models;
using Blacksmith.UI.Controllers;
using Microsoft.AspNetCore.Mvc;
using Moq;

namespace Blacksmith.Test;

public class ItemsControllerShould
{
    private readonly Mock<IItemGetterService> _itemGetterService;
    private readonly Mock<IItemAdderService> _itemAdderService;
    private readonly ItemsController _itemsController;

    public ItemsControllerShould()
    {
        _itemGetterService = new Mock<IItemGetterService>();
        _itemAdderService = new Mock<IItemAdderService>();
        _itemsController = new ItemsController(_itemAdderService.Object, _itemGetterService.Object);
    }

    #region GetterService
    [Fact]
    public async Task GetAllItemsAsync_ShouldReturnNoContent_WhenArgumentIsNull()
    {
        //Arrange
        ItemParams itemParams = null!;
        _itemGetterService.Setup(service => service.GetAllItemsAsync(itemParams));

        //Act
        var result = await _itemsController.GetAllItemsAsync(itemParams);

        //Assert
        var noContentResult = Assert.IsType<NoContentResult>(result.Result);

        Assert.Equal(204, noContentResult.StatusCode);
    }

    [Fact]
    public async Task GetItemByIdAsync_ShouldReturnNotFound_WhenIdNotExist()
    {
        //Arrange
        Guid id = Guid.NewGuid();
        _itemGetterService.Setup(service => service.GetItemByIdAsync(id)).ReturnsAsync((ItemResponse)null!);


        //Act
        var result = await _itemsController.GetItemByIdAsync(id);

        //Assert
        var notFoundResult = Assert.IsType<NotFoundResult>(result.Result);

        Assert.Equal(404, notFoundResult.StatusCode);
    }

    [Fact]
    public async Task GetItemFiltersAsync_ShouldReturnNoContent_WhenFiltersNotExist()
    {
        //Arrange
        ItemFilters itemFilters = null!;
        _itemGetterService.Setup(service => service.GetItemFiltersAsync()).ReturnsAsync(itemFilters);

        //Act
        var result = await _itemsController.GetItemFiltersAsync();

        //Assert
        var noContentResult = Assert.IsType<NoContentResult>(result.Result);

        Assert.Equal(204, noContentResult.StatusCode);
    }

    #endregion
}
