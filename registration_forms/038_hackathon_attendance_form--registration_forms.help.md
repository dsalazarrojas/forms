# hackathon_attendance_form - Help Guide
## Purpose
The "hackathon_attendance_form" is a form used to register participants for a hackathon event. It collects essential information about each participant, which is helpful for event organization and communication.

## How To Complete This Form
To complete the form, follow these steps:

1. Fill in your name as it appears on your ID or business card.
2. Enter your email address for contact purposes.
3. Provide a valid phone number for contact.
4. Indicate your participant status as active, inactive, or pending.
5. Type the name of the hackathon you are attending.
6. (Optional) Fill in any additional team members and their respective roles and names.
7. (Optional) Provide notes for any additional information.
8. If you are attending with a team, provide the team name.
9. If you have a second participant with you, fill in their details.

## Field-by-Field Explanation
- **name**: Your full name as it appears on your ID or business card.
  - Type: text
  - Required: true
- **name_of_participant**: Name of the participant you are representing (if it's not yourself).
  - Type: text
  - Required: true
- **participant_name**: Name of the participant you are representing.
  - Type: text
  - Required: false
- **email**: A valid email address for contact purposes.
  - Type: email
  - Required: true
- **contact_email**: A valid email address for contact purposes (if different from above).
  - Type: email
  - Required: false
- **phone**: Your phone number for contact.
  - Type: text
  - Required: false
- **contact_phone**: Contact phone number (if different from above).
  - Type: text
  - Required: false
- **participant_status**: Status of the participant (active, inactive, or pending).
  - Type: select_one
  - Required: false
- **hackathon**: The name of the hackathon you are attending.
  - Type: text
  - Required: true
- **team**: Name of the team you are attending with.
  - Type: text
  - Required: false
- **team_members**: Team members and their respective roles and names.
  - Type: text
  - Required: false
- **role**: Role you are attending with the team.
  - Type: text
  - Required: false
- **notes**: Any additional notes about the participant.
  - Type: text
  - Required: false
- **participant_name_2**: Name of the second participant with you.
  - Type: text
  - Required: false
- **role_title**: Role of the second participant.
  - Type: text
  - Required: false
- **participant_status_2**: Status of the second participant (active, inactive, or pending).
  - Type: select_one
  - Required: false
- **hackathon_2**: The name of the hackathon the second participant is attending.
  - Type: text
  - Required: true
- **role_2**: Role of the second participant.
  - Type: text
  - Required: false
- **team_2**: Name of the team the second participant is attending with.
  - Type: text
  - Required: false
- **team_members_2**: Team members and their respective roles and names for the second participant.
  - Type: text
  - Required: false
- **participant_name_3**: Name of the third participant.
  - Type: text
  - Required: false
- **notes_2**: Notes for the second participant.
  - Type: text
  - Required: false
