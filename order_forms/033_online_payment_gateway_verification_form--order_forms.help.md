# Online Payment Gateway Verification Form - Help Guide
## Purpose
This form is designed to help you verify the online payment gateway information for your application. It ensures accuracy and consistency in your online payment gateway settings.

## How To Complete This Form
1. Select the correct online payment gateway from the "payment_gateway" field.
2. Enter the IPN (Instant Payment Notification) URL for your online payment gateway in the "ipn_url" field.
3. Choose the transaction type that best matches your payment scenario.
4. Select the payment gateway ID(s) that correspond to your online payment gateway.
5. Enter your API key, secret, username, and password for your online payment gateway in the "api_key", "api_secret", "api_username", and "api_password" fields respectively.
6. Enter the callback URL(s) for your online payment gateway in the "api_callback_url" and "api_callback_url_2" fields.
7. Choose the type of payment gateway for your online payment scenario.
8. Select the sub-type of your online payment gateway.
9. Enter a unique transaction ID for your payment scenario.
10. Enter the amount and currency of the transaction.

## Field-by-Field Explanation
* **payment_gateway** (text): Enter the name of your online payment gateway.
* **ipn_url** (text): Enter the IPN URL for your online payment gateway.
* **transaction_type** (select_one): Choose the transaction type that best matches your payment scenario.
	+ credit card
	+ bank transfer
	+ Pay Pal
	+ Payone
	+ PayoneCash
	+ Giropay
* **gateway_id** (select_multiple): Select the payment gateway ID(s) that correspond to your online payment gateway.
* **api_key** (text): Enter your online payment gateway's API key.
* **api_secret** (text): Enter your online payment gateway's API secret.
* **api_username** (text): Enter your online payment gateway's API username.
* **api_password** (text): Enter your online payment gateway's API password.
* **api_callback_url** (text): Enter the callback URL for your online payment gateway.
* **api_callback_url_2** (text): Enter the second callback URL for your online payment gateway.
* **payment_gateway_type** (select_one): Choose the type of payment gateway for your online scenario.
* **payment_gateway_sub_type** (select_multiple): Select the sub-type of your online payment gateway.
* **transaction_id** (text): Enter a unique transaction ID for your payment scenario.
* **amount** (number): Enter the amount of the transaction.
* **currency** (select_one): Choose the currency of the transaction.
	+ usd
	+ eur
	+ gbp

## Tips
- Verify the information you enter in this form with your online payment gateway documentation.
- Ensure that all required fields are filled out accurately.
- Review your form submission before submitting it for verification.
