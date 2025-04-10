namespace Blacksmith.Core.Domain.Helpers
{
    public class ItemParams : PaginationParams
    {
        public string? OrderBy { get; set; }
        public string? SearchTerm { get; set; }
        public string? Category { get; set; }
        public string? Color { get; set; }
        public string? Material { get; set; }
        public double? Rating { get; set; }
    }
}