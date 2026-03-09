# Freight Claim Form - Help Guide
## Purpose
This form is used to submit claims for lost or damaged shipments. It is intended for shipper employees to report incidents of lost or damaged goods.
## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the necessary information about the shipment.
2. Select the carrier used for the shipment.
3. Enter the claim amount.
4. Enter the name of the shipper.
5. Enter the shipper's address.
6. Choose a category for the claim (Transportation Request Forms or Claim Forms).
7. Select the person who submitted the claim (Jimmy or Other).
8. Add any additional notes about the claim.

## Field-by-Field Explanation
* **Shipment Number** (`shipment_number`, text, required: false): Enter the unique identifier for the shipment.
* **Carrier** (`carrier_name`, select_one, required: false): Select the carrier used for the shipment (e.g. UPS, FedEx, DHL).
* **Claim Amount** (`claim_amount`, number, required: false): Enter the amount of the claim.
* **Shipper** (`shipper_name`, text, required: false): Enter the name of the shipper who submitted the claim.
* **Shipper Address** (`shipper_address`, text, required: false): Enter the shipper's address.
* **Claim Date** (`claim_date`, date, required: false): Enter the date of the claim.
* **Description** (`description`, text, required: false): Provide a brief description of the incident.
* **Assigned Tool** (`assigned_tool`, text, required: false): Assign a specific tool for handling the claim.
* **Category** (`category`, select_multiple, required: false): Select one or more category for the claim (e.g. Transportation Request Forms or Claim Forms).
* **Submitted By** (`submitted_by`, select_one, required: true): Select the person who submitted the claim (Jimmy or Other).
* **Notes** (`notes`, note, required: false): Add any additional notes about the claim.
