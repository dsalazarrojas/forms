# reading_material_order_form - Help Guide
## Purpose
The "reading_material_order_form" is used to order reading materials from the store. This form allows customers to provide their personal information, book selection, and order details for a smooth and efficient ordering process.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your First Name in the "First Name" field.
2. Enter your Last Name in the "Last Name" field.
3. Provide your Email address in the "Email" field.
4. Enter your Phone number in the "Phone" field.
5. Select the Book Title from the provided options or enter the title manually in the "Book Title" field.
6. Choose your preferred Delivery Choice from the dropdown menu.
7. Enter the quantity of the book you would like to order.
8. Enter the amount you have already paid for the book.
9. Add any comments or notes about your order in the "Comments" field.
10. (Optional) Provide a Form ID if you have one.
11. Finally, select the tool you would like to be assigned to for this order in the "Assigned Tool" field.

## Field-by-Field Explanation
* **First Name** (`first_name`, text, required/optional): Enter your first name for identification purposes.
* **Last Name** (`last_name`, text, required/optional): Enter your last name for identification purposes.
* **Address** (`address`, text, required/optional): Enter your home or work address for delivery purposes.
* **Email** (`email`, email, required/optional): Enter a valid email address for communication and order updates.
* **Phone** (`phone`, text, required/optional): Enter your phone number for contact purposes.
* **Book Title** (`book_title`, text, required/optional): Select or enter the title of the book you would like to order.
* **Order Date** (`order_date`, date, required/optional): Select the date you would like to order the book.
* **Delivery Choice** (`delivery_choice`, select_one, required/optional): Choose how you would like to receive your order, options include "Delivery in Store", "Pickup", and "Mail".
* **Quantity** (`quantity`, number, required/optional): Enter the number of books you would like to order.
* **Amount Paid** (`amount_paid`, number, required/optional): Enter the amount you have already paid for the book.
* **Comments** (`comments`, note, required/optional): Add any comments or notes about your order for further reference.
* **Form ID** (`form_id`, text, required/optional): If you have a Form ID, please provide it for reference.
* **Assigned Tool** (`assigned_tool`, text, required/optional): Select the tool you would like to be assigned to for this order.

Please note that some fields are marked as "required/optional", which means you must complete them if you have a value to provide. Otherwise, they are optional.
