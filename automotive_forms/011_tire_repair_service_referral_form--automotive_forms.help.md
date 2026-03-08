<thinking>
This form is for referring customers to a tire repair service. It will allow customers to input their first name, last name, phone number, email, vehicle make, year, model, and other relevant details for repair purposes. The form will help in identifying the vehicle type, color, license plate, and any other required information to process a service request. The user needs to fill out this form to provide the required information so that our team can process the repair service request efficiently.
</thinking>

# tire_repair_service_referral_form - Help Guide
## Purpose
The tire repair service referral form is designed to collect essential information from customers for the purpose of referring them to a tire repair service.

## How To Complete This Form
To complete this form, please follow the below steps:

1. Fill in your First Name, Last Name, Phone Number, and Email address.
2. Provide information about your Vehicle Make, Year, and Model.
3. Indicate if you need any additional services (e.g., wheel alignment, tire rotation).
4. Specify if the vehicle is being submitted by you or someone else.
5. Enter the date and time you submitted the form.
6. If applicable, provide notes for further reference.

## Field-by-Field Explanation

* **First Name** (`first_name`, `text`, required): Enter your first name.
* **Last Name** (`last_name`, `text`, required): Enter your last name.
* **Phone Number** (`phone_number`, `text`, required): Enter your phone number.
* **Email** (`email`, `email`, required): Enter your email address.
* **Vehicle Make** (`vehicle_make`, `text`, required): Enter the make of your vehicle.
* **Year** (`vehicle_year`, `number`, required): Enter the year of your vehicle.
* **Model** (`vehicle_model`, `text`, required): Enter the model of your vehicle.
* **Repair Service** (`repair_service`, `select_one`, required): Select 'Yes' if you require repair service.
* **Additional Services** (`additional_services`, `select_multiple`, required): Select 'Yes' for any additional services needed.
* **Comments** (`comments`, `text`, optional): Provide any additional comments or information.
* **Submitted By** (`submitted_by`, `select_one`, optional): Select 'Yes' if you are submitting by yourself or 'No' if someone else is submitting.
* **Submitter's Date** (`submitted_date`, `date`, optional): Enter the date you submitted the form.
* **Form Completed Date** (`form_completed_date`, `date`, optional): Enter the date this form was completed.
* **Time** (`submitted_time`, `time`, optional): Enter the time you submitted the form.
* **Referral** (`referral`, `date`, optional): Enter the date of the referral.
* **Submitted** (`submitted`, `select_one`, optional): Select 'Yes' if this form has been submitted.
* **Notes** (`notes`, `note`, optional): Enter any additional notes for further reference.
* **Email** (`email`, `email`, optional): Enter your email address (this is a redundant field, please use the first email field).
* **Phone** (`phone_number`, `text`, optional): Enter your phone number (this is a redundant field, please use the first phone number field).
* **Year** (`vehicle_year`, `number`, optional): Enter the year of your vehicle (this is a redundant field, please use the first vehicle year field).
* **Color** (`vehicle_color`, `text`, optional): Enter the color of your vehicle.
* **License** (`vehicle_license`, `text`, optional): Enter the license plate number of your vehicle.
* **Type** (`vehicle_type`, `text`, optional): Enter the type of your vehicle.
* **Location** (`location`, `text`, optional): Enter the location of the vehicle.
* **Make** (`vehicle_make`, `text`, optional): Enter the make of your vehicle (this is a redundant field, please use the first vehicle make field).

## Tips
Please ensure that you fill in all the required fields to ensure efficient processing of your repair service request. If you are unsure about any field, please contact our support team for assistance.
