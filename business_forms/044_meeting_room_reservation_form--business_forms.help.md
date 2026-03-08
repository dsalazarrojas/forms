# meeting_room_reservation_form - Help Guide
## Purpose
The meeting_room_reservation_form is used to reserve a meeting room. This form is intended for employees to reserve a meeting room with their name, meeting ID, room selection, and topic.
## How To Complete This Form
1. Click on the "Submit" button to access the form.
2. Fill in the required and optional fields as follows:
	* **Meeting Name**: Enter the name of your meeting.
	* **Meeting ID**: Enter the meeting ID number.
	* **Room Selection**: Choose the room you want to reserve, or select "No" if you're not planning to reserve a room.
	* **Meeting Topic**: Enter the topic of your meeting.

## Field-by-Field Explanation
* **Meeting Name** (`name`, `text`, required: false): Enter the name of your meeting to make it easily identifiable.
* **Meeting ID** (`id_number`, `number`, required: false): Enter the meeting ID number to help the organizer track your meeting.
* **Room Selection** (`select_multiple`, `options`: ['Yes', 'No'], required: false): Choose the room you want to reserve or select "No" to indicate you don't want to reserve a room.
* **Meeting Topic** (`topic`, `text`, required: false): Enter the topic of your meeting to provide a brief description of the discussion or agenda.

## Tips
* Make sure to select a valid room from the options if you're reserving a room.
* If you're not planning to reserve a room, select "No" in the room selection field.
* Enter a brief and clear topic to help others understand the purpose of the meeting.
