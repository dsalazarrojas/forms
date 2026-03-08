# Language Validation Form - Help Guide

## Purpose

The Language Validation Form is designed to collect information about language validation for a translation project or content review process. This form helps track language validation progress, comments, and reviewer information.

## How To Complete This Form

1. Start by selecting the language(s) relevant to the validation process.
2. Choose the status of the translation: Translated, In Progress, or Not Translated.
3. Provide comments on the validation process, if necessary.
4. Select the reviewer who has reviewed the content.
5. Enter the date and time the review was conducted.
6. Choose the tool assigned for the validation process.
7. Upload any output files related to the language validation.
8. Enter the directory where the output files are located.
9. Enter the form ID.
10. Select the user who created the form.
11. Enter the time and date the form was created.
12. Select the user who updated the form.
13. Enter the time and date the form was updated.
14. Select the user who validated the form.
15. Enter the time and date the form was validated.
16. Select the user who reviewed the form.
17. Enter the time and date the form was reviewed.

## Field-by-Field Explanation

- **Language** (`language`, `select_multiple`, required: false): Select the language(s) relevant to the validation process. This field allows you to choose one or multiple languages that need to be validated.
- **Language ID** (`language_id`, `number`, required: false): This field is intended for entering a unique ID for the language validation process. However, the purpose of this field is unclear, and more information is needed to understand its relevance.
- **Translation Status** (`translation_status`, `select_one`, required: false): Choose the status of the translation: Translated, In Progress, or Not Translated.
- **Validation Comments** (`validation_comments`, `text`, required: false): Provide comments on the validation process, if necessary.
- **Reviewer Comments** (`reviewer_comments`, `text`, required: false): Enter comments from the reviewer on the validation process.
- **Reviewer** (`reviewer`, `select_one`, required: false): Select the reviewer who has reviewed the content.
- **Date Reviewed** (`date_reviewed`, `date`, required: false): Enter the date the review was conducted.
- **Time Reviewed** (`time_reviewed`, `time`, required: false): Enter the time the review was conducted.
- **Language Validation Form Comments** (`language_validation_form_comments`, `text`, required: false): Enter any additional comments on the language validation form.
- **Assigned Tool** (`assigned_tool`, `select_one`, required: false): Choose the tool assigned for the validation process.
- **Output File** (`output_file`, `text`, required: false): Upload any output files related to the language validation.
- **Output Dir** (`output_dir`, `text`, required: false): Enter the directory where the output files are located.
- **Form ID** (`form_id`, `number`, required: false): Enter the unique ID for the form.
- **Created By** (`created_by`, `select_one`, required: false): Select the user who created the form.
- **Created Time** (`created_time`, `time`, required: false): Enter the time the form was created.
- **Created Date** (`created_date`, `date`, required: false): Enter the date the form was created.
- **Updated By** (`updated_by`, `select_one`, required: false): Select the user who updated the form.
- **Updated Time** (`updated_time`, `time`, required: false): Enter the time the form was updated.
- **Updated Date** (`updated_date`, `date`, required: false): Enter the date the form was updated.
- **Validated By** (`validated_by`, `select_one`, required: false): Select the user who validated the form.
- **Validated Time** (`validated_time`, `time`, required: false): Enter the time the form was validated.
- **Validated Date** (`validated_date`, `date`, required: false): Enter the date the form was validated.
- **Reviewed By** (`reviewed_by`, `select_one`, required: false): Select the user who reviewed the form.
- **Reviewed Time** (`reviewed_time`, `time`, required: false): Enter the time the form was reviewed.
