<thinking>
We need to create a help guide for a form that is used for processing student grade withdrawals, likely in an educational setting. The form is meant to collect information from students, teachers, and potentially other contacts. The purpose of this form is not explicitly defined in the provided YAML, so let's assume it's for administrative purposes, such as updating student records or tracking grade-level changes. The fields are quite diverse, with a mix of text, select_one, number, and email inputs. The form likely aims to gather information about the student, their grade level, reason for withdrawal, contact information, and other relevant details. We should focus on making the help guide clear and concise, covering the form's purpose, how to complete it, and a field-by-field explanation of each input.
</thinking>

# Withdrawal Grade Form - Help Guide
## Purpose
The Withdrawal Grade Form is used for processing student grade withdrawals. This form is used to collect information from students and other contacts to update student records or track grade-level changes.

## How To Complete This Form
To complete this form, follow these steps:

1. Start by filling out the form completely, providing all required information.
2. Review each field carefully to ensure you provide accurate and relevant details.
3. Use the options available for select_one fields to select the correct answer.
4. Enter your contact information in the relevant fields.
5. Add any additional comments or notes in the Notes field.

## Field-by-Field Explanation
- **Withdrawal Request Form** (`withdrawal_request_form`, text, required): This field is a text input where you can type in your request for withdrawal.
- **Student ID** (`student_id`, number, optional): Enter your student ID number, if applicable.
- **Student Name** (`student_name`, text, optional): Enter your name as it appears on your student record.
- **Grade Level** (`grade_level`, select_one, optional): Select your current grade level (High or Low).
- **Reason for Withdrawal** (`reason_for_withdrawal`, select_one, optional): Indicate if you are withdrawing due to 'Yes' or 'No' reason.
- **Academic Year** (`academic_year`, select_one, optional): Select if you are currently in 'Yes' or 'No' academic year.
- **Term** (`term`, select_one, optional): Select if you are in 'Yes' or 'No' term.
- **Student Contact Email** (`student_contact_email`, email, optional): Enter your student email address.
- **Student Contact Phone** (`student_contact_phone`, text, optional): Enter your student phone number.
- **Student Contact Phone Type** (`student_contact_phone_type`, select_one, optional): Indicate if your student contact phone is 'Yes' or 'No'.
- **Teacher Contact Email** (`teacher_contact_email`, email, optional): Enter your teacher's email address.
- **Teacher Contact Phone** (`teacher_contact_phone`, text, optional): Enter your teacher's phone number.
- **Teacher Contact Phone Type** (`teacher_contact_phone_type`, select_one, optional): Indicate if your teacher's contact phone is 'Yes' or 'No'.
- **Other Reason for Withdrawal** (`reason_for_withdrawal_other`, text, optional): Provide any other reason for withdrawal.
- **Notes** (`notes`, note, optional): Add any additional comments or notes about your withdrawal request.
- **Submitted By** (`submitted_by`, text, optional): This field is reserved for the administrator who submitted the form; please do not fill it in.
