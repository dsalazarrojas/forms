# Cancel E Transfer Request Form - Help Guide
## Purpose
This form is used to cancel electronic transfers that have not been successfully completed or are still pending. It collects information about the transfer and the reasons for cancellation to facilitate the cancellation process.

## How To Complete This Form

To complete this form, please follow these steps:

1. Fill out the required fields with the requested information.
2. Select the correct option from the drop-down menus.
3. Provide any additional comments or details if necessary.

## Field-by-Field Explanation

* **Requester Name** (`requester_name`, text, required): Enter the full name of the person requesting the cancellation.
* **Requester Email Address** (`requester_email`, email, required): Enter the email address of the person requesting the cancellation.
* **Requester Phone Number** (`requester_phone`, text, required): Enter the phone number of the person requesting the cancellation.
* **Account Number** (`account_number`, text, required): Enter the last 6 digits of the account number.
* **Original Transfer Date** (`transfer_date`, date, required): Enter the date the e-transfer was sent.
* **Transfer Time** (`transfer_time`, time, optional): Enter the approximate time of the transfer.
* **Transfer Amount** (`transfer_amount`, number, required): Enter the amount of the transfer in dollars.
* **Currency** (`transfer_currency`, select_one, required): Select the currency of the transfer from the options provided.
* **Recipient Name** (`recipient_name`, text, required): Enter the full name of the recipient.
* **Recipient Email Address** (`recipient_email`, email, required): Enter the email address of the recipient.
* **Transfer Reference Number** (`transfer_reference`, text, optional): Enter the transfer or reference number if available.
* **Reason for Cancellation** (`cancellation_reason`, select_one, required): Select the reason for cancelling the transfer from the options provided.
* **Cancellation Details** (`cancellation_details`, text, required): Enter any additional information about your request.
* **Current Transfer Status** (`transfer_status`, select_one, required): Select the current status of the transfer from the options provided.
* **Urgency Level** (`urgency_level`, select_one, required): Select the urgency level of the cancellation request from the options provided.
* **Refund Preference** (`refund_preference`, select_one, optional): Select where the funds should be returned to, or if unsure, leave blank.
* **Do You Suspect Fraud** (`fraud_suspected`, select_one, required): Select if you suspect this transfer is fraudulent.
* **Have You Contacted Support Before** (`previous_contact`, select_one, required): Select if you have previously contacted support.
* **Previous Case Number** (`case_number`, text, optional): Enter any case number if you have one.
* **Additional Comments** (`additional_comments`, text, optional): Enter any additional relevant information.
* **Authorization Consent** (`authorization_consent`, select_one, required): Select if you authorize this cancellation request.
* **Request Submission Date** (`submission_date`, date, required): The date of when you submit this request.
