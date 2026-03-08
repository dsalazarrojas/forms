# Race Participant Packet Printing Order Form - Help Guide
## Purpose
The "Race Participant Packet Printing Order Form" is used to collect information necessary for printing participant packets for races. This form is intended for race organizers or administrators to order participant packets for their events.

## How To Complete This Form
To complete this form, simply follow the steps below:

1. Select the "Packet Type" by choosing the desired type from the available options. You can select multiple types if necessary.
2. Enter the "Order Quantity" of participant packets you need.
3. Provide "Delivery Details" for the ordered packets, if necessary.
4. Select a "Delivery Date" and "Delivery Time" for the packets.
5. Enter the "Delivery Address" where the packets should be delivered.
6. If applicable, select the "Payment Method" and enter the "Payment Gateway" and "Payment Gateway URL" and "Payment Gateway Token" for payment processing.
7. Review and submit the form to place your order.

## Field-by-Field Explanation

* **Packet Type** (`packet_type`, select_multiple, required: false): Select the type of participant packet you want to print. You can choose one or more types from the available options.
* **Order Quantity** (`order_quantity`, number, required: false): Enter the number of participant packets you need to print.
* **Delivery Details** (`delivery_details`, note, required: false): If you want to provide additional delivery instructions, enter them here. This is optional.
* **Delivery Date** (`delivery_date`, date, required: false): Enter the date you want the packets to be delivered.
* **Delivery Time** (`delivery_time`, time, required: false): Enter the time you want the packets to be delivered.
* **Delivery Address** (`delivery_address`, text, required: false): Enter the address where the packets should be delivered.
* **Payment Method** (`payment_method`, select_one, required: false): If you selected to pay for the packets, choose the payment method from the available options.
* **Payment Gateway** (`payment_gateway`, text, required: false): Enter the payment gateway used for payment processing.
* **Payment Gateway URL** (`payment_gateway_url`, text, required: false): Enter the URL of the payment gateway used for payment processing.
* **Payment Gateway Token** (`payment_gateway_token`, text, required: false): Enter the token used for payment processing.

## Tips
* Make sure to fill out all necessary fields to ensure accurate and complete ordering of participant packets.
* Double-check your selections and entries to avoid errors.
* If you are unsure about any field, refer to your race administration manual or contact the race organizers for guidance.
