# Course Material Order Form - Help Guide
## Purpose
This form is designed to collect information for ordering course materials. You will need to provide details about the course materials you want to order, as well as your payment information.

## How To Complete This Form
1. Click on the "Order Details" page.
2. Select the materials you want to order.
3. Enter the quantity of each material.
4. Proceed to the "Payment Information" page.
5. Choose your payment method (Bank Transfer, PayPal, or Credit Card).
6. Enter the relevant payment information (Card Type, Card Number, Expiration Date, and CVV for Credit Card).
7. Confirm your payment and order details.

## Field-by-Field Explanation

* **Order Details** (`Order Details`, text, optional)
	+ This is the first page of the form where you can select the course materials you want to order. You can choose from the available options in the "Order" field.
* **Quantity** (`Quantity`, number, optional)
	+ Enter the quantity of each material you want to order.
* **Unit Price** (`Unit Price`, number, optional)
	+ Enter the price of each material.
* **Total** (`Total`, number, optional)
	+ This field is automatically calculated based on the quantity and unit price of each material.
* **Notes** (`Notes`, note, optional)
	+ You can enter any additional comments or notes related to your order.
* **Payment Method** (`Payment Method`, select_one, optional)
	+ Choose your payment method (Bank Transfer, PayPal, or Credit Card).
* **Card Type** (`Card Type`, text, optional)
	+ This field is only visible if you choose Credit Card as your payment method. Enter the type of your credit card.
* **Card Number** (`Card Number`, text, optional)
	+ Enter your credit card number.
* **Expiration Date** (`Expiration Date`, date, optional)
	+ Enter the expiration date of your credit card.
* **CVV** (`CVV`, text, optional)
	+ Enter the Card Security Code (CVV) on your credit card.
* **Payment Method** ( duplicate of `Payment Method`, select_one, optional)
	+ This field is a duplicate of the "Payment Method" field on the "Order Details" page. You can choose your payment method again here.
* **Notes** (duplicate of `Notes`, note, optional)
	+ This field is a duplicate of the `Notes` field on the "Order Details" page. You can enter additional comments or notes here.
* **Confirmation** (`Confirmation`, select_multiple, optional)
	+ Confirm that you have paid for this order or indicate that you are not sure what you are doing.

Please note that this form is designed to be optional for most fields, but required fields are indicated with "required: true" in the form schema.
