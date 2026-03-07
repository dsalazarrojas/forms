<thinking>
The form is designed to track orders and capture relevant customer information for the Cs_Mascot product. It is intended to be used by internal staff to record order dates, customer details, shirt sizes, colors, special requests, and comments in a concise and organized manner. Before creating this guide, I need to ensure that the form's purpose and content align with the business requirements and that there are no redundant or conflicting information fields.

Upon reviewing the YAML, I see that the form consists of 7 fields:
- 1. order_date (date): The date the order was placed.
- 2. customer_name (text): The name of the customer.
- 3. customer_email (email): The email address of the customer.
- 4. shirt_size (select_multiple): A dropdown list of options for the customer's shirt size.
- 5. shirt_color (select_one): A dropdown list of options for the customer's preferred shirt color.
- 6. special_requests (text): Any special requests or notes about the customer's order.
- 7. order_comments (text): Any additional comments about the order.

I will now create the help guide in Markdown format, ensuring that each field's label, type, and required status are clearly explained for the end-user.

</thinking>

# Cs_Mascot - Help Guide
## Purpose
The Cs_Mascot form is a tool used by internal staff to track orders and capture customer information for the Cs_Mascot product.

## How To Complete This Form
To complete this form, follow these steps:
1. Select the order date from the calendar or enter a date in the format YYYY-MM-DD.
2. Enter the customer's name in the text field.
3. Enter the customer's email address in the email field.
4. Select the customer's preferred shirt size from the dropdown list.
5. Select the customer's preferred shirt color from the dropdown list.
6. Enter any special requests or notes about the customer's order in the text field.
7. Enter any additional comments about the order in the text field.

## Field-by-Field Explanation
* **Order Date** (order_date, date, false): The date the order was placed.
* **Customer Name** (customer_name, text, false): The name of the customer.
* **Customer Email** (customer_email, email, false): The email address of the customer.
* **Shirt Size** (shirt_size, select_multiple, false): A dropdown list of options for the customer's preferred shirt size. Select one or more sizes that apply.
* **Shirt Color** (shirt_color, select_one, false): A dropdown list of options for the customer's preferred shirt color. Select only one size.
* **Special Requests** (special_requests, text, false): Any special requests or notes about the customer's order.
* **Order Comments** (order_comments, text, false): Any additional comments about the order.
