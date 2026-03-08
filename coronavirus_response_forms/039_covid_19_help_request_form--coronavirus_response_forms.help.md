# COVID 19 Help Request Form - Help Guide
## Purpose
The purpose of this form is to gather information about individuals or households affected by the COVID-19 pandemic, allowing us to provide targeted assistance and support.

## How To Complete This Form
To complete this form, simply follow these steps:

1. Provide your personal contact information, including your name, phone number, and email address.
2. Describe your situation, including how COVID-19 has affected you.
3. Indicate the type of assistance you need, such as financial support or medical supplies.
4. Provide details about your household, including the number of people living with you and any dependents.
5. Share your employment status, income, and savings available.
6. Report any existing health conditions and your COVID-19 status.
7. Indicate your level of urgency and the date you are requesting assistance.

## Field-by-Field Explanation

* **Name** (`requester_name`, `text`, required): Enter your name as it appears on your identification documents.
* **Phone Number** (`phone_number`, `text`, required): Enter your primary phone number where you can be reached.
* **Email Address** (`email_address`, `email`, required): Enter a valid email address where you can be contacted.
* **Address** (`address`, `text`, required): Enter your current address.
* **City or Town** (`city_town`, `text`, required): Enter the city or town where you live.
* **Zip Code** (`zip_code`, `text`, required): Enter your zip code.
* **Type of Assistance Needed** (`assistance_type`, `select_multiple`, required): Select all types of assistance that apply to you, such as:
	+ Financial assistance
	+ Grocery delivery
	+ Medical supplies
	+ Mental health support
	+ Housing support
	+ Childcare
	+ Employment assistance
	+ Transportation
	+ Other
* **Describe Your Situation** (`situation_description`, `text`, required): Provide a brief description of how COVID-19 has affected you or your household.
* **How COVID-19 Has Affected You** (`covid_impact`, `text`, required): Share how COVID-19 has impacted your daily activities, income, or overall well-being.
* **Household Size** (`household_size`, `number`, required): Enter the number of people living with you.
* **Number of Dependent Children** (`dependent_children`, `number`, optional): Enter the number of dependent children living with you.
* **Number of Elderly Dependents** (`elderly_dependents`, `number`, optional): Enter the number of elderly dependents living with you.
* **Current Employment Status** (`current_employment`, `select_one`, required): Select your current employment status:
	+ Employed
	+ Unemployed
	+ Self-employed
	+ Retired
	+ Student
	+ Other
* **Monthly Income** (`monthly_income`, `number`, optional): Enter your monthly income, if applicable.
* **Savings Available** (`savings_available`, `select_one`, required): Select how many months of savings you have available:
	+ None
	+ Less than 1 month
	+ 1-3 months
	+ 3-6 months
	+ More than 6 months
* **Existing Health Conditions** (`health_conditions`, `text`, optional): List any existing health conditions you have.
* **COVID-19 Status** (`covid_status`, `select_one`, optional): Select your current COVID-19 status:
	+ Never had COVID-19
	+ Currently have COVID-19
	+ Previously had COVID-19
	+ Unsure
* **Level of Urgency** (`urgency_level`, `select_one`, required): Select the level of urgency for your request:
	+ Immediate crisis
	+ Urgent
	+ Important
	+ Can wait
* **Request Date** (`request_date`, `date`, required): Enter the date you are requesting assistance.
