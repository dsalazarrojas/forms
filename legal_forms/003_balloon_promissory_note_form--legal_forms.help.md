# Balloon Promissory Note Form - Help Guide
## Purpose

This form is used to create a balloon promissory note, a financial agreement between a lender and borrower for a loan with a large, lump-sum payment at the end of the loan term.

## How To Complete This Form

1. Ensure that you have all the necessary information to complete the form, including the names and addresses of both the lender and borrower, the loan amount, interest rate, repayment schedule, and balloon payment details.
2. Fill in the "Lender Name", "Borrower Name", and "Borrower Address" fields with the relevant information.
3. In the "Principal and Interest Terms" section, enter the "Principal Loan Amount", specify the "Annual Interest Rate (%)" and select the "Effective Date of Note".
4. In the "Payment Schedule" section, enter the "Monthly Payment Amount" and select the "Date of First Payment".
5. In the "Balloon Payment Details" section, enter the "Maturity Date (Balloon Payment Due)" and "Estimated Balloon Payment Amount".
6. In the "Prepayment Penalty" section, select the prepayment penalty option that applies.
7. In the "Borrower Acknowledgment" section, select all the checkboxes to confirm the borrower's understanding of the loan terms.
8. If applicable, fill in the "Witness Name" field with the name of the person witnessing the agreement.

## Field-by-Field Explanation

* **Lender Name** (`lender_name`, text, required): Enter the name of the individual or entity lending the funds.
* **Borrower Name** (`borrower_name`, text, required): Enter the name of the individual or entity receiving the funds.
* **Borrower Address** (`borrower_address`, text, required): Enter the full legal address of the borrower.
* **Principal Loan Amount** (`principal_amount`, number, required): Enter the total amount borrowed (e.g., 50000).
* **Annual Interest Rate (%)** (`interest_rate`, number, required): Enter the annual interest rate as a percentage (e.g., 5.5).
* **Effective Date of Note** (`effective_date`, date, required): Enter the date the loan agreement begins.
* **Monthly Payment Amount** (`monthly_payment`, number, required): Enter the regular installment amount.
* **Date of First Payment** (`first_payment_date`, date, required): Select the starting date for installments.
* **Maturity Date (Balloon Payment Due)** (`balloon_maturity_date`, date, required): Enter the date the final large payment is due.
* **Estimated Balloon Payment Amount** (`balloon_amount`, number, required): Enter the projected final payment including any remaining principal.
* **Is there a prepayment penalty?** (`prepayment_penalty`, select_one, required): Specify if the borrower is penalized for paying early.
	+ **No Penalty**: Select this if there's no penalty for prepayment.
	+ **1% of Principal**: Select this if the borrower is penalized 1% of the principal for early repayment.
	+ **2% of Principal**: Select this if the borrower is penalized 2% of the principal for early repayment.
	+ **Fixed Fee**: Select this if a fixed fee is applied for early repayment.
* **Borrower Acknowledgment** (`legal_acknowledgment`, select_multiple, required): Select all checkboxes to confirm the borrower's understanding of the loan terms.
	+ **I understand this is a balloon note with a large final payment**: Check this box to acknowledge the balloon payment structure.
	+ **I agree to the interest and principal repayment schedule**: Check this box to confirm agreement with the repayment terms.
	+ **I acknowledge the maturity date**: Check this box to acknowledge the final payment date.
* **Witness Name (Optional)** (`witness_name`, text, optional): Enter the name of the person witnessing the agreement, if present.
