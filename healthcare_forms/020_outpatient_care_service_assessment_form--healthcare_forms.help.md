</thinking>

# Outpatient Care Service Assessment Form - Help Guide

## Purpose
This form is used to assess the quality of care provided to patients in an outpatient setting. It helps healthcare providers evaluate the service they delivered and gather feedback from patients to improve future care.

## How To Complete This Form

1. Enter the title of the form in the text field at the top of the page.
2. Enter the patient's name in the field below.
3. Enter the name of the healthcare provider who delivered the care.
4. Select the date of service from the date picker.
5. Choose the type of care delivered from the dropdown menu.
6. Select the services delivered from the multiselect menu.
7. Add any additional comments about the service in the text field.
8. Rate the patient's satisfaction with the service on a scale of 1-5.
9. Rate the provider's performance on a scale of 1-5.
10. Rate the overall quality of care on a scale of 1-5.

## Field-by-Field Explanation

* **Form Title** (`form_title`, text, optional): Enter the title of the form in this field.
* **Patient Name** (`patient_name`, text, optional): Enter the name of the patient.
* **Provider Name** (`provider_name`, text, optional): Enter the name of the healthcare provider.
* **Date of Service** (`date_of_service`, date, optional): Select the date the care was delivered.
* **Type of Care** (`type_of_care`, select_one, optional):
	+ Select the type of care delivered from the dropdown menu.
* **Services Delivered** (`care_delivered`, select_multiple, optional):
	+ Select the services delivered from the multiselect menu.
* **Comments** (`comments`, note, optional): Add any additional comments about the service.
* **Patient Rating** (`patient_rating`, number, optional): Rate the patient's satisfaction with the service on a scale of 1-5.
* **Provider Rating** (`provider_rating`, number, optional): Rate the provider's performance on a scale of 1-5.
* **Overall Rating** (`overall_rating`, number, optional): Rate the overall quality of care on a scale of 1-5.
