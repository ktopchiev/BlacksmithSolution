using Blacksmith.Core.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Blacksmith.Infrastructure.Extensions
{
    public static class ItemRepositoryExtension
    {
        public static IQueryable<Item> Sort(this IQueryable<Item> query, string orderBy)
        {
            if (orderBy == String.Empty || orderBy == "") return query.OrderBy(i => i.Name);

            query = orderBy switch
            {
                "priceAsc" => query.OrderBy(i => i.Price),
                "priceDesc" => query.OrderByDescending(i => i.Price),
                "alphaAsc" => query.OrderBy(i => i.Name),
                "alphaDesc" => query.OrderByDescending(i => i.Name),
                "ratingAsc" => query.OrderBy(i => i.Rating),
                "ratingDesc" => query.OrderByDescending(i => i.Rating),
                _=> query.OrderBy(i=>i.Name)
            };

            return query;
        }

        public static IQueryable<Item> Filter(this IQueryable<Item> query, string? category, string? color, string? material, double? rating)
        {
            
            if(!String.IsNullOrEmpty(category))
            {
                List<string> categoryList = category.Split(",", StringSplitOptions.RemoveEmptyEntries)
                    .Select(c => c.ToLower())
                    .ToList();
                query = query.Where(c => categoryList.Contains(c.Category!.ToLower()));
            }

            if(!String.IsNullOrEmpty(color))
            {
                List<string> colorList= color.Split(",", StringSplitOptions.RemoveEmptyEntries)
                    .Select(c => c.ToLower())
                    .ToList();

                query = query.Where(c => colorList.Contains(c.Color!.ToLower()));
            }

            if(!String.IsNullOrEmpty(material))
            {
                List<string> materialList = material.Split(",", StringSplitOptions.RemoveEmptyEntries)
                    .Select(c => c.ToLower())
                    .ToList();
                query = query.Where(c => materialList.Contains(c.Material!.ToLower()));
            }

            if (rating != null) query = query.Where(i => i.Rating == rating);

            return query;
        }
    }
}