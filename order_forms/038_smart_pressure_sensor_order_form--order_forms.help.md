# Smart Pressure Sensor Order Form - Help Guide
## Purpose
The Smart Pressure Sensor Order Form is a tool to collect customer information and order details for a smart pressure sensor product.
## How To Complete This Form
To complete this form, please follow these steps:

1. Fill out the Customer Info section with your name, email, and other contact details.
2. Provide shipping information, including your shipping address.
3. Choose the order specifics, such as the type of sensor and quantity you need.
4. Select the payment method you prefer.
5. Enter the shipping cost and unit price of the order.
6. Calculate the total cost of the order.
7. Add any customer or shipping notes if necessary.

## Field-by-Field Explanation

* **Customer Info** (`customer_info`, text, required): This section is for providing your personal contact details, including name, email, and phone number.
* **Shipping Info** (`shipping_info`, text, required): This section is for providing your shipping address, including street address, city, state, and zip code.
* **Order Info** (`order_info`, text, required): This section is for specifying the type of sensor and quantity you want to order.
* **Payment Method** (`payment_method`, select_multiple, required): Choose from Visa, Mastercard, or Amex as your preferred payment method.
* **Shipping Address** (`shipping_address`, text, required): This section is for providing your shipping address, including street address, city, state, and zip code.
* **Product Info** (`product_info`, select_one, required): Select one of the available options, Sensor A, Sensor B, or Sensor C.
* **Quantity** (`quantity`, number, required): Enter the number of sensors you want to order.
* **Unit Price** (`unit_price`, number, required): Enter the price per sensor.
* **Shipping Cost** (`shipping_cost`, number, required): Enter the shipping cost.
* **Total Cost** (`total_cost`, number, required): This field is automatically populated based on the previous fields.
* **Customer Notes** (`customer_notes`, text, optional): Add any additional notes or comments about your order.
* **Shipping Notes** (`shipping_notes`, text, optional): Add any additional notes or comments about your shipping details.
* **Payment Status** (`payment_status`, select_one, required): This field shows the status of your payment, Paid, Pending, or Cancelled.
 
## Tips
* Ensure that you fill out all required fields before submitting the form.
* Double-check your shipping and payment details to avoid any errors.
* You can add notes to your order for customer and shipping purposes.
* The total cost will be automatically calculated based on your selected quantity and unit price.
