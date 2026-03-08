<thinking>
This form is designed to guide users in creating a T-shirt order. The purpose of this form is to collect information about the customer's preferences, such as their preferred size, color, and other details. The form is intended for end-users to input their order information accurately. This form has been designed to minimize errors and maximize user experience. There should be no need for users to repeat this form, as it is a one-time form. Please make sure to complete this form accurately. This form is not intended for users with special requirements or needs that cannot be met through the standard T-Shirt options. If you have any questions or concerns, please contact the support team.
</thinking>

# T Shirt Order Form - Help Guide
## Purpose
The T Shirt Order Form is designed to guide users in creating a T-shirt order. The form is intended to collect information about the customer's preferences such as size, color, and other details for T-shirt ordering purposes.

## How To Complete This Form
To complete this form, follow these steps:

1. Select a size for your T-shirt using the size dropdown menu.
2. Choose a color for your T-shirt from the available options.
3. Enter your name in the text field.
4. Select the quantity of T-shirts you would like to order.
5. Enter the price of the order (if you have a specific price in mind).
6. Select a payment gateway to use for the order (Stripe, PayPal, or Bank Transfer).
7. If you have any special order notes, enter them here.
8. Confirm your order by selecting "True" to confirm or "False" to cancel your order.

## Field-by-Field Explanation
### Select a size
* **Select a size** (`shirt_size`, `select_one`, required/optional): Select the size of the T-shirt that best fits you using the dropdown menu. Choose the size that corresponds to your body type, or the size you prefer.

### Choose a color
* **Choose a color** (`shirt_color`, `select_multiple`, required/optional): Choose one or more colors that you prefer for your T-shirt. You can select as many colors as you want.

### Name
* **name** (`name`, `text`, required/optional): Enter your name as it appears on the T-shirt.

### Quantity
* **quantity** (`quantity`, `number`, required/optional): Enter the number of T-shirts you would like to order.

### Price
* **price** (`price`, `number`, required/optional): Enter the price of the order if you have a specific price in mind.

### Payment Gateway
* **Payment gateway** (`payment_gateway`, `select_one`, required/optional): Choose how you would like to pay for the order using Stripe, PayPal, or Bank Transfer.

### Order Notes
* **Order notes** (`order_notes`, `note`, required/optional): If there are any special instructions or requests for your order, enter them here.

### Confirm Order
* **Confirm order** (`confirm`, `select_one`, required/optional): Confirm or cancel your order by selecting "True" or "False".
