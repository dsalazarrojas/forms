# Organ Donation Registration Form - Help Guide
## Purpose
The Organ Donation Registration Form is designed to collect personal and medical information from individuals who wish to register for organ donation. This form will help our organization process your request and ensure that you are informed about the organ donation process.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in your first and last name in the "First Name" and "Last Name" fields, respectively.
2. Enter your email address in the "Email" field.
3. Provide your phone number in the "Phone" field.
4. Enter your birthdate in the "Birthdate" field.
5. Type in your address in the "Address" field.
6. If you have any medical conditions, select them from the list in the "Medical Condition" field.
7. If you have a specific blood type, select it from the list in the "Blood Type" field.
8. If you have any relevant medical notes, type them in the "Medical Notes" field.
9. Confirm that you are willing to donate your organs by selecting "True" in the "Confirm Donation" field.
10. Confirm that you are willing to provide your address for donation purposes by selecting "True" in the "Confirm Address" field.

## Field-by-Field Explanation

* **First Name** (`first_name`, text, required): Your first name is the name you were given at birth or the name you prefer to be known by.
* **Last Name** (`last_name`, text, required): Your last name is the surname you were given at birth or the name you prefer to be known by.
* **Email** (`email`, email, required): Your email address is used to contact you with updates about your organ donation registration.
* **Phone** (`phone`, text, required): Your phone number is used to contact you with updates and questions about your donation.
* **Birthdate** (`birthdate`, date, required): Your birthdate is used to verify your identity and confirm your age.
* **Address** (`address`, text, required): Your address is the location where we can contact you and deliver donation related items to you.
* **Medical Condition** (`medical_condition`, select_one, required): Please select any medical conditions you have from the list, such as kidney disease, diabetes, or heart disease.
* **Blood Type** (`blood_type`, select_multiple, required): Please select your specific blood type from the list, such as A+, A-, B+, B-, O+, O-, AB+, AB-.
* **Medical Notes** (`medical_notes`, note, required): Please type in any relevant medical notes or details that you think are important for your donation process.
* **Confirm Donation** (`confirm_donation`, select_one, required): Confirm that you are willing to donate your organs by selecting "True".
* **Confirm Address** (`confirm_address`, select_one, required): Confirm that you are willing to provide your address for donation purposes by selecting "True".
