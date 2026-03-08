# Shipment Status Monitoring Form - Help Guide
## Purpose
The Shipment Status Monitoring Form is used to track and monitor the status of shipments. This form helps logistics teams to keep up to date information about the current status of shipments, enabling them to make informed decisions about shipment updates and communications.

## How To Complete This Form
To fill out this form, follow these steps:

1. Select the shipment status from the "Shipment Status" dropdown menu to indicate whether the shipment is Active or Inactive.
2. Enter the Shipment ID, a unique identifier for the shipment.
3. Enter the Order ID, the identifier for the order associated with the shipment.
4. Enter the Customer Name, a text field for entering the customer's name.
5. Select a date for the Shipment Date using the date picker.
6. Select a time for the Shipment Time using the time picker.
7. Enter any additional Status Notes about the shipment status.
8. Enter the Email Address of the customer or contact person.
9. Enter the Phone Number of the customer or contact person.
10. Select whether the shipment is assigned to a user by entering "Yes" or "No" in the Assigned User field.

## Field-by-Field Explanation

* **Shipment Status** (`shipment_status`, select_multiple, required: false): This field allows you to select the current status of the shipment from the options "Active" and "Inactive".
* **Shipment ID** (`shipment_id`, number, required: false): A unique identifier for the shipment.
* **Order ID** (`order_id`, number, required: false): The identifier for the order associated with the shipment.
* **Customer Name** (`customer_name`, text, required: false): A text field to enter the customer's name.
* **Shipment Date** (`shipment_date`, date, required: false): A date picker to select the shipment date.
* **Shipment Time** (`shipment_time`, time, required: false): A time picker to select the shipment time.
* **Status Notes** (`status_notes`, note, required: false): Additional notes about the shipment status.
* **Email Address** (`email_address`, email, required: false): The email address of the customer or contact person.
* **Phone Number** (`phone_number`, text, required: false): The phone number of the customer or contact person.
* **Assigned User** (`assigned_user`, select_one, required: false): Whether the shipment is assigned to a user or not, enter "Yes" or "No" in this field.
