# 2021 Texas City Title Application - Help Guide
## Purpose
The 2021 Texas City Title Application form is a tool for gathering information from applicants seeking to title a vehicle in Texas. This form is designed to help you provide the necessary details for a successful title application.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide your personal details as they appear on your identification.
2. Enter your valid 8-digit Texas Driver License or ID number.
3. Enter your date of birth in MM/DD/YYYY format.
4. Provide your current street address, including house number and street name.
5. Enter your city and state (must be TX).
6. Enter your zip code (5 digits).
7. Provide your primary contact phone number for communication.
8. (Optional) Enter your email address for electronic notifications.
9. Select the type of applicant you are (Individual, Business, Trust, or Government Entity).
10. Provide accurate information about the vehicle being titled, including its Identification Number (VIN), Make, Model, Model Year, and Body Style.
11. Enter the current odometer reading (miles).
12. Choose the type of title application (New Texas Title, Transfer of Title, Duplicate Title, or Corrected Title).
13. Enter the date of sale or transfer of ownership.
14. Enter the vehicle purchase price (if applicable).
15. Indicate if there is a lienholder on the vehicle and provide their details if necessary.
16. Sign the declaration of accuracy.
17. Add any additional comments or explanations if needed.
18. Finally, submit the form with the current date.

## Field-by-Field Explanation

* **Full Legal Name** (`full_name`, `text`, required): Enter your full name as it appears on your identification.
* **Texas Driver License or ID Number** (`texas_id_number`, `text`, required): Enter your valid 8-digit Texas DL/ID number.
* **Date of Birth** (`date_of_birth`, `date`, required): Enter your date of birth in MM/DD/YYYY format.
* **Current Street Address** (`street_address`, `text`, required): Enter your current street address, including house number and street name.
* **City** (`city`, `text`, required): Enter your city (must be TX).
* **State** (`state`, `text`, required): Enter your state (must be TX).
* **Zip Code** (`zip_code`, `text`, required): Enter your 5-digit zip code.
* **Contact Phone Number** (`phone_number`, `phone`, required): Enter your primary contact phone number for communication.
* **Email Address (optional)** (`email_address`, `email`, optional): Enter your email address for electronic notifications.
* **Type of Applicant** (`applicant_type`, `select_one`, required): Select the type of applicant you are (Individual, Business, Trust, or Government Entity).
* **Vehicle Identification Number (VIN)** (`vehicle_identification_number`, `text`, required): Enter the 17-character vehicle identification number.
* **Make of Vehicle** (`vehicle_make`, `text`, required): Enter the vehicle make (e.g., Ford, Toyota, Honda).
* **Model of Vehicle** (`vehicle_model`, `text`, required): Enter the vehicle model (e.g., F-150, Camry, Civic).
* **Model Year** (`vehicle_year`, `integer`, required): Enter the 4-digit model year (e.g., 2020).
* **Body Style** (`vehicle_body_style`, `text`, required): Enter the vehicle body style (e.g., Sedan, SUV, Truck, Motorcycle).
* **Current Odometer Reading (miles)** (`odometer_reading`, `integer`, required): Enter the current odometer reading (miles).
* **Type of Title Application** (`title_application_type`, `select_one`, required): Select the type of title application (New Texas Title, Transfer of Title, Duplicate Title, or Corrected Title).
* **Date of Sale or Transfer of Ownership** (`date_of_sale_transfer`, `date`, required): Enter the date of sale or transfer of ownership.
* **Vehicle Purchase Price ($)** (`purchase_price`, `decimal`, required): Enter the vehicle purchase price (if applicable).
* **Is there a Lienholder on this vehicle?** (`lienholder_present`, `select_one`, required): Indicate if there is a lienholder on the vehicle (True or False).
* **Lienholder Name (if Yes above)** (`lienholder_name`, `text`, optional): Enter the full name of the lienholder (if applicable).
* **Lienholder Address (if Yes above)** (`lienholder_address`, `text`, optional): Enter the full mailing address of the lienholder (if applicable).
* **Declaration and Certification** (`declaration_accuracy`, `select_one`, required): Sign the declaration of accuracy to ensure all statements made are true and correct.
* **Additional Comments or Explanations** (`additional_comments`, `text`, optional): Add any additional comments or explanations if needed.
* **Application Submission Date** (`application_submission_date`, `date`, required): Enter the date of form submission.
