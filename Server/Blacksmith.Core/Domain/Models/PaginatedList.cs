using Blacksmith.Core.Domain.Entities;

namespace Blacksmith.Core.Domain.Models
{
    public class PaginatedList<T>
    {
        public PaginatedList(List<T?> items, int itemsCount, int currentPageNumber, int itemsOnPage)
        {
            ItemsCount = itemsCount;
            ItemsOnPage = itemsOnPage;
            CurrentPageNumber = currentPageNumber;
            TotalPages = items.Count >= itemsOnPage ? (int)Math.Ceiling((double)itemsCount / itemsOnPage) : 1;
            Items.AddRange(items);
        }

        public int ItemsCount { get; set; }
        public int ItemsOnPage { get; set; }
        public int TotalPages { get; set; }
        public int CurrentPageNumber { get; set; }
        public List<T?> Items { get; set; } = new List<T?>();
    }
}