using Microsoft.AspNetCore.Mvc;
using stanlib_tech.Models;
using stanlib_tech.Services;

namespace stanlib_tech.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : ControllerBase
    {

        private readonly ILogger<ProductsController> _logger;
        private readonly IProductService _productService;

        public ProductsController(ILogger<ProductsController> logger, IProductService pokemonService)
        {
            _logger = logger;
            _productService = pokemonService;
        }

        [HttpGet]
        [Route("/[action]")]
        public async Task<List<Product>> GetProducts() => await _productService.GetProductList();

        [HttpGet]
        [Route("/[action]")]
        public async Task<List<ProductSale>> GetProductSales([FromQuery] int Id) => await _productService.GetProductSales(Id);
    }
}
