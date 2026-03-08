This form is intended to gather information for a quote from an auditor, including details about the client, the audit scope, and the proposed services and timeline. The form is used to generate a quote for the auditor's services, which will be used to secure a job. The form should be completed only once for each quote, and the information should not be duplicated or submitted multiple times. Before filling out the form, ensure that all the necessary information is accurate and complete, as this will ensure a clear and accurate quote is generated.

# Auditor Quote Form - Help Guide

## Purpose
This form is used to generate a quote for an audit service from an auditor. It captures information about the client, the audit scope, and the proposed services and timeline.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the **Quote Date**, which is the date this quote is issued.
2. Enter the **Quote Number**, a unique identifier for this quote.
3. Enter the **Client Name** and **Client Company Name**, providing the full name and name of the client organization.
4. Enter the **Client Email Address** and **Client Phone Number**, which will be used for quote submission and communication.
5. Enter the **Quote Valid Until Date**, the expiration date for this quote.
6. Select the **Type of Audit Service**, which includes options like Financial Audit, Internal Audit, Compliance Audit, Tax Audit, IT Audit, or Other.
7. Provide a brief **Audit Scope Description**, which describes what will be audited.
8. Select the **Client Annual Revenue Range**, which affects the quote amount.
9. Enter the **Estimated Audit Hours**, the approximate total hours needed.
10. Enter the **Hourly Rate**, which is the rate per hour.
11. If applicable, enter the **Fixed Fee Amount** for a flat fee for audit services.
12. If applicable, enter the **Estimated Travel Expenses** and **Out-of-Pocket Costs**.
13. Enter the **Total Estimated Cost**, which is the total quote amount.
14. If applicable, enter the **Contingent Fee Component**.
15. Select the **Payment Terms**, which includes options like 50% Upfront, 50% Upon Completion, Monthly Invoicing, Payment Upon Completion, or Custom Arrangement.
16. Enter the **Proposed Audit Start Date** and **Proposed Audit End Date**, which define the timeline for the audit.
17. If applicable, enter the details of the **Audit Team Members**, including names and roles.
18. If applicable, select the **Professional Certifications** of the audit team.
19. If applicable, select the additional **Services Offered** beyond the base audit.
20. Select if **Terms and Conditions** are attached.
21. If applicable, enter any **Special Notes or Requirements**.

## Field-by-Field Explanation

* **Quote Date (1)** (`quote_date`, date, required): Date this quote is issued
* **Quote Number (2)** (`quote_number`, text, required): Unique identifier for this quote
* **Client Name (3)** (`client_name`, text, required): Full name of the client
* **Client Company Name (4)** (`client_company`, text, required): Name of client organization
* **Client Email Address (5)** (`client_email`, email, required): Email for quote submission
* **Client Phone Number (6)** (`client_phone`, text, required): Contact phone
* **Quote Valid Until Date (7)** (`quote_valid_until`, date, required): Expiration date for this quote
* **Type of Audit Service (8)** (`audit_type`, select_one, required): What audit service is quoted
	+ Options: Financial Audit, Internal Audit, Compliance Audit, Tax Audit, IT Audit, Other
* **Audit Scope Description (9)** (`audit_scope_description`, text, required): Brief description of what will be audited
* **Client Annual Revenue Range (10)** (`company_revenue_range`, select_one, required): Estimated annual revenue
	+ Options: Under $500k, $500k - $1M, $1M - $5M, $5M - $10M, $10M - $50M, Over $50M
* **Estimated Audit Hours (11)** (`estimated_hours`, number, required): Approximate total hours needed
* **Hourly Rate (12)** (`hourly_rate`, number, required): Rate per hour
* **Fixed Fee Amount (13)** (`fixed_fee_option`, number, optional): Flat fee for audit services
* **Estimated Travel Expenses (14)** (`travel_expenses`, number, optional): Approximate travel costs
* **Out-of-Pocket Costs (15)** (`out_of_pocket_costs`, number, optional): Other direct costs
* **Total Estimated Cost (16)** (`total_estimate`, number, required): Total quote amount
* **Contingent Fee Component (17)** (`contingent_fee`, number, optional): Any contingent fee amount
* **Payment Terms (18)** (`payment_terms`, select_one, required): How payment should be made
	+ Options: 50% Upfront, 50% Upon Completion, Monthly Invoicing, Payment Upon Completion, Custom Arrangement
* **Proposed Audit Start Date (19)** (`timeline_start_date`, date, required): When audit would begin
* **Proposed Audit End Date (20)** (`timeline_end_date`, date, required): When audit would conclude
* **Audit Team Members (21)** (`audit_team_details`, text, optional): Names and roles of audit team
* **Professional Certifications (22)** (`certifications_included`, select_multiple, optional): Qualifications of audit team
	+ Options: CPA, CIA, CISA, CFE, Other Certifications
* **Additional Services Offered (23)** (`additional_services`, select_multiple, optional): Services beyond base audit
	+ Options: Management Letter, Controls Assessment, Fraud Consulting, Training, Follow-Up Audit, None
* **Terms and Conditions (24)** (`terms_and_conditions`, select_one, required): Standard T&C apply
	+ Options: Yes - Attached, Will Be Provided, Discussed Separately
* **Special Notes or Requirements (25)** (`special_notes`, text, optional): Any special considerations
