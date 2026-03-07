<thinking>
We need to create a form that captures the user's information for registration. This form will be used for the "know my style" registration process. To avoid duplicates, we'll check if the user is already registered before allowing them to submit the form.
</thinking>

# know_my_style_registration_form - Help Guide
## Purpose
The "know my style" registration form is designed to collect user information for registration purposes. This form is intended for users who want to register for the "know my style" program.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your **First Name** in the first field.
2. Enter your **Last Name** in the second field.
3. Provide your **Email** address in the third field. Please use a valid email format (e.g., example@domain.com).
4. Enter your **Birth Date** in the fourth field. Use the date format MM/DD/YYYY.
5. Fill in your **Phone Number** in the fifth field.

## Field-by-Field Explanation

* **First Name** (`name`, text, required): Enter your first name as it is written on your official identification document.
* **Last Name** (`last_name`, text, required): Enter your last name as it is written on your official identification document.
* **Email** (`email`, email, required): Enter your valid email address that will be used for communication and updates.
* **Birth Date** (`birth_date`, date, required): Enter your birthdate in the format MM/DD/YYYY.
* **Phone Number** (`phone`, text, required): Enter your phone number without any special characters (e.g., +, -).
