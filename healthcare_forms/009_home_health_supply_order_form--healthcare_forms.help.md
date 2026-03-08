# home_health_supply_order_form - Help Guide
## Purpose
The home health supply order form is used to collect patient information, order details, payment information, and other relevant details required for the home health supply order.

## How To Complete This Form

1.  To complete the form, start by filling in the patient information section.
2.  Select the order details and payment information required for the order.
3.  Enter any relevant billing and shipping addresses.
4.  Add any additional order notes.
5.  Sign the form, either by hand or digitally, to confirm the order.
6.  Date and time the form to ensure accurate tracking of the order.

## Field-by-Field Explanation

*   **Form Header** (`form_header`, `note`, not required): This field is for informational purposes only and is not a required field.
*   **Patient Information** (`patient_info`, `text`, not required): Enter the patient's information, which includes their name, contact details, and any other relevant information.
*   **Order Header** (`order_header`, `note`, not required): This field is for informational purposes only and is not a required field.
*   **Product List** (`product_list`, `select_multiple`, not required): Select the health supplies required for the patient's order.
*   **Quantity** (`quantity`, `number`, not required): Enter the quantity of each selected product ordered.
*   **Order Details** (`order_details`, `select_one`, required): Choose the correct order details from the provided options.
*   **Signature** (`signature`, `text`, not required): Sign the form to confirm the order.
*   **Notes** (`notes`, `text`, not required): Add any additional notes related to the order.
*   **Date** (`date`, `date`, not required): Date the form to ensure accurate tracking of the order.
*   **Time** (`time`, `time`, not required): Time the form to ensure accurate tracking of the order.
*   **Email** (`email`, `email`, not required): Enter the patient's email address for communication purposes.
*   **Phone** (`phone`, `text`, not required): Enter the patient's phone number for contact purposes.
*   **Medical Supplies** (`medical_supplies`, `text`, not required): Enter any relevant medical supplies information.
*   **Order Status** (`order_status`, `select_one`, not required): Choose the correct order status from the provided options.
*   **Patient Status** (`patient_status`, `select_one`, required): Choose the correct patient status from the provided options.
*   **Medical Condition** (`medical_condition`, `text`, not required): Enter any relevant medical condition information.
*   **Order Total** (`order_total`, `number`, not required): Enter the total cost of the order.
*   **Payment Method** (`payment_method`, `select_one`, required): Choose the payment method from the provided options.
*   **Payment Status** (`payment_status`, `select_one`, not required): Choose the payment status from the provided options.
*   **Billing Address** (`billing_address`, `text`, not required): Enter the billing address for the order.
*   **Shipping Address** (`shipping_address`, `text`, not required): Enter the shipping address for the order.
*   **Order Notes** (`order_notes`, `text`, not required): Add any additional order notes.
*   **Signature 2** (`signature2`, `text`, not required): Sign the form, either by hand or digitally, to confirm the order.
*   **Signature Date** (`signature_date`, `date`, not required): Date the form to ensure accurate tracking of the order.
*   **Signature Time** (`signature_time`, `time`, not required): Time the form to ensure accurate tracking of the order.
