<thinking>
This form is intended for in-store business users to order tablets from the inventory management system. This form allows store employees to select a store name, choose the tablet model, order date, and other relevant details for each tablet order. It's essential to fill out the form correctly to ensure accurate tracking and inventory management.
</thinking>

# in_store_tablet_mount_order_form - Help Guide
## Purpose
The purpose of this form is to facilitate tablet orders for store employees, ensuring accurate inventory management and order tracking.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the **Store Name** field to choose the name of the store where the tablets will be ordered.
2. Choose the **Tablet Model** from the options provided.
3. Enter the **Order Date**, which is the date the order is placed.
4. Fill out other relevant fields as needed, such as **Customer Name**, **Customer Email**, **Customer Phone**, **Store Address**, **Customer Address**, **Mount Type**, **Quantity**, **Mount Color**, **Mount Size**, **Special Instructions**, **Store Location**, **Store Region**, **Order Note**, and **Customer Note**.
5. Select the payment method and status for the order.
6. Finally, click the submit button to complete the form.

## Field-by-Field Explanation

* **Store Name** (`store_name`, text, required): Enter the name of the store where the order is placed.
* **Tablet Model** (`tablet_model`, select_one, required): Choose the model of the tablet to be ordered.
* **Order Date** (`order_date`, date, required): Enter the date the order is placed.
* **Customer Name** (`customer_name`, text, optional): Enter the name of the customer who ordered the tablet.
* **Customer Email** (`customer_email`, email, optional): Enter the email of the customer.
* **Customer Phone** (`customer_phone`, text, optional): Enter the phone number of the customer.
* **Store Address** (`store_address`, text, optional): Enter the address of the store where the order is placed.
* **Customer Address** (`customer_address`, text, optional): Enter the address of the customer.
* **Mount Type** (`mount_type`, select_multiple, optional): Choose the type of mount for the tablet (Fixed Mount, Wall Mount, or Floor Stand).
* **Quantity** (`quantity`, number, optional): Enter the quantity of tablets to be ordered.
* **Mount Color** (`mount_color`, select_one, optional): Choose the color of the mount (Black, White, Red, or Blue).
* **Mount Size** (`mount_size`, select_one, optional): Choose the size of the mount (Small, Medium, or Large).
* **Special Instructions** (`special_instructions`, note, optional): Enter any special instructions for the order.
* **Store Location** (`store_location`, select_one, optional): Choose the location of the store (New York, California, or Florida).
* **Store Region** (`store_region`, select_one, optional): Choose the region of the store (North, South, East, or West).
* **Order Note** (`order_note`, text, optional): Enter any additional notes for the order.
* **Customer Note** (`customer_note`, text, optional): Enter any additional notes for the customer.
* **Payment Method** (`payment_method`, select_one, optional): Choose the payment method (Credit, Debit, or Cash).
* **Payment Status** (`payment_status`, select_one, optional): Choose the payment status (Pending, Approved, or Rejected).
* **Store Type** (`store_type`, select_one, optional): Choose the type of store (Retail, Online, or Wholesale).
* **Customer Type** (`customer_type`, select_one, optional): Choose the type of customer (Individual or Business).
* **Sales Channel** (`sales_channel`, select_one, optional): Choose the sales channel (Online, Phone, or In Store).
* **Sales Status** (`sales_status`, select_one, optional): Choose the sales status (Pending, Approved, or Rejected).
* **Assigned Tool** (`assigned_tool`, text, optional): Enter the tool assigned to the order.

Note: The fields marked as "required" are necessary to complete the form, while the "optional" fields are for additional information.
