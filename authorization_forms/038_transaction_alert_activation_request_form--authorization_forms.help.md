# Transaction Alert Activation Request Form - Help Guide

## Purpose
The Transaction Alert Activation Request Form is used to request activation of a transaction alert on an account. This form is used to provide detailed information about the account and the alert preferences of the customer. 

## How To Complete This Form
To complete this form, please follow these steps:

1.  Fill in the required fields with your information.
2.  Select the desired account type and other relevant information for the transaction alert.
3.  Review and confirm your information before submitting the form.

## Field-by-Field Explanation

* **Transaction Alert Activation Request Form** (`title`, text, optional): This is the title of the form.
* **Contact Info** (`contact_info`, text, optional): Enter your contact information to reach you if further questions or issues arise.
* **Email** (`email`, email, optional): Enter your email address where you can be reached for further communication.
* **Phone** (`phone`, text, optional): Enter your phone number where you can be reached for further communication.
* **Account Number** (`account_number`, text, optional): Enter the account number associated with the transaction alert.
* **Account Name** (`account_name`, text, optional): Enter the name of the account associated with the transaction alert.
* **Account Type** (`account_type`, select_one, optional): Select the type of account for which you are requesting the transaction alert.
	+ Available options: Account Checking, Account Savings, Account Credit, Account Loan
* **Transaction Amount** (`transaction_amount`, number, optional): Enter the amount of the transaction for which you are requesting the alert.
* **Transaction Date** (`transaction_date`, date, optional): Enter the date of the transaction for which you are requesting the alert.
* **Transaction Time** (`transaction_time`, time, optional): Enter the time of the transaction for which you are requesting the alert.
* **Alert Preferences** (`alert_preferences`, text, optional): Enter any other information you have about the alert preferences.
* **Alert Frequency** (`alert_frequency`, select_multiple, optional): Select the frequency at which you would like to receive the transaction alerts.
	+ Available options: Daily, Weekly, Monthly
* **Notification Channel** (`notification_channel`, select_one, optional): Select the channel through which you want to receive the transaction alert.
	+ Available options: Email, SMS, Mobile App
* **Notification Time** (`notification_time`, time, optional): Enter the time at which you would like to receive the transaction alert.
* **Notes** (`notes`, note, optional): Enter any additional comments or notes about the transaction alert.
* **Confirm Transaction Alert** (`confirm_transaction_alert`, select_one, optional): Confirm that you want to receive the transaction alert.
* **Decline Reason** (`decline_reason`, text, optional): Enter the reason for declining the transaction alert.
* **Decline Reason Note** (`decline_reason_note`, note, optional): Enter any additional comments or notes about declining the transaction alert.
* **Support Request** (`support_request`, select_one, optional): Confirm if you need support for the transaction alert.
* **Support Request Note** (`support_request_note`, note, optional): Enter any additional comments or notes about the support request.
* **Customer Message** (`customer_message`, text, optional): Enter any message you would like to communicate with the customer.
* **Bank Message** (`bank_message`, text, optional): Enter any message you would like to communicate with the bank.
* **Bank Message Note** (`bank_message_note`, note, optional): Enter any additional comments or notes about the bank message.
* **Confirm Activation** (`confirm_activation`, select_one, optional): Confirm that you want to activate the transaction alert.
* **Confirm Activation Note** (`confirm_activation_note`, note, optional): Enter any additional comments or notes about the confirm activation.
