# Stripe Book Order Form - Help Guide
## Purpose
This form is used to place orders for books using the Stripe payment system. Fill out the form with the book's details and shipping information to complete the order.

## How To Complete This Form
1. Fill out the **Book Title** field with the title of the book you wish to order.
2. Enter the **Book Author** field with the author's name.
3. Input the **Book Price** in the specified format.
4. Select your preferred **Order Type** from the options provided (Stripe or PayPal).
5. Enter your **Shipping Address**, including the address, **City**, **State**, and **Shipping Zip** for where the book should be shipped.

## Field-by-Field Explanation
* **Book Title** (`book_title`, text): Enter the title of the book you wish to order.
* **Book Author** (`book_author`, text): Enter the author's name.
* **Book Price** (`book_price`, number): Enter the price of the book in the specified format.
* **Order Type** (`order_type`, select_one): Select the payment method for the order (Stripe or PayPal).
* **Shipping Address** (`shipping_address`, text): Enter the shipping address for the book.
* **Shipping City** (`shipping_city`, text): Enter the city where the book will be shipped to.
* **Shipping State** (`shipping_state`, text): Enter the state where the book will be shipped to.
* **Shipping Zip** (`shipping_zip`, text): Enter the zip code where the book will be shipped to.

## Tips
- Make sure to enter accurate information for all fields to ensure smooth processing of your order.
- If you are unsure about any field, double-check the provided instructions to ensure accuracy.
