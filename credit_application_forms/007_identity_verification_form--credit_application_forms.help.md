# Identity Verification Form - Help Guide

## Purpose
This form is used to verify the identity of employees within the organization. It collects personal information and documentation to ensure that the employee's identity is verified and accurate.

## How To Complete This Form

To complete this form, please follow these steps:

1. Fill in your Employee Name in the "Employee Name" field.
2. Enter your Date of Birth (employee_dob) in the format MM/DD/YYYY.
3. Provide your Social Security Number (social_security_number).
4. Enter your ID Number (id_number).
5. If applicable, provide your ID Card Number (id_card_number) and select the type of ID Card you possess.
6. Enter your address (address).
7. Provide your Employee Phone Number (employee_phone).
8. Enter your Driver's License Number (driver_license_number).
9. Enter the Date your ID was issued (id_issue_date) and the Date it expires (id_expire_date).
10. Select whether you possess a ID Card (id_card_number_type).
11. Select the type of ID Card you possess (id_card_number_type_type).
12. Select your consent for the use of your personal information (consent).
13. Leave a signature in the "Signature" field.

## Field-by-Field Explanation

* **Employee Name** (`employee_name`, text, required): Enter your full name as it appears on your official ID.
* **Date of Birth** (`employee_dob`, date, required): Enter your date of birth in the format MM/DD/YYYY.
* **Social Security Number** (`social_security_number`, text, required): Enter your social security number.
* **ID Number** (`id_number`, text, required): Enter your ID number issued by the government.
* **ID Card Number** (`id_card_number`, text, optional): Enter your ID card number if you possess a card.
* **Address** (`address`, text, optional): Enter your address.
* **Employee Phone** (`employee_phone`, text, optional): Enter your phone number.
* **Driver License Number** (`driver_license_number`, text, required): Enter your driver's license number.
* **ID Issue Date** (`id_issue_date`, date, optional): Enter the date your ID was issued.
* **ID Expiration Date** (`id_expire_date`, date, optional): Enter the date your ID expires.
* **ID Card Type** (`id_card_number_type`, select one, optional): Select 'Yes' if you possess a ID Card.
* **ID Card Type Type** (`id_card_number_type_type`, select multiple, optional): Select the type of ID Card you possess.
* **Consent** (`consent`, select one, optional): Select your consent for the use of your personal information.
* **Signature** (`signature`, note, optional): Leave a signature in the provided field.
* **ID Number Type** (`id_number_type`, select multiple, optional): Select the type of ID Number you possess.
