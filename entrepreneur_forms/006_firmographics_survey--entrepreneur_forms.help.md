# firmographics_survey - Help Guide
## Purpose
The firmographics survey form is designed to collect basic information about a company, including contact details, industry, and company status. This form helps to gather data that can be used for sales or marketing purposes.

## How To Complete This Form
To complete this form, follow these steps:

1. Select "Yes" or "No" for the "Contact Details" page to indicate whether the contact information is up-to-date.
2. Enter the company email address in the "contact_email" field.
3. Select the number of employees from the "number_employees" drop-down menu.
4. Enter the industry in which the company operates.
5. Answer "Yes" or "No" to whether the company is a certain type (e.g. yes/no).
6. Select the company's revenue range and employee count from the drop-down menus.
7. Answer "Yes" or "No" to whether the company is active/inactive and its size.
8. Select the business focus of the company (e.g. yes/no).
9. Enter the company's website URL.

## Field-by-Field Explanation

* **Contact Details** (`contact_details`, select_one, not required)
	+ This field indicates whether the provided contact details are up-to-date or not.
	+ Example: "Yes", "No"
* **Contact Email** (`contact_email`, text, not required)
	+ Enter the email address of the company contact person.
* **Number of Employees** (`number_employees`, number, not required)
	+ Select the number of employees in the company.
* **Industry** (`industry`, text, not required)
	+ Enter the industry in which the company operates.
* **Company Type** (`company_type`, select_one, not required)
	+ Answer "Yes" or "No" to whether the company is a certain type.
	+ Example: "Yes", "No"
* **Founded** (`founded`, date, not required)
	+ Enter the date the company was founded.
	+ Format: YYYY-MM-DD
* **Revenue Range** (`revenue_range`, select_one, not required)
	+ Select the revenue range of the company.
* **Employee Range** (`employee_range`, select_one, not required)
	+ Select the number of employees in the company.
* **Company Size** (`company_size`, select_one, not required)
	+ Answer "Yes" or "No" to whether the company is of a certain size.
	+ Example: "Yes", "No"
* **Company Status** (`company_status`, select_one, not required)
	+ Answer "Active" or "Inactive" to the company's status.
* **Business Focus** (`business_focus`, select_one, not required)
	+ Answer "Yes" or "No" to the company's business focus.
	+ Example: "Yes", "No"
* **Website** (`website`, text, not required)
	+ Enter the company's website URL.
