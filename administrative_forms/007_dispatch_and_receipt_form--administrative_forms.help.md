# dispatch_and_receipt_form - Help Guide
## Purpose
This form is used to track and manage dispatch and receipt information for shipments.

## How To Complete This Form
To complete this form, simply fill in the required fields with the relevant information about the shipment. Make sure to enter the correct dispatch status, dates, shipping carrier, and tracking numbers.

## Field-by-Field Explanation

* **Dispatch Details** (`dispatch_details`, text, required: false): This field is for capturing any additional details about the dispatch, such as special instructions or notes.
* **Dispatch Status** (`dispatch_status`, select_one, required: false): Choose from the options 'pending', 'shipped', or 'returned' to indicate the current status of the dispatch.
* **Receipt Details** (`receipt_details`, text, required: false): Enter any additional details about the receipt, such as any issues or concerns.
* **Dispatch Date** (`dispatch_date`, date, required: false): Enter the date the shipment was dispatched.
* **Receipt Date** (`receipt_date`, date, required: false): Enter the date the shipment was received.
* **Shipping Carrier** (`shipping_carrier`, text, required: false): Enter the name of the shipping carrier used for the shipment.
* **Shipment Number** (`shipment_number`, text, required: false): Enter the number assigned to the shipment by the shipping carrier.
* **Tracking Number** (`tracking_number`, text, required: false): Enter the tracking number assigned to the shipment by the shipping carrier.
* **Notes** (`notes`, text, required: false): Enter any additional notes or comments about the shipment.

## Tips
* Make sure to enter accurate and up-to-date information to ensure correct tracking and management of shipments.
* If the dispatch status is changed, make sure to update the corresponding receipt details accordingly.
* Use the tracking number to track the shipment's progress and resolve any issues that may arise.
