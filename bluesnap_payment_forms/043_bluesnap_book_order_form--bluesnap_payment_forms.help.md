# BlueSnap Book Order Form - Help Guide
## Purpose
The BlueSnap Book Order Form is designed for customers to place orders for books from the BlueSnap catalog. This form collects essential information to ensure accurate order processing and timely delivery.

## How To Complete This Form
1. Ensure you have all the necessary information for the order.
2. Browse the catalog to select the book(s) you wish to order.
3. Enter your name, email, and phone number in the required fields.
4. Fill in the shipping address, city, state, and ZIP code.
5. Choose the edition type, quantity, and shipping method of the book(s).
6. Select the payment method and enter the total amount of the order.
7. Review and submit the form.

## Field-by-Field Explanation

* **Book Title** (`book_title`, text, required): Enter the title of the book you are ordering.
* **Author Name** (`book_author`, text, required): Enter the name of the author of the book.
* **ISBN (if known)** (`book_isbn`, text, optional): If you know the ISBN of the book, enter it for easier identification.
* **Book Genre** (`book_genre`, select_one, optional): Choose the genre of the book from the available options.
* **Edition Type** (`edition_type`, select_one, required): Select the edition type of the book (e.g., paperback, hardcover, e-book).
* **Quantity** (`quantity`, number, required): Enter the number of copies of the book you wish to order.
* **Price Per Book** (`unit_price`, number, optional): Enter the price per book if different from standard pricing.
* **Total Order Amount** (`total_amount`, number, optional): This field is automatically calculated based on the quantity and price per book.
* **Shipping Address** (`shipping_address`, text, required): Enter your shipping address.
* **City** (`shipping_city`, text, required): Enter the city where you wish to have the book shipped.
* **State/Province** (`shipping_state`, text, required): Enter the state or province where you are located.
* **ZIP/Postal Code** (`shipping_zip`, text, required): Enter your ZIP code.
* **Shipping Method** (`shipping_method`, select_one, required): Choose the shipping method from the available options (e.g., standard, express, overnight).
* **Payment Method** (`payment_method`, select_one, required): Select the payment method you wish to use (e.g., credit card, debit card, PayPal, gift card).
* **Order Date** (`order_date`, date, required): Enter the date you wish to place the order.
* **Full Name** (`customer_name`, text, required): Enter your full name.
* **Email Address** (`customer_email`, email, required): Enter your email address.
* **Phone Number** (`customer_phone`, text, optional): Enter your phone number for contact purposes.
* **Order Introduction** (`order_intro`, note, optional): Enter a brief message or note about your order.
