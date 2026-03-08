# sign_up_form - Help Guide
## Purpose
This form is used to collect user information for sign up purposes, such as creating a new user account or subscription.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the first name field with your first name.
2. Fill out the last name field with your last name.
3. Enter a valid email address in the email field.
4. Enter your phone number in the phone field.
5. Create a password in the password field.
6. Confirm your password in the confirm field.
7. Enter a suggest user name if you'd like to suggest a user name.
8. Select "Agree" if you agree to the terms and conditions.
9. Select "Yes" to submit your form.

## Field-by-Field Explanation

* **First Name** (`first_name`, `text`, required: false): Enter your first name.
* **Last Name** (`last_name`, `text`, required: false): Enter your last name.
* **Email** (`email`, `email`, required: false): Enter a valid email address.
* **Phone** (`phone_number`, `text`, required: false): Enter your phone number.
* **Password** (`password`, `text`, required: false): Create a password. Note that this field is not secure, and we advise against entering a password that you also use for other accounts.
* **Confirm Password** (`confirm_password`, `text`, required: false): Confirm your password to ensure accuracy.
* **Suggest User Name** (`suggest_user`, `text`, required: false): If you'd like to suggest a user name, enter it here.
* **Agree to Terms and Conditions** (`agree_terms`, `select_one`, required: false): Select "Agree" to confirm that you have read and agree to the terms and conditions.
* **Submit** (`submit`, `select_one`, required: false): Select "Yes" to submit your form and create a new user account or subscription.
