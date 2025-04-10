using Blacksmith.Core.Application.DTOs;
using Blacksmith.Core.Domain.Entities;
using Blacksmith.Core.Domain.Helpers;
using Blacksmith.Core.Domain.Models;
using Blacksmith.Core.Domain.RepositoryContracts;
using Blacksmith.Infrastructure.BlacksmithDbContext;
using Blacksmith.Infrastructure.Extensions;
using Microsoft.EntityFrameworkCore;

namespace Blacksmith.Infrastructure.Repositories
{
    public class ItemRepository : IItemRepository
    {
        private readonly ApplicationDbContext _db;

        public ItemRepository(ApplicationDbContext applicationDbContext)
        {
            _db = applicationDbContext;
        }

        public async Task<Item> AddItemAsync(Item item)
        {
            _db.Items.Add(item);
            await _db.SaveChangesAsync();
            return item;
        }

        public async Task<Item?> GetItemByIdAsync(Guid itemId)
        {
            return await _db.Items.FindAsync(itemId);
        }

        public async Task<PaginatedList<ItemResponse>> GetAllItemsAsync(ItemParams itemParams)
        {
            var itemList = await _db.Items
                .Filter(itemParams.Category, itemParams.Color, itemParams.Material, itemParams.Rating)
                .Sort(itemParams.OrderBy!)
                .Skip((itemParams.ItemsOnPage * itemParams.CurrentPageNumber) - itemParams.ItemsOnPage)
                .Take(itemParams.ItemsOnPage)
                .Select(i => i.ToItemResponse())
                .ToListAsync();

            var itemsCount = await _db.Items.CountAsync();

            return new PaginatedList<ItemResponse>(itemList, itemsCount, itemParams.CurrentPageNumber, itemParams.ItemsOnPage);
        }

        public async Task<bool> UpdateItemAsync(Item item, Guid itemId)
        {
            Item? currentItem = await _db.Items.FindAsync(itemId);

            if (currentItem == null)
                return false;

            currentItem.Name = item.Name;
            currentItem.Description = item.Description;
            currentItem.Price = item.Price;
            currentItem.Category = item.Category;
            currentItem.Material = item.Material;
            currentItem.Color = item.Color;
            currentItem.ImageUrl = item.ImageUrl;
            currentItem.Rating = item.Rating;

            await _db.SaveChangesAsync();

            return true;
        }

        public async Task<bool> DeleteItemAsync(Guid itemId)
        {
            Item? item = await _db.Items.FindAsync(itemId);

            if (item == null) return false;

            _db.Items.Remove(item);

            await _db.SaveChangesAsync();

            return true;
        }

        public async Task<ItemFilters> GetItemFiltersAsync()
        {
            List<Item> items = await _db.Items.ToListAsync();

            if (items == null) return null!;

            return new ItemFilters()
            {
                Categories = items.Where(i => i.Category != "")
                    .Select(i => i.Category)
                    .Distinct()
                    .Order()
                    .ToList()!,
                Colors = items.Where(i => i.Color != "")
                    .Select(i => i.Color)
                    .Distinct()
                    .Order()
                    .ToList()!,
                Materials = items.Where(i => i.Material != "")
                    .Select(i => i.Material)
                    .Distinct()
                    .Order()
                    .ToList()!,
            };
        }
    }
}
