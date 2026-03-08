<thinking>
To design a user-facing help guide for this form, we need to clarify the purpose of the form, how to complete it, and what each field means. Based on the provided YAML, the form appears to be for registering individuals for an event or workshop associated with an education expo. It captures contact information and details about the individual's level of education, interests, and registration preferences. The form may be for attendees, speakers, or organizers of the event.</thinking>

# Education Expo Registration Form - Help Guide
## Purpose
The Education Expo Registration Form is designed to collect information from individuals interested in or planning to attend an educational event or workshop related to the expo.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your contact details, including name, address, and any other relevant contact information.
2. Select your level of education (High school, Bachelor's, Master's, or Phd).
3. Choose your fields of interest (Science, Arts, or Humanities).
4. Enter your contact number (phone or other).
5. Provide your email address.
6. Enter any additional comments or notes.
7. Optionally, you can register for the Expo or Workshop.
8. Enter any additional details in the "assigned tool" text field.

## Field-by-Field Explanation
### 1. contact_details
- **contact_details** (`text`, **optional**): Enter your name, address, and any other contact information relevant to your registration.

### 2. level_of_education
- **level_of_education** (`select_one`, **optional**): Select your current level of education (High school, Bachelor's, Master's, or Phd).

### 3. fields_of_interest
- **fields_of_interest** (`select_multiple`, **optional**): Choose your areas of interest for the event (Science, Arts, or Humanities).

### 4. contact_number
- **contact_number** (`number`, **optional**): Enter your contact number (phone or other).

### 5. email
- **email** (`email`, **optional**): Provide your email address.

### 6. phone
- **phone** (`text`, **optional**): Enter your phone number.

### 7. registered_for
- **registered_for** (`select_one`, **optional**): Choose what you are registering for (Expo or Workshop).

### 8. note
- **note** (`note`, **optional**): Enter any additional comments or notes about your registration.

### 9. assigned_tool
- **assigned_tool** (`text`, **optional**): Enter any additional details related to your assigned tool.

### 10. output_file
- **output_file** (`text`, **optional**): Enter the output file name or details, if applicable.

## Tips
* Please ensure that all fields are filled out accurately and completely.
* Use correct formatting for contact numbers and email addresses.
* You can register for either the Expo or Workshop, but not both.
