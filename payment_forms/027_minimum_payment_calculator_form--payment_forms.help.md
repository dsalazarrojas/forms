# Minimum Payment Calculator Form - Help Guide
## Purpose
This form is designed to calculate the minimum payment amount on a loan or credit card based on the payment amount, interest rate, payment term, and other relevant factors.

## How To Complete This Form
1. Enter the payment amount in the "Payment Amount" field.
2. Select the interest rate from the dropdown list in the "Interest Rate" field.
3. Choose the payment term from the dropdown list in the "Payment Term" field.
4. Optionally, enter the payment date in the "Payment Date" field.
5. You may choose to fill in the other fields if required fields are not applicable or for additional information.

## Field-by-Field Explanation
* **Payment Amount (1)** (`payment_amount`, number, required/optional): Enter the total amount you want to pay off your debt.
* **Interest Rate (2)** (`interest_rate`, select_one, required/optional): Choose from the list: 9.99%, 12.99%, 18.99%, 20.99%, 24.99%.
* **Payment Term (3)** (`payment_term`, select_multiple, required/optional): Choose from the list: 30, 60, 90, 120 days.
* **Payment Date (4)** (`payment_date`, date, required/optional): Enter the date you want to make the payment (YYYY-MM-DD format).
* **Minimum Payment (5)** (`minimum_payment`, number, required/optional): Calculated automatically based on the input values.
* **Total Interest (6)** (`total_interest`, number, required/optional): Calculated automatically based on the input values.
* **Total Paid (7)** (`total_paid`, number, required/optional): Calculated automatically based on the input values.
* **Field 8 (8)** (`field_8`, text, required/optional): Optional field, not currently used in the calculation.
