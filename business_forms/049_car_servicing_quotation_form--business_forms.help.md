# Car Servicing Quotation Form - Help Guide
## Purpose
The Car Servicing Quotation Form is designed to collect information from you for a car servicing quotation. This form will help us understand your vehicle details, service needs, and preferences for the quote.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your contact information, including first name, last name, email address, and phone number.
2. Enter your vehicle information, including year, make, model, and current mileage.
3. Describe the services you need, such as routine maintenance, oil change, or brake service.
4. Select the type of estimate you prefer, including written, verbal, phone, or email.
5. Choose your budget range and any additional services required.
6. Specify your preferred date and time for the service.
7. Select your preferred method for receiving the quote.
8. If applicable, indicate if this is an insurance claim and provide the insurance company information.
9. Finally, review your information and make any necessary adjustments.

## Field-by-Field Explanation

* **Customer Information** (`customer_information`, note, optional)
	+ This is a note field for you to provide any additional information about yourself.
* **First Name** (`first_name`, text, required)
	+ Enter your first name.
* **Last Name** (`last_name`, text, required)
	+ Enter your last name.
* **Email Address** (`email`, email, required)
	+ Enter your email address for quote delivery.
* **Phone Number** (`phone`, text, required)
	+ Enter your phone number for contact purposes.
* **Company Name** (`company_name`, text, optional)
	+ If you represent a company, enter your company name.
* **Street Address** (`address`, text, optional)
	+ Enter your street address.
* **City** (`city`, text, optional)
	+ Enter your city.
* **State** (`state`, text, optional)
	+ Enter your state.
* **ZIP Code** (`zip_code`, text, optional)
	+ Enter your ZIP code.
* **Vehicle Information** (`vehicle_information`, note, optional)
	+ This is a note field for you to provide any additional information about your vehicle.
* **Vehicle Year** (`vehicle_year`, text, required)
	+ Enter your vehicle's year.
* **Vehicle Make** (`vehicle_make`, text, required)
	+ Enter your vehicle's make.
* **Vehicle Model** (`vehicle_model`, text, required)
	+ Enter your vehicle's model.
* **Vehicle VIN** (`vehicle_vin`, text, optional)
	+ If you have your vehicle's VIN, enter it here.
* **License Plate** (`license_plate`, text, optional)
	+ If you have your vehicle's license plate number, enter it here.
* **Current Mileage** (`current_mileage`, number, required)
	+ Enter your vehicle's current mileage.
* **Vehicle Condition** (`vehicle_condition`, select_one, required)
	+ Choose the overall condition of your vehicle (Excellent, Very Good, Good, Fair, Poor).
* **Service Information** (`service_information`, note, optional)
	+ This is a note field for you to provide any additional information about the services you need.
* **Service Type** (`service_type`, select_one, required)
	+ Choose the type of service you require (Routine maintenance, Oil change, Brake service, etc.).
* **Service Description** (`service_description`, text, required)
	+ Describe the specific service you need.
* **Problem Description** (`problem_description`, text, optional)
	+ If you have any problems with your vehicle, describe them here.
* **Symptoms** (`symptoms`, text, optional)
	+ If you're experiencing any issues, describe them here.
* **Warning Lights** (`warning_lights`, select_multiple, optional)
	+ Check any warning lights on your dashboard.
* **Quotation Preferences** (`quotation_preferences`, note, optional)
	+ This is a note field for you to provide any additional preferences about the quotation.
* **Estimate Type** (`estimate_type`, select_one, required)
	+ Choose how you prefer to receive the quote (Written, Verbal, Phone, Email, In-person).
* **Urgency** (`urgency`, select_one, required)
	+ Choose the urgency level for the service (Emergency, Urgent, Soon, Routine, Planning ahead).
* **Budget Range** (`budget_range`, select_one, optional)
	+ Choose your expected budget range.
* **Parts Preference** (`parts_preference`, select_one, required)
	+ Choose the type of parts you prefer (OEM, Aftermarket, Used/Rebuilt).
* **Warranty Importance** (`warranty_importance`, select_one, required)
	+ Choose the level of importance you give to warranty (Yes - must have, Preferred but not required, Not important).
* **Additional Services** (`additional_services`, select_multiple, optional)
	+ Check any additional services you require.
* **Appointment Preference** (`appointment_preference`, select_one, required)
	+ Choose when you prefer to bring your vehicle (As soon as possible, Within 3 days, Within a week, Next available).
* **Preferred Date** (`preferred_date`, date, optional)
	+ If you have a specific date for the service, enter it here.
* **Preferred Time** (`preferred_time`, select_one, optional)
	+ Choose your preferred time for the service (Morning, Afternoon, Anytime).
* **Loaner Vehicle Needed** (`loaner_vehicle_needed`, select_one, required)
	+ Choose if you need a loaner vehicle.
* **Transportation Alternative** (`transportation_alternative`, select_one, optional)
	+ Choose how you will get to the service location.
* **Quote Delivery** (`quote_delivery`, select_one, required)
	+ Choose how you prefer to receive the quote (Email, Phone call, Text message, In-person, Fax).
* **Insurance Claim** (`insurance_claim`, select_one, required)
	+ Choose if this is an insurance claim.
* **Insurance Company** (`insurance_company`, text, optional)
	+ If this is an insurance claim, enter the insurance company.
* **Claim Number** (`claim_number`, text, optional)
	+ If this is an insurance claim, enter the claim number.
* **Fleet Account** (`fleet_account`, select_one, optional)
	+ If you have a fleet account, choose yes.
* **Fleet Account Name** (`fleet_account_name`, text, optional)
	+ If you have a fleet account, enter the account name.
* **How Did You Hear About Us** (`how_heard_about_us`, select_one, optional)
	+ Choose how you heard about us.
* **Additional Comments** (`additional_comments`, text, optional)
	+ Enter any additional comments.
* **Quote Request Date** (`quote_request_date`, date, required)
	+ Enter the current date.

By following this guide, you will be able to complete the form accurately and provide us with the necessary information to create a comprehensive quote for your vehicle servicing needs.
