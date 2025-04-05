namespace Blacksmith.Core.Domain.Models
{
    public class ItemFilters
    {
        public List<string>? Materials { get; set; } = [];
        public List<string>? Colors { get; set; } = [];
        public List<string>? Categories { get; set; } = [];
    }
}