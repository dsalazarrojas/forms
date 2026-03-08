# Bestseller Book Pre-order Form - Help Guide
## Purpose
This form is designed to collect information from customers who wish to pre-order a book. It allows customers to provide details about the book, themselves, and their order preferences, including shipping options and personalization requests.

## How To Complete This Form
To complete this form, follow these steps:
1. Enter the title of the book you wish to pre-order.
2. Provide the name of the author.
3. Select your preferred shipping method.
4. Enter your contact information.
5. Choose your preferred book format and quantity.
6. Enter your payment information.
7. Review and confirm your pre-order details.

## Field-by-Field Explanation

* **Book Title** (`book_title_text`, required): Enter the title of the book you wish to pre-order.
* **Author Name** (`author_name_text`, required): Enter the name of the book's author.
* **Release Date** (`release_date_info`, optional): Enter the date when the book is scheduled to ship.
* **Full Name** (`customer_full_name`, required): Enter your full name as it should appear on the book.
* **Email Address** (`customer_email_addr`, required): Enter your email address.
* **Phone Number** (`customer_phone_number`, required): Enter your phone number.
* **Shipping Address** (`shipping_address_text`, required): Enter your shipping address in the format of Street, City, State, ZIP.
* **Preferred Format** (`book_format_choice`, required): Choose the format you prefer for your book (Hardcover - Deluxe Edition, Paperback - Standard Edition, E-book - Kindle/E-pub, Audiobook - Digital Download).
* **Quantity** (`order_quantity`, required): Enter the number of copies you wish to pre-order.
* **Unit Price** (`unit_price_val`, required): Enter the price per unit in USD.
* **Subtotal** (`total_order_val`, calculated): This field will display the total cost of your order.
* **Would you like a signed copy?** (`signed_copy_interest`, required): Choose whether you want a signed copy of the book.
* **Who should the book be made out to?** (`inscription_name`, optional): If you want the book signed, enter the name of the person it should be made out to.
* **Special Request or Note for the Author** (`special_request_author`, optional): Enter any special requests or notes for the author.
* **Shipping Method** (`shipping_method_choice`, required): Choose your preferred shipping speed.
* **Consent to join the author's mailing list** (`mailing_list_consent`, required): Choose whether you want to receive updates about new releases and events.
* **I understand this is a pre-order and will ship on release** (`pre_order_acknowledgment`, required): Confirm that you understand the pre-order terms.
* **Date of Pre-order** (`pre_order_date_stamp`, required): Enter the date and time of your pre-order submission.
