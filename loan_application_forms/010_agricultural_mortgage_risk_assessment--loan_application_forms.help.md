# Agricultural Mortgage Risk Assessment - Help Guide
## Purpose
The Agricultural Mortgage Risk Assessment form is designed to collect information from farmers and agriculturalists to assess the risks associated with their mortgage applications. This form is used internally by agricultural mortgage officers to evaluate loan applications and make informed decisions.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide your name as the primary applicant.
2. Enter the name of the farm or agricultural entity you are applying for the loan on.
3. Enter the amount of money you are requesting for the loan.
4. Provide information about the size of your farm or agricultural operation.
5. Describe the ownership status of the land you are applying for the loan on.
6. Enter your annual revenue from the farm or agricultural operation.
7. Enter the number of years the farm or agricultural operation has been active.
8. Enter your current credit score or equivalent.
9. Describe the collateral you are offering for the loan.
10. Enter your debt-to-income ratio.
11. Identify any risk factors associated with your farm or agricultural operation.
12. Make an initial assessment of whether to approve or deny the loan application.
13. Optionally, add any internal comments or notes about the application.

## Field-by-Field Explanation
- **Borrower Name** (`borrower_name`, text, required): Enter your name as the primary applicant for the loan.
- **Farm Name** (`farm_name`, text, required): Enter the name of the farm or agricultural entity you are applying for the loan on.
- **Loan Amount Requested** (`loan_amount`, number, required): Enter the amount of money you are requesting for the loan.
- **Farm Size** (`farm_size`, number, required): Enter the total acres operated by your farm or agricultural operation.
- **Ownership Status** (`ownership_status`, select_one, required): Choose the ownership status of the land you are applying for the loan on. Options are Fully Owned, Leased, Mixed (Owned & Leased), or Sharecropping.
- **Annual Revenue** (`annual_revenue`, number, required): Enter your gross revenue from the last tax year.
- **Years in Operation** (`years_operation`, number, required): Enter the number of years the farm or agricultural operation has been active.
- **Credit Score** (`credit_score`, number, required): Enter your current credit score or equivalent.
- **Collateral Description** (`collateral_description`, text, required): Describe the assets you are offering as collateral for the loan.
- **Debt-to-Income Ratio** (`dti_ratio`, number, required): Enter your current debt-to-income ratio.
- **Risk Factors** (`risk_factors`, text, required): Identify any potential risks associated with your farm or agricultural operation.
- **Approval Recommendation** (`recommendation`, select_one, required): Make an initial assessment of whether to approve or deny the loan application. Options are Approve, Deny, Further Review Required, or Conditional Approval.
- **Officer Notes** (`officer_notes`, text, optional): Optionally, add any internal comments or notes about the application.
