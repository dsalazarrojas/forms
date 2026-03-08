# Shipment Preparation Checklist Form - Help Guide
## Purpose

The Shipment Preparation Checklist Form is used to prepare and document shipment details for tracking and record-keeping purposes within an organizational setting.

## How To Complete This Form

To complete this form, follow the steps below:

1. Select the preparer who is responsible for preparing the shipment.
2. Enter details about the shipment, such as product information and shipping methods.
3. Specify the warehouse status, indicating if the shipment is ready for dispatch or has been shipped.
4. Provide shipping documentation as required.
5. Enter contact information for the shipping contact person.
6. Enter a tracking number for the shipment.
7. Enter the ship date and time.
8. Add any additional notes or comments about the shipment.

## Field-by-Field Explanation

* **Shipment Preparer** (`shipping_form`, `select_one`, required): Select the person or team responsible for preparing the shipment.
* **Shipment Details** (`shipment_details`, `text`, required): Enter a description of the shipment, including its purpose and any relevant details.
* **Product Info** (`product_info`, `number`, optional): Enter the product or item being shipped.
* **Shipping Info** (`shipping_info`, `select_multiple`, optional): Choose the shipping method, such as Ground, Express, or Air.
* **Warehouse Info** (`warehouse_info`, `select_one`, optional): Specify if the shipment is ready for dispatch or has been shipped.
* **Shipping Documentation** (`shipping_documentation`, `text`, optional): Provide any necessary shipping documentation, such as customs forms or delivery receipts.
* **Shipping Contact** (`shipping_contact`, `note`, optional): Enter contact information for the shipping contact person.
* **Tracking Number** (`tracking_number`, `text`, optional): Enter a tracking number for the shipment.
* **Ship Date** (`ship_date`, `date`, optional): Enter the date the shipment is being prepared for dispatch.
* **Ship Time** (`ship_time`, `time`, optional): Enter the time the shipment is being prepared for dispatch.
* **Ship Note** (`ship_note`, `note`, optional): Add any additional notes or comments about the shipment.
* **Ship Phone** (`ship_phone`, `text`, optional): Enter the contact phone number for the shipping contact person.
