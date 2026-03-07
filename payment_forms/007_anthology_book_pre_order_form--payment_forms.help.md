<thinking>
This form is designed to collect information from customers for a book pre-order, allowing them to reserve a copy of the Anthology Book. This information includes details such as the anthology title, customer name and contact information, shipping details, payment information, and preferences for special requests and newsletters. By providing these details, customers can ensure timely delivery of their pre-ordered books. The form also includes fields for payment and billing information, to facilitate secure and convenient payment processing. This form ensures that the customer's order is processed accurately and efficiently. The form is designed to be easy to fill out and requires minimal fields to be filled out, making it user-friendly. It also includes a field for special requests, which allows customers to specify any specific needs they may have for their order, such as gift wrapping or inscription. Finally, the form includes a field for terms and conditions acceptance, which ensures that the customer is aware of and agrees to the terms of the pre-order process.
</thinking>

# Anthology Book Pre Order Form - Help Guide
## Purpose
This form is designed to collect information for a book pre-order.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the **Anthology Title** field with the full title of the book you wish to pre-order.
2. Enter your **Editor or Compiler Name**, who is the person responsible for compiling the anthology.
3. Select your preferred **Publisher** from the given options.
4. Provide the **Expected Release Date**, when you expect the book to be available.
5. Fill in your **Customer Name** to ensure timely delivery of the book.
6. Enter your **Email Address** for order confirmation and updates.
7. If you wish, provide your **Phone Number** for contact purposes regarding shipping issues.
8. Choose your preferred **Book Format**, either **Hardcover**, **Paperback**, **E-book**, **Audiobook** or **Deluxe Signed Edition**.
9. Enter the **Number of Copies** you wish to pre-order.
10. Set the **Price Per Copy** for your pre-order.
11. Choose the **Pre-order Discount Applied** from the given options (No discount, 10 percent early bird, 15 percent bulk order, 20 percent subscriber special).
12. Fill in the **Total Amount**, which will be calculated based on your selections.
13. In the **-- Shipping Information --** section, fill in your **Shipping Name** for the label.
14. Enter your **Street Address**, **City**, **State or Province**, and **ZIP Code** for shipping.
15. Select your preferred **Country** for shipping.
16. Choose your preferred **Shipping Method**, from **Standard Shipping**, **Express Shipping**, **Overnight Delivery**, or **International Shipping**.
17. In the **-- Payment Information --** section, choose your preferred **Payment Method**, either **Credit Card**, **Debit Card**, **PayPal**, **Bank Transfer**, or **Check by Mail**.
18. If you selected a **Credit Card**, enter your 16-digit **Card Number**.
19. Enter the **Expiry Date** in the format MM/YY.
20. Enter your 3 or 4-digit **CVV or Security Code**.
21. Check if your **Billing Address** is the same as your **Shipping Address**.
22. If you have any **Special Requests**, such as gift wrapping or inscription, please specify them here.
23. Choose whether you want to **Subscribe to the Publisher Newsletter** to receive updates on new releases.
24. Finally, check the **Terms and Conditions** box to confirm that you accept the pre-order terms.

## Field-by-Field Explanation

* **Anthology Title** (`book_title`, text, required): Fill in the full title of the anthology you wish to pre-order.
* **Editor or Compiler Name** (`editor_name`, text, required): Enter the name of the anthology editor.
* **Publisher** (`publisher_name`, text, required): Select the publisher of the book.
* **Expected Release Date** (`expected_release_date`, date, required): Provide the date when you expect the book to be available.
* **Customer Name** (`customer_name`, text, required): Enter your full name for the order.
* **Email Address** (`customer_email`, email, required): Provide your email address for order confirmation and updates.
* **Phone Number** (`customer_phone`, text, optional): Enter your contact number for shipping issues.
* **Book Format** (`book_format`, select_one, required): Choose your preferred book format: **Hardcover**, **Paperback**, **E-book**, **Audiobook**, or **Deluxe Signed Edition**.
* **Number of Copies** (`quantity`, number, required): Enter the number of copies you wish to pre-order.
* **Price Per Copy** (`unit_price`, number, required): Set the price per copy for your pre-order.
* **Pre-order Discount Applied** (`pre_order_discount`, select_one, required): Choose the discount percentage from **No discount**, **10 percent early bird**, **15 percent bulk order**, **20 percent subscriber special**.
* **Total Amount** (`total_amount`, number, required): The total cost including discounts will be calculated based on your selections.
* **-- Shipping Information --** (note, optional): This section includes the shipping details.
	+ **Shipping Name** (`shipping_name`, text, required): Enter the name to be used on the shipping label.
	+ **Street Address** (`shipping_address`, text, required): Enter the shipping address.
	+ **City** (`shipping_city`, text, required): Enter the city of destination.
	+ **State or Province** (`shipping_state`, text, required): Enter the state or province of the destination.
	+ **ZIP Code** (`shipping_postal_code`, text, required): Enter the ZIP or postal code of the destination.
	+ **Country** (`shipping_country`, select_one, required): Select the country of destination.
	+ **Shipping Method** (`shipping_method`, select_one, required): Choose the shipping method: **Standard Shipping**, **Express Shipping**, **Overnight Delivery**, or **International Shipping**.
* **-- Payment Information --** (note, optional): This section includes the payment details.
	+ **Payment Method** (`payment_method`, select_one, required): Choose the payment method: **Credit Card**, **Debit Card**, **PayPal**, **Bank Transfer**, or **Check by Mail**.
	+ **Card Number** (`card_number`, text, optional): Enter the 16-digit card number.
	+ **Expiry Date** (`card_expiry`, text, optional): Enter the expiry date in MM/YY format.
	+ **CVV or Security Code** (`cvv`, text, optional): Enter the 3 or 4-digit CVV or security code.
	+ **Billing Address Same as Shipping** (`billing_address_same`, select_one, required): Check if the billing address is the same as the shipping address.
* **Special Requests** (`special_requests`, text, optional): Make any special requests, such as gift wrapping or inscription.
* **Subscribe to Publisher Newsletter** (`newsletter_signup`, select_one, required): Choose whether you want to subscribe to the publisher's newsletter.
* **Terms and Conditions** (`terms_accepted`, select_one, required): Check the terms and conditions box to confirm that you accept the pre-order terms.
* **Order Date** (`order_date`, date, required): Enter the date of pre-order.

## Tips

* Make sure to fill in all required fields to ensure accurate processing of your order.
* Double-check your shipping and payment information for accuracy.
* If you have any special requests, make sure to specify them clearly.
* Be aware of the terms and conditions of the pre-order process.
