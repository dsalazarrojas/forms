<thinking>
We need to create a user-friendly help guide for the "School District Calendar Voting Form" that explains its purpose, completion instructions, and field-by-field explanation. This guide will help end-users understand what the form is for, how to fill it out correctly, and what each field means. We'll follow the provided YAML structure to craft a clear and concise guide.

</thinking>

# School District Calendar Voting Form - Help Guide
## Purpose
The School District Calendar Voting Form is designed to gather input from school staff, teachers, and other stakeholders on the school calendar for the upcoming school year. This form helps the school district to gather feedback and suggestions on the calendar events, categories, and tools used for the calendar management system.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the category that best describes the purpose of the form submission.
2. Provide a brief description of the form submission.
3. Enter a unique form ID (optional).
4. Choose the assigned tool used for the calendar management system (optional).
5. Enter the output file name (optional).
6. Provide a long description of the form submission (optional).
7. Enter category and description IDs (optional).

## Field-by-Field Explanation
* **Category** (`Category`, `select_one`, required: false): Select the category that best describes the purpose of the form submission. This will help us understand the context of the feedback.
* **Description** (`Description`, `text`, required: true): Enter a brief description of the form submission. This should be a short paragraph explaining the purpose of the submission.
* **Form ID** (`Form ID`, `number`, required: false): Enter a unique ID for the form submission (optional).
* **Assigned Tool** (`Assigned Tool`, `select_multiple`, required: false): Choose the tool used for the calendar management system (optional).
* **Output File** (`Output File`, `text`, required: false): Enter the name of the output file (optional).
* **Description (Long)** (`Description (Long)`, `text`, required: false): Provide a long description of the form submission (optional).
* **Category (Long)** (`Category (Long)`, `text`, required: false): Enter a long description of the category (optional).
* **Description (Short)** (`Description (Short)`, `text`, required: false): Enter a short description of the form submission (optional).
* **Form IDs** (`Form IDs`, `text`, required: false): Enter the IDs of the forms associated with the submission (optional).
* **Category IDs** (`Category IDs`, `text`, required: false): Enter the IDs of the categories associated with the submission (optional).
* **Description IDs** (`Description IDs`, `text`, required: false): Enter the IDs of the descriptions associated with the submission (optional).

## Tips
* Please provide clear and concise descriptions for each field to help us understand your submission.
* If you're unsure about any field, feel free to ask for clarification.
* Make sure to enter unique IDs for each form submission to avoid duplication.
