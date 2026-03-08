# Narrator Selection Form - Help Guide
## Purpose
The "Narrator Selection Form" is designed to collect information from users, and it's essential to fill it out to provide accurate and complete input or feedback for a specific use case.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your **First Name** in the "First Name" field.
2. Add your **Last Name** in the "Last Name" field.
3. Enter your **Email** address in the "Email" field.
4. Provide your **Phone Number** in the "Phone Number" field.
5. Select your preferred **Narrator** from the "Select a Narrator" dropdown menu.
6. If you need to, select multiple **Narrators** from the "Select Multiple Narrators" dropdown menu.
7. Enter the **Date** of your visit or interaction in the "Date" field.
8. Choose the **Time** of your visit or interaction in the "Time" field.
9. If you want to add a note, type it in the "Note" field.
10. Finally, confirm or deny your selection by answering "True" or "False" in the "Confirm Narrator" field.

## Field-by-Field Explanation
* **First Name** (`first_name`, text, required: false): Enter your first name as it appears on your official documents.
* **Last Name** (`last_name`, text, required: false): Enter your last name as it appears on your official documents.
* **Email** (`email`, email, required: false): Enter your email address as it appears on your official documents or the one you use for communication.
* **Phone Number** (`phone`, text, required: false): Enter your phone number as it appears on your official documents.
* **Select a Narrator** (`select_narrator`, select_one, required: false): Choose a single narrator from the list, this will be the primary contact for your input.
* **Select Multiple Narrators** (`select_narrators`, select_multiple, required: false): If you need to interact with multiple people, select all the relevant narrators.
* **Date** (`date`, date, required: false): Enter the date of your visit or interaction in the format MM/DD/YYYY.
* **Time** (`time`, time, required: false): Enter the time of your visit or interaction in the format 12:HH.
* **Note** (`note`, note, required: false): Add any relevant comments or information about your visit or interaction.
* **Confirm Narrator** (`confirm_narrator`, select_one, required: false): Confirm whether you selected the correct narrator or not.

## Tips
* Make sure to double-check your information for accuracy before submitting the form.
* If you're unsure about any field, ask the responsible personnel for guidance.
* This form should only be filled out once for each interaction or visit.
