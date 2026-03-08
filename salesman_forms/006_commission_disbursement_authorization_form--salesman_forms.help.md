# Commission Disbursement Authorization Form - Help Guide
## Purpose
The Commission Disbursement Authorization Form is a document used to request authorization for commission disbursement to a third party.

## How To Complete This Form

1. Fill out the form with all required and optional information. Note that some fields may require manager or sales manager approval before submission.
2. Ensure that the form is accurate and complete before submission.
3. Check with the sales manager or finance department to prevent duplication of the form.

## Field-by-Field Explanation

* **Authorization Information** (`authorization_information`, `note`, **optional**): This field provides details about the commission disbursement.
* **Authorization Date** (`authorization_date`, `date`, **required**): Enter the date of this authorization request.
* **Authorization ID** (`authorization_id`, `text`, **required**): Enter a unique authorization reference number.
* **Employee Information** (`employee_information`, `note`, **optional**): This field provides details about the commission earner.
* **Employee Name** (`employee_name`, `text`, **required**): Enter the full legal name of the employee.
* **Employee ID** (`employee_id`, `text`, **required**): Enter the employee identification number.
* **Employee Email** (`employee_email`, `email`, **required**): Enter the contact email address of the employee.
* **Department** (`department`, `select_one`, **required**): Select the employee's department or division.
* **Commission Details** (`commission_details`, `note`, **optional**): Enter information about the commission being disbursed.
* **Commission Period** (`commission_period`, `text`, **required**): Enter the time period this commission covers.
* **Gross Commission Amount** (`gross_commission_amount`, `number`, **required**): Enter the total commission amount before deductions in USD.
* **Commission Rate** (`commission_rate`, `number`, **required**): Enter the commission percentage earned.
* **Sales Volume** (`sales_volume`, `number`, **optional**): Enter the total sales volume that generated this commission.
* **Disbursement Information** (`disbursement_information`, `note`, **optional**): This field provides information about where the commission should be sent.
* **Disbursement Method** (`disbursement_method`, `select_one`, **required**): Select how the commission should be paid, such as Direct Deposit, Check, Wire Transfer, or Payroll.
* **Third Party Recipient** (`third_party_recipient`, `select_one`, **required**): Select if commission is being sent to a third party, Yes or No.
* **Recipient Name** (`recipient_name`, `text`, **optional**): Enter the full name of the third party recipient.
* **Recipient Type** (`recipient_type`, `select_one`, **optional**): Select the type of third party recipient, such as Bank Account, Investment Firm, Collection Agency, Legal Representative, or Other.
* **Disbursement Percentage** (`disbursement_percentage`, `number`, **optional**): Enter the percentage of commission being disbursed to the third party.
* **Disbursement Amount** (`disbursement_amount`, `number`, **optional**): Enter the dollar amount being disbursed to the third party.
* **Recipient Account Information** (`recipient_account_info`, `text`, **optional**): Enter the account details for the third party payment.
* **Authorization Reason** (`authorization_reason`, `text`, **optional**): Enter the reason for third party disbursement.
* **Employee Signature Date** (`employee_signature_date`, `date`, **required**): Enter the date of employee authorization.
* **Manager Approval** (`manager_approval`, `select_one`, **required**): Select manager approval status, Approved, Pending, or Denied.
* **Manager Name** (`manager_name`, `text`, **optional**): Enter the name of the approving manager.
