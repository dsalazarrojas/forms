# Square Email Subscription Form - Help Guide
## Purpose
The Square Email Subscription Form is designed to collect user-submitted data for marketing purposes. It allows users to choose whether they want to subscribe or unsubscribe from a newsletter and provides a clear way to confirm or deny their subscription status.

## How To Complete This Form
To complete this form, follow these steps:

* Fill in your first name in the field labeled "First Name".
* Fill in your last name in the field labeled "Last Name".
* Enter your email address in the field labeled "Email".
* Confirm your email address in the field labeled "Confirm Email".
* Select whether you want to subscribe or receive the newsletter in the field labeled "Subscribe to Newsletter".
* Choose how you want to manage your subscription by selecting "Yes" or "No" in the field labeled "Manage Subscription Status".
* Optionally, provide any additional comments or notes in the field labeled "Notes" (this field is not required).
* Review and submit your form by filling in the field labeled "Submit".

## Field-by-Field Explanation
* **First Name** (`first_name`, text, required): Please fill in your first name in this field.
* **Last Name** (`last_name`, text, required): Please fill in your last name in this field.
* **Email** (`email`, email, required): Enter your email address in this field. Please make sure to use a valid email address that you have access to.
* **Confirm Email** (`email_confirmation`, email, required): Confirm your email address in this field. This will help us verify your identity.
* **Subscribe to Newsletter** (`newsletter`, select_multiple, required): Choose whether you want to subscribe or receive the newsletter.
* **Manage Subscription Status** (`subscribe`, select_one, required): Choose how you want to manage your subscription status.
* **Manage Subscription Status (again)** (`unsubscribe`, select_one, required): This field is a duplicate of "Manage Subscription Status" and is likely a mistake. Please ignore it.
* **Notes** (`notes`, note, optional): Provide any additional comments or notes about your subscription status. This field is not required and is for your convenience.
* **Submit** (`submit`, text, required): Review and submit your form by filling in this field.
