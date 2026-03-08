# Visit Appointment Form - Help Guide
## Purpose
This form is used to collect information from patients about their upcoming visit, including the visit details and their contact information.

## How To Complete This Form
To complete this form, follow these steps:
1. Provide a brief description of your visit, including the date, time, and location. (visit_details field)
2. Indicate if this is a new or returning visit. (purpose field)
3. If you selected "Yes" for "New Visit", provide a description of the purpose of your visit in the text box. (purpose_other field)
4. Choose a scheduled time for your visit. (schedule field)
5. Enter your contact information so we can get in touch with you. (customer_contact field)
6. Provide any additional details about your visit. (customer_details field)

## Field-by-Field Explanation
* **visit_details** (`visit_details`, text, required: false): Enter a brief description of your visit, including the date, time, and location.
* **purpose** (`purpose`, select_one, required: false): Indicate if this is a new or returning visit.
	+ Select "Yes" if this is a new visit.
	+ Select "No" if this is a returning visit.
* **customer_contact** (`customer_contact`, text, required: false): Enter your contact information so we can get in touch with you.
* **schedule** (`schedule`, select_multiple, required: false): Choose a scheduled time for your visit.
	+ Select "Yes" to schedule for the morning.
	+ Select "No" if you have no preference or would like to schedule for another time.
* **customer_details** (`customer_details`, text, required: false): Provide any additional details about your visit.
* **purpose_other** (`purpose_other`, text, required: false): This field is only required if you selected "Yes" for "New Visit". Enter a description of the purpose of your visit.
