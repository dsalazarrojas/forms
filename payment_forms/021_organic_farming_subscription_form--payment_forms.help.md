# organic_farming_subscription_form - Help Guide
## Purpose
This form is for customers to subscribe to our organic produce delivery or farming services. It collects information necessary for account creation, billing, and subscription preferences.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your User Name, which is your unique identifier for our services.
2. Enter your Email address. This will be your primary contact information for our services.
3. Confirm your Email address by selecting the correct option from the drop-down menu.
4. Enter your Password for your account. This will be used for login purposes.
5. Repeat your Password to ensure accuracy.
6. Enter your Phone Number for contact purposes.
7. Select your preferred Subscription Plan (Yes or No).
8. (Optional) If you have a Billing Address, enter it here for our records.
9. (Optional) Enter your Billing City, State, and Postal Code for our records.
10. Add any Order Notes if you have specific requirements or instructions.

## Field-by-Field Explanation
* **User Name** (`user_name`, `text`, required): Enter your unique name for our services.
* **Email** (`email`, `email`, required): Enter your primary email address for our services.
* **Confirm Email** (`email_confirmation`, `select_one`, required): Select whether you have verified your email address.
* **Password** (`password`, `text`, required): Enter your account password for login purposes.
* **Repeat Password** (`repeat_password`, `text`, required): Repeat your password for accuracy.
* **Phone Number** (`phone`, `text`, required): Enter your phone number for contact purposes.
* **Subscription Plan** (`subscription_plan`, `select_multiple`, required): Select your preferred subscription plan (Yes or No).
* **Billing Address** (`billing_address`, `text`, optional): Enter your billing address for our records.
* **Billing City** (`billing_city`, `text`, optional): Enter your billing city for our records.
* **Billing State** (`billing_state`, `text`, optional): Enter your billing state for our records.
* **Billing Postal Code** (`billing_postal_code`, `text`, optional): Enter your billing postal code for our records.
* **Order Notes** (`order_notes`, `text`, optional): Add any specific requirements or instructions for our services.
* **Confirm Email** (`email_confirmation`, `select_one`, required): This field is a check to confirm your email address.
* **Password and Repeat Password** (`password` and `repeat_password`, `text`, required): Enter and repeat your password for accuracy.
* **Subscription Plan** (`subscription_plan`, `select_multiple`, required): This field is for selecting your subscription plan.
