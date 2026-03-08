# investor_relationship_registration_form - Help Guide
## Purpose
The "Investor Relationship Registration Form" is a document used for collecting and organizing information about investors. This form is crucial for internal data collection and processing purposes.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your **Name** (1) in the provided text field.
2. Enter your **Email** (2) in the text field, ensuring it's a valid email address.
3. Select your **Country** (3) from the dropdown list.
4. Enter your **City** (4) in the text field.
5. (Optional) Select your **Province** (5) from the multiple-select options.
6. Choose how you **Submitted Form By** (6) from the dropdown options.
7. Select your preferred **Language** (7) for communication.
8. Choose your **Time Zone** (8) from the dropdown options.
9. (Optional) Enter a **Message** (9) in the text field.
10. Select the **Form Submission Status** (10) as "Draft" or "Submitted" to indicate the form's status.
11. Set the **Submission Time** (11) using the time picker.

## Field-by-Field Explanation

* **Name** (1) (`<text>`, required): Enter your name as it is known to you.
* **Email** (2) (`<email>`, required): Enter a valid email address associated with your name.
* **Country** (3) (`<select_one>`, required): Select the country you belong to from the dropdown list.
* **City** (4) (`<text>`, required): Enter your city name.
* **Province** (5) (`<select_multiple>`, optional): Select your province from the multiple-select options.
* **Form Submit By** (6) (`<select_one>`, required): Choose how you submit the form.
* **Language** (7) (`<select_one>`, required): Select your preferred language for communication.
* **Time Zone** (8) (`<select_one>`, required): Choose your time zone.
* **Message** (9) (`<text>`, optional): Enter a message if you have any additional comments or requests.
* **Form Submission Status** (10) (`<select_one>`, required): Select whether the form is "Draft" or "Submitted".
* **Submission Time** (11) (`<time>`, required): Set the time of form submission using the time picker.

Note: The form will automatically validate and prevent submission if the user has already submitted the form based on their unique identifier (e.g., email).
