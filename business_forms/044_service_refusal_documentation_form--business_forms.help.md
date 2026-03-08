# Service Refusal Documentation Form - Help Guide
## Purpose
The Service Refusal Documentation Form is designed to document a service refusal, which can occur due to various reasons. By filling out this form, you'll be able to record the essential details of the refusal, including the reason, staff confirmation, and any relevant context.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the correct reason for the service refusal from the "Reason" dropdown menu.
2. Provide a clear description of the service refusal in the "Details" field.
3. Indicate whether staff has confirmed the service refusal.
4. Enter the date and time of the service refusal in the "Date" and "Time" fields, respectively.
5. Add any additional notes or comments about the service refusal in the "Notes" field.
6. If applicable, provide contact details of the person who refused the service in the "Contact Details" field.

## Field-by-Field Explanation

* **Service Refusal** (`service_refusal`, text, optional): Enter a brief description of the service refusal.
* **Reason** (`reason`, select_one, optional): Select the reason for the service refusal from the dropdown menu:
	+ Staff Refusal
	+ Customer Refusal
	+ External Refusal
	+ Internal Refusal
	+ Other
* **Details** (`details`, text, optional): Provide a clear description of the service refusal.
* **Staff Confirmed** (`staff_confirmed`, select_multiple, optional): Indicate whether staff has confirmed the service refusal:
	+ Yes
	+ No
* **Date** (`date`, date, optional): Enter the date of the service refusal.
* **Time** (`time`, time, optional): Enter the time of the service refusal.
* **Notes** (`notes`, note, optional): Add any additional notes or comments about the service refusal.
* **Contact Details** (`contact_details`, text, optional): If the service refusal was declined by someone else, provide their contact details.

## Tips

* Be clear and concise when describing the service refusal in the "Details" field.
* Ensure the staff confirmation matches your understanding of the service refusal situation.
* If providing contact details, make sure to include all relevant information, such as name, phone number, and email.
* This form is for documentation purposes only, so ensure you provide accurate and complete information to avoid any confusion or misunderstandings.
