<thinking>
This form is for generating paper supply quotes for a business or organization. It collects contact information and details about the paper type, page size, quantity, unit price, and total price of the order. The form is designed to be completed by customers or users who want to place an order for paper supplies. It's essential to ensure that only one instance of this form is created in the database, as it's meant to serve a specific purpose. If there are multiple instances, it may lead to confusion and incorrect data.
</thinking>

# Paper Supply Quote Form - Help Guide
## Purpose
The Paper Supply Quote Form is used to collect information from customers to generate quotes for paper supply orders. It's crucial to fill out this form accurately to ensure that the quote is generated correctly.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your first name in the `First Name` field.
2. Enter your last name in the `Last Name` field.
3. Enter your email address in the `Email` field.
4. Enter your phone number in the `Phone` field (optional).
5. Choose the type of paper you need from the `Paper Type` field.
6. Select the page size you require from the `Page Size` field.
7. Enter the quantity of paper you need to purchase.
8. Enter the unit price of the paper you are purchasing.
9. Enter the total price of your order (optional).
10. Choose the date you want to receive your order from the `Order Date` field.

## Field-by-Field Explanation
* **First Name** (`first_name`, `text`, required): Enter your first name here. This field is required to ensure you receive the correct quote.
* **Last Name** (`last_name`, `text`, required): Enter your last name here. This field is also required to ensure accuracy.
* **Email** (`email`, `email`, required): Enter your email address here. This field is necessary for communication purposes.
* **Phone** (`phone`, `text`, optional): If you have a preferred phone number for us to contact you, enter it here.
* **Paper Type** (`paper_type`, `select_one`, optional): Choose the type of paper you need from the options provided (A4, Letter, Legal, Tabloid).
* **Page Size** (`page_size`, `select_multiple`, optional): Select the page size you require from the options provided (A3, A4, A5, Letter, Legal).
* **Quantity** (`quantity`, `number`, required): Enter the number of paper units you need to purchase.
* **Unit Price** (`unit_price`, `number`, required): Enter the price per unit of paper.
* **Total Price** (`total_price`, `number`, optional): Enter the total price of your order (calculated automatically if not provided).
* **Order Date** (`order_date`, `date`, required): Choose the date you want to receive your order from the calendar.

## Tips
- Make sure to fill out all required fields (First Name, Last Name, Email, Quantity, Unit Price, Order Date) to ensure an accurate quote is generated.
- If you're unsure about any field, please contact us for assistance.
- We'll review your order details and generate a quote for you based on the information provided.
