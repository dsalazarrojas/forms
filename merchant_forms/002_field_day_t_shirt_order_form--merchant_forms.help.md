# Field Day T Shirt Order Form - Help Guide
## Purpose
The Field Day T Shirt Order Form is a form designed to collect customer information for orders. This form is used to gather essential details about the customer, including their name, contact information, t-shirt preferences, and order details. 

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your **First Name** and **Last Name** in the respective fields.
2. Select your preferred **T-Shirt Size** from the options provided.
3. Enter your **Email** address accurately.
4. Provide your **Phone** number.
5. Enter your **School Name** if it's relevant to the order.
6. Select one or more **T-Shirt Colors** that you'd like to order.
7. Specify the **Quantity** of t-shirts you'd like to order.
8. Choose the desired **T-Shirt Design** from the available options.
9. Select the **Order Date** for the order.
10. If applicable, enter the **Total Cost** of the order.
11. Finally, select the **Payment Gateway** for the payment method.

## Field-by-Field Explanation
* **First Name** (`first_name`, text, required): Enter your first name.
* **Last Name** (`last_name`, text, required): Enter your last name.
* **T-Shirt Size** (`t_shirt_size`, select_one, required): Select the size of the t-shirt you'd like to order.
* **Email** (`email`, email, required): Enter a valid email address for communication purposes.
* **Phone** (`phone`, text, required): Enter your phone number for contact purposes.
* **School Name** (`school_name`, text, required): If you're ordering on behalf of a school, enter the school name.
* **T-Shirt Color** (`t_shirt_color`, select_multiple, required): Select one or more t-shirt colors you'd like to order.
* **Quantity** (`quantity`, number, required): Specify the number of t-shirts you'd like to order.
* **T-Shirt Design** (`t_shirt_design`, select_one, required): Choose the desired t-shirt design.
* **Order Date** (`order_date`, date, required): Select the date for the order.
* **Total Cost** (`total_cost`, number, optional): If applicable, enter the total cost of the order.
* **Payment Gateway** (`payment_gateway`, select_one, required): Select the payment method from the options provided.
