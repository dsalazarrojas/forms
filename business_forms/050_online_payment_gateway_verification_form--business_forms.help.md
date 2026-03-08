# Online Payment Gateway Verification Form - Help Guide
## Purpose

This form is designed to verify the status of online payment gateways for merchants. It helps us to accurately process payment transactions and ensure that all necessary information is up to date.

## How To Complete This Form

To complete this form, follow these steps:

1.  Ensure that all required fields (indicated by an asterisk \*) are completed accurately.
2.  Choose the correct transaction type from the options provided.
3.  Enter the merchant's information, including their ID, name, and URL.
4.  Enter the payment gateway's information, including the IP address and user agent.
5.  Select the transaction status and merchant status.
6.  Choose the browser and operating system used by the user and merchant.
7.  Enter any additional notes or comments about the transaction.

## Field-by-Field Explanation

* **Payment Gateway Info** (`payment_gateway_info`, `text`, `optional`): Enter a brief description of the payment gateway.
* **Transaction Type** (`transaction_type`, `select_one`, \*): Select the type of transaction (Online Payment Gateway, Mobile Payment Gateway, or Point of Sale).
* **Merchant Info** (`merchant_info`, `text`, `optional`): Enter a brief description of the merchant.
* **Merchant ID** (`merchant_id`, `number`, `optional`): Enter the unique identifier of the merchant.
* **Gateway ID** (`gateway_id`, `number`, `optional`): Enter the unique identifier of the payment gateway.
* **Transaction Amount** (`transaction_amount`, `number`, `optional`): Enter the amount of the transaction.
* **Payment Method** (`payment_method`, `select_multiple`, \*): Select one or more payment methods used for the transaction (Credit/Debit Card, Bank Transfer, or Mobile Wallet).
* **Transaction Date** (`transaction_date`, `date`, `optional`): Enter the date of the transaction.
* **Transaction Time** (`transaction_time`, `time`, `optional`): Enter the time of the transaction.
* **IP Address** (`ip_address`, `select_one`, \*): Select the IP address from which the transaction originated.
* **User Agent** (`user_agent`, `select_one`, \*): Select the browser used by the user.
* **Notes** (`notes`, `note`, `optional`): Enter any additional comments about the transaction.
* **Email Address** (`email_address`, `email`, `optional`): Enter the email address of the merchant.
* **Phone Number** (`phone_number`, `text`, `optional`): Enter the phone number of the merchant.
* **Merchant Name** (`merchant_name`, `text`, `optional`): Enter the name of the merchant.
* **Merchant URL** (`merchant_url`, `text`, `optional`): Enter the URL of the merchant's website.
* **Gateway URL** (`gateway_url`, `text`, `optional`): Enter the URL of the payment gateway.
* **Transaction Status** (`transaction_status`, `select_one`, \*): Select the status of the transaction (Success, Failed, or Pending).
* **Merchant Status** (`merchant_status`, `select_one`, `optional`): Select the status of the merchant (Active or Inactive).
* **IP Status** (`ip_status`, `select_one`, `optional`): Select the status of the IP address (Active or Inactive).
* **User Status** (`user_status`, `select_one`, `optional`): Select the status of the user (Active or Inactive).
* **User Browser** (`user_browser`, `select_one`, `optional`): Select the browser used by the user.
* **Merchant Browser** (`merchant_browser`, `select_one`, `optional`): Select the browser used by the merchant.
* **IP Browser** (`ip_browser`, `select_one`, `optional`): Select the browser used by the IP address.
* **User Operating System** (`user_os`, `select_one`, `optional`): Select the operating system used by the user.
* **IP Operating System** (`ip_os`, `select_one`, `optional`): Select the operating system used by the IP address.
