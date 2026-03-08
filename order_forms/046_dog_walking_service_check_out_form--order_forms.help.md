# dog_walking_service_check_out_form - Help Guide
## Purpose
The purpose of this form is to record the details of a dog walk check-out, including the services provided and payment status. 

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter the client's name and details in the "Client" field.
2. Enter the date of the dog walk in the "Date" field. This date should match the date of the dog walk.
3. Provide a brief description of the dog's details in the "Dog Details" field.
4. Select the services provided to the client (e.g. "Yes" or "No").
5. Enter the total cost of the services in the "Total Cost" field.
6. Select the payment method used to process the payment (e.g. "Yes" or "No").
7. Select the payment status (e.g. Active or Inactive).
8. If payment was made, enter the payment date in the "Payment Date" field.
9. Enter the payment reference number in the "Payment Reference" field (if available).
10. Add any additional notes about the order in the "Order Notes" field.

## Field-by-Field Explanation
- **Client** (`client`, text, required): Enter the client's name and contact information.
- **Date** (`date`, date, required): Enter the date of the dog walk.
- **Dog Details** (`dog_details`, text, required): Provide a brief description of the dog's details.
- **Services** (`services`, select_multiple, required): Select the services provided to the client.
- **Total Cost** (`total_cost`, number, required): Enter the total cost of the services provided.
- **Payment Method** (`payment_method`, select_one, required): Select the method of payment used.
- **Payment Status** (`payment_status`, select_one, required): Select the status of payment (Active or Inactive).
- **Payment Date** (`payment_date`, date, optional): Enter the date of payment if made.
- **Payment Reference** (`payment_reference`, text, optional): Enter the payment reference number (if available).
- **Order Notes** (`order_notes`, note, optional): Add any additional notes about the order.

## Tips
- Make sure to fill out this form accurately and completely for each dog walked.
- Only use this form after a dog walk is completed. 
- Ensure that the payment status and method match the payment date if payment was made. 
- Review the form before submitting to ensure all required fields are filled out correctly.
