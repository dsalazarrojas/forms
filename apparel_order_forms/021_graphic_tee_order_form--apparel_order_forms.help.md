<thinking>

To determine the purpose of the "graphic_tee_order_form" form, I will analyze the fields and options provided in the YAML input. The form appears to be designed for ordering graphic t-shirts, and the fields seem to pertain to customer information, order details, payment and shipping information, and order status. Based on this analysis, the form's purpose is likely to process orders for graphic t-shirts, including gathering customer info, order specifics, payment options, and tracking order status.

The form has multiple pages, but I will focus on the primary fields that need to be filled out. The fields can be grouped into categories for ease of understanding. 

</thinking>

# graphic_tee_order_form - Help Guide
## Purpose
This form is used to process orders for graphic t-shirts. Fill out the form with customer information, order details, and payment options to create a new order.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the customer's information, including their email and phone number.
2. Choose the payment method and date of payment.
3. Enter order details, such as the graphic t-shirt design.
4. Track the order's status and payment status.

## Field-by-Field Explanation
### Customer Info
* **Customer Email** (`customer_email`, email, required): Enter the customer's email address.
* **Customer Phone** (`customer_phone`, text, required): Enter the customer's phone number.
* **Customer Address** (`customer_address`, text, required): Enter the customer's address.
### Order Info
* **Order Number** (`order_number`, text, required): Enter the unique order number.
* **Order Details** (`order_details`, text, optional): Enter a brief description of the order.
* **Special Instructions** (`special_instructions`, text, optional): Leave any special instructions for the order.
* **Order Confirmation** (`order_confirmation`, text, optional): Enter order confirmation details.
* **Order Status** (`order_status`, select_one, required): Select the order status (Active or Inactive).
* **Assigned To** (`assigned_to`, text, optional): Enter the person assigned to handle the order.
### Payment Info
* **Payment Method** (`payment_method`, select_multiple, optional): Choose the payment method (Yes or No).
* **Payment Date** (`payment_date`, date, optional): Enter the date of payment.
* **Payment Status** (`payment_status`, select_one, required): Select the payment status (Active or Inactive).
### Shipping Info
* **Order Total** (`order_total`, text, optional): Enter the total order value.
* **Sales Tax** (`sales_tax`, text, optional): Leave any sales tax information.
* **Subtotal** (`subtotal`, text, optional): Enter the subtotal of the order.
* **Shipping Rate** (`shipping_rate`, text, optional): Leave any shipping rate information.
* **Shipping Cost** (`shipping_cost`, text, optional): Enter any shipping cost.
* **Total** (`total`, text, optional): Leave the total order value.
* **Order Notes** (`order_notes`, text, optional): Add any notes about the order.
* **Customer Notes** (`customer_notes`, text, optional): Add any customer notes.
