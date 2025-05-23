using stanlib_tech.Models;

namespace stanlib_tech.Services
{
    public interface IProductService
    {
        public Task<List<Product>> GetProductList();
        public Task<List<ProductSale>> GetProductSales(int productId);
    }
}
