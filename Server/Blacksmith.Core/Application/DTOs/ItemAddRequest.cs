using Blacksmith.Core.Domain.Entities;

namespace Blacksmith.Core.Application.DTOs
{
    public class ItemAddRequest
    {
        public required string Name { get; set; }
        public string? Description { get; set; }
        public required double Price { get; set; }
        public string ImageUrl { get; set; }
        public string Material { get; set; }
        public string Color { get; set; }
        public string Category { get; set; }
        public double Rating { get; set; }
    }

    public static class ItemAddRequestExtension
    {
        public static Item ToItem(this ItemAddRequest itemAddRequest)
        {
            return new Item
            {
                Name = itemAddRequest.Name,
                Description = itemAddRequest.Description,
                Price = itemAddRequest.Price,
                ImageUrl = itemAddRequest.ImageUrl,
                Material = itemAddRequest.Material,
                Color = itemAddRequest.Color,
                Category = itemAddRequest.Category,
                Rating = itemAddRequest.Rating
            };
        }
    }
}

