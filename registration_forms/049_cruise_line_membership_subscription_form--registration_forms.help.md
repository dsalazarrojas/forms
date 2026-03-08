# cruise_line_membership_subscription_form - Help Guide

## Purpose
The purpose of this form is for individuals or organizations to register for membership with the Cruise Line. The form collects contact and membership information, payment preferences, and other relevant details to facilitate the subscription process.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your First Name and Last Name in the respective fields.
2. Provide your Email address and check that it is correct.
3. Enter your Phone number for contact purposes.
4. Enter your Address Line 1 and Address Line 2 (if applicable).
5. Specify your City and State.
6. Choose your payment frequency (e.g., Yes for regular payments).
7. Select your payment terms (date of payment).
8. Choose your preferred payment method (e.g., Yes for credit card).
9. Select your membership type (e.g., Yes for individual membership).
10. Enter your Company Name (if applicable).
11. Enter your Company Address, Company Phone, and Company Email (if applicable).
12. Specify the number of employees in your organization.
13. Choose your membership type for family members (e.g., Yes for family membership).
14. Enter family member details, including name and email (if applicable).
15. Finally, submit the form to register for membership.

## Field-by-Field Explanation

* **First Name** (`first_name`, text, required: false): Enter your first name, which will be used for membership purposes.
* **Last Name** (`last_name`, text, required: false): Enter your last name, which will be used for membership purposes.
* **Email** (`email`, email, required: false): Provide your email address for contact and membership communication.
* **Phone** (`phone`, text, required: false): Enter your phone number for contact purposes.
* **Address Line 1** (`address_1`, text, required: false): Enter the address line 1 of your residence or company.
* **Address Line 2** (`address_2`, text, required: false): Enter the address line 2 of your residence or company (if applicable).
* **City** (`city`, text, required: false): Specify the city of your residence or company.
* **State** (`state`, select_one, required: false): Choose your state or region (e.g., Yes for a specific state).
* **Pay Frequency** (`pay_frequency`, select_multiple, required: false): Choose how frequently you would like to make payments (e.g., Yes for regular payments).
* **Payment Terms** (`payment_terms`, date, required: false): Select the date you are willing to make payments.
* **Payment Method** (`payment_method`, select_one, required: false): Choose your preferred payment method (e.g., Yes for credit card).
* **Payment Method 2** (`payment_method_2`, select_one, required: false): Choose your alternative payment method (e.g., Yes for bank transfer).
* **Membership Type** (`membership_type`, select_one, required: false): Choose your membership type (e.g., Yes for individual membership).
* **Company Name** (`company_name`, text, required: false): Enter your company name if you are a business member.
* **Company Address** (`company_address`, text, required: false): Enter your company address if you are a business member.
* **Company Phone** (`company_phone`, text, required: false): Enter your company phone number if you are a business member.
* **Company Email** (`company_email`, email, required: false): Enter your company email if you are a business member.
* **Employee Count** (`employee`, number, required: false): Specify the number of employees in your organization.
* **Member Type** (`member_type`, select_one, required: false): Choose your membership type for family members (e.g., Yes for family membership).
* **Family Member1** (`family_member1`, text, required: false): Enter the name of your first family member.
* **Family Member2** (`family_member2`, text, required: false): Enter the name of your second family member.
* **Family Member3** (`family_member3`, text, required: false): Enter the name of your third family member.
* **Family Member4** (`family_member4`, email, required: false): Enter the email of your fourth family member.
* **Family Member5** (`family_member5`, text, required: false): Enter the name and details of your fifth family member.
