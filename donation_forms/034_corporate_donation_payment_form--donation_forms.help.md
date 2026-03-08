<thinking>
We need to ensure that this form is used correctly to capture corporate donation payments, which are donations made by businesses or organizations to support a specific cause or charity. This form should only be used for legitimate donation purposes and not for other types of payments. To avoid duplication of efforts, we should check if there are existing forms or processes already handling this type of payment before creating or using this form.

This form is designed to collect information from corporations or business entities making a donation. It includes fields for the donor's name, email, phone number, donation amount, payment method, and billing details such as address, city, state, zip code, and country. The form also includes fields for payment gateway information, such as payment method, payment gateway status, and payment gateway response message.

Let's create a help guide for this form to assist users in filling it out correctly.
</thinking>
# Corporate Donation Payment Form - Help Guide
## Purpose
This form is intended for use by businesses or organizations making a donation to support a specific cause or charity. Please ensure that you are using this form for legitimate donation purposes and not for other types of payments.

## How To Complete This Form

1. Start by filling in your full name.
2. Enter your email address to enable us to contact you for further information or to confirm your donation details.
3. Provide your phone number so we can contact you if needed.
4. Indicate the amount you wish to donate.
5. Select the payment method you would like to use (e.g., "Yes" for online payment).
6. If you selected "Yes" in step 5, you will be able to select which payment method you would like to use (e.g., "Yes" for credit card).
7. Fill in your billing address, city, state, zip code, and country.
8. If you have any additional comments or information about your donation, you can include them in the text fields.

## Field-by-Field Explanation

* **Full Name** (`full_name`, `text`, required): Please enter your full name as it appears on your business card or company documents.
* **Email** (`email`, `email`, required): Enter your email address so we can contact you for further information or to confirm your donation details.
* **Phone** (`phone`, `text`, required): Provide your business phone number in case we need to contact you about your donation.
* **Donation Amount** (`donation_amount`, `number`, required): Indicate the amount you wish to donate.
* **Payment Method** (`payment_method`, `select_one`, required): Select "Yes" for online payment or other payment methods available on our system.
* **Select Payment Method** (`select_payment_method`, `select_multiple`, optional): Select which specific payment method you would like to use for your donation (only if you selected "Yes" for online payment).
* **Billing Address** (`billing_address`, `text`, optional): Enter your business address for billing purposes.
* **Billing City** (`billing_city`, `text`, optional): Enter the city of your business address.
* **Billing State** (`billing_state`, `text`, optional): Enter the state of your business address.
* **Billing Zip** (`billing_zip`, `text`, optional): Enter the zip code of your business address.
* **Billing Country** (`billing_country`, `text`, optional): Enter the country of your business address.
* **Payment Gateway Information** (`payment_gateway`, `text`, optional): Enter any information about your payment gateway.
* **Payment Gateway ID** (`payment_gateway_id`, `text`, optional): Enter your payment gateway ID.
* **Payment Gateway Token** (`payment_gateway_token`, `text`, optional): Enter your payment gateway token.
* **Payment Gateway Transaction ID** (`payment_gateway_transaction_id`, `text`, optional): Enter your payment gateway transaction ID.
* **Payment Gateway Status** (`payment_gateway_status`, `text`, optional): Enter your payment gateway status.
* **Payment Gateway Response Message** (`payment_gateway_response_message`, `text`, optional): Enter any payment gateway response message.
* **Payment Gateway Response Code** (`payment_gateway_response_code`, `text`, optional): Enter your payment gateway response code.
* **Donor Type** (`donor_type`, `select_one`, optional): Select "Yes" for a company or organization donation or "No" if this is a personal donation.
* **Select Donor Type** (`select_donor_type`, `select_multiple`, optional): Select which type of company or organization you represent (only if you selected "Yes" for a company or organization donation).
