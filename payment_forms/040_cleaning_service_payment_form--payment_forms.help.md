# Cleaning Service Payment Form - Help Guide
## Purpose
This form is for customers to make payments for cleaning services provided by our company. Please fill out the form accurately to ensure that your payment is processed correctly.

## How To Complete This Form
1. Fill out the form fields accurately and completely.
2. Review the form carefully before submitting it.
3. Ensure that all required fields are filled out.
4. If you have any questions or concerns, contact our customer support team for assistance.

## Field-by-Field Explanation

### Customer Information
* **First Name** (`customer_first_name`, text, required): Enter your first name.
* **Last Name** (`customer_last_name`, text, required): Enter your last name.
* **Email Address** (`email_address`, email, required): Enter your contact email address.
* **Phone Number** (`phone_number`, text, required): Enter your contact phone number.
* **Billing Address** (`billing_address`, text, required): Enter your street address.
* **City** (`city`, text, required): Enter your city or town.
* **State or Province** (`state`, text, required): Enter your state or province.
* **ZIP or Postal Code** (`zip_code`, text, required): Enter your postal code.

### Service Information
* **Date of Service** (`service_date`, date, required): Enter the date the cleaning was performed.
* **Service Address** (`service_address`, text, required): Enter the address where the service was provided.
* **Type of Service** (`service_type`, select_one, required): Select the type of cleaning service provided. Options: Regular Cleaning, Deep Cleaning, Move-In or Move-Out Cleaning, Post-Construction Cleaning, Spring Cleaning, Office Cleaning, Other.
* **Invoice Number** (`invoice_number`, text, optional): Enter your invoice or reference number.

### Payment Details
* **Base Service Charge** (`base_service_charge`, text, required): Enter the base cleaning fee.
* **Additional Services Charge** (`additional_services_charge`, text, optional): Enter the fee for extra services.
* **Cleaning Supplies Charge** (`supplies_charge`, text, optional): Enter the fee for supplies if applicable.
* **Travel Fee** (`travel_fee`, text, optional): Enter the travel or transportation fee.
* **Discount Applied** (`discount_applied`, text, optional): Enter any discounts.
* **Tax Amount** (`tax_amount`, text, optional): Enter applicable taxes.
* **Total Amount Due** (`total_amount_due`, text, required): Enter the total payment amount.

### Payment Method
* **Payment Type** (`payment_type`, select_one, required): Select the type of payment. Options: One-Time Payment, Recurring Payment, Deposit, Final Payment.
* **Payment Method** (`payment_method`, select_one, required): Select how you would like to pay. Options: Credit Card, Debit Card, Bank Transfer or ACH, Check, Cash, Online Payment Platform.
* **Card Type** (`card_type`, select_one, optional): Select the type of card. Options: Visa, MasterCard, American Express, Discover, Other.
* **Cardholder Name** (`cardholder_name`, text, optional): Enter the name on the card.
* **Card Number** (`card_number`, text, optional): Enter the card number.
* **Expiration Month** (`expiration_month`, text, optional): Enter the expiration month (MM).
* **Expiration Year** (`expiration_year`, text, optional): Enter the expiration year (YYYY).
* **CVV or Security Code** (`cvv`, text, optional): Enter the 3 or 4-digit code.

### Recurring Payment Authorization
* **Authorize Recurring Payments** (`recurring_payment`, select_one, required): Select if you authorize recurring charges. Options: Yes - Authorize recurring charges, No - One-time payment only.
* **Recurring Frequency** (`recurring_frequency`, select_one, optional): Select how often charges should occur. Options: Weekly, Bi-Weekly, Monthly, Quarterly, Not Applicable.
* **Recurring Payment Start Date** (`recurring_start_date`, date, optional): Enter the start date of recurring payments.

### Payment Authorization
* **Payment Authorization** (`authorization_statement`, select_one, required): Select to authorize the charge. Options: I Authorize This Charge, I Do Not Authorize.
* **Terms and Conditions Acceptance** (`terms_acceptance`, select_one, required): Select if you agree to the payment terms. Options: Yes - I Accept, No - I Do Not Accept.
* **Customer Signature** (`customer_signature`, text, required): Enter your full name as a signature.
* **Signature Date** (`signature_date`, date, required): Enter the date of your signature.

### Additional Information
* **Payment Notes or Comments** (`payment_notes`, text, optional): Enter any additional information.

## Tips
* Please review the form carefully before submitting it to ensure accuracy.
* Ensure that all required fields are filled out.
* If you have any questions or concerns, contact our customer support team for assistance.
