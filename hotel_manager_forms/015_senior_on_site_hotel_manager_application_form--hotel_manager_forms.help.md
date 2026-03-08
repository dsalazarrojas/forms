Internal reasoning:
This form is designed to collect information about senior on-site hotel managers from applicants. The primary goal is to assess their work experience, references, contact details, and date of birth. To ensure the application process is efficient and accurate, it's essential to provide clear guidelines for end-users on how to complete the form and what each field represents.

Given the YAML structure, the form has five fields: 

- The first page is not a field but more of a "page" that serves as an introduction or a header section.
- The second field is "work_experience" where applicants are asked to describe their work experience.
- The third field is "references" where applicants can choose whether they have any references or not.
- The fourth field is "contact_details" where applicants select how they want to be contacted (email, phone, or address).
- The fifth field is "date_of_birth" where applicants provide their date of birth.

Here is the final help guide in Markdown format:

# Senior On Site Hotel Manager Application Form - Help Guide
## Purpose
This form is designed to collect information about senior on-site hotel managers from applicants. It assesses their work experience, references, contact details, and date of birth.

## How To Complete This Form
To complete this form, follow these steps:

1. Please describe your work experience in the "work_experience" field.
2. Indicate whether you have any references by selecting "Yes" or "No" in the "references" field.
3. Choose how you want to be contacted by selecting one of the options (email, phone, or address) in the "contact_details" field.
4. Provide your date of birth in the "date_of_birth" field in the format dd/mm/yyyy.

## Field-by-Field Explanation

* **Work Experience** (`work_experience`, text, required): Please describe your work experience, including any relevant work history related to hotel management.
* **References** (`references`, select_multiple, required): Do you have any professional references? Select "Yes" if you have at least one reference, or "No" otherwise.
* **Contact Details** (`contact_details`, select_one, required): How do you want to be contacted? Select one of the following options:
	+ Email
	+ Phone
	+ Address
* **Date of Birth** (`date_of_birth`, date, required): Provide your date of birth in the format dd/mm/yyyy.

Note: Fields marked as "required" cannot be left blank. Please ensure you fill out all required fields to complete your application successfully.
