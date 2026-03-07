<thinking>
This form is designed to collect and verify information about an online payment gateway, including whether it is active or inactive, its type, API key and secret, merchant ID, payment method, and other relevant details. 
The purpose of this form is to provide a standardized and structured way of collecting this information for internal use, reducing errors and inconsistencies that may arise from manual data entry or unstandardized processes. 
The form will be used by staff members to quickly and accurately verify the status of online payment gateways, and to ensure that only authorized and active gateways are used for transactions. 
It's essential to ensure that the form is completed accurately and thoroughly, as incorrect or incomplete information may lead to errors in processing transactions or delays in payment processing. 
This guide will walk through each field and its purpose, helping staff complete the form correctly and efficiently.
</thinking>

# online_payment_gateway_verification_form - Help Guide
## Purpose
The online payment gateway verification form is used to collect and verify information about online payment gateways to ensure accurate and efficient processing of transactions.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the status of the payment gateway:
	* Choose "Yes" if the payment gateway is active and enabled.
	* Choose "No" if the payment gateway is inactive or not enabled.
2. Select the type of payment gateway:
	* Choose the options that apply to your payment gateway (e.g. "Yes", "No")
3. Enter your API Key:
	* This is the unique key provided by the payment gateway to authenticate your account.
4. Enter your API Secret:
	* This is the secret key provided by the payment gateway to secure your account.
5. Enter your Merchant ID:
	* This is the unique identifier assigned to your payment gateway by the merchant account provider.
6. Select the payment method:
	* Choose "Yes" if the payment method is enabled for the payment gateway.
	* Choose "No" if the payment method is not enabled.
7. Enter the transaction amount (optional):
	* This field is only required if the payment method is enabled.
8. Select the transaction type:
	* Choose "Yes" if the transaction type is supported by the payment gateway.
	* Choose "No" if the transaction type is not supported.
9. Select the currency:
	* Choose the currency that the payment gateway supports.
10. Select the transaction status:
	* Choose "Active" if the transaction is currently active.
	* Choose "Inactive" if the transaction is not active.
11. Select the payment status:
	* Choose "Active" if the payment is currently active.
	* Choose "Inactive" if the payment is not active.
12. Select the payment method status:
	* Choose "Active" if the payment method is currently active.
	* Choose "Inactive" if the payment method is not active.
13. Enter the transaction date and time:
	* This field is only required if the transaction is active.
14. Enter the payment method status:
	* This field is only required if the payment method is active.

## Field-by-Field Explanation

* **payment_gateway**: Select whether the payment gateway is active or inactive.
	+ Type: select_one
* **gateway_type**: Select the type of payment gateway.
	+ Type: select_multiple
* **api_key**: Enter your API Key.
	+ Type: text
* **api_secret**: Enter your API Secret.
	+ Type: text
* **merchant_id**: Enter your Merchant ID.
	+ Type: text
* **payment_method**: Select whether the payment method is enabled.
	+ Type: select_one
* **test_transaction**: Enter the transaction amount (if payment method is enabled).
	+ Type: text
* **transaction_amount**: Enter the transaction amount.
	+ Type: number
* **transaction_type**: Select whether the transaction type is supported.
	+ Type: select_one
* **currency**: Select the currency supported by the payment gateway.
	+ Type: select_multiple
* **transaction_status**: Select the transaction status.
	+ Type: select_one
* **transaction_date**: Enter the transaction date (if transaction is active).
	+ Type: date
* **transaction_time**: Enter the transaction time (if transaction is active).
	+ Type: time
* **payment_status**: Select the payment status.
	+ Type: select_one
* **payment_method_status**: Select the payment method status.
	+ Type: select_one
* **payment_method_status**: Select the payment method status.
	+ Type: select_one
* **test_transaction**: Enter test transaction details (if payment method is enabled).
	+ Type: text
* **currency**: Select the currency supported by the payment gateway.
	+ Type: select_multiple
