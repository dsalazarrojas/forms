# Textbook Order Form - Help Guide
## Purpose
The Textbook Order Form is a tool for students to submit their textbook orders online. This form collects essential details from students, such as student information, textbook details, and payment information. The form is designed to streamline the ordering process, ensuring that all necessary details are captured efficiently.

## How To Complete This Form
To complete the form, follow these steps:

1.  Start by providing your student information, including your name, school, and email address.
2.  Enter your student name and the name of the student school in the respective fields.
3.  Provide a valid phone number and address of the store from where you're buying the textbook.
4.  Enter the textbook details, including the title, quantity, and image URL.
5.  Fill in the order status and date and time for your order.
6.  Enter your order total and textbook price.
7.  If applicable, enter a coupon code for any discounts.
8.  Provide any additional comments or details about your order.
9.  Choose your preferred payment gateway (Stripe, PayPal, or Square).
10. Fill in the payment gateway key for your chosen option.
11. Click 'Submit' to complete the form and initiate your order.

## Field-by-Field Explanation
*   **Textbook Order** (`order_form`, text, optional): This field is used for entering the name of the textbook you wish to order.
*   **Store Info** (`store_info`, text, optional): Enter the store from which you are purchasing the textbook.
*   **Student Information** (`student_info`, text, optional): Provide your student name and school name here.
*   **Textbook Info** (`textbook_info`, text, optional): Enter the details of the textbook you wish to order.
*   **Order Total** (`order_total`, number, optional): Enter the total price of the order.
*   **Order Status** (`order_status`, select_one, optional): Choose the status of your order from pending, processing, or delivered.
*   **Order Date** (`order_date`, date, optional): Enter the date and time of your order.
*   **Order Time** (`order_time`, time, optional): Enter the time of your order.
*   **Coupon Code** (`coupon_code`, text, optional): Enter any applicable coupon code for discounts.
*   **Order Details** (`order_details`, note, optional): Provide any additional order information here.
*   **Order Comments** (`order_comments`, text, optional): Add any comments about your order.
*   **Email** (`email`, email, optional): Enter your student email address.
*   **Phone Number** (`phone`, text, optional): Enter your phone number.
*   **Store Address** (`store_address`, text, optional): Enter the address of the store from which you're buying the textbook.
*   **Student Name** (`student_name`, text, optional): Enter your student name.
*   **Student School** (`student_school`, text, optional): Enter your student school name.
*   **Textbook Price** (`textbook_price`, number, optional): Enter the price of the textbook.
*   **Textbook Quantity** (`textbook_quantity`, number, optional): Enter the quantity of the textbook you wish to buy.
*   **Textbook Image URL** (`textbook_image_url`, text, optional): Enter the URL of the textbook image.
*   **Payment Gateway** (`payment_gateway`, select_one, optional): Choose your preferred payment gateway: Stripe, PayPal, or Square.
*   **Payment Gateway Key** (`payment_gateway_key`, text, optional): Enter the key for your chosen payment gateway option.
