# Medical Lab Access Form - Help Guide

## Purpose
The Medical Lab Access Form is used to access medical lab services. It is designed to gather necessary information for administrative purposes.

## How To Complete This Form
To complete this form, please follow these steps:

1. Select your access level: Choose the level of access you require.
2. Provide your reason for access: Explain why you need access to the lab services.
3. Select your preferred location: Choose where you would like to access the lab services.
4. Select your medical supervisor: Choose the medical supervisor that will be responsible for your care.
5. Provide emergency contact information: Enter the contact information for the emergency contact person.

## Field-by-Field Explanation

* **User Name** (`user_name`, text, optional): Your name.
* **Access Level** (`access_level`, select_one, required): Choose the level of access you require:
	+ Authorized Staff
	+ Healthcare Providers
	+ Emergency Access
* **Reason For Access** (`reason_for_access`, text, optional): Explain why you need access to the lab services.
* **User ID** (`user_id`, number, optional): Your ID number.
* **Department** (`department`, select_multiple, optional): Choose the department you would like to access:
	+ Lab
	+ Pharmacy
	+ Radiology
* **Date** (`date`, date, optional): The date of your access request.
* **Time** (`time`, time, optional): The time of your access request.
* **Location** (`location`, select_one, required): Choose the location where you would like to access the lab services:
	+ Central Lab
	+ Satellite Lab
	+ Other
* **Medical Supervisor** (`medical_supervisor`, select_multiple, required): Choose the medical supervisor that will be responsible for your care:
	+ Dr. Smith
	+ Dr. Johnson
	+ Dr. Wilson
* **Emergency Contact** (`emergency_contact`, text, optional): Enter the contact information for the emergency contact person.
* **Contact Phone** (`contact_phone`, text, optional): Enter the phone number for the emergency contact person.

## Tips
* Please ensure you have the necessary credentials and access level to access the lab services.
* If you are already a healthcare provider, you may not need to fill out this form.
* If you have any questions or concerns, please contact the lab administration.
