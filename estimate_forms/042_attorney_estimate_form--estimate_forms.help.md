<thinking>...I will assume that the form is intended to collect information about an estimate of work to be performed by an attorney for a client, including details about the firm and the client, as well as the scope and cost of the work. I will also assume that the form is meant to be completed by the law firm, providing their information and the details of their work, including the estimated hours and total fee...I will review the form and provide a detailed help guide for each field in the following sections...</thinking>

# Attorney Estimate Form - Help Guide
## Purpose
This form is used to create an estimate for a legal matter. It collects information about the law firm providing the service, the client, and the details of the work to be performed, including estimated hours, total fee, and other relevant information.

## How To Complete This Form

1. Start by selecting the **Law Firm Information** page.
2. Enter the **Law Firm Name**, **Firm Address**, **Firm Phone Number**, and **Firm Email** as required.
3. Click **Submit** to proceed to the next page.
4. On the **Client Information** page, enter the **Client Name**, **Client Email**, **Client Phone**, and **Client Address** as required.
5. Click **Submit** to proceed to the next page.
6. Enter the **Estimate Date**, **Estimate Number** (if applicable), **Case or Matter Description**, **Legal Services Required**, **Scope of Work**, **Hourly Rate**, **Estimated Hours**, and **Estimated Total Fee** as required.
7. For **Payment Terms**, select when payment is due from the options provided.
8. Finally, select the **Estimate Valid Until** date.

## Field-by-Field Explanation

* **Law Firm Information** (`law_firm_information`, `note`, required: false): Enter any additional information about your law firm here.
* **Law Firm Name** (`firm_name`, `text`, required: true): Enter the name of your law firm.
* **Firm Address** (`firm_address`, `text`, required: true): Enter the street address of your law firm.
* **Firm Phone Number** (`firm_phone`, `text`, required: true): Enter the phone number of your law firm.
* **Firm Email** (`firm_email`, `email`, required: true): Enter the email address of your law firm.
* **Attorney Name** (`attorney_name`, `text`, required: true): Enter the name of the attorney providing the service.
* **Client Information** (`client_information`, `note`, required: false): Enter any additional information about the client here.
* **Client Name** (`client_name`, `text`, required: true): Enter the name of the client.
* **Client Email** (`client_email`, `email`, required: true): Enter the email address of the client.
* **Client Phone** (`client_phone`, `text`, required: true): Enter the phone number of the client.
* **Client Address** (`client_address`, `text`, required: true): Enter the address of the client.
* **Estimate Details** (`estimate_details`, `note`, required: false): Enter any additional information about the estimate here.
* **Estimate Date** (`estimate_date`, `date`, required: true): Enter the date the estimate was prepared.
* **Estimate Number** (`estimate_number`, `text`, required: false): Enter any reference number for the estimate (optional).
* **Case or Matter Description** (`case_matter`, `text`, required: true): Enter a description of the legal matter.
* **Legal Services Required** (`legal_services`, `text`, required: true): Enter the services to be performed.
* **Scope of Work** (`scope_of_work`, `text`, required: true): Enter a detailed description of the scope of work.
* **Hourly Rate** (`hourly_rate`, `number`, required: true): Enter the rate per hour in USD.
* **Estimated Hours** (`estimated_hours`, `number`, required: true): Enter the estimated number of hours expected.
* **Estimated Total Fee** (`estimated_fee`, `number`, required: true): Enter the estimated total fee (hourly rate multiplied by hours).
* **Additional Costs** (`additional_costs`, `number`, required: false): Enter any additional costs, such as court fees, research, etc.
* **Retainer Amount** (`retainer_amount`, `number`, required: false): Enter an upfront payment required.
* **Payment Terms** (`payment_terms`, `select_one`, required: true): Select when payment is due from the options provided.
* **Estimate Valid Until** (`estimate_validity`, `date`, required: true): Enter the date the estimate expires.
