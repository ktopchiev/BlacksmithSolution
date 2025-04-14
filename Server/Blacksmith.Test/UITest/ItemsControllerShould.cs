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

    #region GetterServiceFail
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

    #region GetterServiceOK

    [Fact]
    public async Task GetAllITemsAsync_ShouldReturnAllItems()
    {
        //Arrange
        ItemParams itemParams = new ItemParams() { CurrentPageNumber = 1, ItemsOnPage = 12 };
        Guid itemId = new Guid("957602a8-e3b1-4132-b8f2-794ca22163f2");
        ItemResponse item = new ItemResponse() { ItemId = itemId, Name = "Armor", Price = 2000 };
        var items = new List<ItemResponse>() { item };

        _itemGetterService.Setup(service => service.GetAllItemsAsync(itemParams))
                            .ReturnsAsync(new PaginatedList<ItemResponse>(items!, 1, 1, 12));

        //Act
        var result = await _itemsController.GetAllItemsAsync(itemParams);

        //Assert
        var okResult = Assert.IsType<OkObjectResult>(result.Result);
        var actualItems = Assert.IsType<PaginatedList<ItemResponse>>(okResult.Value);

        Assert.Equal(items, actualItems.Items!);
        Assert.Single(actualItems.Items);
        Assert.Equal(itemParams.CurrentPageNumber, actualItems.CurrentPageNumber);
        Assert.Equal(itemParams.ItemsOnPage, actualItems.ItemsOnPage);
    }

    [Fact]
    public async Task GetItemByIdAsync_ShouldReturnExpectedResponse()
    {
        //Arrange
        Guid itemId = Guid.NewGuid();
        string name = "Armor";
        double price = 2000;
        ItemResponse expectedResponse = new ItemResponse() { ItemId = itemId, Name = name, Price = price };

        _itemGetterService.Setup(s => s.GetItemByIdAsync(itemId)).ReturnsAsync(expectedResponse);

        //Act
        var result = await _itemsController.GetItemByIdAsync(itemId);

        //Assert
        var okResult = Assert.IsType<OkObjectResult>(result.Result);
        var actualItem = Assert.IsType<ItemResponse>(okResult.Value);

        Assert.Equal(itemId, actualItem.ItemId);
        Assert.Equal(expectedResponse, actualItem);
    }

    #endregion
}
