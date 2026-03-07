<thinking>
This form is likely for attendees to register for a conference related to livestock care. It will ask for contact information, registration type, and other details about the attendee. I will need to review the form fields to ensure there are no redundant or missing fields. This form should be used by end-users to sign up for the conference. I will make sure to clearly explain each field in the user-facing guide.
</thinking>

# Livestock Care Conference Registration Form - Help Guide
## Purpose
This guide will walk you through the Livestock Care Conference Registration Form. The form is designed to collect information from attendees who want to register for the conference.

## How To Complete This Form
- To complete the form, start by filling out your contact information in the "Contact Info" page.
- On the next page, select your registration type and confirm your registration.

## Field-by-Field Explanation
- **Contact Info** (`contact_info`, text, optional): This is where you will enter your name and contact details.
  - Enter your name as it appears on your official documents.
  - Enter your email address in the format `name@example.com`.
  - Enter your phone number in the format `123-456-7890`.
- **Registration Type** (`registration_type`, select_one, optional): 
  - Choose the type of registration that best fits your needs.
  - If you are not sure, select "Type 1" or "Type 2" for now and adjust later.
  - If you need to register multiple people, you can select "Type 3".
- **Name** (`name`, text, optional): This field is for your name.
  - Enter your name as it appears on your official documents.
- **Email** (`email`, email, optional): This is where you will enter your email address.
  - Enter your email address in the format `name@example.com`.
- **Phone** (`phone`, text, optional): This field is for your phone number.
  - Enter your phone number in the format `123-456-7890`.
- **Registration Date** (`registration_date`, date, optional): This field is for the date you are registering.
  - Choose the date you plan to attend the conference.
  - Format is `YYYY-MM-DD`.
- **Number of Attendees** (`number_of_attendees`, number, optional): This is for the number of people you are registering.
  - If you are registering multiple people, enter the number here.
  - If you are registering just yourself, enter "1".
- **Comments** (`comments`, note, optional): This is where you can add any comments or information about your registration.
  - Enter any additional details you want to provide about your registration.
- **Additional Info** (`additional_info`, select_multiple, optional): This is where you can select any additional information that applies to your registration.
  - Choose any of the available options that fit your situation.
  - If none of the options apply, select "None of the above".
- **Confirm Registration** (`confirm_registration`, select_one, optional): 
  - Confirm your registration by selecting "Confirm 1" or "Confirm 2" or "Confirm 3".
  - This will confirm that you have completed the form correctly.
