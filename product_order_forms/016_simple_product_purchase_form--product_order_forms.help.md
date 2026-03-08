# Simple Product Purchase Form - Help Guide
## Purpose
The Simple Product Purchase Form is designed to record detailed information about a product's purchase, including customer and product details.

## How To Complete This Form
To complete this form, please follow these steps:
1. Fill out all required fields marked as "*Required" with accurate information.
2. Ensure that you enter valid data for each field, such as a real email address for the customer's email.
3. If a field is not required, but you wish to provide additional information, feel free to do so.

## Field-by-Field Explanation

* **Purchase Details** (`purchase_details`, `text`, *Required*): Enter a brief description of the purchase.
* **Product Information** (`product_info`, `text`, *Required*): Enter the product's name and description.
* **Customer Information** (`customer_info`, `text`, *Optional*): Enter any additional information about the customer if desired.
* **Shipping Address** (`shipping_address`, `text`, *Required*): Enter the customer's shipping address for accurate delivery.
* **Payment Method** (`payment_method`, `select_one`, *Required*): Select "Yes" if the purchase involves a payment method, otherwise select "No".
* **Customer Notes** (`customer_notes`, `text`, *Optional*): Enter any additional notes about the customer if desired.
* **Contact Method** (`contact_method`, `select_one`, *Required*): Select "Yes" if the customer should be contacted, otherwise select "No".
* **Purchase Date** (`purchase_date`, `date`, *Required*): Enter the date of the purchase.
* **Purchase Time** (`purchase_time`, `time`, *Required*): Enter the time of the purchase.
* **Purchase Amount** (`purchase_amount`, `number`, *Required*): Enter the total purchase amount.
* **Product Name** (`product_name`, `text`, *Optional*): Enter the product name if desired.
* **Product Quantity** (`product_quantity`, `number`, *Required*): Enter the quantity of the product purchased.
* **Product Price** (`product_price`, `number`, *Required*): Enter the price of the product.
* **Shipping Cost** (`shipping_cost`, `number`, *Required*): Enter the shipping cost.
* **Tax Cost** (`tax_cost`, `number`, *Required*): Enter the tax cost.
* **Total Cost** (`total_cost`, `number`, *Required*): Enter the total cost of the purchase.
* **Customer Email** (`customer_email`, `email`, *Optional*): Enter the customer's email address if desired.
* **Customer Phone** (`customer_phone`, `text`, *Required*): Enter the customer's phone number.
* **Customer Message** (`customer_message`, `text`, *Optional*): Enter any message for the customer if desired.
* **Product Discount** (`product_discount`, `number`, *Optional*): Enter the product discount if applicable.
* **Product Discount Type** (`product_discount_type`, `select_one`, *Optional*): Select "Yes" if a discount was applied, otherwise select "No".
* **Customer Notes** (`customer_notes`, `text`, *Optional*): Enter any additional notes about the customer if desired.
* **Order Comments** (`order_comments`, `text`, *Optional*): Enter any comments about the order if desired.
* **Customer ID** (`customer_id`, `number`, *Required*): Enter the customer's ID.
* **Customer Name** (`customer_name`, `text`, *Required*): Enter the customer's name.
