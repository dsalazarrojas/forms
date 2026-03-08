# Car Repair Quotation Form - Help Guide
## Purpose
The purpose of this form is to gather information from the user to create a quote for car repair services. It captures essential details about the vehicle, the problem, and the user's preferences and requirements for the repair.

## How To Complete This Form
1.  Fill out the form completely and accurately.
2.  Enter your personal contact information (First Name, Last Name, Email, Phone Number).
3.  Provide vehicle details (Vehicle Year, Vehicle Make, Vehicle Model, VIN).
4.  Describe the problem and symptoms you are experiencing with your vehicle.
5.  Choose the type of service you require (Service Type).
6.  Specify your preferred contact method for the quote (Quote Delivery).
7.  If applicable, provide insurance company and claim number.
8.  Enter any additional comments or information that might be helpful for the quote.

## Field-by-Field Explanation

*   **First Name** (`first_name`, `text`, required): Enter your first name as it should be spelled.
*   **Last Name** (`last_name`, `text`, required): Enter your last name as it should be spelled.
*   **Email Address** (`email`, `email`, required): Enter the email address where you want to receive quote communications.
*   **Phone Number** (`phone`, `text`, required): Enter your contact phone number.
*   **Street Address** (`address`, `text`, optional): Enter your street address for us to contact you.
*   **City** (`city`, `text`, optional): Enter your city for us to contact you.
*   **State** (`state`, `text`, optional): Enter your state for us to contact you.
*   **ZIP Code** (`zip_code`, `text`, optional): Enter your zip code for us to contact you.
*   **Vehicle Year** (`vehicle_year`, `text`, required): Enter the year of your vehicle.
*   **Vehicle Make** (`vehicle_make`, `text`, required): Enter the manufacturer of your vehicle.
*   **Vehicle Model** (`vehicle_model`, `text`, required): Enter the model of your vehicle.
*   **Vehicle VIN** (`vehicle_vin`, `text`, optional): Enter your vehicle's identification number.
*   **License Plate** (`license_plate`, `text`, optional): Enter your vehicle's license plate number.
*   **Current Mileage** (`current_mileage`, `number`, required): Enter the current odometer reading of your vehicle.
*   **Vehicle Condition** (`vehicle_condition`, `select_one`, required): Choose the overall condition of your vehicle.
*   **Repair Information** (`repair_information`, `note`, optional): Enter any details about needed repairs.
*   **Service Type** (`service_type`, `select_one`, required): Choose the type of service you require (e.g., Engine repair, Transmission service).
*   **Problem Description** (`problem_description`, `text`, required): Describe the problem you are experiencing with your vehicle.
*   **Symptoms** (`symptoms`, `text`, optional): Enter any additional symptoms you are experiencing.
*   **When Problem Occurs** (`when_problem_occurs`, `select_one`, optional): Choose when the problem occurs (e.g., Always, When starting).
*   **Warning Lights** (`warning_lights`, `select_multiple`, optional): Choose any warning lights that are on.
*   **Recent Repairs** (`recent_repairs`, `text`, optional): Enter any recent repairs or maintenance done on your vehicle.
*   **Quotation Details** (`quotation_details`, `note`, optional): Enter any specific details for the quote.
*   **Estimate Type** (`estimate_type`, `select_one`, required): Choose the type of estimate you require (e.g., Written, Verbal).
*   **Urgency** (`urgency`, `select_one`, required): Choose the urgency of the repair (e.g., Emergency, Routine).
*   **Budget Range** (`budget_range`, `select_one`, optional): Choose your expected budget for the repair.
*   **Parts Preference** (`parts_preference`, `select_one`, required): Choose the type of parts you prefer for the repair.
*   **Warranty Importance** (`warranty_importance`, `select_one`, required): Indicate if warranty is important to you.
*   **Appointment Preference** (`appointment_preference`, `select_one`, required): Choose when you prefer to bring your vehicle in for service.
*   **Preferred Date** (`preferred_date`, `date`, optional): Enter a specific date to bring your vehicle in for service.
*   **Preferred Time** (`preferred_time`, `select_one`, optional): Choose a preferred time to bring your vehicle in for service.
*   **Loaner Vehicle Needed** (`loaner_vehicle_needed`, `select_one`, required): Indicate if you need a loaner vehicle.
*   **Transportation Alternative** (`transportation_alternative`, `select_one`, optional): Choose how you will get around without your vehicle.
*   **Authorization** (`authorization`, `note`, optional): Enter any work authorization or special instructions.
*   **Diagnostic Authorization** (`diagnostic_authorization`, `select_one`, required): Choose if you authorize a diagnostic test before proceeding with the quote.
*   **Contact Before Work** (`contact_before_work`, `select_one`, required): Choose if you want to be contacted before proceeding with the quote.
*   **Quote Delivery** (`quote_delivery`, `select_one`, required): Choose how you prefer to receive the quote (e.g., Email, Phone call).
*   **Insurance Claim** (`insurance_claim`, `select_one`, required): Indicate if this is an insurance claim.
*   **Insurance Company** (`insurance_company`, `text`, optional): Enter your insurance company if this is an insurance claim.
*   **Claim Number** (`claim_number`, `text`, optional): Enter your claim number if this is an insurance claim.
*   **How Did You Hear About Us** (`how_heard_about_us`, `select_one`, optional): Choose how you heard about us (e.g., Website).
*   **Additional Comments** (`additional_comments`, `text`, optional): Enter any additional comments or information.
*   **Quote Request Date** (`quote_request_date`, `date`, required): Enter the date of your quote request.
