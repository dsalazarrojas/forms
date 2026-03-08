# Covid Customer Reg Form - Help Guide
## Purpose
This form is designed to collect customer information for contact tracing purposes in a healthcare setting.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill out your First Name and Last Name in the text fields provided.
2. Enter your Email address for communication purposes.
3. Provide your Phone number for follow-up contact.
4. Answer the two yes/no questions regarding contact with someone with Covid-19 and if you are a healthcare worker.

## Field-by-Field Explanation

* **First Name** (`first_name`, text, **required**): Enter your first name in this field.
* **Last Name** (`last_name`, text, **required**): Enter your last name in this field.
* **Email** (`email`, email, **required**): Enter your valid email address for communication purposes.
* **Phone** (`phone`, text, **optional**): Enter your phone number for follow-up contact.
* **Have you been in contact with someone with Covid-19?** (`question1`, select_one, **optional**): Answer "True" if you have been in contact with someone with Covid-19, "False" otherwise.
* **Are you a healthcare worker?** (`question2`, select_one, **optional**): Answer "True" if you are a healthcare worker, "False" otherwise.
