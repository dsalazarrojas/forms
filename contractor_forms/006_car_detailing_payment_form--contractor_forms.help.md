<thinking>

This form is used to collect payment information from customers for car detailing services. The form is designed to be completed by customers, and the fields should only be filled out by the customer. The fields are designed to collect the necessary information to process the payment and generate a receipt for the customer. The form should only be used for customers who have a pre-existing balance due or have made a deposit towards their service. 

Please ensure that the form fields are filled out accurately and completely to ensure that your payment is processed correctly. If you have any questions or concerns, please do not hesitate to contact us.

</thinking>

# Car Detailing Payment Form - Help Guide
## Purpose
The Car Detailing Payment Form is used to collect payment information from customers for car detailing services. This form is only for customers who have a pre-existing balance due or have made a deposit towards their service.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill out the required fields (marked as `true` in the form) with your information.
2. Ensure that you are using the correct payment method and credit card type (if applicable).
3. Review the form carefully before submitting it to ensure that all fields are filled out correctly.

## Field-by-Field Explanation
### Customer name
* **Customer name** (`customer_name`, `text`, required): This field is used to collect the customer's name.

### Email address
* **Email address** (`customer_email`, `email`, required): This field is used to collect the customer's email address.

### Phone number
* **Phone number** (`customer_phone`, `text`, required): This field is used to collect the customer's phone number.

### Service date
* **Service date** (`service_date`, `date`, required): This field is used to collect the date the service was performed.

### Vehicle information
* **Vehicle make, model, year** (`vehicle_information`, `text`, required): This field is used to collect the make, model, and year of the vehicle.

### Vehicle color
* **Vehicle color** (`vehicle_color`, `text`, optional): This field is used to collect the color of the vehicle, but it is not required.

### Detailing package selected
* **Detailing package selected** (`detailing_package`, `select_one`, required): This field is used to select the detailing package chosen for the service.

### Additional services (select all that apply)
* **Additional services (select all that apply)** (`additional_services`, `select_multiple`, optional): This field is used to select any additional services that were chosen for the service.

### Service subtotal
* **Service subtotal** (`service_subtotal`, `number`, required): This field is used to collect the total amount before taxes and fees for the service.

### Discount amount
* **Discount amount** (`discount_amount`, `number`, optional): This field is used to collect any discount applied, but it is not required.

### Tax amount
* **Tax amount** (`tax_amount`, `number`, required): This field is used to collect the tax amount for the service.

### Total amount due
* **Total amount due** (`total_amount`, `number`, required): This field is used to collect the total amount due for the service.

### Payment method
* **Payment method** (`payment_method`, `select_one`, required): This field is used to select the payment method for the service.

### Credit card type
* **Credit card type** (`credit_card_type`, `select_one`, optional): This field is used to select the type of credit card used for payment.

### Payment status
* **Payment status** (`payment_status`, `select_one`, required): This field is used to select the payment status (e.g. Paid in Full, Deposit Paid, Balance Due).

### Deposit amount paid
* **Deposit amount paid** (`deposit_amount`, `number`, optional): This field is used to collect any deposit amount paid, but it is not required.

### Remaining balance
* **Remaining balance** (`remaining_balance`, `number`, optional): This field is used to collect the remaining balance due, but it is not required.

### Payment due date
* **Payment due date** (`payment_due_date`, `date`, optional): This field is used to collect the date the payment is due, but it is not required.

### Receipt preference
* **Receipt preference** (`receipt_preference`, `select_one`, optional): This field is used to select how the receipt is to be delivered (e.g. Email, Print, Both).

### Special instructions or notes
* **Special instructions or notes** (`special_instructions`, `text`, optional): This field is used to collect any special instructions or notes for the service.

## Tips
* Please ensure that all required fields are filled out correctly before submitting the form.
* If you are unsure about any field, please contact us for assistance.
* If you have any special instructions or notes, please include them in the special instructions or notes field.
