<thinking>
**Internal reasoning**
This form is designed to collect household income information from users. The field names and labels may seem repetitive, but they are actually collecting income from different months of the year. Each field is named with a month (e.g., `household_income_1` for January, `household_income_2` for February, and so on) to help users understand which month's income they are entering. This form is likely used for weatherization certification purposes, where users are required to provide income information for the most recent months. Please ensure to fill out the most recent months only.
</thinking>

# Weatherization Certification Of Household Income - Help Guide
## Purpose
This form is designed to collect household income information from users for weatherization certification purposes.

## How To Complete This Form
- Click on the "Start" button to begin the form.
- Fill out the required fields with accurate information.
- Select "Yes" or "No" for the weatherization certification field.
- Enter the year of the household income information.
- Enter the month of the household income information (select "Yes" for months with income and "No" for months without income).
- Enter the household income for each month (in numbers).
- Enter the household address, zip, phone number, email, and city information.
- Enter the country of residence (if not in the United States).
- Enter any additional notes or comments about the household income.

## Field-by-Field Explanation
* **Household Income** (`household_income`, number, required): Enter the household income for the selected month. This field is required to be filled out for each month.
* **Weatherization Certification** (`weatherization_certification`, select_one, optional): Select "Yes" if you are certifying the weatherization of your household.
* **Year** (`year`, number, optional): Enter the year of the household income information.
* **Month** (`month`, select_multiple, optional): Select "Yes" for months with income and "No" for months without income.
* **Phone** (`phone`, text, optional): Enter the household phone number.
* **Email** (`email`, email, optional): Enter the household email address.
* **Address** (`address`, text, optional): Enter the household address.
* **Zip** (`zip`, number, optional): Enter the household zip code.
* **State** (`state`, select_one, optional): Select "Yes" if you are from the United States.
* **City** (`city`, text, optional): Enter the household city.
* **Country** (`country`, text, optional): Enter the country of residence (if not in the United States).
* **Note** (`note`, note, optional): Enter any additional notes or comments about the household income.
* **Household Income 1-38** (`household_income_1`, number, required): Enter the household income for January to December. These fields are required for each month.
* **Household Income 39-50** (`household_income_39`, number, optional): Enter the household income for January to December. These fields are optional and for additional income information.
