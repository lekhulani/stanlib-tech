
using stanlib_tech.Services;

namespace stanlib_tech
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            var tempOriginsPolicy = "AllowLocalHostForNow";
            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddHttpClient();
            builder.Services.AddScoped<IProductService, ProductService>();
            builder.Services.AddSwaggerGen(options => options.CustomSchemaIds(type => type.ToString()));
            builder.Services.AddCors(options =>
            {
                options.AddPolicy(name: tempOriginsPolicy,
                                  policy =>
                                  {
                                      policy.WithOrigins(
                                          "http://localhost:4200" //if running using npm, change port to your specified port
                                         )
                                        .AllowAnyHeader()
                                        .AllowAnyMethod();
                                  });

            });

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            //app.UseHttpsRedirection();
            app.UseCors(tempOriginsPolicy);
            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
