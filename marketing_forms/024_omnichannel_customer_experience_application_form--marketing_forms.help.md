# Omnichannel Customer Experience Application Form - Help Guide
## Purpose
The Omnichannel Customer Experience Application Form is a tool used to gather customer feedback and provide insights for improvement across various interaction channels.
## How To Complete This Form
To complete this form, follow these steps:

1. Enter your First Name in the "First Name" field.
2. Enter your Last Name in the "Last Name" field.
3. Enter your Email in the "Email" field.
4. Enter your Phone number in the "Phone" field.
5. Enter the Date of your interaction in the "Date" field.
6. Select the Time of your interaction in the "Time" field.
7. Enter any additional notes about your experience in the "Note" field.
8. Select the Category of your interaction from the provided options.
9. Select any relevant Vendors that were involved in your interaction.
10. Select any relevant Projects that were involved in your interaction.
11. Enter the name of the CX Manager responsible for your interaction.
12. Click the "Submit" button to submit your form.

## Field-by-Field Explanation
- **First Name** (`form_first_name`, text, required: false): Enter your first name.
  * Example: John
  * Please make sure it is correct, as it will be used to address you.
- **Last Name** (`form_last_name`, text, required: false): Enter your last name.
  * Example: Doe
  * Please make sure it is correct, as it will be used to address you.
- **Email** (`form_email`, email, required: false): Enter your email address.
  * Example: john.doe@example.com
  * Please make sure it is correct and active.
- **Phone** (`form_phone`, text, required: false): Enter your phone number.
  * Example: 123-456-7890
  * Please make sure it is correct and active.
- **Date** (`form_date`, date, required: false): Enter the Date of your interaction.
  * Format: YYYY-MM-DD
  * Example: 2022-01-01
- **Time** (`form_time`, time, required: false): Select the Time of your interaction.
  * Format: HH:MM
  * Example: 14:30
- **Note** (`form_note`, note, required: false): Enter any additional notes about your experience.
  * Please provide a brief description of your interaction.
- **Category** (`form_category`, select_one, required: false): Select the Category of your interaction from the provided options.
  * Examples: Category A, Category B, Category C, Category D, Category E
  * Please choose the most relevant category.
- **Vendor** (`form_vendor`, select_multiple, required: false): Select any relevant Vendors that were involved in your interaction.
  * Examples: Vendor A, Vendor B, Vendor C, Vendor D, Vendor E
  * Please choose as many relevant vendors as apply to your interaction.
- **Project** (`form_project`, select_multiple, required: false): Select any relevant Projects that were involved in your interaction.
  * Examples: Project A, Project B, Project C, Project D, Project E
  * Please choose as many relevant projects as apply to your interaction.
- **CX Manager** (`form_cx_manager`, text, required: false): Enter the name of the CX Manager responsible for your interaction.
  * Example: John Smith
  * Please make sure it is correct, as it will be used to address your concern.
- **Form Submission** (`form_form_submission`, date, required: false): Enter the Date of your form submission.
  * Format: YYYY-MM-DD
  * Example: 2022-01-01
  * This field is automatically populated upon form submission.
  * Do not enter a value here.
