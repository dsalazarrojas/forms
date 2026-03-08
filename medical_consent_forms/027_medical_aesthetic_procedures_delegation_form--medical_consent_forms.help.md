# Medical Aesthetic Procedures Delegation Form - Help Guide
## Purpose
This form is designed to document and track aesthetic procedures performed by delegated providers. It captures key details about the procedure, including the provider's information, procedure specifics, and submission details. Fill out this form to accurately record and report on medical aesthetic procedures.

## How To Complete This Form
1. Begin by providing the title and category of the form. Ensure you select the correct category to categorize the form accurately.
2. Provide a brief description of the form for documentation and tracking purposes.
3. Enter the name, license number, and address of each provider performing the procedure.
4. Select the type of aesthetic procedure performed.
5. Record the date and time of the procedure.
6. Specify the duration of the procedure.
7. Provide the location of the procedure.
8. Add any additional notes regarding the procedure.
9. Confirm submission by indicating the date and provider who submitted the form.
10. Enter your title and timestamp for submission.

## Field-by-Field Explanation
* **Medical Aesthetic Procedures Delegation Form** (`form_title`, text, required: false): Enter a title for the form to provide a clear identifier.
* **Medical Consent Forms** (`form_category`, text, required: false): Select the correct category for the form.
* **Form Description** (`form_description`, text, required: false): Provide a brief description of the form for documentation and tracking purposes.
* **Category** (`form_category_label`, text, required: true): This is the actual category for the form, used to categorize and filter results.
* **Description** (`form_description_label`, text, required: false): This is the label for the description field, which should match the form description.
* **Description** (`form_description_value`, text, required: false): Enter a description of the form for documentation and tracking purposes.
* **Provider 1 Name** (`provider_1_name`, text, required: true): Enter the name of the provider performing the procedure.
* **Provider 1 License Number** (`provider_1_license_number`, text, required: false): Enter the license number of the provider performing the procedure.
* **Provider 1 Address** (`provider_1_address`, text, required: true): Enter the address of the provider performing the procedure.
* **Provider 2 Name** (`provider_2_name`, text, required: false): Enter the name of the secondary provider performing the procedure.
* **Provider 2 License Number** (`provider_2_license_number`, text, required: false): Enter the license number of the secondary provider performing the procedure.
* **Provider 2 Address** (`provider_2_address`, text, required: false): Enter the address of the secondary provider performing the procedure.
* **Procedure Date** (`procedure_date`, date, required: true): Enter the date of the procedure.
* **Procedure Time** (`procedure_time`, time, required: true): Enter the time of the procedure.
* **Procedure Duration** (`procedure_duration`, text, required: true): Enter the duration of the procedure.
* **Procedure Location** (`procedure_location`, text, required: true): Enter the location of the procedure.
* **Type of Procedure** (`procedure_type`, select_one, required: true): Select the type of aesthetic procedure performed from the provided options.
* **Notes** (`notes`, text, required: false): Enter any additional notes regarding the procedure.
* **Form Submitted** (`form_submit`, date, required: true): Confirm submission by indicating the date the form was submitted.
* **Form Submitted By** (`form_submitted_by`, text, required: false): Enter your title for submission.
* **Form Submitted At** (`form_submitted_at`, date, required: false): Enter the timestamp for submission.
* **Submitting Provider** (`form_submitted_at_title`, text, required: true): Enter your title for submission.
* **Submit Date** (`form_submitted_at_title`, text, required: true): Enter the date for submission.
* **Submit Timestamp** (`form_submitted_at_timestamp`, text, required: false): Enter the timestamp for submission.
* **Submitting Provider Title** (`form_submitted_by_title`, text, required: false): Enter your title for submission.

## Tips
* Be accurate and thorough when filling out the form to ensure accurate documentation and tracking.
* Ensure all required fields are completed to avoid form submission errors.
* Consult with your delegated provider to ensure correct information is entered.
* Use the form for its intended purpose: documenting and tracking aesthetic procedures.
