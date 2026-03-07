<thinking>
We're creating a user-facing help guide for the "shipping_load_report_form" form. This form is used to report on shipments, providing a structured way to capture information about the pickup and delivery details of a shipment. The form is likely used by logistics and transportation teams to track and manage shipments, ensuring accurate and efficient processing.

To ensure the form is completed correctly, we should consider the following:

* The form should only be used for reporting on shipments that have already occurred or are planned to occur.
* The form should not be used for creating new shipments.
* All fields should be completed with accurate and relevant information to ensure correct tracking and management of shipments.

This form consists of several fields, each designed to capture specific information about the shipment. We'll break down each field below, explaining its purpose and how it should be completed.

</thinking>

# shipping_load_report_form - Help Guide
## Purpose
This form is used to report on shipments, providing a structured way to capture information about the pickup and delivery details of a shipment.

## How To Complete This Form

To complete this form, follow these steps:

1. Enter the **pickup location** in the "pickup_location" field, describing the exact location where the shipment was picked up or is scheduled to be picked up.
2. Provide a brief description of the **shipment details** in the "shipment_details" field, including any relevant information about the shipment, such as the items being transported or any special handling instructions.
3. Enter the **delivery address** in the "delivery_address" field, describing the exact location where the shipment was delivered or is scheduled to be delivered.
4. Enter the **shipment date** in the "shipment_date" field, using the date format MM/DD/YYYY.
5. Enter the **shipment time** in the "shipment_time" field, using the time format HH:MM AM/PM.
6. Enter the **carrier name** in the "carrier_name" field, describing the carrier or company responsible for the shipment.
7. Enter the **delivery date** in the "delivery_date" field, using the date format MM/DD/YYYY.
8. Enter the **delivery time** in the "delivery_time" field, using the time format HH:MM AM/PM.
9. Select the **shipment status** from the dropdown menu, indicating the current status of the shipment, such as "Active" or "Inactive".
10. Enter any **shipment note** in the "shipment_note" field, providing any additional information about the shipment.

## Field-by-Field Explanation

* **pickup_location** (`pickup_location`, text, required: false):
	+ This field captures the exact location where the shipment was picked up or is scheduled to be picked up.
* **shipment_details** (`shipment_details`, text, required: false):
	+ This field provides a brief description of the shipment, including any relevant information about the items being transported or special handling instructions.
* **delivery_address** (`delivery_address`, text, required: false):
	+ This field captures the exact location where the shipment was delivered or is scheduled to be delivered.
* **shipment_date** (`shipment_date`, date, required: false):
	+ This field is used to enter the date of shipment, in the format MM/DD/YYYY.
* **shipment_time** (`shipment_time`, time, required: false):
	+ This field is used to enter the time of shipment, in the format HH:MM AM/PM.
* **carrier_name** (`carrier_name`, text, required: false):
	+ This field captures the name of the carrier or company responsible for the shipment.
* **delivery_date** (`delivery_date`, date, required: false):
	+ This field is used to enter the date of delivery, in the format MM/DD/YYYY.
* **delivery_time** (`delivery_time`, time, required: false):
	+ This field is used to enter the time of delivery, in the format HH:MM AM/PM.
* **shipment_status** (`shipment_status`, select_one, required: false):
	+ This field is used to select the current status of the shipment, such as "Active" or "Inactive".
* **shipment_note** (`shipment_note`, note, required: false):
	+ This field provides any additional information about the shipment, such as notes or comments.
