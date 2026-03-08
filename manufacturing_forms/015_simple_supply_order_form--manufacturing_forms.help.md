# Simple Supply Order Form - Help Guide
## Purpose
The Simple Supply Order Form is designed for manufacturing settings to quickly create new supply orders, taking into account the most critical details about the product ordered and the customer's information.

## How To Complete This Form
To complete the form successfully, follow the steps below:

1. Enter the product name and quantity in the Product Name and Quantity fields, respectively.
2. If required, enter the product price.
3. Enter the order date and time using the Date and Time fields.
4. Select the order status by choosing from the list (New, In progress, Completed).
5. Provide the customer's name, email, phone, address, city, state, country, and company in the respective fields.
6. Enter any necessary order notes and comments for further context.
7. Choose the product category from the list (Office Supplies, Paper Products, Computer Supplies).
8. Add any additional order comments or notes.
9. Enter the customer's zip code and country code (if required).
10. Select the order type from the list (New, Repeat, Reorder, Cancellation, Return, Other).

## Field-by-Field Explanation
### Product Information
* **Product Name** (`product_name`, Text, Optional): Enter the name of the product being ordered.
* **Quantity** (`quantity`, Number, Optional): Enter the quantity of the product being ordered.
* **Product Price** (`product_price`, Number, Optional): Enter the price of the product being ordered (if required).
* **Order Date** (`order_date`, Date, Optional): Enter the date for the order.
* **Order Time** (`order_time`, Time, Optional): Enter the time for the order.
* **Order Type** (`order_type`, Select One, Optional): Select the type of order (New, Repeat, Reorder, Cancellation, Return, Other).
* **Customer Information**
	+ **Customer Name** (`customer_name`, Text, Optional): Enter the customer's name.
	+ **Customer Email** (`customer_email`, Email, Optional): Enter the customer's email address.
	+ **Customer Phone** (`customer_phone`, Text, Optional): Enter the customer's phone number.
	+ **Customer Address** (`customer_address`, Text, Optional): Enter the customer's address.
	+ **Customer City** (`customer_city`, Text, Optional): Enter the customer's city.
	+ **Customer State** (`customer_state`, Text, Optional): Enter the customer's state or region.
	+ **Customer Country** (`customer_country`, Text, Optional): Enter the customer's country.
	+ **Customer Company** (`customer_company`, Text, Optional): Enter the customer's company name.
* **Order Status** (`order_status`, Select One, Optional): Select the current status of the order (New, In progress, Completed).
* **Product Category** (`product_category`, Select Multiple, Optional): Select the product category (Office Supplies, Paper Products, Computer Supplies).
* **Order Comments** (`order_comments`, Text, Optional): Enter any additional order comments or notes.
* **Order Notes** (`order_notes`, Note, Optional): Enter any necessary order notes for further context.
* **Customer Zip** (`customer_zip`, Text, Optional): Enter the customer's zip code (if required).
* **Customer Region** (`customer_region`, Text, Optional): Enter the customer's region.
* **Customer Country Code** (`customer_country_code`, Text, Optional): Enter the customer's country code (if required).
* **Product Description** (`product_description`, Text, Optional): Enter a description of the product being ordered.
* **Assigned User** (`assigned_user`, Text, Optional): Enter the name of the assigned user (if required).
* **Order Type** (`order_type`, Select One, Optional): Select the type of order (New, Repeat, Reorder, Cancellation, Return, Other).
