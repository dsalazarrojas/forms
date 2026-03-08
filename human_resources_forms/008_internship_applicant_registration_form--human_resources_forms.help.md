<thinking>
To create a user-facing help guide for the Internship Applicant Registration Form, I need to understand the form's purpose and how to complete it. The form appears to be for registering internship applicants, and based on the provided YAML, it seems to collect general contact information (name, email, phone), address, skills, and experience. It also seems to collect information about referees (managers or supervisors) and a manager's contact information.

The form has a mix of text inputs (first name, last name, date of birth, skills, experience, address, education), email, phone, and text inputs for referees and a manager. The form also has a select multiple options for referees, which suggests that the user can choose multiple referees.

The form requires no specific information to be filled out, but based on the label and hint text, it seems that all fields are optional.

To complete the form, the user should start by filling out their personal information (first name, last name, email, phone), address, skills, experience, and education. 

After that, they can choose the referees they'd like to provide references for. They should select "Manager 1", "Manager 2", "Manager 3" from the select multiple options list.

For each referee, they need to fill out their name, contact information, and position.

Finally, they need to fill out their manager's name and position.

The form should be used by students and professionals looking to register for an internship with your organization.
</thinking>

# Internship Applicant Registration Form - Help Guide
## Purpose
This form is for registering as an internship applicant. It collects general contact information, skills, experience, and referees.

## How To Complete This Form

1.  Fill out your personal information: First name, Last name, Email, Phone
2.  Enter your address: 
3.  Describe your skills:
4.  Share your experience:
5.  List your education:
6.  Upload your resume:
7.  Choose your referees: Select "Manager 1", "Manager 2", or "Manager 3" from the list.
8.  For each referee, fill out their name, contact information, and position:
	*   Referee 1 Name, Referee 1 Contact, Referee 1 Position
	*   Referee 2 Name, Referee 2 Contact, Referee 2 Position
	*   Referee 3 Name, Referee 3 Contact, Referee 3 Position
9.  Enter your manager's name and position.

## Field-by-Field Explanation

*   **First Name** (`first_name`, Text, Required): Enter your first name.
*   **Last Name** (`last_name`, Text, Required): Enter your last name.
*   **Date of Birth** (`date_of_birth`, Date, Required): Enter your date of birth (mm/dd/yy).
*   **Email** (`email`, Email, Required): Enter your email address.
*   **Phone** (`phone`, Text, Required): Enter your phone number.
*   **Address** (`address`, Text, Required): Enter your address.
*   **Skills** (`skills`, Text, Required): List your skills.
*   **Experience** (`experience`, Text, Required): Describe your experience.
*   **Education** (`education`, Text, Required): List your education.
*   **Resume** (`resume`, Text, Required): Upload your resume.
*   **Referees** (`referees`, Select Multiple, Required): Choose "Manager 1", "Manager 2", or "Manager 3" as referees.
*   **Referee 1 Name** (`referee_1_name`, Text, Required): Enter the name of your Referee 1.
*   **Referee 1 Contact** (`referee_1_contact`, Text, Required): Enter the contact information of your Referee 1.
*   **Referee 1 Position** (`referee_1_position`, Text, Required): Enter the position of your Referee 1.
*   **Referee 2 Name** (`referee_2_name`, Text, Required): Enter the name of your Referee 2.
*   **Referee 2 Contact** (`referee_2_contact`, Text, Required): Enter the contact information of your Referee 2.
*   **Referee 2 Position** (`referee_2_position`, Text, Required): Enter the position of your Referee 2.
*   **Referee 3 Name** (`referee_3_name`, Text, Required): Enter the name of your Referee 3.
*   **Referee 3 Contact** (`referee_3_contact`, Text, Required): Enter the contact information of your Referee 3.
*   **Referee 3 Position** (`referee_3_position`, Text, Required): Enter the position of your Referee 3.
*   **Manager Name** (`manager_name`, Text, Required): Enter your Manager's name.
*   **Manager Position** (`manager_position`, Text, Required): Enter your Manager's position.

## Tips

*   Make sure to fill out all required fields. 
*   Use the select multiple options for referees to choose from available managers.
