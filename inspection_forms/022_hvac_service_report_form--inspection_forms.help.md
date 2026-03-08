# HVAC Service Report Form - Help Guide
## Purpose
The HVAC Service Report Form is used to report on the service performed on heating, ventilation, and air conditioning (HVAC) systems. It gathers information from customers about their HVAC systems to ensure accurate and efficient completion of services.

## How To Complete This Form
To complete this form, follow these steps:
1. Enter the customer's first name in the First Name field.
2. Enter the customer's last name in the Last Name field.
3. If the customer is from a company, enter the company name in the Company field.
4. Enter the customer's address in the Address field.
5. Enter the customer's phone number in the Phone field.
6. Enter the customer's email in the Email field.
7. Select the type of HVAC system serviced from the System Type dropdown menu.
8. Enter the age of the system in the System Age field.

## Field-by-Field Explanation
* **First Name** (`first_name`, text, required: false): Enter the customer's first name.
* **Last Name** (`last_name`, text, required: false): Enter the customer's last name.
* **Company** (`company`, text, required: false): Enter the customer's company name if applicable.
* **Address** (`address`, text, required: false): Enter the customer's address.
* **Phone** (`phone`, text, required: false): Enter the customer's phone number.
* **Email** (`email`, email, required: false): Enter the customer's email address.
* **System Type** (`system_type`, select_one, required: false): Select one of the following options:
	+ Heating
	+ Cooling
	+ Both
	+ None
* **System Age** (`system_age`, number, required: false): Enter the age of the HVAC system in years.

## Tips
* Double-check that all required fields are filled out before submitting the form.
* Ensure that the System Type selected is accurate based on the service performed.
* If the system is not applicable, select "None" for System Type.
* If the system age is not known, enter "0" in the System Age field.
* If the customer's email is not available, you can leave it blank, but it's recommended to provide it for accurate reporting.
