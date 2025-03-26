using Blacksmith.Core.Application.DTOs;
using Blacksmith.Core.Domain.Entities;

namespace Blacksmith.Core.Domain.Models
{
    public class PaginatedList<T>
    {
        public PaginatedList(IEnumerable<T> list, int currentPageNumber, int itemsOnPage)
        {
            ItemsCount = list.Count();
            ItemsOnPage = itemsOnPage;
            CurrentPageNumber = currentPageNumber;
            TotalPages = list.Count() / itemsOnPage;
            Items.AddRange(list);
        }

        public int ItemsCount { get; set; }
        public int ItemsOnPage { get; set; }
        public int TotalPages { get; set; }
        public int CurrentPageNumber { get; set; }
        public List<T> Items { get; set; } = []; // Initialize
    }

    public static class PaginatedListExtension
    {
        /// <summary>
        /// Creates paged list
        /// </summary>
        /// <param name="list">IEnumerable collection</param>
        /// <param name="currentPageNumber"></param>
        /// <param name="itemsOnPage"></param>
        /// <returns>PaginatedList<ItemResponse></returns>
        public static PaginatedList<ItemResponse> ToPaginatedList(this IEnumerable<Item> list, int currentPageNumber, int itemsOnPage)
        {
            PaginatedList<ItemResponse> items = new PaginatedList<ItemResponse>
            (
                list.Select(i => i.ToItemResponse()!),
                currentPageNumber,
                itemsOnPage
            );

            return items;
        }
    }
}