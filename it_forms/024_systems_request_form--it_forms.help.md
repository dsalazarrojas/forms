# Systems Request Form - Help Guide
## Purpose
This form is used to collect and track customer requests for systems changes, maintenance, or other tasks. It is designed to help the requesting department process and manage these requests efficiently.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill out the form accurately and completely with the requested information.
2. Make sure to select the correct systems impacted by your request.
3. Provide a clear and concise description of the change or request.
4. If applicable, select the priority and impact type of your request.
5. List any customer requestors and change requestors involved in the request.

## Field-by-Field Explanation
### 1. Customer Name
* **Customer Name** (`customer_name`, text, required): Enter the name of the customer requesting the change.
### 2. Systems Impact
* **Systems Impact** (`systems_impact`, text, required): Describe the systems that will be impacted by the change.
### 3. Description
* **Description** (`description`, text, required): Provide a clear and concise explanation of the change or request.
### 4. Request Date
* **Request Date** (`request_date`, date, required): Enter the date the request was made.
### 5. Priority
* **Priority** (`priority`, select_one, required): Select the priority level of your request:
	+ Critical
	+ High
	+ Medium
	+ Low
### 6. Systems Impacted
* **Systems Impacted** (`systems_impacted`, select_multiple, required): Select the systems that will be impacted by the change:
	+ Network
	+ Computer
	+ Other
### 7. Impact Type
* **Impact Type** (`impact_type`, select_one, required): Select the type of impact:
	+ Urgent
	+ Scheduled
	+ Unscheduled
### 8. Customer Requestors
* **Customer Requestors** (`customer_requestors`, text, required): List the customers requesting the change.
### 9. Change Requestors
* **Change Requestors** (`change_requestors`, text, required): List the change requestors involved in the request.
### 10. Change Type
* **Change Type** (`change_type`, select_one, required): Select the type of change:
	+ Hardware
	+ Software
	+ Other
### 11. Location
* **Location** (`location`, text, required): Enter the location where the change will take place.
### 12. Contact Information
* **Contact Information** (`contact_information`, text, required): Enter any relevant contact information for the customer or requestor.
### 13. Systems Requesting
* **Systems Requesting** (`systems_requesting`, text, required): Enter the systems or personnel requesting the change.
### 14. Systems Requesting Date
* **Systems Requesting Date** (`systems_requesting_date`, date, required): Enter the date the change request was made.
### 15. Systems Returning Date
* **Systems Returning Date** (`systems_returning_date`, date, required): Enter the date the systems are expected to return.

## Tips
- Make sure to fill out the form completely and accurately to ensure that the request is processed efficiently.
- Review the form before submitting to ensure that all necessary information is included.
- If you are unsure about any field, please contact the requestor or your supervisor for clarification.
