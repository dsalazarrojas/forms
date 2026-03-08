# Maheer Bakeries - Help Guide
## Purpose
The Maheer Bakeries form is a tool used to take orders from customers. It helps to collect necessary information about the customer's order, which is then used to process the order and facilitate delivery.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill in the **Customer Name** field with the customer's full name.
2. Provide the **Address** where the order will be delivered.
3. Select a valid date for the **Order Date**.
4. Choose a valid time for the **Order Time**.
5. Indicate whether the customer wants the order delivered or not.
6. Enter the name of the product being ordered.
7. Enter the price of the product.
8. Choose the payment method (Cash or Credit).
9. Enter the customer's email address.
10. Enter the customer's phone number.

## Field-by-Field Explanation
* **Order Form** (`1`, `text`, required: false): This is the main section of the form where the customer can enter their order details.
* **Customer Name** (`2`, `text`, required: false): Enter the customer's full name.
* **Address** (`3`, `text`, required: false): Enter the customer's delivery address.
* **Order Date** (`4`, `date`, required: false): Select a valid date for the order.
* **Order Time** (`5`, `time`, required: false): Select a valid time for the delivery.
* **Delivery Time** (`6`, `select_multiple`, required: false): Indicate whether the customer wants the order delivered or not.
* **Delivery Time** (`7`, `select_multiple`, required: false): This field is a duplicate of the previous field, please select one of the options.
* **Product Name** (`8`, `text`, required: false): Enter the name of the product being ordered.
* **Product Price** (`9`, `number`, required: false): Enter the price of the product.
* **Payment Method** (`10`, `select_one`, required: false): Choose the payment method (Cash or Credit).
* **Customer Email** (`11`, `email`, required: false): Enter the customer's email address.
* **Customer Phone** (`12`, `text`, required: false): Enter the customer's phone number.

## Tips
- Make sure to enter all required fields to ensure accurate order processing.
- If a customer has multiple delivery times, please separate them with commas.
