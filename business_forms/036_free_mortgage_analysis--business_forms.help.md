# Free Mortgage Analysis - Help Guide
## Purpose
This form helps users understand the implications of taking out a mortgage. It guides you through providing information about your mortgage amount, interest rate, loan term, and other relevant data to calculate various mortgage aspects.

## How To Complete This Form
To get the most out of this form, follow these steps:

* Fill out the Mortgage Amount field with the initial amount borrowed.
* Enter the Interest Rate field with the rate at which the interest on the mortgage is charged.
* Enter the Loan Term field with the duration of the mortgage in years.
* You can leave the Annual Rate field empty, as it seems to be redundant with the Interest Rate field.
* To calculate the Monthly Payment, you can ignore the Monthly Payment field and look at the result of the calculation.

## Field-by-Field Explanation
* **Mortgage Amount** (`mortgage_amount`, `number`, required/optional: `false`): The initial amount borrowed for the mortgage.
* **Interest Rate** (`interest_rate`, `number`, required/optional: `false`): The rate at which the interest on the mortgage is charged.
* **Loan Term** (`loan_term`, `number`, required/optional: `false`): The duration of the mortgage in years.
* **Annual Rate** (`annual_rate`, `number`, required/optional: `false`): This field seems to be redundant with the Interest Rate field. Please ignore it.
* **Monthly Payment** (`monthly_payment`, `number`, required/optional: `false`): The calculated monthly payment amount based on the mortgage amount and interest rate. This field is automatically generated.
* **Total Interest** (`total_interest`, `number`, required/optional: `false`): The total interest paid over the life of the mortgage.
* **Years Owned** (`years_owned`, `number`, required/optional: `false`): The number of years the mortgage has been in effect.
* **Month Owned** (`month_owned`, `number`, required/optional: `false`): The number of months the mortgage has been in effect. This field seems to be redundant with the Years Owned field. Please ignore it.
* **Interest Paid** (`interest_paid`, `number`, required/optional: `false`): The total interest paid on the mortgage.
* **Principal Paid** (`principal_paid`, `number`, required/optional: `false`): The total principal paid on the mortgage.
* **Total Balance** (`total_balance`, `number`, required/optional: `false`): The remaining balance on the mortgage after all payments.
