# Machine Failure Forecast Report Form - Help Guide
## Purpose
This form is used to record and forecast machine failures, helping the facilities team or maintenance crew to identify potential issues and schedule maintenance tasks.

## How To Complete This Form
1. Select the machine type that is experiencing or forecasted to experience issues.
2. Enter the date on which the failure is predicted to occur.
3. Enter the predicted time of the failure.
4. Enter the failure probability.
5. Describe the maintenance frequency for the machine.
6. Select the maintenance status.
7. Add any additional notes about the failure.
8. Enter the email address to contact.
9. Enter the phone number of the contact.
10. Enter the submitted-by information (name, email, and phone number).
11. Enter the form version.

## Field-by-Field Explanation
* **Machine Type** (`machine_type`, select_one): Select the type of machine that is failing or forecasted to fail. This helps the maintenance crew to focus on the specific machine that needs attention.
* **Predicted Failure Date** (`predicted_failure_date`, date): Enter the date on which the failure is predicted to occur. Make sure to use the correct format (yyyy-mm-dd).
* **Predicted Failure Time** (`predicted_failure_time`, time): Enter the predicted time of the failure.
* **Failure Probability** (`failure_probability`, number): Enter the probability of the failure, as a percentage.
* **Maintenance Frequency** (`maintenance_frequency`, text): Describe the maintenance frequency for the machine. This helps the maintenance crew to schedule tasks efficiently.
* **Maintenance Status** (`maintenance_status`, select_one): Select the current maintenance status (Completed, In Progress, Not Required).
* **Notes** (`notes`, note): Add any additional notes or comments about the failure.
* **Email Address** (`email_address`, email): Enter the email address to contact for further information.
* **Phone Number** (`phone_number`, text): Enter the phone number of the contact person.
* **Submitted By** (`submitted_by`, text): Enter the name of the person who submitted the form.
* **Submitted On** (`submitted_on`, date): Enter the date on which the form was submitted.
* **Updated On** (`updated_on`, date): Enter the date on which the form was last updated.
* **Updated By** (`updated_by`, text): Enter the name of the person who updated the form.
* **Updated On (Time)** (`updated_on_time`, time): Enter the time on which the form was last updated.
* **Machine Failure Forecast Form ID** (`machine_failure_forecast_form_id`, text): This is an internal identifier for the form.
* **Category** (`category`, text): Enter the category of the machine failure (this field is not used in this form).
* **Description** (`description`, text): Enter a description of the machine failure.
* **Submitted From** (`submitted_from`, text): Enter the form's origin (this field is not used in this form).
* **Submitted To** (`submitted_to`, text): Enter the person or organization to whom the form was submitted (this field is not used in this form).
* **Submitted By (Name)** (`submitted_by_name`, text): Enter the name of the person who submitted the form.
* **Submitted By (Email)** (`submitted_by_email`, email): Enter the email address of the person who submitted the form.
* **Submitted By (Phone)** (`submitted_by_phone`, text): Enter the phone number of the person who submitted the form.
* **Machine Failure Forecast Form Version** (`machine_failure_forecast_form_version`, text): Enter the version of the form.
* **Submitted On (UTC)** (`submitted_on_utc`, time): Enter the time on which the form was submitted, in UTC.
