# Book Order Form - Help Guide
## Purpose
The Book Order Form is designed to collect order information from customers, including customer details, shipping information, book orders, and payment preferences. This form is intended for customers to submit their order requests to our team for processing.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your Full Name.
2. Enter your Email Address to receive order confirmation.
3. Enter your Phone Number for order inquiries.
4. Select your Customer Type from the options provided.
5. Enter your Company Name (if ordering for a business).
6. Enter your Shipping Address.
7. Select your City.
8. Select your State or Province.
9. Enter your Postal or ZIP Code.
10. Select your Country.
11. Enter the title of the first book you'd like to order.
12. Enter the author of the first book.
13. Enter the ISBN of the first book (if available).
14. Enter the quantity of the first book.
15. Select the format of the first book.
16. Repeat steps 11-15 for each additional book you'd like to order.
17. Enter the total number of books ordered.
18. Select your preferred Shipping Method from the options provided.
19. Select your preferred Payment Method from the options provided.
20. Enter any Promo Code you'd like to apply.
21. If applicable, indicate if you'd like gift wrapping.
22. Finally, confirm that you agree to our Terms and Conditions.

## Field-by-Field Explanation

* **Full Name** (`customer_name`, `text`, required): Enter your first and last name.
* **Email Address** (`email_address`, `email`, required): We will send order confirmation here.
* **Phone Number** (`phone_number`, `text`, required): For order inquiries.
* **Customer Type** (`customer_type`, `select_one`, required): Select your customer type.
* **Company Name** (`company_name`, `text`, optional): If ordering for a business.
* **Shipping Address** (`shipping_address`, `text`, required): Full street address.
* **City** (`city`, `text`, required): Your city.
* **State or Province** (`state`, `text`, required): Your state or province.
* **Postal or ZIP Code** (`postal_code`, `text`, required): Your postal or ZIP code.
* **Country** (`country`, `select_one`, required): Your country.
* **Book 1 Title** (`book_1_title`, `text`, required): Title of first book.
* **Book 1 Author** (`book_1_author`, `text`, required): Author of first book.
* **Book 1 ISBN** (`book_1_isbn`, `text`, optional): ISBN if available.
* **Book 1 Quantity** (`book_1_quantity`, `number`, required): How many copies.
* **Book 1 Format** (`book_1_format`, `select_one`, required): Select format.
* **Book 2 Title** (`book_2_title`, `text`, optional): Title of second book.
* **Book 2 Author** (`book_2_author`, `text`, optional): Author of second book.
* **Book 2 Quantity** (`book_2_quantity`, `number`, optional): How many copies.
* **Book 3 Title** (`book_3_title`, `text`, optional): Title of third book.
* **Book 3 Author** (`book_3_author`, `text`, optional): Author of third book.
* **Book 3 Quantity** (`book_3_quantity`, `number`, optional): How many copies.
* **Total Number of Books** (`total_books`, `number`, required): Total quantity ordered.
* **Shipping Method** (`shipping_method`, `select_one`, required): Select shipping preference.
* **Payment Method** (`payment_method`, `select_one`, required): How will you pay.
* **Promo Code** (`promo_code`, `text`, optional): Enter any promotional code.
* **Special Instructions** (`special_instructions`, `text`, optional): Any special requests.
* **Gift Wrapping** (`gift_wrap`, `select_one`, optional): Would you like gift wrapping.
* **Terms and Conditions** (`terms_agreement`, `select_one`, required): By selecting yes you agree to terms.
* **Order Date** (`order_date`, `date`, required): Date of order.
