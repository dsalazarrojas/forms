<thinking>...The purpose of this form is to register a medal order, allowing users to provide information about the medal and the order details such as payment method and payment note. Ensure that this form is only completed once for each medal order and that all relevant information is provided accurately to ensure efficient and accurate processing.</thinking>

# medal_order_form - Help Guide
## Purpose
This form is designed for registering medal orders. To fill out this form, follow the steps below to ensure accurate and efficient processing of your order.

## How To Complete This Form
1. Fill out the form by providing the requested information for each field. Ensure that all required fields are completed to avoid any issues with processing your order.
2. Review the form carefully to ensure that all details are accurate and complete.
3. Submit the form once you have finished filling it out.

## Field-by-Field Explanation
* **Enter Medal Information (id: 1)**:
	+ Type: text
	+ Required: no
	+ This field allows you to enter any additional information about the medal, if needed.
* **Organization Name (id: 2)**:
	+ Type: text
	+ Required: no
	+ This field is for entering your organization's name, if applicable.
* **Medal Order (id: 3)**:
	+ Type: select_one
	+ Required: no
	+ Select the medal type from the options provided to specify which medal is being ordered.
* **Quantity (id: 4)**:
	+ Type: number
	+ Required: no
	+ Enter the quantity of medals ordered.
* **Price (id: 5)**:
	+ Type: number
	+ Required: no
	+ Enter the price of each medal.
* **Total Cost (id: 6)**:
	+ Type: number
	+ Required: no
	+ This field is automatically calculated based on the price of each medal and the quantity ordered.
* **Payment Method (id: 7)**:
	+ Type: select_one
	+ Required: no
	+ Choose the payment method to use for this order (PayPal or Stripe).
* **Payment Email (id: 8)**:
	+ Type: email
	+ Required: no
	+ Enter the email associated with the chosen payment method.
* **Payment Note (id: 9)**:
	+ Type: note
	+ Required: no
	+ Enter any additional notes or instructions related to the payment method, if needed.

## Tips
* Be sure to double-check the accuracy of all entered information before submitting the form to avoid any issues with processing your order.
* If you have any questions or concerns, please do not hesitate to reach out to us for assistance.
