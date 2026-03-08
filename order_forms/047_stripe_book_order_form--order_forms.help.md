# Stripe Book Order Form - Help Guide
## Purpose
The Stripe Book Order Form is a form designed to collect information for ordering a book. It is meant to be completed by a customer to provide details about the book they want to purchase.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the title of the book you wish to order.
2. Select the category of the book.
3. Enter the name of the author.
4. Enter the price of the book.
5. Enter the quantity of books you wish to order.
6. Enter the date of the order.
7. Provide your email address.
8. Enter your phone number.
9. Add any additional notes or comments about your order.
10. If required fields need to be filled in, answer "Yes" or "No".
11. Check the boxes to indicate if you are submitting the order.
12. Finally, enter any additional comments if necessary.

## Field-by-Field Explanation
- **Stripe Book Order Form** (`title`, text, required: false): Enter the name of this form, which is the title of the form. This field is not required.
- **Category** (`category`, select_one, required: false): Select the category of the book you wish to order.
  - Options: Books, E-books, Other
- **Book Name** (`book_name`, text, required: false): Enter the name of the book you wish to order.
- **Author** (`author`, text, required: false): Enter the name of the author of the book.
- **Book Price** (`book_price`, number, required: false): Enter the price of the book you wish to order.
- **Quantity** (`quantity`, number, required: false): Enter the number of books you wish to order.
- **Order Date** (`order_date`, date, required: false): Enter the date of the order.
- **Email** (`email`, email, required: false): Enter your email address for order correspondence.
- **Phone** (`phone`, text, required: false): Enter your phone number for order confirmation.
- **Additional Note** (`additional_note`, note, required: false): Add any additional notes or comments about your order.
- **Submitting** (`submitting`, select_multiple, required: false):
  - Options: 'Yes', 'No'
- **Submitting 2** (`submitting_2`, select_multiple, required: false):
  - Options: 'Yes', 'No'
- **Submitting 3** (`submitting_3`, select_multiple, required: false):
  - Options: 'Yes', 'No'
- **Submitting 4** (`submitting_4`, select_multiple, required: false):
  - Options: 'Yes', 'No'
- **Submitting 5** (`submitting_5`, select_multiple, required: false):
  - Options: 'Yes', 'No'
- **Submitting 6** (`submitting_6`, select_multiple, required: false):
  - Options: 'Yes', 'No'
- **Submitting 7** (`submitting_7`, select_multiple, required: false):
  - Options: 'Yes', 'No'
- **Submitting 8** (`submitting_8`, select_multiple, required: false):
  - Options: 'Yes', 'No'
- **Submitting 9** (`submitting_9`, select_multiple, required: false):
  - Options: 'Yes', 'No'
- **Required Fields** (`required_fields`, select_one, required: false):
  - Options: 'Yes', 'No'
- **Additional Comments** (`additional_comments`, text, required: false): Add any additional comments if necessary.
- **Terms and Conditions** (`terms_and_conditions`, note, required: false): Read the terms and conditions of the order.
- **Agreement** (`agreement`, select_one, required: false):
  - Options: 'Yes', 'No'
