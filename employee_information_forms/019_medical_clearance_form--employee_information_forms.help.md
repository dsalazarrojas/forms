# Medical Clearance Form - Help Guide
## Purpose
The Medical Clearance Form is designed to gather information about an employee's health status, including any medical conditions, clearance type, and details about their medical clearance. This form is essential for ensuring the employee's safety and well-being in the workplace.

## How To Complete This Form
To complete this form, follow these steps:

1.  Fill in the required fields with accurate and up-to-date information.
2.  Select the clearance type from the options provided.
3.  Provide details about your medical clearance, if applicable.
4.  Enter your signature to confirm that the information provided is accurate.
5.  Fill in the healthcare provider's details if applicable.

## Field-by-Field Explanation

* **Employee Medical Info** (`employee_medical_info`, text, required: false)
	+ This field is for providing any general information about your medical condition or status.
* **Health Issues** (`employee_health_issues`, text, required: false)
	+ Describe any health issues you are currently experiencing or have experienced in the past.
* **Clearance Type** (`clearance_type`, select_one, required: false)
	+ Select the type of clearance you require, such as Cancer, Allergy, or Injury.
* **Medical Clearance** (`medical_clearance`, number, required: false)
	+ This field is not clearly described, but it seems to be related to the employee's medical clearance status, which may be a numerical value.
* **Medical Clearance Date** (`medical_clearance_date`, date, required: false)
	+ Enter the date when you received your medical clearance, if applicable.
* **Medical Clearance By** (`medical_clearance_by`, select_one, required: false)
	+ Select who granted your medical clearance, such as a Doctor, Nurse, or Other.
* **Medical Clearance Details** (`medical_clearance_details`, text, required: false)
	+ Provide any additional information about your medical clearance.
* **Employee Signature** (`employee_signature`, text, required: false)
	+ This field is for the employee to sign to confirm that the information provided is accurate.
* **Healthcare Provider Name** (`healthcare_provider_name`, text, required: false)
	+ Enter the name of your healthcare provider, if you received your medical clearance from a healthcare professional.
* **Healthcare Provider Title** (`healthcare_provider_title`, text, required: false)
	+ Enter the title of your healthcare provider, if applicable.
* **Healthcare Provider Phone** (`healthcare_provider_phone`, text, required: false)
	+ Enter the contact number of your healthcare provider, if applicable.
* **Healthcare Provider Email** (`healthcare_provider_email`, email, required: false)
	+ Enter the email of your healthcare provider, if applicable.
