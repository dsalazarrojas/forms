<thinking>
This is an internal help guide to ensure that the end users are aware of the purpose and usage of the "Shipping Manifest Check In Form". The form is used for tracking and checking in shipments. It's essential to complete this form accurately and consistently to avoid duplication and ensure that shipment status is updated correctly. Please refer to the internal business logic and procedures for more information.

</thinking>

# Shipping Manifest Check In Form - Help Guide
## Purpose
This form is used to check in shipments and update their status in the manifest. It helps ensure that all shipments are tracked and reported accurately, reducing the risk of errors or duplication of efforts.

## How To Complete This Form
1. Fill in the Shipping Number field with the unique identifier for the shipment.
2. Enter the Shipper name and contact information in the Shipper field.
3. Select the Shipment Date and Time of when the shipment was received.
4. Enter the Delivery Details, including any relevant notes or comments.
5. Enter the shipment weight and delivery address.
6. Select the Shipment Status from the options: Pending, Delivered, or In-transit.
7. Optionally, enter the Contact Phone and Contact Email for further communication.
8. Add any additional Delivery Notes for reference.

## Field-by-Field Explanation
* **Shipping Number** (`shipment_number`, text, required: false): Enter the unique identifier for the shipment. This field is not required but helps in tracking shipments.
* **Shipper** (`shipper`, text, required: false): Enter the name of the shipper or company that sent the shipment.
* **Shipment Date** (`shipment_date`, date, required: false): Select the date when the shipment was received.
* **Shipment Time** (`shipment_time`, time, required: false): Select the time when the shipment was received.
* **Delivery Details** (`delivery_details`, text, required: false): Enter any relevant details about the delivery.
* **Shipment Weight** (`shipment_weight`, number, required: false): Enter the weight of the shipment.
* **Delivery Address** (`delivery_address`, text, required: false): Enter the delivery address.
* **Shipper Name** (`shipper_name`, text, required: false): Enter the name of the shipper or company that sent the shipment.
* **Shipment Status** (`shipment_status`, select_one, required: true): Select the status of the shipment from the options: Pending, Delivered, or In-transit.
* **Contact Phone** (`contact_phone`, text, required: false): Enter the contact phone number for further communication.
* **Contact Email** (`contact_email`, email, required: false): Enter the contact email for further communication.
* **Delivery Notes** (`delivery_notes`, text, required: false): Add any additional delivery notes for reference.
