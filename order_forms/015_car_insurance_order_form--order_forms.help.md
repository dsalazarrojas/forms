# Car Insurance Order Form - Help Guide
## Purpose
This form is used to collect information for a car insurance order. Please fill out the form carefully to ensure accurate and complete information is submitted.
## How To Complete This Form
To complete the form, follow these steps:
1. Provide your applicant information, including your full name, date of birth, email address, and phone number.
2. Describe your vehicle, including the make and model, year, and vehicle identification number (VIN).
3. Specify your primary vehicle use and estimated annual mileage.
4. Select your preferred coverage level, deductible amount, and any additional coverage options.
5. Review and acknowledge the terms of the insurance order.
6. Provide any additional comments or requests for the order.

## Field-by-Field Explanation
* **Applicant Full Name** (`applicant_full_name`, `text`, required): Enter your full name, including first and last name.
* **Date of Birth** (`applicant_dob`, `date`, required): Enter your date of birth to determine age-based rates.
* **Email Address** (`applicant_email`, `email`, required): Enter your email address for policy delivery.
* **Phone Number** (`applicant_phone`, `text`, required): Enter your primary contact phone number.
* **Car Make and Model** (`vehicle_make_model_order`, `text`, required): Describe your car's make and model.
* **Vehicle Year** (`vehicle_year_order`, `number`, required): Enter the year of manufacture for your vehicle.
* **Vehicle Identification Number (VIN)** (`vehicle_vin_order`, `text`, required): Enter the 17-character VIN code for your vehicle.
* **Primary Vehicle Use** (`primary_vehicle_use`, `select_one`, required): Specify how the vehicle is used (Personal/Commute, Business, Rideshare, Pleasure/Weekend).
* **Estimated Annual Mileage** (`annual_mileage_estimate`, `number`, required): Estimate how many miles you drive per year.
* **Desired Coverage Level** (`coverage_level_preference`, `select_one`, required): Select your preferred level of coverage (Liability Only, Standard Full Coverage, Premium Full Coverage, Comprehensive Only).
* **Preferred Deductible Amount** (`deductible_preference`, `select_one`, required): Select your preferred deductible amount ($250, $500, $1,000, $2,500).
* **Additional Coverage Options** (`additional_coverage_options`, `select_multiple`, optional): Select any additional coverage options (Roadside Assistance, Rental Car Reimbursement, Gap Insurance, Glass Protection).
* **Order Acknowledgement** (`order_acknowledgement`, `select_one`, required): Review and acknowledge the terms of the insurance order.
* **Type your name for insurance order confirmation** (`signature_confirmation_order`, `text`, required): Type your name for order confirmation.
* **Any additional comments or requests?** (`additional_order_comments`, `text`, optional): Provide any additional comments or requests for the order.
