<thinking>
To create a user-facing help guide for the Open Peer Review Platform Registration form, we first need to understand the purpose of the form and the fields it contains. Based on the provided YAML, the form appears to be for registering a new peer review platform, likely for research or academic purposes. 

The form is composed of several fields, including:

- A text field for the registration form name (page 1)
- An email field for the user's email (page 2)
- A text field for the reviewer name (page 3)
- A text field for the institution (page 4)
- A text field for the job title (page 5)
- A select field for the research area (page 6)
- A select field for the role (page 7)
- Text fields for the submitters name and contact number (pages 8 and 9)
- An email field for the submitter's email (page 10)

The form does not specify the fields as required, but it is likely that all the fields are necessary for a complete registration. The "Registration Form Name" field seems to be a meta-field, likely used for internal identification and management.

Before proceeding, it is worth noting that the form does not contain any fields to confirm the user's identity or authenticate their access rights. This may be an oversight and should be addressed in a real-world implementation.

</thinking>

# Open Peer Review Platform Registration - Help Guide
## Purpose
This guide is intended to assist users in completing the Open Peer Review Platform Registration form.

## How To Complete This Form
1. Fill out the registration form name field with the name of the registration form you are creating.
2. Enter your email address in the email field. Ensure it matches your actual email address.
3. Provide your reviewer name in the text field.
4. Enter the name of your institution in the text field.
5. Enter your job title in the text field.
6. Select your research area from the available options in the select field.
7. Choose your role from the available options in the select field.
8. Enter the name of the person submitting the registration in the text field.
9. Enter your contact number in the text field.
10. Enter the email address of the person submitting the registration in the email field.

## Field-by-Field Explanation
* **Registration Form Name** (`registration_form_name`, text, optional): Enter the name of the registration form you are creating.
* **Email** (`email`, email, optional): Enter your email address. 
* **Reviewer Name** (`reviewer_name`, text, optional): Provide your name as the reviewer.
* **Institution** (`institution`, text, optional): Enter the name of your institution.
* **Job Title** (`job_title`, text, optional): Enter your job title.
* **Research Area** (`research_area`, select_one, optional): Select your research area from the available options.
* **Role** (`role`, select_one, optional): Choose your role from the available options.
* **Submitter Name** (`submitter_name`, text, optional): Enter the name of the person submitting the registration.
* **Contact Number** (`contact_number`, text, optional): Enter your contact number.
* **Submitter Email** (`submitter_email`, email, optional): Enter the email address of the person submitting the registration.

## Tips
- Ensure that you enter a valid email address for both your email and submitter email fields.
- Select a research area and role that accurately represent your affiliation and responsibilities.
