# customs_declaration_release_form - Help Guide

## Purpose
The "customs_declaration_release_form" is used to collect information about the release of shipments from customs. This form ensures that the required data is accurately collected and properly recorded.

## How To Complete This Form

1. To complete this form, simply fill in the required fields with the relevant information.
2. Start with the "Shipment Details" page, which requires the basic details about the shipment.
3. Next, move to the "Shipper Details" page, where you'll need to provide contact information and any other relevant details about the shipper.
4. On the third page, you'll find a list of "Customs Officials" where you can add any additional comments or notes.
5. The "Shipment Status" page allows you to select the current status of the shipment.
6. You can add any additional "Notes" or comments on the next page.
7. Finally, provide your "Email" and "Phone" contact information, and select the "Date" and "Time" of the release.

## Field-by-Field Explanation

* **Shipment Details** (`shipment_details`, text, required: false): This field is used to provide basic details about the shipment.
* **Shipper Details** (`shipper_details`, text, required: false): This field is used to provide contact information and details about the shipper.
* **Customs Officials** (`customs_officials`, text, required: false): Add any additional comments or notes about the customs officials handling the shipment.
* **Shipment Status** (`shipment_status`, select_one, required: false):
	+ "in transit"
	+ "delivered"
	+ "customs cleared"
* **Notes** (`notes`, note, required: false): Add any additional comments or notes about the shipment.
* **Email** (`email`, email, required: false): Provide your email address for contact purposes.
* **Phone** (`phone`, text, required: false): Provide your phone number for contact purposes.
* **Date** (`date`, date, required: false): Select the date of the shipment release.
* **Time** (`time`, time, required: false): Select the time of the shipment release.

## Tips

* Make sure to fill in all required fields to ensure accurate submission.
* Double-check the "Shipment Status" to reflect the current status of the shipment.
* Use the "Notes" field to add any additional comments or notes about the shipment.
* Ensure that your contact information (Email and Phone) is up-to-date and accurate.
