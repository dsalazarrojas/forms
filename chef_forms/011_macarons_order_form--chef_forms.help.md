# macarons_order_form - Help Guide
## Purpose
This form is used to place an order for macarons. It captures essential information to complete the order, including customer details, order specifics, and delivery details.

## How To Complete This Form
1. Fill in the customer's name in the "customer-name" field.
2. Select the type of macaron you would like to order from the "macaron-type" dropdown list.
3. Enter the count of macarons you would like to order in the "macarons-count" field.
4. Enter your email address in the "email" field.
5. Enter the time of your order in the "order-time" field.
6. Enter the delivery date for your order in the "delivery-date" field.
7. Enter the time of delivery for your order in the "delivery-time" field.
8. Review and complete any additional notes or comments in the "order-notes" and "delivery-notes" fields, if applicable.
9. Click the "submit" button to complete the form and place your order.

## Field-by-Field Explanation

* **customer-name** (`customer_name`, text, required): Please enter the customer's name.
* **macaron-type** (`macaron_type`, select_one, required): Choose the type of macaron you would like to order.
* **macarons-count** (`macarons_count`, number, required): Enter the number of macarons you would like to order.
* **email** (`email`, email, required): Enter your email address.
* **phone** (`phone`, text, optional): Enter your phone number (optional).
* **order-notes** (`order_notes`, text, optional): Add any additional notes or comments about your order.
* **order-date** (`order_date`, date, required): Enter the date of your order.
* **order-time** (`order_time`, time, required): Enter the time of your order.
* **delivery-date** (`delivery_date`, date, required): Enter the date of delivery.
* **delivery-time** (`delivery_time`, time, required): Enter the time of delivery.
* **delivery-notes** (`order_note`, text, optional): Add any additional delivery notes or comments.
* **macaron-cost-total** (`macaron_cost_total`, number, required): Enter the total cost of the macarons.
* **macaron-total** (`macaron_total`, number, required): Enter the total number of macarons.
* **macaron-cost-2** (`macaron_cost_2`, number, optional): Enter the cost of additional macarons (if applicable).
* **macaron-count-2** (`macaron_count_2`, number, optional): Enter the number of additional macarons (if applicable). 

This help guide is designed to be concise and easy to follow, providing clear instructions and field explanations for a smooth and stress-free user experience.
