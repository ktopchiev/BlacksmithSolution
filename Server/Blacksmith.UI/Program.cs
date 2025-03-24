using Blacksmith.Core.Application.ServiceContracts;
using Blacksmith.Core.Application.Services;
using Blacksmith.Core.Domain.RepositoryContracts;
using Blacksmith.Infrastructure;
using Blacksmith.Infrastructure.BlacksmithDbContext;
using Blacksmith.Infrastructure.Repositories;
using Blacksmith.UI.Middleware;
using Microsoft.EntityFrameworkCore;
using Scalar.AspNetCore;

namespace Blacksmith.UI
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
            builder.Services.AddOpenApi();

            builder.Services.AddScoped<IItemRepository, ItemRepository>();
            builder.Services.AddScoped<IItemAdderService, ItemAdderService>();
            builder.Services.AddScoped<IItemGetterService, ItemGetterService>();

            builder.Services.AddDbContext<ApplicationDbContext>(opt =>
                {
                    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
                }
            );

            builder.Services.AddCors();

            var app = builder.Build();

            app.UseMiddleware<ExceptionMiddleware>();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.MapOpenApi();
                app.MapScalarApiReference();
            }


            app.UseCors(opt =>
            {
                opt.AllowAnyHeader().AllowAnyMethod().AllowCredentials().WithOrigins("http://localhost:5173");
            });

            app.UseAuthorization();

            app.MapControllers();

            var scope = app.Services.CreateScope();
            var context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
            var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();

            try
            {
                await context.Database.MigrateAsync();
                await DbInitializer.Initialize(context);
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "There's a problem with the database migration");
            }

            app.Run();
        }
    }
}
