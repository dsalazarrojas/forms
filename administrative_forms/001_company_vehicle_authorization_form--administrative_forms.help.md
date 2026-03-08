# Company Vehicle Authorization Form - Help Guide

## Purpose
The Company Vehicle Authorization Form is used to request company vehicles for work-related purposes.

## How To Complete This Form
1. Fill out all required fields with accurate and complete information.
2. Ensure that you understand the options selected and their implications.
3. Sign and date the form as a sign of commitment to company policies.

## Field-by-Field Explanation

* **Employee Full Name** (`employee_full_name`, text, required): Enter your full name as it appears on your ID, drivers license, or passport.
* **Employee ID Number** (`employee_id`, number, required): Enter your company employee identification number.
* **Department** (`department`, select_one, required): Select your current department from the list.
* **Job Title** (`job_title`, text, required): Enter your current position or role.
* **Supervisor Name** (`supervisor_name`, text, required): Enter the name of your direct supervisor or manager.
* **Supervisor Email** (`supervisor_email`, email, required): Enter your supervisor's company email address.
* **Purpose of Vehicle Use** (`vehicle_purpose`, select_one, required): Select the primary reason for requesting a company vehicle.
* **Type of Vehicle Needed** (`vehicle_type_needed`, select_one, required): Select the type of vehicle required for your duties.
* **Expected Usage Frequency** (`usage_frequency`, select_one, required): Select how often you will need to use the vehicle.
* **Authorization Start Date** (`authorization_start_date`, date, required): Enter the date when you need to start using the vehicle.
* **Authorization End Date** (`authorization_end_date`, date, optional): Enter the date when your vehicle authorization will end. If it's ongoing, leave this field blank.
* **Do you have a valid driver's license?** (`valid_drivers_license`, select_one, required): Select if you have a valid driver's license.
* **Driver's License Number** (`license_number`, text, required): Enter your driver's license number.
* **License State** (`license_state`, text, required): Enter the state or province of issuance.
* **License Expiration Date** (`license_expiry`, date, required): Enter the date when your license expires.
* **Any driving violations in past 3 years** (`driving_violations`, select_one, required): Select the number of driving violations you have had in the last 3 years.
* **Briefly describe any violations if applicable** (`violations_details`, text, optional): If you have driving violations, briefly describe them.
* **I agree to comply with all company vehicle policies** (`agree_vehicle_policies`, select_one, required): Select that you agree to follow company vehicle policies.
* **Personal Use Acknowledgment** (`agree_personal_use`, select_one, required): Select your understanding of personal vehicle use policies.
* **Emergency Contact Name** (`emergency_contact_name`, text, required): Enter the name of your emergency contact person.
* **Emergency Contact Phone** (`emergency_contact_phone`, text, required): Enter the phone number of your emergency contact.
* **Employee Signature** (`employee_signature`, text, required): Sign your name as a sign of commitment to company policies.
* **Signature Date** (`signature_date`, date, required): Enter the date you sign the form.
* **Supervisor Approval Status** (`supervisor_approval`, select_one, optional): For supervisor use only.
* **Additional Comments** (`additional_comments`, text, optional): Enter any additional information or special requests you may have.
