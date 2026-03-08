# simmer_pot_purchase_order_form - Help Guide
## Purpose
The "simmer_pot_purchase_order_form" form is used to place a product order. It captures essential information such as product details, shipping and payment information, and order status.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in the product title and description.
2. Upload any relevant product images.
3. Enter the product price.
4. Select a delivery date.
5. Provide your shipping address.
6. Enter your phone number.
7. Choose a payment method (Bank Transfer, PayPal, or Cash).
8. Enter payment details.
9. Provide delivery instructions (if applicable).
10. Select your delivery preferences (In Person, Email, or Phone).
11. Enter any additional notes (if applicable).
12. Enter your customer name.
13. (Optional) Enter order quantity.
14. Select the order type (Single or Multiple).
15. (Optional) Enter order frequency details.
16. Select the order status (Pending, Confirmed, or Cancelled).

## Field-by-Field Explanation

* **Product Title** (`product_title`, `text`, required): Enter the title of the product you are ordering.
* **Product Description** (`product_description`, `text`, required): Describe the product you are ordering.
* **Product Images** (`product_images`, `text`, optional): Upload any relevant images of the product.
* **Product Price** (`product_price`, `number`, required): Enter the price of the product.
* **Delivery Date** (`delivery_date`, `date`, required): Select the delivery date for the product.
* **Shipping Address** (`shipping_address`, `text`, required): Enter your shipping address.
* **Phone Number** (`phone_number`, `text`, required): Enter your phone number.
* **Email** (`email`, `email`, optional): Enter your email address (if applicable).
* **Payment Method** (`payment_method`, `select_one`, required): Select the payment method (Bank Transfer, PayPal, or Cash).
* **Payment Details** (`payment_details`, `text`, required): Enter payment details.
* **Delivery Instructions** (`delivery_instructions`, `text`, optional): Provide any delivery instructions.
* **Delivery Preferences** (`delivery_preferences`, `select_one`, required): Select your delivery preferences (In Person, Email, or Phone).
* **Notes** (`notes`, `note`, optional): Enter any additional notes about the order.
* **Customer Name** (`customer_name`, `text`, required): Enter your name.
* **Order Quantity** (`order_quantity`, `text`, optional): (Optional) Enter the quantity of the order.
* **Order Type** (`order_type`, `select_one`, required): Select the order type (Single or Multiple).
* **Order Frequency** (`order_frequency`, `text`, optional): (Optional) Enter the frequency of the order.
* **Order Frequency Options** (`order_frequency_options`, `text`, optional): (Optional) Select any options for the order frequency.
* **Order Frequency Details** (`order_frequency_details`, `text`, optional): (Optional) Enter any details about the order frequency.
* **Order Frequency Notes** (`order_frequency_notes`, `text`, optional): (Optional) Enter any notes about the order frequency.
* **Order Status** (`order_status`, `select_one`, required): Select the order status (Pending, Confirmed, or Cancelled).
* **Order Status Notes** (`order_status_notes`, `text`, optional): (Optional) Enter any notes about the order status.
* **Order Comments** (`order_comments`, `text`, optional): (Optional) Enter any comments about the order.
* **Form Submission Comments** (`form_submission_comments`, `text`, optional): (Optional) Enter any comments about the form submission.
