<thinking>
This form is designed to help customers submit orders for plants. It collects customer information, address, payment details, plant information, and order specifics.
This form should only be used for customers who have been previously vetted or who have a valid relationship with our business. 
We want to avoid duplication of orders or attempts to manipulate orders, hence the requirement for customers to be vetted.
</thinking>
# plant_order_form - Help Guide
## Purpose
The plant_order_form is a form designed to facilitate the process of ordering plants from our business. It is meant for customers who have been previously vetted or have a valid relationship with our business.
## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the customer information section (fields 1-4).
2. Enter the address of the customer in the address field (field 5).
3. Select the type of plant to order from the options provided in the order field (field 6).
4. Enter the quantity of the plant to order in the quantity field (field 7).
5. Enter the unit price of the plant in the unit_price field (field 8).
6. Calculate the total price by multiplying the unit price by the quantity (you will need to do this manually).
7. Enter the customer's name in the customer_name field (field 9).
8. Enter the order date in the order_date field (field 10).

## Field-by-Field Explanation

* **Customer Information (customer_info)** (`customer_info`, text, optional): This field is used to store the customer's name and other relevant details.
* **Address (address)** (`address`, text, optional): Enter the customer's address for delivery purposes.
* **Payment Information (payment_info)** (`payment_info`, text, optional): This field is not currently used. We will be adding functionality to accept payment later.
* **Plant Information (plant_info)** (`plant_info`, text, optional): Enter any specific details about the plant being ordered.
* **Order (order)** (`order`, select_one, optional): Select the type of plant to order from the options provided.
* **Quantity (quantity)** (`quantity`, number, optional): Enter the number of plants to order.
* **Unit Price (unit_price)** (`unit_price`, number, optional): Enter the price per plant.
* **Total Price (total_price)** (`total_price`, number, optional): Calculate the total price by multiplying the unit price by the quantity.
* **Customer Name (customer_name)** (`customer_name`, text, optional): Enter the customer's name for order confirmation.
* **Order Date (order_date)** (`order_date`, date, optional): Enter the date of the order.

## Tips
- Make sure to calculate the total price manually, as it is not automatically calculated.
- Ensure that you are ordering a plant that is available for sale.
- If you experience any issues, please contact us for assistance.
