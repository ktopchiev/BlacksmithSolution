using Blacksmith.Core.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Blacksmith.Infrastructure.Extensions
{
    public static class ItemRepositoryExtension
    {
        public static IQueryable<Item> Sort(this IQueryable<Item> query, string orderBy)
        {
            if (orderBy == String.Empty || orderBy == "") return query.OrderBy(i => i.Name);

            switch (orderBy)
            {
                case "priceAsc":
                    query = query.OrderBy(i => i.Price);
                    break;
                case "priceDesc":
                    query = query.OrderByDescending(i => i.Price);
                    break;
                case "alphaAsc":
                    query = query.OrderBy(i => i.Name);
                    break;
                case "alphaDesc":
                    query = query.OrderByDescending(i => i.Name);
                    break;
                case "ratingAsc":
                    query = query.OrderBy(i => i.Rating);
                    break;
                case "ratingDesc":
                    query = query.OrderByDescending(i => i.Rating);
                    break;
                default:
                    break;
            }

            return query;
        }

        public static IQueryable<Item> Filter(this IQueryable<Item> query, string color, string material, double? rating)
        {
            if (color != null) query = query.Where(i => i.Color == color);

            if (material != null) query = query.Where(i => i.Material == material);

            if (rating != null) query = query.Where(i => i.Rating == rating);

            return query;
        }
    }
}