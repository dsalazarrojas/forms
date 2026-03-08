<thinking>
This form seems to be used for capturing information about a manuscript review process. It's likely used by authors or publishers to collect feedback and comments from reviewers. The form may be used in an academic or publishing context. I will check for any potential duplication or redundancy in the form design. The form has multiple fields that could be combined or consolidated for better usability. For example, the "Reviewer Terms" and "Reviewer Terms Agreed" fields seem to be redundant, as the "Reviewer Terms" field can be used for both purposes. I will review the form carefully to ensure that it is clear and concise for the end-user. I will also check if there are any missing or unnecessary fields. After review, I will provide a clear and concise help guide that explains each field's purpose and requirements.
</thinking>

# Manuscript Review Agreement - Help Guide
## Purpose
This form is used to capture information about a manuscript review process, including the reviewer's name, contact information, and comments about the manuscript. It's intended for use in academic or publishing contexts.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in your name and title of the manuscript as the primary input fields.
2. Enter your reviewer's name and email address in the respective fields.
3. Provide any comments or feedback about the manuscript in the "Reviewer Comments" field.
4. If applicable, indicate whether you have reviewed the reviewer's terms by selecting "Agreed" in the "Reviewer Terms Agreed" field. If you have not reviewed the terms, select "Not Agreed".

## Field-by-Field Explanation
* **Manuscript Review Agreement** (`form_title`, text, required: false): Enter the title of the manuscript being reviewed.
* **Reviewer Name** (`reviewer_name`, text, required: false): Enter the name of the reviewer.
* **Reviewer Email** (`reviewer_email`, email, required: false): Enter the email address of the reviewer.
* **Reviewer Phone** (`reviewer_phone`, text, required: false): Enter the phone number of the reviewer.
* **Reviewer Terms** (`reviewer_terms`, note, required: false): This field is intended for the reviewer to acknowledge that they have read and understood the review guidelines.
* **Reviewer Signature** (`reviewer_signature`, select_one, required: false): Select "True" to indicate that you have read and understood the review guidelines, or "False" if not.
* **Reviewer Terms Agreed** (`reviewer_terms_agreed`, select_one, required: false): This field is redundant with "Reviewer Signature" and can be removed or consolidated.
* **Reviewer Comments** (`reviewer_comments`, note, required: false): Enter any comments or feedback about the manuscript.
