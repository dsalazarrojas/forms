# Airline Baggage Subscription Enrollment Form - Help Guide
## Purpose
The purpose of this form is to collect information and enroll a passenger into the airline's baggage subscription service. This form asks for basic contact information, passenger details, subscription preferences, and payment details to process your subscription and provide relevant services.

## How To Complete This Form
1. Ensure you have all the required information to complete the form accurately.
2. Enter your details in the required fields.
3. Review your submission before submitting to ensure accuracy.

## Field-by-Field Explanation
* **First Name (Passenger First Name)** (`passenger_first_name`, `text`, required): Enter your passenger's first name.
* **Last Name (Passenger Last Name)** (`passenger_last_name`, `text`, required): Enter your passenger's last name.
* **Email Address (Contact email)** (`email`, `email`, required): Enter the passenger's email address.
* **Phone Number (Contact number)** (`phone`, `text`, required): Enter the passenger's phone number.
* **Date of Birth (Birth date)** (`date_of_birth`, `date`, required): Enter the passenger's date of birth.
* **Frequent Flyer Number (Loyalty program number)** (`frequent_flyer_number`, `text`, optional): Enter your frequent flyer number, if applicable.
* **Frequent Flyer Tier (Membership level)** (`frequent_flyer_tier`, `select_one`, required): Select your frequent flyer tier level.
* **Street Address (Mailing address)** (`address`, `text`, required): Enter your passenger's street address.
* **City** (`city`, `text`, required): Enter the passenger's city.
* **State (State or province)** (`state`, `text`, required): Enter the passenger's state or province.
* **ZIP Code (Postal code)** (`zip_code`, `text`, required): Enter the passenger's ZIP code.
* **Country of Residence** (`country`, `text`, required): Enter the passenger's country of residence.
* **Subscription Type (Choose your plan)** (`subscription_type`, `select_one`, required): Choose the type of subscription that suits your needs.
* **Baggage Allowance (What is included)** (`baggage_allowance`, `select_one`, required): Choose what baggage allowance you need.
* **Subscription Start Date (When should it begin)** (`subscription_start`, `date`, required): Enter the date when your subscription should start.
* **Subscription Duration (Length of subscription)** (`subscription_duration`, `select_one`, required): Choose the length of your subscription.
* **Monthly Price (USD) (Subscription cost)** (`monthly_price`, `number`, required): Enter the monthly price for your subscription.
* **Total Price (USD)** (`total_price`, `number`, required): Enter the total price for your subscription.
* **Payment Method (How to pay)** (`payment_method`, `select_one`, required): Choose your preferred payment method.
* **Card Number (Last 4 digits only)** (`card_number`, `text`, optional): Enter the last 4 digits of your card number.
* **Card Expiry (MM/YY)** (`card_expiry`, `text`, optional): Enter the expiration date of your card in MM/YY format.
* **Billing Address (If different from above)** (`billing_address`, `text`, optional): Enter your billing address, if different from your passenger's address.
* **Auto Renewal (Should subscription renew)** (`auto_renewal`, `select_one`, required): Choose whether your subscription should auto-renew.
* **Eligible Routes (Where can you use)** (`eligible_routes`, `select_one`, required): Choose where you can use your subscription.
* **Transferable (Can you transfer to others)** (`transferable`, `select_one`, required): Choose whether your subscription is transferable.
* **Family Members Included (Number of additional people)** (`family_members`, `number`, optional): Enter the number of family members included in your subscription.
* **Family Member Names (List all included members)** (`family_member_names`, `text`, optional): Enter the names of all family members included.
* **Terms and Conditions Accepted (Do you accept terms)** (`terms_accepted`, `select_one`, required): Accept the terms and conditions of your subscription.
* **Cancellation Policy Understood (Do you understand policy)** (`cancellation_policy`, `select_one`, required): Understand the cancellation policy for your subscription.
* **Refund Policy Understood (Do you understand refunds)** (`refund_policy`, `select_one`, required): Understand the refund policy for your subscription.
* **Promotional Code (If you have one)** (`promotional_code`, `text`, optional): Enter any promotional code you may have.
* **Discount Applied (Any discount)** (`discount_applied`, `select_one`, optional): Choose any discounts you may be applying.
* **How Did You Hear About This (Source)** (`how_heard`, `select_one`, optional): Choose how you heard about this subscription.
* **Additional Comments (Any questions or notes)** (`additional_comments`, `text`, optional): Add any additional comments or questions you may have.
* **Passenger Signature (Digital signature)** (`passenger_signature`, `text`, required): Sign this form with your digital signature.
* **Enrollment Date (Date of enrollment)** (`enrollment_date`, `date`, required): The date and time of your enrollment.
* **Confirmation Number (Will be provided)** (`confirmation_number`, `text`, optional): A confirmation number will be provided once you're enrolled.
* **Enrollment Status (Current status)** (`enrollment_status`, `select_one`, required): Check your current subscription status.
