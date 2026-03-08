<thinking>
To create a user-facing help guide for the "resident_visitation_booking_request_form", we'll start by understanding the form's purpose. Based on the provided YAML fields, this form likely enables residents to book visits, providing details about themselves and the visits they wish to make. The form might be used for internal scheduling and record-keeping.

Given that the form has no explicit "Submit" or "Save" button in the YAML, I'll assume this form will be submitted or saved when users navigate to the next page or when the form is complete. 

We should ensure that the form doesn't allow duplication, but since the YAML doesn't specify a way to prevent it, we might need to consider using JavaScript or backend logic to prevent duplicates, possibly using a unique identifier or timestamp for every submission.

</thinking>

# resident_visitation_booking_request_form - Help Guide
## Purpose
The resident visitation booking request form is used to request visits and provide necessary information for booking. This form gathers resident details and visit dates.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your resident name.
2. Select your visit start date.
3. Select your visit end date.
4. Provide your resident's phone number.
5. Describe your relationship with the resident.
6. Add any comments about the visit.

## Field-by-Field Explanation

* **Resident Name** (resident_name, text, required): Enter your full name as a resident.
* **Visit Start Date** (visit_start_date, date, false): Select the date you wish your visit to begin. Please note that this field is not required.
* **Visit End Date** (visit_end_date, date, false): Select the date your visit is expected to end. Like the start date field, this is also not required.
* **Resident Phone** (resident_phone, text, required): Enter your resident's phone number, so we can contact them for the visit.
* **Resident Relationship** (resident_relationship, text, false): Describe how you are related to the resident.
* **Resident Comments** (resident_comments, text, false): Add any additional comments about your visit, such as special requests or requirements.
