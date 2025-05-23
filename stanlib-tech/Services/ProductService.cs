using Microsoft.Extensions.Configuration;
using stanlib_tech.Models;

namespace stanlib_tech.Services
{
    public class ProductService : IProductService
    {
        private readonly IHttpClientFactory _httpClientFactory;
        private readonly IConfiguration _configuration;
        public ProductService(IHttpClientFactory httpClientFactory, IConfiguration configuration)
        {
            _httpClientFactory = httpClientFactory;
            _configuration = configuration;
        }
        public async Task<List<Product>> GetProductList()
        {
            var httpClient = _httpClientFactory.CreateClient();
            var baseUrl = _configuration.GetValue<string>("BaseUrl") ?? "";
            httpClient.BaseAddress = new Uri(baseUrl);
            var products = await httpClient.GetFromJsonAsync<List<Product>>("products");

            return products;
        }

        public async Task<List<ProductSale>> GetProductSales(int productId)
        {
            var httpClient = _httpClientFactory.CreateClient();
            var baseUrl = _configuration.GetValue<string>("BaseUrl") ?? "";
            httpClient.BaseAddress = new Uri(baseUrl);
            var productSales = await httpClient.GetFromJsonAsync<List<ProductSale>>($"product-sales?Id={productId}");

            return productSales;
        }
    }
}
