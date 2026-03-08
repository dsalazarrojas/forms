<thinking>
This guide explains the Stripe Email Subscription Form, used by entrepreneurs to capture relevant customer information, including email addresses, names, and business details.
The form is designed to be filled out by customers who want to sign up for an email subscription service. The form collects data that will be used to provide targeted marketing campaigns and personalized content recommendations. To prevent duplicate entries, we recommend that customers fill out the form only once, with one set of data per business or individual.

</thinking>

# Stripe Email Subscription Form - Help Guide
## Purpose
This form is for entrepreneurs to capture customer email addresses, names, and business details for targeted marketing campaigns and personalized content recommendations.

## How To Complete This Form
To complete the form, follow these steps:

1. Fill in your email address in the "Email" field. This is the primary contact method we will use to send you targeted marketing campaigns and personalized content recommendations.
2. Enter your name in the "Name" field. This will help us address you by your name in future communications.
3. If you are representing a business, enter your business name in the "Business Name" field.
4. Select the type of business you are representing from the "What type of business are you?" dropdown menu.
5. Enter your phone number in the "Phone" field, if applicable.
6. Enter your business phone number, if applicable.
7. Select your email type from the "Email Type" dropdown menu.
8. Finally, review and agree to the terms of service to complete the form.

## Field-by-Field Explanation
* **Email (Email)** (`user_email`, email, required/optional): Enter your valid email address to sign up for targeted marketing campaigns and personalized content recommendations.
* **Name (Name)** (`user_name`, text, required/optional): Enter your name as you would like to be addressed in future communications.
* **Business Name (Business Name)** (`user_business_name`, text, required/optional): If you are representing a business, enter the name of the business.
* **What type of business are you? (business_type)** (`user_business_type`, select_one, required/optional): Select the type of business you are representing from the dropdown menu.
* **Phone (Phone)** (`user_phone`, text, required/optional): Enter your phone number, if applicable.
* **Business Phone (Business Phone)** (`user_business_phone`, text, required/optional): Enter your business phone number, if applicable.
* **Email Type (user_email_type)** (`user_email_type`, select_one, required/optional): Select your email type from the dropdown menu.
* **Agree (Agree)** (`user_agreed`, note, required/optional): Review and agree to the terms of service to complete the form.
* **Terms of Service (Terms of Service)** (`user_terms_of_service`, note, required/optional): Review the terms of service before agreeing to them.
