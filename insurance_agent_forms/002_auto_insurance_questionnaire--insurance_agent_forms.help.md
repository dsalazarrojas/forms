<thinking>
To confirm, we will create a user-facing help guide for the "Auto Insurance Questionnaire" form. This form is designed to collect relevant information from users, primarily insurance applicants, to determine their coverage preferences and requirements for auto insurance. We will follow the provided YAML schema to create an easy-to-understand guide that helps users navigate the form accurately and efficiently.

To avoid duplication and ensure that the form serves its purpose correctly, we will ensure the guide provides a clear and concise explanation of each field, eliminating any ambiguity or confusion.

</thinking>

# Auto Insurance Questionnaire - Help Guide
## Purpose

The purpose of this auto insurance questionnaire is to help us gather essential information from you, the applicant, to tailor our coverage plans to your specific needs. Please take a few minutes to complete this form, and we will use the information to provide you with the best possible auto insurance quote.

## How To Complete This Form

*   To begin, please ensure that you have a clear understanding of the information required for the questionnaire. Each section of the form is labeled with a title indicating what it pertains to.
*   Start by filling in your personal details, including your full name, date of birth, driver's license number, and other relevant information.
*   Proceed to the vehicle information section, where you will provide details about your vehicle, such as its year, make, model, and vehicle identification number (VIN).
*   If you have any driving experience or history, including accidents, violations, and license suspension or revocation, please provide the necessary details.
*   Moving on, you will be asked about your coverage preferences, including liability limits, collision coverage, comprehensive coverage, deductible, and the number of additional drivers in your household.
*   Finally, ensure you provide your email address for quote delivery.

## Field-by-Field Explanation

*   **Full Name** (`full_name`, `text`, required): Please enter your full name as it appears on your driver's license or government-issued ID.
*   **Date of Birth** (`date_of_birth`, `date`, required): Please enter your date of birth in MM/DD/YYYY format.
*   **Driver License Number** (`drivers_license_number`, `text`, required): Please enter your driver's license number as it appears on your license.
*   **Years of Driving Experience** (`years_driving_experience`, `number`, required): If you're a new driver, you can enter '0'.
*   **Vehicle Year** (`vehicle_year`, `number`, required): Please enter your vehicle's year of manufacture.
*   **Vehicle Make** (`vehicle_make`, `text`, required): Enter your vehicle's manufacturer name.
*   **Vehicle Model** (`vehicle_model`, `text`, required): Enter your vehicle's model name.
*   **Vehicle Identification Number (VIN)** (`vehicle_vin`, `text`, required): Enter your vehicle's unique identification number as found on the dashboard or registration document.
*   **Annual Mileage** (`annual_mileage`, `number`, required): Please estimate the miles driven per year, including commute and personal use.
*   **Primary Use of Vehicle** (`primary_use`, `select_one`, required): Choose how you primarily use your vehicle from the following options:
    *   Commute to Work
    *   Business
    *   Pleasure
    *   Commercial
*   **Number of Accidents (last 3 years)** (`accidents_last_3_years`, `number`, required): Count the number of accidents you've been involved in over the last 3 years.
*   **Number of Traffic Violations (last 3 years)** (`violations_last_3_years`, `number`, required): Count the number of traffic violations you've received over the last 3 years.
*   **License Suspension or Revocation** (`suspension_or_revocation`, `select_one`, required): If your license has been suspended or revoked, please choose 'Yes'.
*   **Desired Liability Limit** (`liability_limit`, `select_one`, required): Choose your desired liability limit from the following options:
    *   100000/300000
    *   250000/500000
    *   500000/1000000
*   **Want Collision Coverage** (`collision_coverage`, `select_one`, required): If you want collision coverage, please choose 'Yes'.
*   **Want Comprehensive Coverage** (`comprehensive_coverage`, `select_one`, required): If you want comprehensive coverage, please choose 'Yes'.
*   **Preferred Deductible** (`deductible_preference`, `select_one`, required): Choose your preferred deductible from the following options:
    *   250
    *   500
    *   750
    *   1000
*   **Additional Drivers in Household** (`additional_drivers`, `number`, required): Count the number of additional drivers in your household.
*   **Email Address** (`email_address`, `email`, required): Please enter your email address for quote delivery.
