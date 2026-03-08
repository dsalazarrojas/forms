# Nursing Home Complaint Form - Help Guide
## Purpose
The Nursing Home Complaint Form is used to report and document complaints made by or on behalf of residents in nursing homes. It helps to ensure that concerns and grievances are recorded and addressed in a timely and satisfactory manner.

## How To Complete This Form

1. **Select the Nursing Home**: Choose whether the complaint pertains to a nursing home or not.
2. **Is the Complainant**: Indicate if the person filing the complaint is also a resident of the nursing home or if someone else is filing on their behalf.
3. **Resident Information**: Enter the necessary details of the resident, including any identifying information, to ensure accurate representation of their case.
4. **Address of Nursing Home**: Enter the address of the nursing home in question.
5. **Date of Complaint**: Enter the date when the complaint was made or became apparent.
6. **Staff Member**: Indicate if the staff member involved was present or not.
7. **Nature of Complaint**: Describe the nature and details of the complaint in a clear and concise manner.
8. **Complaint**: Enter a detailed explanation of the complaint.
9. **Contact Number**: Enter a contact number where the complainant can be reached for further inquiry.
10. **Email**: Enter an email address where the complainant can be contacted (optional).

## Field-by-Field Explanation

* **Select the Nursing Home**: This field is used to determine if the complaint pertains to a nursing home or not.
	+ Type: `select_one`
	+ Required: False
* **Complainant**: This field is used to identify who is filing the complaint.
	+ Type: `select_multiple`
	+ Required: False
* **Resident Information**: This field captures any identifying information about the resident.
	+ Type: `text`
	+ Required: True
* **Address of Nursing Home**: This field captures the address of the nursing home in question.
	+ Type: `text`
	+ Required: True
* **Date of Complaint**: This field captures the date when the complaint was made or became apparent.
	+ Type: `date`
	+ Required: True
* **Staff Member**: This field indicates if the staff member involved was present or not.
	+ Type: `select_one`
	+ Required: False
* **Nature of Complaint**: This field captures a clear and concise description of the complaint.
	+ Type: `text`
	+ Required: True
* **Complaint**: This is the main area to enter a detailed explanation of the complaint.
	+ Type: `note`
	+ Required: True
* **Contact Number**: This field captures a contact number where the complainant can be reached.
	+ Type: `text`
	+ Required: True
* **Email**: This field captures an email address where the complainant can be contacted (optional).
	+ Type: `email`
	+ Required: False
* **Message**: This field is used to enter any additional comments or messages about the complaint.
	+ Type: `note`
	+ Required: True
