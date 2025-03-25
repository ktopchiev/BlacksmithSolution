namespace Blacksmith.Core.Application.DTOs
{
    public class ItemResponse
    {
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
}
