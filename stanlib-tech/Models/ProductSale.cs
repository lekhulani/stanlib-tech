namespace stanlib_tech.Models
{
    public class ProductSale
    {

        public int SaleId { get; set; }

        public int ProductId { get; set; }

        public int SaleQty { get; set; }
        public decimal SalePrice { get; set; }
        public DateTime SaleDate { get; set; }

    }
}
