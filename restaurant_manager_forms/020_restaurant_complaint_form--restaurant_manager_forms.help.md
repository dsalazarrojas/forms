# Restaurant Complaint Form - Help Guide

## Purpose
This form is designed for customers to report issues or problems they encountered during their visit to a restaurant. It helps restaurants gather feedback to improve their services and resolve customer complaints.

## How To Complete This Form
To complete this form, simply follow these steps:

1. Fill in your name and contact information, including your first name, last name, email address, and phone number.
2. Describe the issue or problem you experienced during your visit in the "Complaint Details" field.
3. Select the type of complaint you're reporting from the dropdown options.
4. Provide a description of the action taken by the restaurant to resolve the issue.
5. If applicable, fill in the "Resolution Date" and "Assigned To" fields.
6. Review your form before submission to ensure all required fields are filled in.

## Field-by-Field Explanation

* **First Name** (`first_name`, text, not required): Fill in your first name as per your preference.
* **Last Name** (`last_name`, text, not required): Enter your last name as per your preference.
* **Email** (`email`, email, not required): Provide your email address for the restaurant to contact you regarding your complaint.
* **Complaint Details** (`complaint_details`, text, not required): Describe the issue or problem you experienced during your visit in as much detail as possible.
* **Date of Visit** (`date_of_visit`, date, not required): If you can recall the date of your visit, fill it in. If not, it's okay to leave it blank.
* **Time of Visit** (`time_of_visit`, time, not required): If you can recall the time of your visit, fill it in. If not, it's okay to leave it blank.
* **Restaurant Name** (`restaurant_name`, text, not required): If you're reporting a complaint about a specific restaurant, fill in its name.
* **Type of Complaint** (`complaint_type`, select_one, not required): Select one of the provided options to describe the type of complaint you're reporting.
	+ Poor Food Quality
	+ Poor Service
	+ Dirty or Disorganized Facility
	+ Inadequate Staff
	+ Other (please specify)
* **Description** (`description`, note, not required): Provide a detailed description of the action taken by the restaurant to resolve the issue.
* **Action Taken** (`action_taken`, text, not required): If you're aware of the action taken by the restaurant, describe it in this field.
* **Resolution Date** (`resolution_date`, date, not required): If you're aware of the resolution date, fill it in. If not, it's okay to leave it blank.
* **Assigned To** (`assigned_to`, select_one, not required): Select who was assigned to handle your complaint from the provided options.
	+ Jim
	+ Jane
	+ John
* **Phone** (`phone`, text, not required): Fill in your phone number for the restaurant to contact you regarding your complaint.
* **Email** (`email`, email, not required): This field is not to be filled in, as it's already available above.

## Tips

* Be as descriptive as possible when providing complaint details and action taken.
* If you're unsure about any field, feel free to contact the restaurant directly.
* Your feedback helps the restaurant improve their services and provide better experiences for their customers.
