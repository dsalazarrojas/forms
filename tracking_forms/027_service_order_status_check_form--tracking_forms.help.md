# Service Order Status Check Form - Help Guide
## Purpose

The Service Order Status Check Form is designed to let you check the status of a service order. Enter your details to see where your order stands.

## How To Complete This Form

1. Fill out the required fields: Service Order Status, Service Type, and Status fields.
2. Enter your Order Number, Customer Name, and Order Date to help the system identify your service order.
3. You can choose multiple Service Types if applicable.
4. Select your email to receive updates on your service order status.
5. Click submit to view the status of your service order.

## Field-by-Field Explanation

* **Service Order Status** (`service_order_status`, text, required): Enter the current status of your service order.
* **Customer Name** (`customer_name`, text, optional): Enter the name of the customer who ordered the service.
* **Order Number** (`order_number`, text, optional): Enter the number assigned to your service order.
* **Order Date** (`order_date`, date, optional): Enter the date when the service order was placed.
* **Status** (`status`, select_one, required): Select the current status of your service order from the options: Open, In Progress, or Closed.
* **Service Type** (`service_type`, select_multiple, required): Select the type(s) of service associated with your order from the options: A, B, or C.
* **Email** (`email`, email, optional): Enter your email address to receive updates on your service order status.

## Tips

* Make sure to fill out all required fields to ensure accurate results.
* If you have multiple service orders, fill out a new form for each order.
* If you are unsure about any field, contact our support team for assistance.
