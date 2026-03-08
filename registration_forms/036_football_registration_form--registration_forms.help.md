# football_registration_form - Help Guide
## Purpose
The "football_registration_form" is designed to collect essential information about players registering for a football team. This form helps the team administrators gather details such as player personal information, playing status, emergency contacts, and team affiliation.

## How To Complete This Form
To complete the form, follow these steps:

1.  On the "Player Information" page, provide your:
    *   First Name
    *   Last Name
    *   Date of Birth
2.  On the "Emergency Contact" page, fill in:
    *   Emergency Contact Name
    *   Emergency Phone Number
    *   Emergency Phone Extension (if applicable)
    *   Emergency Email (if applicable)
3.  On the "Player Status" page, select your:
    *   Player Position (e.g., "Yes" or "No")
    *   Player Status (e.g., "Active" or "Inactive")
4.  On the "Team Affiliation" page, select your:
    *   Team Affiliation (e.g., "Yes" or "No")
    *   Team Name (if applicable)
5.  On the "Notes" page, add any additional comments or information about your registration or team status.

## Field-by-Field Explanation
*   **Player Information (Player Information)** (`player_info`, `text`, required: false): This page is the first step in filling out the form. Enter your first name, last name, and date of birth in the corresponding fields.
*   **First Name (first_name)** (`first_name`, `text`, required: false): Enter your first name as it appears on your identification documents.
*   **Last Name (last_name)** (`last_name`, `text`, required: false): Enter your last name as it appears on your identification documents.
*   **Date of Birth (birth_date)** (`birth_date`, `date`, required: false): Enter your date of birth in the correct format (e.g., MM/DD/YYYY).
*   **Team Name (team_name)** (`team_name`, `text`, required: false): Enter the name of the team you are registering for (if applicable).
*   **Player Position (player_position)** (`player_position`, `select_one`, required: false): Select "Yes" if you are a player, "No" otherwise.
*   **Shirt Number (shirt_number)** (`shirt_number`, `number`, required: false): Enter your shirt number (if applicable).
*   **Emergency Contact (emergency_contact)** (`emergency_contact`, `text`, required: false): Enter the name of the emergency contact person.
*   **Emergency Contact Name (emergency_name)** (`emergency_name`, `text`, required: false): Enter the last name of the emergency contact person.
*   **Emergency Phone (emergency_phone)** (`emergency_phone`, `text`, required: false): Enter the primary phone number of the emergency contact person.
*   **Emergency Phone Extension (emergency_phone_extension)** (`emergency_phone_extension`, `text`, required: false): Enter the phone extension of the emergency contact person (if applicable).
*   **Emergency Email (emergency_email)** (`emergency_email`, `text`, required: false): Enter the email address of the emergency contact person (if applicable).
*   **Team Manager (team_manager)** (`team_manager`, `select_one`, required: false): Select "Yes" if the emergency contact person is the team manager, "No" otherwise.
*   **Player Status (player_status)** (`player_status`, `select_multiple`, required: false): Select the player's active status (e.g., "Active" or "Inactive").
*   **Notes (notes)** (`notes`, `note`, required: false): Add any additional comments or information about your registration or team status.
*   **Player Position 2 (player_position_2)** (`player_position_2`, `text`, required: false): Enter your player's secondary position or role.
*   **Emergency Phone Area Code (emergency_phone_area_code)** (`emergency_phone_area_code`, `text`, required: false): Enter the area code of the emergency contact person's phone (e.g., 1, 2, or 3-digit area code).
*   **Emergency Phone Number (emergency_phone_number)** (`emergency_phone_number`, `text`, required: false): Enter the primary phone number of the emergency contact person (without the area code).
*   **Emergency Phone Extension 2 (emergency_phone_extension_2)** (`emergency_phone_extension_2`, `text`, required: false): Enter the phone extension of the emergency contact person (if applicable).
*   **Player Position 3 (player_position_3)** (`player_position_3`, `text`, required: false): Enter your player's tertiary position or role.
*   **Notes 2 (notes2)** (`notes2`, `note`, required: false): Add any additional comments or information about your registration or team status.
*   **Notes 3 (notes3)** (`notes3`, `note`, required: false): Add any additional comments or information about your registration or team status.
*   **Submit (submit)** (`submit`, `text`, required: false): Submit the form to finalize your registration.

## Tips

*   Make sure to fill out all required fields to ensure accurate and complete registration.
*   Review the form carefully before submitting to avoid errors.
*   If you are unsure about any field, contact the team administrator for assistance.
