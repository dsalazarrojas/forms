<thinking>
Internal purpose of this form: 
The purpose of the "IT License Purchase Request Form" is to gather and store information about IT license purchases, including details on the type of license, purchase date, user type, and approval process. This information is collected to ensure that all IT licenses are properly recorded and approved.
To prevent duplication, only one form should be filled out per license purchase.
</thinking>

# IT License Purchase Request Form - Help Guide
## Purpose
The IT License Purchase Request Form is used to collect information about IT licenses, ensuring they are properly recorded and approved.

## How To Complete This Form
1. Fill out the form completely and accurately.
2. Use the provided fields to enter the required information about your request.

## Field-by-Field Explanation

* **Form Title** (`form_title`, text, required: false): Enter a descriptive title for your license purchase request.
* **Purchase Request ID** (`purchase_request_id`, number, required: true): Enter a unique ID for your license purchase request. This is a required field.
* **User Type** (`user_type`, select_one, required: true):
	+ Select "IT" if you are the IT department requesting the license.
	+ Select "Procurement" if you are in the procurement department requesting the license.
	+ Select "Finance" if you are in the finance department requesting the license.
* **License Type** (`license_type`, select_multiple, required: true):
	+ Select "Software" to request a software license.
	+ Select "Hardware" to request a hardware license.
	+ Select "Subscription" to request a software or service subscription.
* **Software Details** (`software_details`, text, required: false): Enter any additional software details required for the purchase.
* **Hardware Details** (`hardware_details`, text, required: false): Enter any additional hardware details required for the purchase.
* **Subscription Details** (`subscription_details`, text, required: false): Enter any additional subscription details required for the purchase.
* **Purchase Date** (`purchase_date`, date, required: true): Enter the date of the purchase.
* **Approved By** (`approved_by`, select_one, required: true):
	+ Select "IT" if you are the IT department that should approve the license.
	+ Select "Procurement" if you are in the procurement department that should approve the license.
	+ Select "Finance" if you are in the finance department that should approve the license.
* **Comments** (`comments`, text, required: false): Enter any additional comments about the license purchase.

## Tips
* Make sure to fill out the form completely and accurately.
* Only one form should be filled out per license purchase.
* If you are unsure about any of the fields, please contact your supervisor or IT department for assistance.
