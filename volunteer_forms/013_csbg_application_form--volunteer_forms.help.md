# CSBG Application Form - Help Guide
## Purpose
The CSBG Application Form is a document used to collect information for the Community Services Block Grant program. It helps determine the applicant's eligibility for the services provided by the program.

## How To Complete This Form
1. Please provide your full name.
2. Enter your date of birth in the format DD/MM/YYYY.
3. Enter your social security number in the format XXX-XX-XXXX.
4. Select your gender from the list provided (Male, Female, Non-Binary, Prefer not to say).
5. Enter the number of people in your household.
6. Enter your total monthly household income before taxes.
7. Select your primary source of income from the list provided (Employment, Social Security, SSI, Pension, Unemployment, Child Support, No Income).
8. Choose all services you need from the list provided (Housing Assistance, Utility Assistance, Food Assistance, Employment Training, Transportation, Emergency Services).
9. Select your current housing status from the list provided (Rent, Own, Staying with friends, Homeless, Public Housing).
10. Choose your employment status from the list provided (Employed Full-time, Employed Part-time, Unemployed, Retired, Student, Disabled).
11. Answer whether you have served in the military.
12. Declare that the information provided is true and correct.

## Field-by-Field Explanation
* **Full Name of Applicant** (`applicant_name`, text, required): Enter your full name as it appears on your identification documents.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth in the format DD/MM/YYYY.
* **Social Security Number** (`social_security_num`, text, required): Enter your social security number in the format XXX-XX-XXXX.
* **Gender** (`gender`, select_one, required): Select your gender from the list provided.
* **Total Number of People in Household** (`household_size`, number, required): Enter the number of people living in your household, including yourself.
* **Total Monthly Household Income** (`monthly_household_income`, number, required): Enter your household's monthly income before taxes.
* **Primary Source of Income** (`income_source`, select_one, required): Select your primary source of income from the list provided.
* **Services Needed** (`requested_services`, select_multiple, required): Check all services you need from the list provided.
* **Current Housing Status** (`current_housing_status`, select_one, required): Select your current housing status from the list provided.
* **Employment Status** (`employment_status`, select_one, required): Select your employment status from the list provided.
* **Military Service** (`military_service`, select_one, required): Answer whether you have served in the military.
* **Certification** (`certification_statement`, select_one, required): Declare that the information provided is true and correct.
