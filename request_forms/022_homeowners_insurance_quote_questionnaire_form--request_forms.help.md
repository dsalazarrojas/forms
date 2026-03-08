# Homeowners Insurance Quote Questionnaire Form - Help Guide
## Purpose
The purpose of this form is to collect essential information from homeowners to determine their insurance needs. This form is meant to be a starting point for the insurance agent to understand the client's basic circumstances and provide a quote for insurance coverage.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide your name and contact information, including a valid contact number and address.
2. Enter your date of birth (if applicable).
3. Choose your marital status and number of dependents (if applicable).
4. Select your employment status.
5. Enter details about your property, including home value, number of rooms, property type, and age.
6. Choose your loan type and loan amount (if applicable).
7. Provide any additional information that may affect your insurance quote.

## Field-by-Field Explanation

* **Client Name** (`client_name`, text, **required**): Please enter your full name as it appears on your identification documents.
* **Contact Number** (`contact_number`, text, **required**): A valid contact number where we can reach you for any follow-up questions.
* **Address Line 1** (`address_line_1`, text, **required**): Enter your street address or the address where you currently reside.
* **Address Line 2** (`address_line_2`, text, **required**): Enter your apartment or suite number (if applicable).
* **City** (`city`, text, **required**): Enter the city where you currently reside.
* **State** (`state`, select_one, **required**): Choose your state of residence from the list.
* **Zip Code** (`zip_code`, text, **required**): Enter your valid zip code.
* **Email** (`email`, email, **optional**): A valid email address where we can reach you for any communication.
* **Date of Birth** (`date_of_birth`, date, **optional**): Enter your date of birth in the format MM/DD/YYYY.
* **Insurance Type** (`insurance_type`, select_multiple, **required**): Choose the types of insurance that best fit your needs (e.g., homeowners, renters, condo).
* **Coverage Amount** (`coverage_amount`, number, **optional**): Enter the amount of coverage you are looking for.
* **Coverage Period** (`coverage_period`, select_multiple, **optional**): Choose the coverage period that suits you best.
* **Home Value** (`home_value`, text, **required**): Enter the value of your primary residence.
* **Number of Rooms** (`number_of_rooms`, text, **optional**): Enter the number of rooms in your primary residence.
* **Property Type** (`property_type`, select_multiple, **optional**): Choose the type of property you own (e.g., single-family home, condo, townhouse).
* **Property Age** (`property_age`, text, **optional**): Enter the approximate age of your property.
* **Mortgage Info** (`mortgage_info`, text, **optional**): Provide any relevant mortgage information.
* **Loan Type** (`loan_type`, select_multiple, **optional**): Choose your loan type (e.g., fixed-rate, adjustable-rate).
* **Loan Amount** (`loan_amount`, number, **optional**): Enter the amount of your loan.
* **Additional Info** (`additional_info`, note, **optional**): Provide any other relevant information that may affect your insurance quote.
