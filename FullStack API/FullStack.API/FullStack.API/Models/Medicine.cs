namespace FullStack.API.Models
{
    public class Medicine
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        public long Phone { get; set; }

        public long Cost { get; set; }

        public string Type { get; set; }
    }
}
