using Blacksmith.Core.Domain.Entities;
using Blacksmith.Infrastructure.BlacksmithDbContext;

namespace Blacksmith.Infrastructure
{
    public static class DbInitializer
    {
        public static async Task Initialize(ApplicationDbContext db)
        {
            if (db == null) throw new ArgumentNullException(nameof(db));

            if (db.Items.Any()) return;

            List<Item> items = new List<Item>()
            {

                new Item
                {
                    Name = "Knight's Silver Armor",
                    Price = 12000,
                    Category = "Armor",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur tellus a mollis suscipit.",
                    Color = "Silver",
                    Material = "Silver",
                    ImageUrl = "images/items/silver-armor.jpg",
                    Rating = 0,
                    QuantityInStock = 100
                },
                new Item
                {
                    Name = "Knight's Horns Silver Helm",
                    Price = 5000,
                    Category = "Helms",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur tellus a mollis suscipit.",
                    Color = "Silver",
                    Material = "Silver",
                    ImageUrl = "images/items/silver-horns-helmet.jpg",
                    Rating = 0,
                    QuantityInStock = 100
                },
                new Item
                {
                    Name = "Brown Leather Gloves",
                    Price = 1200,
                    Category = "Gloves",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur tellus a mollis suscipit.",
                    Color = "Brown",
                    Material = "Leather",
                    ImageUrl = "images/items/brown-leather-gloves.jpg",
                    Rating = 0,
                    QuantityInStock = 100
                },
                new Item
                {
                    Name = "Heavy Leather Boots",
                    Price = 6500,
                    Category = "Gloves",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur tellus a mollis suscipit.",
                    Color = "Brown",
                    Material = "Leather",
                    ImageUrl = "images/items/brown-leather-gloves.jpg",
                    Rating = 0,
                    QuantityInStock = 100
                },
                new Item
                {
                    Name = "Long Sword",
                    Price = 3200,
                    Category = "Swords",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur tellus a mollis suscipit.",
                    Color = "",
                    Material = "Steel",
                    ImageUrl = "images/items/long-sword.jpg",
                    Rating = 0,
                    QuantityInStock = 100
                },
                new Item
                {
                    Name = "Purple Magic Cloak",
                    Price = 15300,
                    Category = "Clothes",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur tellus a mollis suscipit.",
                    Color = "Purple",
                    Material = "Fabric",
                    ImageUrl = "images/items/purple-magic-cloak.jpg",
                    Rating = 0,
                    QuantityInStock = 100
                },
                new Item
                {
                    Name = "Silver Long Shield",
                    Price = 6800,
                    Category = "Shields",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur tellus a mollis suscipit.",
                    Color = "Silver",
                    Material = "Silver",
                    ImageUrl = "images/items/silver-long-shield.jpg",
                    Rating = 0,
                    QuantityInStock = 100
                },
                new Item
                {
                    Name = "Two Handed Battle Axe",
                    Price = 4600,
                    Category = "Axes",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur tellus a mollis suscipit.",
                    Color = "",
                    Material = "Wooden",
                    ImageUrl = "images/items/two-handed-battle-axe.jpg",
                    Rating = 0,
                    QuantityInStock = 100
                },
                new Item
                {
                    Name = "White Magic Wand",
                    Price = 15000,
                    Category = "Wands",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur tellus a mollis suscipit.",
                    Color = "White",
                    Material = "Ivory",
                    ImageUrl = "images/items/white-magic-wand.jpg",
                    Rating = 0,
                    QuantityInStock = 100
                },
                new Item
                {
                    Name = "Bloody Steel Scythe",
                    Price = 2400,
                    Category = "Pole Arms",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur tellus a mollis suscipit.",
                    Color = "Red",
                    Material = "Steel",
                    ImageUrl = "images/items/bloody-steel-scythe.jpg",
                    Rating = 0,
                    QuantityInStock = 100
                },
                new Item
                {
                    Name = "Golden Skull Scipter",
                    Price = 15000,
                    Category = "Scepters",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur tellus a mollis suscipit.",
                    Color = "Golden",
                    Material = "Gold",
                    ImageUrl = "images/items/golden-skull-scipter.jpg",
                    Rating = 0,
                    QuantityInStock = 100
                },
                new Item
                {
                    Name = "Brown Leather Belt",
                    Price = 1500,
                    Category = "Belts",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur tellus a mollis suscipit.",
                    Color = "Brown",
                    Material = "Leather",
                    ImageUrl = "images/items/brown-leather-belt.jpg",
                    Rating = 0,
                    QuantityInStock = 100
                },
                new Item
                {
                    Name = "Anti Plague Set",
                    Price = 20000,
                    Category = "Sets",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur tellus a mollis suscipit.",
                    Color = "Brown",
                    Material = "Mixed",
                    ImageUrl = "images/items/anti-plague-set.jpg",
                    Rating = 0,
                    QuantityInStock = 100
                },
                new Item
                {
                    Name = "Knight Of The Cross Set",
                    Price = 30000,
                    Category = "Sets",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur tellus a mollis suscipit.",
                    Color = "Mixed",
                    Material = "Mixed",
                    ImageUrl = "images/items/knight-of-the-cross-set.jpg",
                    Rating = 0,
                    QuantityInStock = 100
                },
                new Item
                {
                    Name = "Big Slimy Toad Frog",
                    Price = 1000,
                    Category = "Magic Stuff",
                    Description = "Maybe when you kiss her she'll turn into a princess. Break a leg!",
                    Color = "Toad",
                    Material = "Slimy",
                    ImageUrl = "images/items/enchanted-princess-frog.jpg",
                    Rating = 0,
                    QuantityInStock = 100
                },
                new Item
                {
                    Name = "Red Leather Pants",
                    Price = 1500,
                    Category = "Clothes",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur tellus a mollis suscipit.",
                    Color = "Red",
                    Material = "Leather",
                    ImageUrl = "images/items/red-leather-pants.jpg",
                    Rating = 0,
                    QuantityInStock = 100
                },
                new Item
                {
                    Name = "Black Leather Cap",
                    Price = 2100,
                    Category = "Helms",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur tellus a mollis suscipit.",
                    Color = "Black",
                    Material = "Leather",
                    ImageUrl = "images/items/black-leather-cap.jpg",
                    Rating = 0,
                    QuantityInStock = 100
                },
                new Item
                {
                    Name = "Brown Leather Armor",
                    Price = 9500,
                    Category = "Armor",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur tellus a mollis suscipit.",
                    Color = "Brown",
                    Material = "Leather",
                    ImageUrl = "images/items/brown-leather-armor.jpg",
                    Rating = 0,
                    QuantityInStock = 100
                },
                new Item
                {
                    Name = "Brown Leather Boots",
                    Price = 2600,
                    Category = "Boots",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur tellus a mollis suscipit.",
                    Color = "Brown",
                    Material = "Leather",
                    ImageUrl = "images/items/brown-leather-boots.jpg",
                    Rating = 0,
                    QuantityInStock = 100
                },
                new Item
                {
                    Name = "Black Stone Hammer",
                    Price = 3300,
                    Category = "Hammers",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur tellus a mollis suscipit.",
                    Color = "Black",
                    Material = "Stone",
                    ImageUrl = "images/items/dark-stone-hammer.jpg",
                    Rating = 0,
                    QuantityInStock = 100
                },
                new Item
                {
                    Name = "Golden Skull Helm",
                    Price = 25000,
                    Category = "Hemls",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur tellus a mollis suscipit.",
                    Color = "Golden",
                    Material = "Gold",
                    ImageUrl = "images/items/golden-skull-helmet.jpg",
                    Rating = 0,
                    QuantityInStock = 100
                },
                new Item
                {
                    Name = "Iron Boots",
                    Price = 3700,
                    Category = "Boots",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur tellus a mollis suscipit.",
                    Color = "Gray",
                    Material = "Iron",
                    ImageUrl = "images/items/iron-boots.jpg",
                    Rating = 0,
                    QuantityInStock = 100
                },
                new Item
                {
                    Name = "Iron Gloves",
                    Price = 2150,
                    Category = "Boots",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur tellus a mollis suscipit.",
                    Color = "Gray",
                    Material = "Iron",
                    ImageUrl = "images/items/iron-gloves.jpg",
                    Rating = 0,
                    QuantityInStock = 100
                },
                new Item
                {
                    Name = "Iron Long Shield",
                    Price = 4360,
                    Category = "Shields",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur tellus a mollis suscipit.",
                    Color = "Gray",
                    Material = "Iron",
                    ImageUrl = "images/items/iron-long-shield.jpg",
                    Rating = 0,
                    QuantityInStock = 100
                },
                new Item
                {
                    Name = "Silver Emerald Belt",
                    Price = 3700,
                    Category = "Belts",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur tellus a mollis suscipit.",
                    Color = "Gray",
                    Material = "Silver",
                    ImageUrl = "images/items/silver-belt.jpg",
                    Rating = 0,
                    QuantityInStock = 100
                },
                new Item
                {
                    Name = "Knight's Silver Pants",
                    Price = 8200,
                    Category = "Armor",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur tellus a mollis suscipit.",
                    Color = "Silver",
                    Material = "Silver",
                    ImageUrl = "images/items/silver-pants.jpg",
                    Rating = 0,
                    QuantityInStock = 100
                },
                new Item
                {
                    Name = "Brown Wooden Bow",
                    Price = 2300,
                    Category = "Bows",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur tellus a mollis suscipit.",
                    Color = "Brown",
                    Material = "Wooden",
                    ImageUrl = "images/items/wooden-bow.jpg",
                    Rating = 0,
                    QuantityInStock = 100
                },
                new Item
                {
                    Name = "Brown Wooden Crossbow",
                    Price = 2500,
                    Category = "Crossbows",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur tellus a mollis suscipit.",
                    Color = "Brown",
                    Material = "Wooden",
                    ImageUrl = "images/items/wooden-crossbow.jpg",
                    Rating = 0,
                    QuantityInStock = 100
                }
            };

            await db.Items.AddRangeAsync(items);

            await db.SaveChangesAsync();

        }
    }
}
