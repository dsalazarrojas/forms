# Labour Registration Form - Help Guide
## Purpose
The Labour Registration Form is used to collect necessary information from labourers who wish to register with the company. This information will be used for HR purposes and other administrative tasks.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter the Company Name where you are working for.
2. Enter your Address for the company.
3. Enter your Address Line 2.
4. Enter the City where you are working.
5. Select the State where you are working.
6. Enter your Zip Code.
7. Enter your Phone Number.
8. Enter your Email.
9. Enter a brief description of your Job.
10. Select your Job Type (if applicable).
11. Select the Labor Agreements you are aware of or have signed.

## Field-by-Field Explanation
* **Company Name** (`company_name`, text, required: false): Please enter the name of the company you are working for.
* **Address** (`address_1`, text, required: false): Please enter your work address.
* **Address Line 2** (`address_2`, text, required: false): Enter any additional address information you wish to provide.
* **City** (`city`, text, required: false): Enter the city where you are working.
* **State** (`state`, select_one, required: false): Please select the state where you are working.
* **Zip Code** (`zip_code`, text, required: false): Enter your Zip/Postal code.
* **Phone Number** (`phone_number`, text, required: false): Enter your contact phone number.
* **Email** (`email`, email, required: false): Enter your work email.
* **Job Description** (`job_description`, text, required: false): Enter a brief description of your job role.
* **Job Type** (`job_type`, select_multiple, required: false): Please select your job type (if applicable).
* **Labor Agreements** (`labor_agreements`, select_multiple, required: false): Please select the labor agreements you are aware of or have signed.
