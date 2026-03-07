# Hospice Medical Equipment Order Form - Help Guide

## Purpose
The Hospice Medical Equipment Order Form is a tool used to order medical equipment for patients in a hospice care setting. This form helps healthcare providers gather necessary information for the ordering process, ensuring accurate and timely delivery of equipment to patients.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the patient's information on the "Patient Info" page.
2. Select the type of medical equipment needed on the "Medical Equipment" page.
3. Provide additional order details on the "Order Details" page.
4. Choose the status of the order on the "Order Status" page.
5. Select any relevant medical conditions on the "Medical Condition" page.
6. Sign the form to confirm the order on the "Signature" page.
7. Date and time of the order on the "Date Ordered" page.

## Field-by-Field Explanation
* **Patient Info** (`patient_info`, text, optional): Enter the patient's personal and medical information.
* **Medical Equipment** (`medical_equipment`, text, optional): Specify the type of medical equipment needed, such as oxygen tanks or wheelchairs.
* **Order Details** (`order_details`, text, optional): Provide any additional information about the order, including quantities or specifications.
* **Signature** (`signature`, select_one, optional):
	+ Label 1: Select this option to indicate that the form has been reviewed and signed by the healthcare provider.
	+ Label 2: Select this option to indicate that the form has been reviewed and signed by someone else (e.g., family member or caregiver).
	+ Label 3: Select this option to indicate that the form has not been signed yet.
* **Order Status** (`order_status`, select_one, optional):
	+ Label 1: Select this option to indicate that the order is pending.
	+ Label 2: Select this option to indicate that the order is processed.
	+ Label 3: Select this option to indicate that the order is cancelled.
* **Medical Condition** (`medical_condition`, select_multiple, optional):
	+ Label 1: Select this option if the patient has a specific medical condition.
	+ Label 2: Select this option if the patient has another specific medical condition.
	+ Label 3: Select this option if the patient has no medical conditions.
* **Date Ordered** (`date_ordered`, date, optional): Enter the date and time of the order.
