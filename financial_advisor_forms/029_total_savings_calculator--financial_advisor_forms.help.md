# Total Savings Calculator - Help Guide
## Purpose
The Total Savings Calculator is designed to help users calculate the total amount saved over a period of time, considering factors such as GIC type, years, and interest rate.

## How To Complete This Form
To use the Total Savings Calculator, follow these steps:

1. Select the type of GIC (Guaranteed Investment Certificate) you are using:
	* Cash: A cash GIC is a savings account that earns a fixed interest rate for a specific period.
	* Term GIC: A term GIC is a savings account that earns a fixed interest rate for a specific term.
	* Other: Selecting "Other" will allow you to input custom values for years and interest rate.
2. Input the number of years you have saved:
	* This field will only be visible if you selected "Other" as the GIC type.
3. Input the number of months:
	* This field will only be visible if you selected "Other" as the GIC type.
4. Input the monthly value of your savings:
	* This is the amount you save each month.
5. Select the interest rate:
	* 0.00%: No interest added.
	* 1.00%: 1% interest added each month.
	* 2.00%: 2% interest added each month.
6. The form will calculate the total amount saved, including the total monthly interest added.
7. Review the calculated total amount saved.

## Field-by-Field Explanation

* **Gic Type** (`gic_type`, select_one, required: false): Choose the type of GIC you are using.
* **Years** (`years`, number, options: [], required: false): If you selected "Other" as the GIC type, input the number of years you have saved.
* **Months** (`months`, number, options: [], required: false): If you selected "Other" as the GIC type, input the number of months.
* **Monthly Value** (`monthly_value`, number, options: [], required: false): Input the amount you save each month.
* **Total Amount Saved** (`total_savings`, number, required: false): This is the total amount saved. Note: This field will be populated automatically based on user input.
* **Interest Rate** (`interest_rate`, select_one, required: false): Select the interest rate to be added to your savings.
* **Monthly Interest Added** (`monthly_interest_added`, number, required: false): This is the total monthly interest added to your savings. Note: This field will be populated automatically based on user input.
* **Total Amount Saved Calculated** (`total_savings_calculated`, number, required: true): This is the total amount saved calculated based on user input.
