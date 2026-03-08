# Shipping Manifest Check In Form - Help Guide

## Purpose
The Shipping Manifest Check In Form is used to update the status of a shipment with a manifest, ensuring that it is accurately reflected in the system. This form is a crucial part of the shipping process, as it allows staff to track and manage shipments efficiently.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the "Ship Manifest" field with the manifest number or ID.
2. Select the "Date" field to enter the date of shipment arrival.
3. Select the "Time" field to enter the time of shipment arrival.
4. Choose the carrier that delivered the shipment.
5. Select the "Shipper" field to choose the person responsible for the shipment.
6. Enter any additional information regarding the order in the "Order" field.
7. Select the "Ship Date" field to enter the date the shipment was shipped.
8. Select the "Ship Time" field to enter the time the shipment was shipped.
9. Choose the status of the shipment from the "Manifest Status" options.
10. Enter any comments or notes regarding the shipment in the "Comments" field.

## Field-by-Field Explanation

* **Ship Manifest** (`manifest_form`, text, required): Enter the manifest number or ID of the shipment.
* **Date** (`manifest_date`, date, required): Enter the date the shipment arrived.
* **Time** (`manifest_time`, time, required): Enter the time the shipment arrived.
* **Carrier** (`carrier_form`, select_one, required): Choose the carrier that delivered the shipment (e.g., Fedex, UPS, USPS).
* **Shipper** (`shipper_form`, select_multiple, required): Choose the person responsible for the shipment (e.g., John, Jane, Joe).
* **Order** (`order_form`, text, required): Enter any additional information regarding the order.
* **Ship Date** (`ship_date`, date, required): Enter the date the shipment was shipped.
* **Ship Time** (`ship_time`, time, required): Enter the time the shipment was shipped.
* **Manifest Status** (`manifest_status`, select_one, required): Choose the status of the shipment (e.g., pending, received, delivered).
* **Comments** (`comments`, text, optional): Enter any comments or notes regarding the shipment.
