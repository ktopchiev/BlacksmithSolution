using Blacksmith.Core.Application.DTOs;

namespace Blacksmith.Core.Domain.Entities
{
    public class Item
    {
        public Item()
        {
            ItemId = Guid.NewGuid();
        }

        public Guid ItemId { get; set; }
        public required string Name { get; set; }
        public string? Description { get; set; }
        public required double Price { get; set; }
        public string? ImageUrl { get; set; }
        public string? Material { get; set; }
        public string? Color { get; set; }
        public string? Category { get; set; }
        public double Rating { get; set; }
        public int QuantityInStock { get; set; }
    }

    public static class ItemExtension
    {
        public static ItemResponse? ToItemResponse(this Item item)
        {
            return new ItemResponse
            {
                ItemId = item.ItemId,
                Name = item.Name,
                Description = item.Description,
                Price = item.Price,
                ImageUrl = item.ImageUrl,
                Material = item.Material,
                Color = item.Color,
                Category = item.Category,
                Rating = item.Rating
            };
        }
    }
}
