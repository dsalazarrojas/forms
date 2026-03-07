<thinking>
To create this form, we considered the needs of wedding planners and bakers to order cakes for their customers. The form should gather essential information to fulfill a cake order with the least amount of back-and-forth communication. This form should not be used for any other purpose than ordering a cake. This form is intended to gather information for a single order. Please note that this form is a one-time use case form. If you need to order multiple cakes with different specifications, please submit a new form for each one.
</thinking>

# Theme Cake Order Form - Help Guide
## Purpose
This form is used to place an order for a custom cake that matches your wedding theme.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the required details about your order, including the type of cake you want, its size, and other specifications.
2. Choose a delivery date and time that works for you.
3. Select your preferred payment method and provide any additional comments or notes.

## Field-by-Field Explanation

* **Order Details** (`order_details`, text, required: false): Enter a brief description of your order, such as the type of cake, occasion, and any special requests.
* **Payment Options** (`payment_options`, select_multiple, required: false): Select the payment option that best suits you. Please select all that apply.
	+ 'Yes' indicates that you are interested in paying via online payment methods (e.g. credit card, bank transfer).
	+ 'No' indicates that you do not have a preference for online payment options.
* **Cake Type** (`cake_type`, select_one, required: false): Choose the type of cake that suits your wedding theme. Options are Apple, Chocolate, Red Velvet, and Vanilla.
* **Cake Size** (`cake_size`, select_one, required: false): Select the size of your cake.
	+ Small
	+ Medium
	+ Large
* **Cake Flavor** (`cake_flavor`, select_one, required: false): Choose the flavor of your cake.
	+ Vanilla
	+ Chocolate
	+ Red Velvet
	+ Lemon
	+ Strawberry
* **Delivery Date** (`delivery_date`, date, required: false): Enter a specific date you would like to receive your cake.
* **Delivery Time** (`delivery_time`, time, required: false): Enter a specific time you would like to receive your cake.
* **Total Price** (`total_price`, number, required: false): This field will be filled in by the system after you've made a selection for cake type, size, and flavor.
* **Payment Method** (`payment_method`, select_one, required: false): Choose how you would like to pay for your order.
	+ Cash
	+ Card
* **Name** (`name`, text, required: false): Enter your name as you would like it to be displayed on the cake.
* **Email** (`email`, email, required: false): Enter a valid email address in case the baker needs to reach you.
* **Phone** (`phone`, text, required: false): Enter your phone number in case the baker needs to contact you.
* **Notes** (`notes`, note, required: false): Add any additional comments or requests you have about your order.
