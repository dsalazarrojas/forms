# Snack Bar Product Replenishment Order Form - Help Guide
## Purpose
This form is used by snack bar staff to submit a request for restocking specific products in the snack bar area. The goal is to maintain an adequate supply of products and prevent stockouts.

## How To Complete This Form
1.  Select the products you wish to restock from the "Restock Request" list.
2.  Enter the delivery details, including any special instructions or information about the delivery.
3.  Choose a delivery date for the restock order.
4.  Enter the shipping address, city, and state for the delivery.

## Field-by-Field Explanation
* **Restock Request** (`restock_request`, select_multiple, required: false): Select the snack bar products you would like to restock. Please choose as many or as few items as you need.
* **Delivery Details** (`delivery_details`, text, required: false): Enter any relevant details about the delivery, such as special instructions or preferences.
* **Delivery Date** (`delivery_date`, date, required: false): Choose a date for the delivery. If you leave this field blank, the system will default to the current date.
* **Shipping Address** (`shipping_address`, text, required: false): Enter the shipping address for the delivery.
* **Shipping City** (`shipping_city`, text, required: false): Enter the shipping city for the delivery.
* **Shipping State** (`shipping_state`, text, required: false): Enter the shipping state for the delivery.
Note: The shipping fields are only necessary if the delivery address is not the same as the snack bar's location.
