# Dog Walking Service Check Out Form - Help Guide
## Purpose
This form is designed to gather essential information for dog walking services, ensuring accurate and efficient processing of each service instance.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the service details, including date and time of service.
2. Choose the payment method you wish to use (Credit Card, Bank Transfer, or Cash).
3. Enter the client's name and contact email address.
4. Specify the service price for the walk.
5. Update the payment status accordingly.
6. Add any additional notes about the service if necessary.
7. Confirm the total price for the service.

## Field-by-Field Explanation
- **Service Details** (`service_date`, date, required: false): Enter the date for the dog walking service.
- **Service Date** (`service_date`, date, required: false): Enter the date for the dog walking service (same as above).
- **Service Time** (`service_time`, time, required: false): Enter the time for the dog walking service.
- **Payment Method** (`payment_method`, select_one, required: false): Choose the method of payment (Credit Card, Bank Transfer, or Cash).
- **Client Name** (`client_name`, text, required: false): Enter the client's name.
- **Client E-mail** (`client_email`, email, required: false): Enter the client's email address.
- **Service Price** (`service_price`, number, required: false): Enter the price for the dog walking service.
- **Payment Status** (`payment_status`, select_one, required: false): Update the payment status to Paid, Pending, or Cancelled.
- **Notes** (`notes`, note, required: false): Add any additional notes or comments about the service.
- **Total Price** (`total_price`, number, required: false): Confirm the total price for the service.

## Tips
- Please fill in all required fields accurately.
- Use the correct payment method and ensure payment is processed successfully.
- Keep the total price up-to-date for accurate billing.
- Enter a valid client email address.
- Add any additional notes for future reference.
- If a service is cancelled, update the payment status accordingly.
