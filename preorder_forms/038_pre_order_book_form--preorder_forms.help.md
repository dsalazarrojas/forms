# Pre Order Book Form - Help Guide
## Purpose
The Pre Order Book Form is a simple form designed to allow customers to pre-order a book before it is released. This form collects the necessary information from customers to fulfill their pre-order requests.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your first name in the "First Name" field.
2. Enter your last name in the "Last Name" field.
3. Enter your email address in the "Email" field.
4. Enter your phone number in the "Phone" field.
5. Enter the title of the book you wish to pre-order in the "Book Title" field.
6. Enter the author of the book in the "Book Author" field.
7. Enter the price of the book in the "Price" field.
8. Enter the quantity of books you wish to pre-order in the "Quantity" field.
9. Enter your shipping address in the "Shipping Address" field.

## Field-by-Field Explanation

* **First Name** (`customer_first_name`, text, required): Enter your first name in this field. This field is required to ensure we can address your pre-order request correctly.
* **Last Name** (`customer_last_name`, text, required): Enter your last name in this field. This field is required to ensure we can address your pre-order request correctly.
* **Email** (`customer_email`, email, required): Enter a valid email address in this field. This field will be used to communicate with you about your pre-order request.
* **Phone** (`customer_phone`, text, required): Enter your phone number in this field. This field is required to contact you about your pre-order request.
* **Book Title** (`book_title`, text, required): Enter the title of the book you wish to pre-order. This field is required to ensure we can fulfill your request correctly.
* **Book Author** (`book_author`, text, required): Enter the author of the book you wish to pre-order. This field is required to ensure we can fulfill your request correctly.
* **Price** (`book_price`, number, required): Enter the price of the book in this field. This field is required to ensure we can process your pre-order request correctly.
* **Quantity** (`book_quantity`, number, required): Enter the number of books you wish to pre-order in this field. This field is required to ensure we can fulfill your request correctly.
* **Shipping Address** (`shipping_address`, text, required): Enter your shipping address in this field. This field is required to ensure we can ship your pre-ordered book correctly.
