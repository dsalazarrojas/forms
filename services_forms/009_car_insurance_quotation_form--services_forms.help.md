<thinking> 
This form is designed to gather information from vehicle owners to provide a car insurance quotation. It's intended for users to provide details about themselves and their vehicle to receive a quote on car insurance services. The form is divided into sections for owner information and vehicle information. Each section is self-contained, with clear labels and instructions to guide the user through the process. The form's fields are designed to gather specific details that will help in determining the user's insurance needs and provide a tailored quote.</thinking>

# Car Insurance Quotation Form - Help Guide
## Purpose
This form is designed to gather information from vehicle owners to provide a car insurance quotation.

## How To Complete This Form
- Begin by filling out the owner information section, which includes your full name, date of birth, email address, phone number, street address, city, state, and zip code.
- Next, provide information about your vehicle, including the year, make, model, type, VIN, annual mileage, and primary use of the vehicle.
- Then, select your desired coverage types and preferred liability limits, deductible, and coverage options.
- Finally, indicate whether you have had any accidents or violations in the past 3-5 years and provide details if necessary.

## Field-by-Field Explanation
* **Full name**: (`owner_name`, `text`, required): Enter your full name as it appears on your identification.
* **Date of birth**: (`date_of_birth`, `date`, required): Enter your date of birth in the correct date format (MM/DD/YYYY).
* **Email address**: (`email_address`, `email`, required): Enter your email address where you can be contacted.
* **Phone number**: (`phone_number`, `text`, required): Enter your phone number for contact purposes.
* **Street address**: (`street_address`, `text`, required): Enter your street address where you can be contacted.
* **City**: (`city`, `text`, required): Enter the city where your vehicle is registered.
* **State**: (`state`, `text`, required): Enter the state where your vehicle is registered.
* **Zip code**: (`zip_code`, `text`, required): Enter your zip code for mailing purposes.
* **Years of driving experience**: (`driving_history`, `number`, optional): Indicate the number of years you have been driving.
* **Any accidents or violations in past 3-5 years?**: (`accidents_violations`, `select_one`, required): Select 'True' if you have had any accidents or violations in the past 3-5 years. If 'True', please provide details in the next field.
* **Details of accidents or violations**: (`violation_details`, `text`, optional): Provide details about any accidents or violations you have had.
* **Vehicle year**: (`vehicle_year`, `number`, required): Enter the year of your vehicle.
* **Vehicle make**: (`vehicle_make`, `text`, required): Enter the make of your vehicle.
* **Vehicle model**: (`vehicle_model`, `text`, required): Enter the model of your vehicle.
* **Vehicle type**: (`vehicle_type`, `select_one`, required): Select the type of your vehicle from the options listed.
* **Vehicle Identification Number (VIN)**: (`vehicle_vin`, `text`, optional): Enter the Vehicle Identification Number of your vehicle.
* **Annual mileage**: (`annual_mileage`, `number`, optional): Enter the approximate annual mileage of your vehicle.
* **Primary use of vehicle**: (`primary_use`, `select_one`, required): Select the primary use of your vehicle from the options listed.
* **Number of drivers on policy**: (`number_of_drivers`, `number`, required): Indicate the number of drivers on your policy.
* **Desired coverage types**: (`coverage_types`, `select_multiple`, required): Select all coverage types that you desire, such as liability, collision, comprehensive, and more.
* **Preferred liability limits**: (`liability_limits`, `select_one`, required): Select your preferred liability limits from the options listed.
* **Preferred deductible**: (`deductible_preference`, `select_one`, required): Select your preferred deductible amount from the options listed.
* **Details of vehicle**: (`vehicle_information`, `note`, optional): This is a note section for you to provide any additional details about your vehicle.
