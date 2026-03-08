# key_receipt_acknowledgement_form - Help Guide
## Purpose
The key_receipt_acknowledgement_form is used to document and acknowledge receipt of a property key. This form captures essential information such as the key's condition, the date it was received, and any additional notes about the key or its handling.

## How To Complete This Form
To complete the form, follow these steps:
1. **Key Received Date**: Enter the date when the key was received by selecting or typing the date in the format YYYY-MM-DD.
2. **Key Number**: Type or enter the unique identifier or number of the key being acknowledged.
3. **Key Received By**: Enter the name of the person who received the key.
4. **Key Type**: Select the type of key from the provided options (e.g., "None", "Other" - use this option if the key type doesn't match any of the listed options).
5. **Key Condition**: Describe the condition of the key (e.g., new, used, damaged).
6. **Key Status**: Select the status of the key (e.g., "None", "Other" - use this option if the key status doesn't match any of the listed options).
7. **Additional Notes**: Enter any additional comments or notes you may have regarding the key.
8. **Client Signature**: Include the client's signature, indicating that they have acknowledged receipt of the key.

## Field-by-Field Explanation
* **Client Name** (`client_name`, text, optional): The name of the client who is receiving the key. This is an optional field but is useful for reference or documentation purposes.
* **Key Received Date** (`key_received_date`, date, optional): The date on which the key was received, captured for record-keeping and reference.
* **Key Number** (`key_number`, text, optional): A unique identifier or number for the key, used for tracking and inventory management.
* **Key Received By** (`key_received_by`, text, optional): The name of the person or entity that received the key, important for accountability and record-keeping.
* **Key Type** (`key_type`, select_one, optional): The type of key (e.g., house key, car key, etc. - use "Other" if it doesn't match the provided options).
* **Key Condition** (`key_condition`, text, optional): A description of the key's condition upon receipt (e.g., new, used, damaged).
* **Key Status** (`key_status`, select_one, optional): The status of the key (e.g., active, inactive, pending - use "Other" if it doesn't match the provided options).
* **Additional Notes** (`additional_notes`, note, optional): A field for entering any additional comments or notes about the key's receipt or handling.
* **Client Signature** (`client_signature`, note, optional): The client's signature, acknowledging receipt of the key, which is important for documentation and proof of acknowledgment.
