<thinking>...</thinking>

To create a user-facing help guide for the "health_consultant_information_form" form, I will follow the provided YAML structure and provide a clear and concise explanation of the form's purpose, how to complete it, and each field's meaning.

</thinking>

# health_consultant_information_form - Help Guide
## Purpose
The "health_consultant_information_form" is a form used to gather information about an individual's health consultant. This includes details such as their name, contact information, and verification status for email and phone. The form helps in collecting and maintaining accurate records for health-related tasks.

## How To Complete This Form
To complete this form, follow these steps:

1. **Select the Health Consultant's Role**: Choose between 'Health' and 'Consultant' to identify their profession.
2. **Enter First Name**: Enter the first name of the health consultant.
3. **Enter Last Name**: Enter the last name of the health consultant.
4. **Enter Date of Birth**: Enter the date of birth of the health consultant.
5. **Enter Email**: Enter the email address of the health consultant.
6. **Enter Phone Number**: Enter the phone number of the health consultant.
7. **Add Note (Optional)**: You can add any additional notes about the health consultant if needed.
8. **Verify Email and Phone**: Indicate the status of the health consultant's email and phone verification as 'Verified' or 'Not Verified'.

## Field-by-Field Explanation
- **Health Consultant** (`health_consultant`, `select_one`, not required): 
  - This field allows you to select the type of health consultant (Health or Consultant).
- **First Name** (`first_name`, `text`, not required): 
  - Enter the first name of the health consultant.
- **Last Name** (`last_name`, `text`, not required): 
  - Enter the last name of the health consultant.
- **Date of Birth** (`date_of_birth`, `date`, not required): 
  - Enter the date of birth of the health consultant in the correct format (YYYY-MM-DD).
- **Email** (`email`, `email`, not required): 
  - Enter the email address of the health consultant, following the standard email format (username@domain.com).
- **Phone** (`phone`, `text`, not required): 
  - Enter the phone number of the health consultant, including area code and country code if applicable.
- **Note** (`note`, `note`, not required): 
  - Add any additional notes about the health consultant if needed.
- **Email Verification** (`email_verification`, `select_multiple`, not required): 
  - Indicate the status of the health consultant's email verification as 'Verified' or 'Not Verified'.
- **Phone Verification** (`phone_verification`, `select_multiple`, not required): 
  - Indicate the status of the health consultant's phone verification as 'Verified' or 'Not Verified'.

## Tips
- Make sure to enter the correct date of birth in the correct format (YYYY-MM-DD).
- Verify the email and phone numbers to ensure accuracy.
- Use the note field to add any additional information about the health consultant.
- Select the correct verification status for the email and phone numbers.
