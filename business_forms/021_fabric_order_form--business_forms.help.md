<thinking>...</thinking>

This form is a comprehensive Fabric Order Form used for capturing customer details, order specifics, and shipping information. The form is designed to gather all the necessary information for processing and fulfilling fabric orders. It is essential to complete the form accurately to ensure efficient order processing.

# Fabric Order Form - Help Guide

## Purpose
The Fabric Order Form is used to capture customer information, fabric order details, and shipping information. This form helps to ensure that all the necessary details are captured for efficient order processing and delivery.

## How To Complete This Form
To complete this form, follow the steps below:

1. Fill in the "Customer Name" field with the name of the person placing the order.
2. Select the type of fabric from the "Fabric Type" dropdown menu (Cotton, Polyester, or Wool).
3. Enter the quantity of fabric ordered in the "Quantity" field.
4. Provide any additional order notes in the "Order Notes" field.
5. Enter the delivery date and time in the "Delivery Date" and "Delivery Time" fields.
6. Enter the customer's contact information (phone number and address).
7. Select the order status from the "Order Status" dropdown menu (In Progress, Completed, or Cancelled).
8. Enter the customer's email address.
9. Select the payment terms from the "Payment Terms" dropdown menu (Net 30, Net 60, or Prepay).
10. Enter the payment amount in the "Payment Amount" field.
11. Provide the customer's address and other shipping information, including city, state, zip code, and country.
12. Enter any additional ship notes in the "Ship Notes" field.

## Field-by-Field Explanation

* **Customer Name** (`customer_name`, text, required): Enter the name of the person placing the order.
* **Fabric Type** (`fabric_selection`, select_one, required): Select the type of fabric for the order (Cotton, Polyester, or Wool).
* **Quantity** (`quantity_ordered`, number, required): Enter the number of yards/meters of fabric ordered.
* **Order Notes** (`order_notes`, note, required): Provide any additional information about the order.
* **Delivery Date** (`delivery_date`, date, required): Enter the date for the delivery of the order.
* **Delivery Time** (`delivery_time`, time, required): Enter the time for the delivery of the order.
* **Customer Contact Info** (`contact_info`, text, required): Enter the customer's phone number and address.
* **Order Status** (`order_status`, select_one, required): Select the status of the order (In Progress, Completed, or Cancelled).
* **Email** (`customer_email`, email, required): Enter the customer's email address.
* **Phone** (`customer_phone`, text, required): Enter the customer's phone number.
* **Payment Terms** (`payment_terms`, select_multiple, required): Select the payment terms (Net 30, Net 60, or Prepay).
* **Payment Amount** (`payment_amount`, number, required): Enter the total payment amount.
* **Customer Address** (`customer_address`, text, required): Enter the customer's address.
* **Order Date** (`order_date`, date, required): Enter the date of the order.
* **Ship To** (`ship_to`, select_one, required): Select whether the order is for the customer or supplier.
* **Ship Address** (`ship_address`, text, required): Enter the shipping address.
* **Ship City** (`ship_city`, text, required): Enter the shipping city.
* **Ship State** (`ship_state`, text, required): Enter the shipping state.
* **Ship Zip** (`ship_zip`, text, required): Enter the shipping zip code.
* **Ship Country** (`ship_country`, text, required): Enter the shipping country.
* **Ship Notes** (`ship_note`, note, required): Enter any additional shipping notes.
* **Order Total** (`order_total`, number, required): Enter the total order amount.
