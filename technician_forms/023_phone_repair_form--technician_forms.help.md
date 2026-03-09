# phone_repair_form - Help Guide
## Purpose
This form is designed for phone repair-related tasks, allowing you to report and track issues, as well as confirm service and technician involvement.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter relevant information about the customer.
2. Provide the phone's phone number.
3. Select the type of phone (e.g., iPhone, Samsung, Android).
4. Describe the issue with the phone.
5. Update the repair status (e.g., Pending, Done).
6. Confirm if the service center is involved (e.g., yes or no).
7. Confirm if a technician is involved (e.g., yes or no).
8. Enter the date of the repair (if applicable).

## Field-by-Field Explanation

* **Customer Info** (`customer_info`, text, required: false)
	+ Enter any relevant customer information, such as name, contact details, or account number.
* **Phone Number** (`phone_number`, text, required: false)
	+ Enter the phone number associated with the issue.
* **Phone Type** (`phone_type`, select_one, required: false)
	+ Select the type of phone (e.g., iPhone, Samsung, Android).
	+ Note: This field helps us understand the phone's model and operating system.
* **Issue Description** (`issue_description`, text, required: false)
	+ Provide a detailed description of the phone's issue.
* **Repair Status** (`repair_status`, select_one, required: false)
	+ Update the repair status (e.g., Pending, Done).
	+ Note: This field helps us track the status of the repair.
* **Service Center** (`service_center`, select_multiple, required: false)
	+ Confirm if the service center is involved in the repair (yes or no).
* **Technician** (`technician`, select_multiple, required: false)
	+ Confirm if a technician is involved in the repair (yes or no).
* **Date** (`date`, date, required: false)
	+ Enter the date of the repair (if applicable).
