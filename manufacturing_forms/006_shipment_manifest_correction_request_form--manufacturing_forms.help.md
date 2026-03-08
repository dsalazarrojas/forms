# Shipment Manifest Correction Request Form - Help Guide

## Purpose
This form is used to request changes to an existing shipment manifest. A manifest is an official document that summarizes the details of a shipment, including items shipped, shipping carriers, and other relevant information. If you need to make corrections to the manifest, complete this form to request those changes. A correction can include adding or removing items, adjusting weights or quantities, or other modifications to the shipment details.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the manifest number associated with the shipment you'd like to correct.
2. Provide a brief reason for the correction, such as "Missing Item" or "Extra Item".
3. Choose the type of change you are requesting (Manual or Automated Update).
4. Enter any additional notes or comments about the correction.
5. Select any corrections you are making to the shipment (e.g., Missing Items, Extra Items, or Other).
6. Enter the name and contact information of the person making the correction request.
7. Click submit to send the form to the relevant team for review and action.

## Field-by-Field Explanation
- **Shipment Manifest Correction Request** (`shipment_manifest_correction_request_form`, text, required: false): Provide a brief description of the correction you are requesting (e.g., "Missing Item" or "Extra Item").
- **Change Reason** (`shipment_change_reason`, text, required: false): Enter a brief reason for the correction, such as "Item was not included in the original shipment".
- **Correction Request Date** (`shipment_correction_request_date`, date, required: false): Enter the date of the correction request.
- **Correction Request Time** (`shipment_correction_request_time`, time, required: false): Enter the time of the correction request.
- **Change Type** (`shipment_change_type`, select_one, required: false): Choose the type of change you are requesting (Manual or Automated Update).
- **Correction Notes** (`shipment_correction_notes`, note, required: false): Enter any additional notes or comments about the correction.
- **Shipment Manifest Number** (`shipment_manifest_number`, text, required: false): Enter the manifest number associated with the shipment.
- **Shipping Carrier** (`shipment_shipping_carrier`, text, required: false): Enter the shipping carrier associated with the shipment.
- **Shipment Shipping Line Number** (`shipment_shipping_line_number`, text, required: false): Enter the shipping line number associated with the shipment.
- **Corrections** (`shipment_corrections`, select_multiple, required: false): Select any corrections you are making to the shipment (e.g., Missing Items, Extra Items, or Other).
- **Requester's Name** (`shipment_manifest_correction_requester`, text, required: false): Enter the name of the person making the correction request.
- **Requester's Email** (`shipment_manifest_correction_requester_email`, email, required: false): Enter the email address of the person making the correction request.
- **Requester's Phone** (`shipment_manifest_correction_requester_phone`, text, required: false): Enter the phone number of the person making the correction request.
- **Requester's Notes** (`shipment_manifest_correction_requester_notes`, note, required: false): Enter any additional notes or comments about the correction request.
