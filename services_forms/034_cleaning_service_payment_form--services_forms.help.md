<thinking>
This help guide is for users who are filling out the Cleaning Service Payment Form. The purpose of this form is to collect information necessary for payment of cleaning services provided. Please fill out this form carefully to ensure accuracy and completion.
</thinking>

# Cleaning Service Payment Form - Help Guide
## Purpose
The Cleaning Service Payment Form is used to collect payment information for cleaning services rendered. Please fill out this form to provide accurate and complete payment details.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the billing information (Full Name, Email Address, Phone Number, Billing Address, City, State/Province, and ZIP/Postal Code) to ensure accurate payment processing.
2. Enter the Service Date of the cleaning service you are paying for.
3. Select the Type of Service (Regular Cleaning, Deep Cleaning, Move-In/Move-Out, Window Cleaning, Carpet Cleaning, Post-Construction, or Other) that matches your service.
4. Enter the Property Address where the service was provided.
5. Enter the Base Service Charge and any Additional Services or Charges.
6. If applicable, enter a Discount or Promo Code, and the corresponding Discount Amount.
7. Enter the Tax Amount (if applicable).
8. Ensure the Total Amount Due is accurate.
9. Choose a Payment Method (Credit Card, Debit Card, Bank Transfer, Check, PayPal, or Other).
10. Confirm that the amount due is correct.
11. Select whether this is a recurring payment (weekly, bi-weekly, monthly, quarterly) and whether you authorize payment processing.
12. Confirm that you authorize payment and agree to the terms and conditions.
13. Confirm that you understand the cancellation policy and consent to collecting and processing your payment information.
14. Confirm the payment date.

## Field-by-Field Explanation
* **Full Name** (`billing_name`, `text`, required): Enter your full name as it appears on your billing account.
* **Email Address** (`billing_email`, `email`, required): Enter your email address for payment receipts and confirmation.
* **Phone Number** (`billing_phone`, `text`, required): Enter your phone number for contact purposes.
* **Billing Address** (`billing_address`, `text`, required): Enter the street address of your billing account.
* **City** (`billing_city`, `text`, required): Enter the city where the service was provided.
* **State/Province** (`billing_state`, `text`, required): Enter the state or province where the service was provided.
* **ZIP/Postal Code** (`billing_zip`, `text`, required): Enter the ZIP or postal code of your billing account.
* **Service Date** (`service_date`, `date`, required): Enter the date of the cleaning service.
* **Type of Service** (`service_type`, `select_one`, required): Select the type of service you received (Regular Cleaning, Deep Cleaning, Move-In/Move-Out, Window Cleaning, Carpet Cleaning, Post-Construction, or Other).
* **Property Address** (`property_address`, `text`, required): Enter the address where the service was provided.
* **Base Service Charge** (`base_service_charge`, `number`, required): Enter the cost of the cleaning service.
* **Additional Services** (`additional_services`, `text`, optional): If you received any extra services, provide a description.
* **Additional Services Charge** (`additional_charge`, `number`, optional): If you received any extra services, enter the cost.
* **Discount or Promo Code** (`discount_applied`, `text`, optional): If applicable, enter a discount or promo code.
* **Discount Amount** (`discount_amount`, `number`, optional): Enter the amount to be deducted if a discount is applied.
* **Tax Amount** (`tax_amount`, `number`, optional): Enter the applicable taxes.
* **Total Amount Due** (`total_amount`, `number`, required): Ensure the total amount due is accurate.
* **Payment Method** (`payment_method`, `select_one`, required): Choose how you would like to pay (Credit Card, Debit Card, Bank Transfer, Check, PayPal, or Other).
* **Is This a Recurring Payment?** (`recurring_payment`, `select_one`, required): Indicate if this is a recurring payment (weekly, bi-weekly, monthly, quarterly).
* **Recurring Payment Frequency** (`recurring_frequency`, `select_one`, required): Choose the payment frequency (weekly, bi-weekly, monthly, quarterly, Not Applicable).
* **Payment Authorization** (`payment_authorization`, `select_one`, required): Confirm that you authorize payment processing.
* **Auto-Renewal Authorization** (`auto_renewal`, `select_one`, required): Confirm whether you authorize automatic recurring payments.
* **I Agree to the Payment Terms and Conditions** (`agree_terms`, `select_one`, required): Confirm that you agree to the payment terms.
* **I Understand the Cancellation Policy** (`cancellation_policy`, `select_one`, required): Confirm that you understand the cancellation policy.
* **I Consent to Collect and Process My Payment Information** (`privacy_consent`, `select_one`, required): Confirm that you consent to collecting and processing your payment information.
* **Confirm the Amount Due** (`confirm_amount`, `select_one`, required): Confirm that the amount due is correct.
* **Payment Date** (`payment_date`, `date`, required): Enter today's date for payment processing.

## Tips
* Ensure accurate and complete information for payment processing.
* Review each field carefully before submission.
* If applicable, enter a discount or promo code and the corresponding discount amount.
* Confirm your payment method and frequency.
* Review the terms and conditions and confirm your agreement.
* Review the cancellation policy and confirm your understanding.
