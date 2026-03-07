<thinking>
The purpose of this form is to collect order details from customers for a pizza restaurant. 
This form is designed to gather information from the customer, such as order type, toppings, crust size, and payment method. 
The form should only be filled out once for each order. 
Please ensure that you are filling out the correct order before submitting.
</thinking>

# paypal_pizza_order_form - Help Guide
## Purpose
The purpose of the PayPal Pizza Order Form is to collect order details from customers for a pizza restaurant.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the required fields (marked as "Required") with the relevant information.
2. Select the correct options for each field, such as toppings, crust size, and payment method.
3. Enter any additional information, such as customer name, phone number, and order notes.

## Field-by-Field Explanation
* **Customer Name** (`customer_name`, text, required): Enter the customer's name.
* **Customer Email** (`customer_email`, email, required): Enter the customer's email address.
* **Customer Phone** (`customer_phone`, text, required): Enter the customer's phone number.
* **Order Status** (`order_status`, select_one, required): Select the status of the order (New, In Progress, Completed).
* **Order Notes** (`order_notes`, text, required): Enter any additional notes about the order.
* **Employee Name** (`employee_name`, text, required): Enter the name of the employee taking the order.
* **Payment Method** (`payment_method`, select_one, required): Select the payment method (Cash, Credit, PayPal).
* **Sauce** (`sauce`, select_one, required): Select the type of sauce (Marinara, Alfredo, Garlic).
* **Cheese** (`cheese`, select_one, required): Select the type of cheese (Mozzarella, Cheddar, Gouda).
* **Crust Size** (`crust_size`, select_one, required): Select the size of the crust (Small, Medium, Large).
* **Crust Type** (`crust_type`, select_one, required): Select the type of crust (Thin, Thick, Gluten).
* **Toppings** (`toppings`, select_multiple, optional): Select any additional toppings (Pepperoni, Sausage, Mushrooms).
* **Extra Toppings** (`extra_toppings`, select_multiple, optional): Select any extra toppings (Olives, Extra Cheese, Pepper).
* **Order Notes 2-8** (`order_notes_2`, `order_notes_3`, `order_notes_4`, `order_notes_5`, `order_notes_6`, `order_notes_7`, `order_notes_8`, text, optional): Enter any additional notes about the order.
* **Total** (`total`, number, optional): Enter the total cost of the order.
* **Date** (`date`, date, optional): Enter the date of the order.
* **Time** (`time`, time, optional): Enter the time of the order.
