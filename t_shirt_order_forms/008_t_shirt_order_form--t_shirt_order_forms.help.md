# T Shirt Order Form - Help Guide
## Purpose
The T Shirt Order Form is designed to gather information required for a T Shirt order, including customer details and order specifics, such as T Shirt designs, quantities, and payment information. 

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your **Customer Name** in the provided field. This is a required field and should be filled in accurately.
2. If you have a **Shipping Address**, please enter it in the provided field. However, this is not a required field.
3. Enter your **Phone Number** if you would like to be contacted for any reason. This field is not required.
4. Provide your **Email Address** for communication purposes. This field is not required.
5. Select the **T Shirt Designs** you are interested in purchasing. You can choose one or multiple designs.
6. Enter the quantity of T Shirts you would like to order.
7. Please leave the **Unit Price** field blank, as this will be calculated automatically.
8. Review the calculated **Total Price** before submitting the form.
9. Select a payment method from the **Payment Gateway** options (PayPal, Stripe, or Authorize).
10. Click the **Submit** button to finalize your order.

## Field-by-Field Explanation

* **Customer Name** (`customer_name`, text, required): Enter your name as it appears on your ID or identification card.
* **Shipping Address** (`shipping_address`, text, optional): If you are having your T Shirt shipped, enter your shipping address here.
* **Phone Number** (`phone_number`, text, optional): Enter your phone number if you would like to be contacted for any reason.
* **Email** (`email`, email, optional): Enter your email address for communication purposes.
* **T Shirt Designs** (`t_shirt_designs`, select_multiple, optional): Select one or multiple T Shirt designs from the available options.
* **Quantity** (`quantity`, number, optional): Enter the number of T Shirts you would like to order.
* **Unit Price** (`unit_price`, number, optional): This field is automatically populated with the price per T Shirt. You don't need to fill this in.
* **Total Price** (`total_price`, text, optional): This is the calculated total price of your order and is displayed here.
* **Payment Gateway** (`payment_gateway`, select_one, optional): Select a payment method from the available options (PayPal, Stripe, or Authorize).
* **Submit** (`submit_button`, text, optional): Click this button to finalize your order.

## Tips
- Ensure that you fill in all required fields accurately.
- Selecting multiple T Shirt designs will result in multiple items being added to your order.
- The **Unit Price** field is populated automatically and should not be filled in.
