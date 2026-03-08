# Balloon Promissory Note Form - Help Guide
## Purpose
The Balloon Promissory Note Form is a loan agreement that allows a lender to lend money to a borrower with a larger final payment due at the loan's maturity. This form outlines the terms and conditions of the loan, including the loan amount, interest rate, repayment terms, and other relevant details.

## How To Complete This Form
1. Review the form carefully to understand the required fields and their implications.
2. Ensure you have all necessary information before starting.
3. Enter the borrower's personal information, including full name, address, email, and phone number.
4. Enter the lender's personal information, including name.
5. Specify the loan terms, including principal amount, interest rate, term in months, and payment frequency.
6. Indicate the balloon payment amount and due date.
7. Provide a description of any collateral securing the loan (optional).
8. Sign and date the document as the lender.

## Field-by-Field Explanation

* **Borrower full name** (`borrower_full_name`, `text`, **required**): Enter the full legal name of the borrower.
* **Borrower mailing address** (`borrower_address`, `text`, **required**): Enter the borrower's street address, city, state, and postal code.
* **Borrower email address** (`borrower_email`, `email`, **optional**): Enter the borrower's email address for notifications and communications.
* **Borrower phone number** (`borrower_phone`, `text`, **optional**): Enter the borrower's phone number, including country code if outside the US.
* **Lender name** (`lender_name`, `text`, **required**): Enter the name of the individual or organization lending the funds.
* **Loan principal amount** (`loan_principal_amount`, `number`, **required**): Enter the total principal amount of the loan.
* **Interest rate percent** (`interest_rate_percent`, `number`, **required**): Enter the annual interest rate as a percentage.
* **Loan term in months** (`loan_term_months`, `number`, **required**): Enter the total number of months over which payments are scheduled.
* **Payment frequency** (`payment_frequency`, `select_one`, **required**): Select the frequency of scheduled payments: Monthly, Quarterly, Semi-annually, or Annually.
* **Balloon payment amount** (`balloon_payment_amount`, `number`, **required**): Enter the larger final payment due at loan maturity.
* **Balloon payment due date** (`balloon_due_date`, `date`, **required**): Enter the date when the balloon payment is due.
* **Collateral description** (`collateral_description`, `text`, **optional**): Describe any collateral securing the loan or indicate none.
* **Lender signature name** (`lender_signature_name`, `text`, **required**): Enter the printed name of the authorized signatory.
* **Signature date** (`signature_date`, `date`, **required**): Enter the date the document is signed.
* **Lender signature date** (`lender_signature_name`, `date`, **required**) should have a more appropriate label, e.g. **Lender signature date**
