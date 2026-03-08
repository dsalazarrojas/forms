# Private Chat Room Request Form - Help Guide
## Purpose
This form is used to request a new private chat room. You'll need to fill in the required fields to provide all necessary information for the room setup.

## How To Complete This Form
To complete this form, follow these steps:

* Fill in your name and any other relevant details as a participant.
* Specify the purpose of the chat room.
* Indicate if you want the room to be private (Participant List) and who should have access (Access Preferences).
* Choose the duration of the room (Duration).
* Select your preferred time zone for the room (Time Zone).
* If needed, set a time zone offset for the room (Time Zone Offset).
* Add any additional notes about the room.
* Select who the room should be assigned to (Assigned To).
* If necessary, select a tool to be used in the room (Assigned Tool).
* Choose the format for the output file (Output File).
* Provide the form ID (Form ID) if it's relevant.
* Select a category for the room (Category).
* Provide a description of the room (Description).
* If needed, specify the form version (Form Version).
* Finally, select the user who created the form (Created By) and the date it was created (Created At).

## Field-by-Field Explanation
- **Participant** (`participant`, `text`, required): Enter your name as a participant in the chat room.
- **Purpose** (`purpose`, `text`, required): Describe the purpose of the chat room.
- **Participant List** (`participant_list`, `select_multiple`, optional): Choose if you want this chat room to be private.
  - Select 'Yes' to make the room private.
  - Select 'No' to make the room public.
- **Access Preferences** (`access_preferences`, `text`, optional): Provide any access preferences for the room.
- **Access Type** (`access_type`, `select_one`, optional): Select one of the available options for access to the room.
  - Option 1
  - Option 2
  - Option 3
  - Option 4
  - Option 5
  - Option 6
- **Duration** (`duration`, `number`, optional): Set the duration of the chat room (in minutes or hours).
- **Time Zone** (`timezone`, `select_one`, optional): Select your preferred time zone for the chat room.
  - Option 1
  - Option 2
  - Option 3
  - Option 4
  - Option 5
  - Option 6
- **Time Zone Offset** (`timezone_offset`, `number`, optional): If needed, set a time zone offset for the room.
- **Notes** (`notes`, `text`, optional): Add any additional notes about the chat room.
- **Assigned To** (`assigned_to`, `select_one`, optional): Select who the chat room should be assigned to.
  - Option 1
  - Option 2
  - Option 3
  - Option 4
  - Option 5
- **Assigned Tool** (`assigned_tool`, `text`, optional): If necessary, select a tool to be used in the chat room.
- **Output File** (`output_file`, `text`, optional): Choose the format for the output file.
- **Form ID** (`form_ids`, `number`, optional): Provide the form ID if it's relevant.
- **Category** (`category`, `select_one`, optional): Select a category for the chat room.
  - Option 1
  - Option 2
  - Option 3
  - Option 4
  - Option 5
  - Option 6
- **Description** (`description`, `text`, optional): Provide a description of the chat room.
- **Form Version** (`form_version`, `text`, optional): If needed, specify the form version.
- **Created By** (`created_by`, `select_one`, optional): Select who created the form.
  - Option 1
  - Option 2
  - Option 3
  - Option 4
  - Option 5
- **Created At** (`created_at`, `date`, optional): Select the date the form was created.
