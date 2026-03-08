<thinking>... internal reasoning block ...</thinking>

# phone_number_verification_form - Help Guide
## Purpose
This form is designed to verify a phone number. It is meant to be completed by users when they wish to validate their phone number, likely for account verification or sign-up purposes. This form is only necessary when users have entered their phone number previously, as it will be used to confirm the correctness of the number.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your phone number in the "Phone Number" field.
2. Select "Yes" or "No" in the "Verify" field to confirm whether the entered phone number is correct or not.
3. The "Result" field will display the outcome of the verification process.

## Field-by-Field Explanation
* **Phone Number** (`phone_number`, `text`, required): Enter the phone number you wish to verify. Please use the format of your country's standard phone number format (e.g., 123-456-7890). Make sure to enter the correct digits without any extra symbols or spaces.
* **Verify** (`verify`, `select_one`, required): Choose "Yes" if the entered phone number is correct, or "No" if it is incorrect.
* **Result** (`result`, `note`, not required): This field will display the outcome of the verification process, which will be either "Correct" or "Incorrect".
