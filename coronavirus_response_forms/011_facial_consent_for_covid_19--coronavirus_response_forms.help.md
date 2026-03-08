<thinking>As I create the user-facing help guide for this form, I'll keep in mind that it serves as a guide for users to understand the purpose of the form and how to complete it effectively. I'll review the provided YAML fields to ensure that each section and field explanation is concrete, concise, and practical. The form is designed for obtaining client consent and treatment preferences for COVID-19 related procedures.</thinking>

# Facial Consent For COVID 19 - Help Guide
## Purpose
The "Facial Consent For COVID 19" form is designed to collect information from clients regarding their consent and treatment preferences for COVID-19 related procedures. This form ensures that clients understand and agree to the treatment processes and provides an opportunity for them to choose their preferred treatment options.

## How To Complete This Form
To complete this form, please follow these steps:

1. Read the form carefully and ensure you understand the purpose and instructions.
2. Fill in the "User input" section with your personal details (if required).
3. In the "Treatment options" section, select the treatments you are interested in or willing to receive.
4. Choose your preferred treatment from the "Preferred treatment" dropdown menu.
5. Indicate your consent to the selected treatment in the "Client consent" field.
6. If applicable, select a date for your consent in the "Date of consent" field.
7. If applicable, select a time for your consent in the "Time of consent" field.
8. Sign and date your consent in the "Staff signature" and "Date of signature" fields, respectively.

## Field-by-Field Explanation
* **User input** (`user_input`, note, required: false): Enter any additional information you would like to provide to the staff.
* **Treatment options** (`treatment_options`, select_multiple, required: false): Select all the treatments you are interested in or willing to receive. You can choose more than one option.
* **Preferred treatment** (`preferred_treatment`, select_one, required: false): Choose the treatment you would like to receive.
* **Client consent** (`client_consent`, select_one, required: false): Confirm that you consent to the selected treatment. Select "True" if you agree, and "False" if you do not.
* **Date of consent** (`date_of_consent`, date, required: false): Select the date on which you give your consent (if applicable).
* **Time of consent** (`time_of_consent`, time, required: false): Select the time of day when you give your consent (if applicable).
* **Staff signature** (`staff_signature`, text, required: false): A staff member will sign this field to confirm they have received your consent.
* **Date of signature** (`date_of_signature`, date, required: false): The date on which the staff member signs to confirm your consent.

## Tips
* Please fill out the form carefully and accurately to ensure that your consent and treatment preferences are correctly recorded.
* If you have any questions or concerns, please don't hesitate to ask the staff for assistance.
* The staff will review your form and ensure that your consent and treatment preferences are properly documented.
