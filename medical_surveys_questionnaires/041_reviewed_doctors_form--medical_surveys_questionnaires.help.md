<thinking> 
The "Reviewed Doctors Form" is designed to collect information about doctors and their associated contact information, specialties, and review details. The form is used to update a doctor's status in the system. It is recommended that users complete this form only once for each doctor, and do not submit duplicates. If a doctor's information has already been reviewed, the user will not be able to submit the form. The form should be completed in full, with all fields filled out as accurately as possible, to ensure accurate tracking of doctor information and reviews. </thinking>

# reviewed_doctors_form - Help Guide
## Purpose

The "Reviewed Doctors Form" is used to update a doctor's information in the system, including their contact details, specialty, and review status.

## How To Complete This Form

1. Click on the "Submit" button to begin the form submission process.
2. Enter the doctor's contact information, including name, email, phone number, and address.
3. Select the doctor's specialty from the provided options.
4. Choose a hospital and department (if applicable).
5. Enter the clinic hours (if applicable).
6. Enter the review date and time.
7. Select who reviewed the doctor (from the provided options).
8. Choose the status of the doctor's form (Active, Inactive, or Not Reviewed).
9. Enter the version of the last reviewed form (if applicable).
10. Enter any changes made to the form (if applicable).

## Field-by-Field Explanation

* **Contact Information** (`id: 1`, `name: contact_information`, `label: Contact Information`, `type: text`, `required: true`): Enter the doctor's contact information, including name, email, and phone number.
* **Name** (`id: 2`, `name: name`, `label: Name`, `type: text`, `required: true`): Enter the doctor's name.
* **Email** (`id: 3`, `name: email`, `label: Email`, `type: email`, `required: true`): Enter the doctor's email address.
* **Phone** (`id: 4`, `name: phone`, `label: Phone`, `type: text`, `required: true`): Enter the doctor's phone number.
* **Address** (`id: 5`, `name: address`, `label: Address`, `type: text`, `required: false`): Enter the doctor's address (if applicable).
* **Specialty** (`id: 6`, `name: specialty`, `label: Specialty`, `type: select_one`, `required: true`): Select the doctor's specialty from the provided options.
* **Hospital** (`id: 7`, `name: hospital`, `label: Hospital`, `type: text`, `required: false`): Enter the hospital name (if applicable).
* **Department** (`id: 8`, `name: department`, `label: Department`, `type: text`, `required: false`): Enter the department name (if applicable).
* **Clinic Hours** (`id: 9`, `name: clinic_hours`, `label: Clinic Hours`, `type: time`, `required: false`): Enter the doctor's clinic hours (if applicable).
* **Notes** (`id: 10`, `name: notes`, `label: Notes`, `type: note`, `required: false`): Add any additional notes about the doctor.
* **Review Date** (`id: 13`, `name: review_date`, `label: Review Date`, `type: date`, `required: true`): Enter the date of the review.
* **Review Time** (`id: 14`, `name: review_time`, `label: Review Time`, `type: time`, `required: true`): Enter the time of the review.
* **Reviewed By** (`id: 12`, `name: reviewed_by`, `label: Reviewed By`, `type: select_one`, `required: true`): Select who reviewed the doctor from the provided options.
* **Status** (`id: 21`, `name: reviewed_doctors_form_status`, `label: Reviewed Doctors Form Status`, `type: select_one`, `required: true`): Choose the status of the doctor's form (Active, Inactive, or Not Reviewed).
* **Last Reviewed Doctors Form Version** (`id: 22`, `name: last_reviewed_doctors_form_version`, `label: Last Reviewed Doctors Form Version`, `type: text`, `required: false`): Enter the version of the last reviewed form (if applicable).
* **Last Reviewed Doctors Form Changes** (`id: 20`, `name: last_reviewed_doctors_form_changes`, `label: Last Reviewed Doctors Form Changes`, `type: text`, `required: false`): Enter any changes made to the form (if applicable).

## Tips

* Make sure to complete all fields accurately and thoroughly.
* Review the form carefully before submitting it.
* Do not submit duplicates of the form.
* If a doctor's information has already been reviewed, you will not be able to submit the form.
