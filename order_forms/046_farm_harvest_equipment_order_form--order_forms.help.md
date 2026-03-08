# farm_harvest_equipment_order_form - Help Guide
## Purpose
The farm_harvest_equipment_order_form is used by farmers to order and manage their equipment purchases from a cooperative.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your customer name in the "customer_name" field.
2. Select the date of your order in the "order_date" field.
3. Choose the type of equipment you are ordering in the "equipment_type" field.
4. Enter your delivery address in the "delivery_address" field.
5. Specify the time of delivery in the "delivery_time" field.
6. Select the delivery method from the available options (Farm, Co-op, or Supplier).
7. Enter your email address (if applicable) in the "email" field.
8. Enter your phone number (if applicable) in the "phone" field.
9. Enter the total amount of your order in the "order_total" field.
10. Choose your preferred payment method from the available options (Online Payment, Offline Payment, or Bank Transfer).
11. Enter the payment terms in the "payment_terms" field.
12. Add any additional notes about your order in the "additional_notes" field (if applicable).

## Field-by-Field Explanation

* **Customer Name** (`customer_name`, text, required):
	+ Enter your name as a customer.
* **Order Date** (`order_date`, date, required):
	+ Select the date when you plan to make the order.
* **Equipment Type** (`equipment_type`, text, required):
	+ Choose the type of equipment you are ordering (e.g. tractors, harvesters, etc.).
* **Delivery Address** (`delivery_address`, text, required):
	+ Enter the address where you would like to receive the equipment delivery.
* **Delivery Time** (`delivery_time`, time, required):
	+ Specify the time when you would like to receive the delivery.
* **Delivery Method** (`delivery_method`, select_one, required):
	+ Select the method of delivery (Farm, Co-op, or Supplier).
* **Email** (`email`, email, optional):
	+ Enter your email address (if you would like to receive updates about your order).
* **Phone** (`phone`, text, optional):
	+ Enter your phone number (if you would like to receive updates about your order).
* **Order Total** (`order_total`, number, required):
	+ Enter the total amount of your order.
* **Payment Method** (`payment_method`, select_one, required):
	+ Choose your preferred payment method (Online Payment, Offline Payment, or Bank Transfer).
* **Payment Terms** (`payment_terms`, date, required):
	+ Enter the payment terms (e.g. payment due date, etc.).
* **Additional Notes** (`additional_notes`, note, optional):
	+ Add any additional notes about your order (e.g. special instructions, etc.).
