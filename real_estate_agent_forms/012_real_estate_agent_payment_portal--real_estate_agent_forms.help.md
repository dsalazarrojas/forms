# real_estate_agent_payment_portal - Help Guide
## Purpose
The real_estate_agent_payment_portal form is designed for real estate agents to manage payments for properties. It captures essential information such as payment amount, method, and status to provide a clear overview of financial transactions.

## How To Complete This Form
1. Ensure you have the required information and access to the form.
2. Enter the `payment_amount` field with the exact amount of the payment.
3. Choose the payment method from the `payment_method` select options (if applicable).
4. Fill in your `agent_name` and the client's `client_name`.
5. Select the date of the transaction using the `transaction_date` field.
6. Input the `property_address` where the payment was made.
7. Select the payment `payment_status` as 'Unpaid', 'Paid', or 'Partially Paid'.
8. Add any additional `notes` related to the payment.

## Field-by-Field Explanation
* **payment_amount** (`payment_amount`, number, required): Enter the exact amount of the payment.
* **payment_method** (`payment_method`, select_multiple, required): Select the method used for the payment from the options provided (Online Payment, Bank Transfer, or Cash).
* **agent_name** (`agent_name`, text, required): Type in your name as the agent making the payment.
* **client_name** (`client_name`, text, required): Enter the name of the client making the payment.
* **transaction_date** (`transaction_date`, date, required): Select the date of the transaction.
* **property_address** (`property_address`, text, required): Input the address of the property related to the payment.
* **payment_status** (`payment_status`, select_one, required): Choose the status of the payment as 'Unpaid', 'Paid', or 'Partially Paid'.
* **notes** (`notes`, note, required): Add any additional comments or notes related to the payment.

## Tips
* Ensure the payment amount and client's name are accurately recorded.
* Be cautious in selecting the payment status to reflect the correct state of the transaction.
* Use the property address to ensure the payment is correctly linked to the property.
* Use the notes field to provide any relevant additional context to the payment.
