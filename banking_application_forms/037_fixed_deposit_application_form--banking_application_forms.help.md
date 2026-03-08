# Fixed Deposit Application Form - Help Guide
## Purpose
This form is designed to gather information from customers applying for a fixed deposit program, which is a type of savings account that offers a higher interest rate than a standard savings account in exchange for keeping a fixed amount in the account for a specified term.

## How To Complete This Form
1. Fill out the form accurately and completely.
2. Ensure that you provide all required information (marked as `required: true`).
3. Review your information carefully before submitting the form.

## Field-by-Field Explanation

* **Customer Name** (`customer_name`, `text`, required: false): Please enter your name as it appears on your official documentation.
* **Customer Email** (`customer_email`, `email`, required: true): Enter your email address that you use to communicate with us.
* **Fixed Deposit Amount** (`fixed_deposit_amount`, `number`, required: true): Enter the fixed amount you wish to deposit into your account.
* **Loan Term** (`loan_term`, `select_one`, required: true):
	+ Select 6 months for a 6-month fixed deposit term.
	+ Select 12 months for a 12-month fixed deposit term.
	+ Select 24 months for a 24-month fixed deposit term.
* **Payment Method** (`payment_method`, `select_multiple`, required: true):
	+ Select "Yes" if you agree to the payment terms.
	+ Select "No" if you do not agree to the payment terms.
* **Approval Date** (`approval_date`, `date`, required: false): This field is optional and will be auto-populated once your application is approved.
* **Fixed Deposit Status** (`fixed_deposit_status`, `text`, required: false): This field will be populated once your application is approved and your fixed deposit account is activated.
