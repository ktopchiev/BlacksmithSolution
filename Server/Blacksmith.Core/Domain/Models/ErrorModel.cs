namespace Blacksmith.Core.Domain.Models
{
    public class ErrorModel
    {
        public int StatusCode { get; set; }
        public string? Message { get; set; }
        public string? Details { get; set; }

        public ErrorModel(int statusCode, string message, string details)
        {
            StatusCode = statusCode;
            Message = message;
            Details = details;
        }
    }
}