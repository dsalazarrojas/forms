# Veterinary Medical History Form - Help Guide
## Purpose
The Veterinary Medical History Form is used to gather information about a pet's medical history, which is essential for the veterinary service to provide optimal care and treatment.

## How To Complete This Form
To complete this form, follow these steps:

1. Answer each question carefully and accurately, providing as much detail as possible.
2. If the answer to a question is 'No', please indicate that the condition or treatment does not apply.
3. If there is any additional information you'd like to provide, use the 'Additional comments' field at the end of the form.

## Field-by-Field Explanation
### Medical History
* **Medical History** (`pet_medical_history`, `select_multiple`, required: false): Check all the medical issues that apply to your pet from the list. These may include conditions like allergies, infections, or chronic diseases.
* **Date of the last medical issue** (`medical_history_date`, `date`, required: false): If you know the date of the last medical issue, please enter it in the format MM/DD/YYYY (e.g., 02/01/2022).
* **Veterinary Clinics** (`veterinary_clinics`, `select_one`, required: false): If your pet has been treated at a veterinary clinic, please select 'Yes'.

### Medical Conditions
* **Medical Condition** (`medical_condition`, `text`, required: false): Provide a brief description of the medical condition or issue.
* **Medical Treatment** (`medical_treatment`, `text`, required: false): Describe the treatment or medication received for the medical condition.

### Medical Allergies and Supplies
* **Allergies** (`allergies`, `select_multiple`, required: false): Check 'Yes' for any known allergies or sensitivities to medications or foods.
* **Medical Supplies** (`medical_supplies`, `text`, required: false): Provide the specific medical supplies or equipment used for your pet.

### Additional Comments
* **Additional comments** (`medical_history_additional_comments`, `note`, required: false): If you'd like to add any additional comments or information, use this field to provide any notes or observations.

### Miscellaneous
* **Médications** (`medications`, `text`, required: false): List any medications or supplements your pet is currently taking or has taken in the past.
