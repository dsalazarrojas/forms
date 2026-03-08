<figure><thinking>
To ensure the user understands the correct input fields and their purpose, we'll be going through each field and providing an explanation on how the form is used and what each field is for to avoid confusion and errors during input. The purpose of this form is to collect order information for the Field Day T Shirt event. Each field on this form is essential for accurate order processing, ensuring that the order details are captured correctly. Please note that some fields are required for order processing while others are optional but can be filled in to provide additional information.
</thinking></figure>

# Field Day T Shirt Order Form - Help Guide
## Purpose
The Field Day T Shirt Order Form is designed to collect information for orders placed for the Field Day T Shirt event. This form is essential for processing and fulfilling orders accurately.

## How To Complete This Form
To complete this form, please follow these steps:

1. Select the size of your t-shirt using the dropdown options provided.
2. Choose the color of your t-shirt from the available options.
3. Enter the quantity of t-shirts you wish to order.
4. Enter your email address for order confirmation and future communication.
5. Select the payment method you wish to use for your order.
6. Enter your name as it appears on the order and for any subsequent communication.
7. If you wish, enter your school name for any special event or group orders.
8. If desired, provide any additional order notes or comments.
9. Enter the order total, which will be calculated automatically.
10. Optionally, enter your phone number for any follow-up communication.

## Field-by-Field Explanation
* **Shirt Size** (`t_shirt_size`, select_one, **Required**): Select the size of your t-shirt from the available options, which include Small, Medium, Large, and X-Large.
* **T Shirt Color** (`t_shirt_color`, select_multiple, **Required**): Choose the colors you prefer for your t-shirt from the available colors Red, Blue, Green, and Yellow. Be sure to choose all the colors you want as it's a multiple selection field.
* **Order Quantity** (`order_quantity`, number, **Required**): Enter the number of t-shirts you wish to order. Please ensure the quantity matches your need, as this will affect the order total.
* **Customer Email** (`customer_email`, email, **Required**): Enter your email address for order confirmation and future communication.
* **Payment Method** (`payment_method`, select_one, **Required**): Select your preferred payment method from the available options, which include Visa, Mastercard, Amex, and Discover.
* **Customer Name** (`customer_name`, text, **Required**): Enter your name as it appears on the order and for any subsequent communication.
* **School Name** (`school_name`, text, **Optional**): If you are placing an order for a school or group event, please enter the school name to ensure correct processing and communication.
* **Order Notes** (`order_notes`, note, **Optional**): If you have any special requests or comments, please enter them here for our staff's reference.
* **Order Total** (`order_total`, number, **Optional**): This field is automatically populated and will show the total cost of your order. It's not required to be filled but is a helpful reference.
* **Customer Phone** (`customer_phone`, text, **Optional**): If you wish to provide your phone number for follow-up communication, please enter it here.
