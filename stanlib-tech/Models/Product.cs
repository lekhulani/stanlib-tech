namespace stanlib_tech.Models
{
    public class Product
    {
        public int Id { get; set; }

        public decimal SalePrice { get; set; }

        public string? Category { get; set; }
        public string? Description { get; set; }

        public string? Image { get; set; }
    }
}
