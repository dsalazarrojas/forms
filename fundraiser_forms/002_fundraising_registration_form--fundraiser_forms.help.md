<thinking>...
This form is designed to collect information from users who want to participate in a fundraising campaign. The form is divided into several pages, each with specific fields that require user input. To ensure that each user has a unique experience, the form has a non-duplication feature that checks for user information and prevents duplicate entries.
</thinking>

# fundraising_registration_form - Help Guide
## Purpose
The Fundraising Registration Form is used to collect information from users who want to participate in a fundraising campaign.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill in the user information fields: **User Info**, **Fundraising Info**, and **Contact Details**. These fields are optional, so you can leave them blank if you don't have the required information.
2. Select the **Fundraising Objectives** that apply to your project. You can choose more than one objective.
3. Enter the **Fundraising Target** amount you are aiming for.
4. Choose your **Payment Method** from the available options: Stripe, PayPal, or Bank Transfer.
5. Select the **Payment Frequency**: One Time, Recurring, or Semi-Monthly.
6. Add any additional **Notes** about your project.
7. Enter your **Email** address.
8. Review and agree to the **User Agreement** terms.
9. Confirm that you have read and agree to the **User Agreement Terms**.
10. Finally, enter the **Date** and **Time** of your project.

## Field-by-Field Explanation

* **User Info** (`user_info`, text, optional): This field is for you to enter your name and any other relevant information about yourself.
* **Fundraising Info** (`fundraising_info`, text, optional): This field is for you to enter more details about your fundraising project.
* **Contact Details** (`contact_details`, text, optional): This field is for you to enter your phone number in E.164 format.
* **Fundraising Objectives** (`fundraising_objectives`, select_multiple, optional): Select all the objectives that apply to your project. Options: Yes, No.
* **Fundraising Target** (`fundraising_target`, number, optional): Enter the amount you are aiming for in this fundraising campaign.
* **Payment Method** (`payment_method`, select_one, optional): Choose from: Stripe, PayPal, or Bank Transfer.
* **Payment Frequency** (`payment_frequency`, select_one, optional): Choose from: One Time, Recurring, or Semi-Monthly.
* **Notes** (`notes`, text, optional): Add any additional notes about your project.
* **Email** (`email`, email, optional): Enter your email address.
* **User Agreement** (`user_agreement`, select_multiple, optional): Review and agree to the terms.
* **User Agreement Terms** (`user_agreement_terms`, select_one, optional): Confirm that you have read and agree to the terms. Options: Yes, No.
* **User Agreement Terms** (`user_agreement_terms`, select_one, optional): This field is a duplicate of the previous one and seems to be an error in the form design.
* **Date** (`date`, date, optional): Enter the date of your project.
* **Time** (`time`, time, optional): Enter the time of your project.

## Tips
* Make sure to fill in all the required fields to ensure a successful registration.
* Review the form carefully before submitting.
* If you have any questions or issues with the form, contact us for assistance.
