# new_customer_investment_registration_form - Help Guide
## Purpose
This form is designed to gather registration information from new customers interested in investing in a particular category.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your First Name and Last Name in their respective fields.
2. Enter your Email address accurately, as it will be used for communication.
3. Enter your Phone number for contact purposes.
4. Select the type of investment you are interested in from the dropdown menu.
5. Enter the amount of your investment.
6. Choose your preferred investment frequency from the dropdown menu.
7. If necessary, provide your Date Of Birth and Time Of Birth for identification purposes.
8. Add any additional comments or notes regarding your investment preferences or requirements.
9. Select the category you are interested in investing in from the dropdown menu.
10. Review your information before submitting the form.

## Field-by-Field Explanation
* **First Name** (`first_name`, `text`, required): This field is for your first name.
* **Last Name** (`last_name`, `text`, required): This field is for your last name.
* **Email** (`email`, `email`, required): Enter your email address accurately.
* **Phone** (`phone`, `text`, required): Enter your contact phone number.
* **Investment Type** (`investment_type`, `select_one`, required): Choose the type of investment you are interested in.
* **Investment Amount** (`investment_amount`, `number`, required): Enter the amount of your investment.
* **Investment Frequency** (`investment_frequency`, `select_multiple`, optional): Choose how often you plan to invest.
* **Date Of Birth** (`date_of_birth`, `date`, optional): If necessary, enter your date of birth for identification purposes.
* **Time Of Birth** (`time_of`, `time`, optional): If necessary, enter your time of birth for identification purposes.
* **Address** (`address`, `note`, optional): Add any additional comments or notes regarding your investment preferences or requirements.
* **Notes** (`notes`, `note`, optional): Add any additional comments or notes regarding your investment preferences or requirements.
* **Assigned Tool** (`assigned_tool`, `text`, required): This field is not clearly labeled and is assumed to be a required field. Please enter the name of the tool assigned to you.
* **Category** (`category`, `select_one`, required): Choose the category you are interested in investing in.
