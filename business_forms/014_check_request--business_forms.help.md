# Check Request - Help Guide

## Purpose

<thinking>

* The Check Request form is used to request a company check for a specific expense or payment.
* This form helps the requester gather all the necessary information about the request, including details about the payee, the financial transaction, and any supporting documentation.
* It ensures that the requester provides accurate and complete information to facilitate proper processing of the request.

</thinking>

## How To Complete This Form

* Fill out the form completely, including all required fields.
* Review the form for completeness before submitting.
* If you have any issues or questions, contact the responsible department (e.g., Finance) for assistance.

## Field-by-Field Explanation

* **Requester Name (Section: Requester Information)** (`requester_full_name`, `text`, required): Enter your full name as it appears on your personnel badge or in our system.
* **Department (Section: Requester Information)** (`department_name`, `select_one`, required): Select the department you belong to from the list: Finance, Marketing, Operations, Human Resources, IT, Sales.
* **Date of Request (Section: Requester Information)** (`date_of_request`, `date`, required): Enter the date of the request in the format mm/dd/yyyy.
* **Date Payment Needed (Section: Requester Information)** (`date_payment_needed`, `date`, required): Enter the date when the payment is needed in the format mm/dd/yyyy.
* **-- Payee Details -- (Section: Payee Details)** (`payee_legal_name`, `text`, required): Enter the payee's name as it appears on the check.
* **Payee Mailing Address (Section: Payee Details)** (`payee_mailing_address`, `text`, required): Enter the payee's mailing address.
* **-- Financial Details -- (Section: Financial Details)** (`check_amount_requested`, `number`, required): Enter the amount requested in the format 0.00.
* **Purpose of Expenditure (Section: Financial Details)** (`purpose_of_expenditure`, `text`, required): Describe the purpose of the expenditure.
* **Budget / GL Account Code (Section: Financial Details)** (`budget_code_gl`, `text`, required): Enter the budget code associated with the request.
* **Project Code (Section: Financial Details)** (`project_code_optional`, `text`, optional): Enter the project code if applicable.
* **-- Supporting Documentation -- (Section: Supporting Documentation)** (`invoice_receipt_number`, `text`, required): Enter the invoice or receipt number.
* **Check Delivery Method (Section: Supporting Documentation)** (`check_delivery_method`, `select_one`, required): Select one of the options: Mail to Payee, Pickup by Requester, Overnight Courier (Extra Fee).
* **Approving Manager Name (Section: Supporting Documentation)** (`approving_manager_name`, `text`, required): Enter the name of the approving manager.
* **I certify this request is for legitimate business purposes (Section: Supporting Documentation)** (`requester_auth_ack`, `select_one`, required): Select I Certify.
* **Invoice or Receipt Number (Section: Supporting Documentation)** (`invoice_receipt_number`, `text`, required): Enter the invoice or receipt number.
* **Extra Fee (Section: Supporting Documentation)**: Not applicable in this version of the form.
