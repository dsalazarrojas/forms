# Deposit - Help Guide
## Purpose
This "Deposit" form is used to record a payment made by a customer. It captures essential information related to the deposit, including the payment method, date, and amount. The form is crucial for accounting and financial purposes, as it helps track customer payments accurately.

## How To Complete This Form
To fill out this form, follow these steps:

1. Enter the "ราคา payment" field to describe the payment.
2. Select the "ราคา date" field to choose the date of the payment.
3. Enter the "ราคา amount" field to provide the amount of the payment.
4. In the "ราคา method" field, select the method of payment used (e.g., cash, credit card, or bank transfer).
5. Optionally, provide your name, email, phone, and address if you're the customer making the payment.
6. Enter any additional notes about the payment in the "ราคา note" field.

## Field-by-Field Explanation
### `ราคา payment` (`deposit_form`, `text`, `required`)
This field requires a brief description of the payment. Enter a clear and concise title that describes the payment.

### `ราคา date` (`deposit_date`, `date`, `required`)
Select the date on which the payment was made.

### `ร이자 amount` (`deposit_amount`, `number`, `required`)
Enter the exact amount of the payment, including any relevant currency symbols or codes.

### `ราคา method` (`payment_method`, `select_multiple`, `required`)
Choose the method used to make the payment. Select all applicable options (e.g., cash, credit card, bank transfer).

### `ราคา name` (`customer_name`, `text`, `optional`)
If you're the customer making the payment, enter your name for reference purposes.

### `ราคา email` (`customer_email`, `email`, `optional`)
If you're the customer, enter your email address for communication and follow-up.

### `ราคา phone` (`customer_phone`, `text`, `optional`)
If you're the customer, enter your phone number for quick contact.

### `ราคา address` (`customer_address`, `text`, `optional`)
If you're the customer, enter your address for reference and follow-up.

### `ราคา note` (`note`, `note`, `optional`)
Add any additional notes or comments about the payment.
