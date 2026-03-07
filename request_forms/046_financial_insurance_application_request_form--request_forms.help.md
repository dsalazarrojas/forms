<thinking>
The Financial Insurance Application Request Form is used to collect customer data for a financial insurance application. This form is meant to gather essential information about the customer, such as their contact details, financial history, and employment status. The data collected will be used to determine eligibility for a financial insurance product. Please note that only one person should fill out this form per household.
</thinking>

# Financial Insurance Application Request Form - Help Guide
## Purpose
The Financial Insurance Application Request Form is used to collect customer data for a financial insurance application. This form is meant to gather essential information about the customer, such as their contact details, financial history, and employment status. The data collected will be used to determine eligibility for a financial insurance product.

## How To Complete This Form
To complete this form, please follow the steps below:

* Enter your name and date of birth to identify you as a customer.
* Select your employment status (Active or Inactive).
* Indicate your income and employment length.
* Confirm that you have outstanding loans or not.
* Declare whether you have a financial insurance product or not.
* Indicate your financial insurance history (Yes or No).
* Fill in your address and contact details (phone and email).
* Optionally, provide additional information about your financial insurance history and product details.
* Finally, submit the form to initiate the financial insurance application process.

## Field-by-Field Explanation

* **Customer First Name** (`customer_first_name`, text, required)
	+ Enter your first name as it appears on your identification documents.
* **Customer Last Name** (`customer_last_name`, text, required)
	+ Enter your last name as it appears on your identification documents.
* **Customer Date of Birth** (`customer_date_of_birth`, date, required)
	+ Enter your date of birth in the format dd/mm/yyyy.
* **Customer Address** (`customer_address`, text, required)
	+ Enter your physical address where you can be contacted.
* **Financial Institution** (`financial_institution`, select_one, required)
	+ Select Yes if you have a financial insurance product, No otherwise.
* **Customer Income** (`customer_income`, number, required)
	+ Enter your annual income from all sources.
* **Customer Employment Status** (`customer_employment_status`, select_multiple, required)
	+ Select Active if you are currently employed, Inactive otherwise.
* **Customer Employment Length** (`customer_employment_length`, number, required)
	+ Enter the length of time you have been employed.
* **Customer Credit Score** (`customer_credit_score`, number, required)
	+ Enter your current credit score.
* **Customer Loans Outstanding** (`customer_loans_outstanding`, select_multiple, required)
	+ Select Yes if you have outstanding loans, No otherwise.
* **Financial Insurance Product** (`financial_insurance_product`, select_one, required)
	+ Select Yes if you have a financial insurance product, No otherwise.
* **Customer Financial Insurance History** (`customer_financial_insurance_history`, select_one, required)
	+ Select Yes if you have a financial insurance history, No otherwise.
* **Customer Other Financial Insurance History** (`customer_other_financial_insurance_history`, text, optional)
	+ Provide any additional information about your financial insurance history.
* **Customer Financial Insurance Product Details** (`customer_financial_insurance_product_details`, text, optional)
	+ Provide any additional information about your financial insurance product.
* **Form Submitted By** (`form_submitted_by`, text, required)
	+ Enter your name as it appears on your identification documents.
* **Form Date Submitted** (`form_date_submitted`, date, required)
	+ Enter the date and time you submit this form.
* **Form Time Submitted** (`form_time_submitted`, time, required)
	+ Enter the time you submit this form.
* **Form Note** (`form_note`, note, optional)
	+ Provide any additional comments or information about your form submission.
* **Form Email** (`form_email`, email, required)
	+ Enter your email address for correspondence.
* **Form Phone** (`form_phone`, text, optional)
	+ Enter your phone number for contact.
* **Form Financial Insurance Request** (`form_financial_insurance_request`, text, optional)
	+ Provide any additional information or comments about your financial insurance request.
* **Form Financial Insurance Status** (`form_financial_insurance_status`, text, optional)
	+ Provide any additional information or comments about the status of your financial insurance application.
* **Form Financial Insurance Note** (`form_financial_insurance_note`, note, optional)
	+ Provide any additional comments or information about your financial insurance application.
* **Form Financial Insurance Decision** (`form_financial_insurance_decision`, select_one, required)
	+ Select Yes if you are approved for financial insurance, No otherwise.
