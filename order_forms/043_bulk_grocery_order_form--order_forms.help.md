<thinking>
This form is designed to collect information for bulk grocery orders from customers. It is used to gather details about the order date, customer information, delivery address, and preferences for the order. The form is likely used by a business or organization to process and fulfill large orders for groceries. To avoid duplication of effort and ensure accurate data collection, please fill out this form with care and attention to detail.
</thinking>

# Bulk Grocery Order Form - Help Guide
## Purpose
The Bulk Grocery Order Form is used to collect information for bulk grocery orders. It is essential for our business to have accurate and complete data to process and fulfill your order efficiently.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in the required fields marked with an asterisk (\*).
2. Select the produce, dairy, meat, frozen, pantry, beverage, bakery, and other items you would like to order.
3. Enter your delivery date, delivery address, and preferred delivery time window.
4. Choose your payment method.
5. Provide any special instructions or delivery notes.

## Field-by-Field Explanation

* **Order Date (\*)** (`order_date`, date, required/true): Enter the date you would like to place this order.
* **Customer Name (\*)** (`customer_name`, text, required/true): Enter your name as it appears on your identification.
* **Email Address (\*)** (`customer_email`, email, required/true): Enter your contact email address.
* **Phone Number (\*)** (`customer_phone`, text, required/true): Enter your contact phone number.
* **Business or Organization Name** (`business_name`, text, required/false): If you are placing this order for a business, enter the business name.
* **Delivery Address (\*)** (`delivery_address`, text, required/true): Enter the address where you would like to receive your order.
* **City** (`delivery_city`, text, required/true): Enter the city where you would like to receive your order.
* **State or Province** (`delivery_state`, text, required/true): Enter the state or province code where you would like to receive your order.
* **Zip or Postal Code** (`delivery_zip`, text, required/true): Enter the postal code where you would like to receive your order.
* **Produce Items Ordered** (`produce_items`, select_multiple, required/false): Choose from the list of produce items you would like to order.
* **Dairy Products Ordered** (`dairy_items`, select_multiple, required/false): Choose from the list of dairy products you would like to order.
* **Meat and Protein Items** (`meat_items`, select_multiple, required/false): Choose from the list of meat and protein items you would like to order.
* **Frozen Items Ordered** (`frozen_items`, select_multiple, required/false): Choose from the list of frozen items you would like to order.
* **Pantry and Dry Goods** (`pantry_items`, select_multiple, required/false): Choose from the list of pantry and dry goods you would like to order.
* **Beverages Ordered** (`beverage_items`, select_multiple, required/false): Choose from the list of beverages you would like to order.
* **Bakery Items** (`bakery_items`, select_multiple, required/false): Choose from the list of bakery items you would like to order.
* **Special Orders or Preferences** (`order_notes`, text, required/false): Enter any special orders or preferences.
* **Request Delivery Date** (`delivery_date`, date, required/true): Enter the date you would like to receive your order.
* **Preferred Delivery Time Window** (`delivery_window`, select_one, required/false): Choose from the list of preferred delivery time windows.
* **Payment Method** (`payment_method`, select_one, required/true): Choose your payment method.
* **Estimated Order Total** (`estimated_total`, number, required/false): Enter an approximate total cost of your order.
* **Dietary Restrictions** (`dietary_restrictions`, text, required/false): Enter any dietary restrictions.
* **Special Instructions** (`special_instructions`, text, required/false): Enter any special delivery instructions.
* **Payment Method** (`payment_method`, select_one, required/true): 
  *Please choose one of the following options*: 
    * Credit Card 
    * PayPal 
    * Wire Transfer 
    * Check 
    * Cash on Delivery 

Note: This form requires fields to be filled out to process the order efficiently. Please fill in all relevant fields for accurate order processing.
