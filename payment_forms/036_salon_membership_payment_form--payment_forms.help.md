<thinking>
To begin with, let's make sure the user understands the form's purpose and context. We'll start by creating a help guide that explains each part of the form in a clear and concise manner. I'll use the provided YAML fields to structure the content and avoid unnecessary business logic.

The Salon Membership Payment Form is used to process payments for salon membership subscriptions. This form is typically filled out by the user to indicate their interest in becoming a salon member and to provide necessary payment details.

## Purpose
The Salon Membership Payment Form allows users to provide payment information for their salon membership. It is used to capture the following details: Name, Email, Phone, Membership Type, Payment Method, Payment Date, Amount, Notes, Assigned User, Submitted Time, Updated Time, and Created Time.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the required fields with your information.
2. Select your preferred Membership Type and Payment Method.
3. Provide any additional Notes if necessary.
4. Review the form for accuracy before submission.

## Field-by-Field Explanation

* **First Name** (`first_name`, text, required/optional): Enter your full name as it appears on your identification documents.
* **Email** (`email`, email, required/optional): Enter your email address to be contacted regarding your membership application.
* **Phone** (`phone`, text, required/optional): Provide your primary phone number for communication purposes.
* **Membership Type** (`membership_type`, select_one, required/optional): Choose between "Yes" and "No" to indicate your interest in becoming a salon member.
* **Payment Method** (`payment_method`, select_one, required/optional): Select between "Yes" and "No" to indicate your preferred payment method for membership fees.
* **Payment Date** (`payment_date`, date, required/optional): Enter the date you wish to make the payment for the membership fees.
* **Amount** (`amount`, number, required/optional): Enter the total amount for the membership fees.
* **Notes** (`notes`, note, required/optional): Provide any additional information regarding your membership application.
* **Assigned User** (`assigned_user`, select_multiple, required/optional): Select between "Yes" and "No" to indicate if a specific user will be assigned to handle your membership account.
* **Submitted** (`submitted`, time, required/optional): The time and date the form was submitted.
* **Updated** (`updated`, time, required/optional): The time and date the form was last updated.
* **Created** (`created`, time, required/optional): The time and date the form was created.

## Tips

* Please make sure to double-check your information for accuracy before submitting the form.
* If you have any questions or concerns, feel free to contact our salon staff for assistance.
* This form is for internal use only, please do not share it outside of the salon environment.
</thinking>

# Salon Membership Payment Form - Help Guide

Note: The above help guide is based on the provided YAML fields and aims to provide a clear and concise explanation of each field. If you need further clarification or modifications, please let me know.
