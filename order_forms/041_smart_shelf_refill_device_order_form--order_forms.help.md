# Smart Shelf Refill Device Order Form - Help Guide
## Purpose
This form is used by the customer service team to order a refills for a smart shelf device. It requires the customer's contact information, device details, and order specifics.

## How To Complete This Form

1.  Fill in all the required fields with accurate information.
2.  Use the provided options for select fields such as "Operation" and "Delivery Method" to select the relevant option.
3.  Ensure to include all the required information in the "Delivery Address", "Customer Address", and "Customer Notes" fields.

## Field-by-Field Explanation

*   **First Name** (`first_name`, text, required): This is the customer's first name.
*   **Last Name** (`last_name`, text, required): This is the customer's last name.
*   **Phone** (`phone`, text, required): This is the customer's phone number.
*   **Email** (`email`, email, required): This is the customer's email address.
*   **Device Order Date** (`device_order_date`, date, optional): This is the date when the device needs to be ordered.
*   **Device Order Time** (`device_order_time`, time, optional): This is the time when the device needs to be ordered.
*   **Quantity** (`quantity`, number, required): This is the quantity of the device to be ordered.
*   **Operation** (`operation`, select_one, required): This field is used to denote which department or team member is responsible for handling the order. It is likely intended to be one of the following: Operations Manager, Store Manager, Inventory Manager, Warehouse Manager, Delivery Manager, or Other.
*   **Delivery Method** (`delivery_method`, select_multiple, required): This is the method of delivery of the device. Options include Standard Delivery, Express Delivery, and Same Day Delivery.
*   **Delivery Address** (`delivery_address`, text, required): This is the address where the device needs to be delivered.
*   **Delivery Date** (`delivery_date`, date, optional): This is the date when the device needs to be delivered.
*   **Delivery Time** (`delivery_time`, time, optional): This is the time when the device needs to be delivered.
*   **Delivery Status** (`delivery_status`, select_one, required): This is the status of the delivery. It is likely intended to be one of the following: Awaiting, In Progress, or Completed.
*   **Delivery Notes** (`delivery_notes`, note, optional): This is any additional notes regarding the delivery.
*   **Customer Name** (`customer_name`, text, required): This is the customer's name.
*   **Customer Email** (`customer_email`, email, required): This is the customer's email address.
*   **Customer Phone** (`customer_phone`, text, required): This is the customer's phone number.
*   **Customer Notes** (`customer_notes`, note, optional): This is any additional notes regarding the customer.
*   **Customer Address** (`customer_address`, text, required): This is the customer's address.
*   **Customer City** (`customer_city`, text, required): This is the customer's city.
*   **Customer State** (`customer_state`, text, required): This is the customer's state.
*   **Customer Zip** (`customer_zip`, text, required): This is the customer's zip code.
*   **Device Serial Number** (`device_serial_number`, text, required): This is the serial number of the device to be ordered.
*   **Order ID** (`order_id`, text, required): This is the unique identifier for the order.

## Tips

*   Please ensure to fill in all the required fields before submitting the form.
*   Use the provided options for select fields carefully to ensure accurate information.
*   Double-check the information in the "Delivery Address", "Customer Address", and "Customer Notes" fields for accuracy.
