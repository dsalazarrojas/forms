# Bus Pass Subscription Form - Help Guide
## Purpose
The Bus Pass Subscription Form is used to collect information for bus pass subscriptions, allowing users to sign up for a bus pass subscription.

## How To Complete This Form
To complete this form, follow these steps:

1. Please select the subscription type that best suits your needs, which can be monthly, quarterly, or annual.
2. Provide your name as requested.
3. Enter the start date when you'd like the pass to become active.
4. Select your preferred payment method, such as credit card, bank transfer, or direct debit.
5. If you have a billing address, please enter it. If not, you can leave this field blank.
6. Enter your contact email address for pass confirmation and any other relevant information.
7. If you'd like to be contacted by phone, please enter your phone number.
8. Select your concession status, if applicable (e.g., student, senior, disabled).
9. Confirm that you agree to the subscription terms by selecting the correct option.

## Field-by-Field Explanation
- **Subscriber name** (`subscriber_name`, text, required): Please enter your full name as it appears on your identification documents.
- **Subscription type** (`subscription_type`, select_one, required): Select the duration of your subscription (Monthly, Quarterly, Annual).
- **Subscription start date** (`start_date`, date, required): Enter the date when you'd like your pass to become active.
- **Payment method** (`payment_method`, select_one, required): Choose your preferred payment method (Credit card, Bank transfer, Direct debit).
- **Billing address** (`billing_address`, text, optional): Enter the address for invoicing if required.
- **Contact email** (`contact_email`, email, required): Enter your email address for pass confirmation and other relevant information.
- **Contact phone** (`contact_phone`, text, optional): Provide your phone number if you'd like to be contacted for pass-related matters.
- **Concession status** (`concession_status`, select_one, optional): Select if you're eligible for concession fare (None, Student, Senior, Disabled).
- **Agree to subscription terms** (`agree_terms`, select_one, required): Confirm your acceptance of the subscription terms.

Note: Please ensure that you have read and agree to the subscription terms before proceeding.
