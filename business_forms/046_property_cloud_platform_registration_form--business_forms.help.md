# Property Cloud Platform Registration Form - Help Guide
## Purpose
This form is a registration form for creating an account on the Property Cloud Platform.

## How To Complete This Form
1. Fill in your First Name.
2. Fill in your Last Name.
3. Enter your Email.
4. Enter your Company Name.
5. Enter your Password.
6. Confirm your Password.
7. Select your User Role.
8. Fill in your Phone (optional).
9. Fill in your Date Of Birth.
10. Fill in your Time Of Birth.
11. Enter any additional Note (optional).
12. Fill in your User ID.
13. Enter your User Role ID.
14. Fill in the date and time when you Created At.
15. Select your Status (at least one).
16. Select your Confirm Status (optional).
17. Fill in the name of the person who Created By.
18. Fill in the name of the person who Updated By (optional).
19. Fill in the name of the person who Deleted By (optional).
20. Fill in the date and time when you Deleted At.
21. Enter your Deleted User ID.
22. Fill in your User Name.

## Field-by-Field Explanation
* **First Name** (`user_first_name`, `text`, required): Fill in your first name.
* **Last Name** (`user_last_name`, `text`, required): Fill in your last name.
* **Email** (`email`, `email`, required): Enter your email address.
* **Company Name** (`company`, `text`, required): Fill in your company name.
* **Password** (`password`, `text`, required): Enter a password for your account.
* **Confirm Password** (`confirm_password`, `text`, required): Confirm your password.
* **User Role** (`role`, `select_one`, required): Select your user role from the options.
* **Phone** (`phone`, `text`, optional): Fill in your phone number.
* **Date Of Birth** (`date_of_birth`, `date`, required): Enter your date of birth.
* **Time Of Birth** (`time_of_birth`, `time`, required): Enter your time of birth.
* **Address** (`address`, `note`, optional): Enter any additional notes about your address.
* **Note** (`note`, `note`, optional): Enter any additional notes.
* **User ID** (`user_id`, `number`, required): Enter your user ID.
* **User Role ID** (`user_role_id`, `number`, required): Enter your user role ID.
* **Created At** (`created_at`, `date`, required): Fill in the date and time when you created your account.
* **Updated At** (`updated_at`, `date`, optional): The date and time when you last updated your account.
* **Status** (`status`, `select_multiple`, required): Select your status from the options.
* **Confirm Status** (`confirm_status`, `select_multiple`, optional): Confirm your status.
* **Created By** (`created_by`, `text`, optional): Fill in the name of the person who created your account.
* **Updated By** (`updated_by`, `text`, optional): Fill in the name of the person who last updated your account.
* **Deleted By** (`deleted_by`, `text`, optional): Fill in the name of the person who deleted your account.
* **Deleted At** (`deleted_at`, `date`, required): Fill in the date and time when you deleted your account.
* **Deleted User ID** (`deleted_user_id`, `number`, required): Enter your deleted user ID.
* **User Name** (`user_name`, `text`, required): Enter your user name.
