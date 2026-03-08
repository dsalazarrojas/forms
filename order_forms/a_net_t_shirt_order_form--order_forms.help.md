# A/R Cleanup Quote Request - Help Guide
## Purpose

This form is designed to collect information from clients requesting Accounts Receivable (A/R) cleanup services.

## How To Complete This Form

1. Enter your full name in the "Requestor name" field.
2. Enter your company's name in the "Company name" field.
3. Provide your best address for contact in the "Contact email" field.
4. If you need to be contacted by phone, enter your phone number in the "Contact phone" field.
5. If applicable, enter the approximate total number of open AR accounts in the "Number of open AR accounts" field.
6. Enter the total AR balance in USD, including cents if necessary, in the "Total accounts receivable balance (USD)" field.
7. If known, enter the average days past due for the AR balance in the "Average days past due" field.
8. Select all applicable priority issues that need to be addressed in the "Priority issues to address (select all)" field.
9. Choose your preferred engagement model for the project from the "Preferred engagement model" dropdown options.
10. If applicable, enter the expected timeline for the project in weeks in the "Expected timeline (weeks)" field.
11. Select all the required service components for the project in the "Required service components (select all)" field.
12. If necessary, provide additional details or constraints for the project in the "Additional project details or constraints" field.

## Field-by-Field Explanation

* **Requestor name** (`requestor_name`, `text`, required): This is the full name of the person requesting the A/R cleanup quote.
* **Company name** (`company_name`, `text`, required): This is the name of the client's company.
* **Contact email** (`contact_email`, `email`, required): This is the best address for the person who should be contacted regarding the quote.
* **Contact phone** (`contact_phone`, `phone`, optional): If you need to be contacted by phone, enter your phone number here.
* **Number of open AR accounts** (`number_of_open_accounts`, `integer`, required): If applicable, enter the total number of open AR accounts.
* **Total AR balance** (`total_ar_balance`, `decimal`, required): Enter the total AR balance in USD, including cents if necessary.
* **Average days past due** (`average_days_past_due`, `integer`, optional): If known, enter the average days past due for the AR balance.
* **Priority issues to address (select all)** (`priority_issues`, `select_multiple`, optional): Select all applicable issues that need to be addressed, such as duplicate invoices, incorrect balances, missing remittance, unapplied payments, customer disputes, or aging reconciliation.
* **Preferred engagement model** (`preferred_engagement_model`, `select_one`, required): Choose your preferred engagement model from the dropdown options, such as hourly consulting, fixed-fee project, contingency-based, or monthly retainer.
* **Expected timeline (weeks)** (`expected_timeline_weeks`, `integer`, optional): If applicable, enter the expected timeline for the project in weeks.
* **Required service components (select all)** (`required_services`, `select_multiple`, required): Select all required service components for the project, such as reconciliation, collections outreach, reporting & dashboards, process remediation, or staff training.
* **Additional project details or constraints** (`additional_details`, `text`, optional): If necessary, provide additional project details or constraints that are not listed in the above fields.
