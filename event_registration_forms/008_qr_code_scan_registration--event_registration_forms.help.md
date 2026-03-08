# qr_code_scan_registration - Help Guide
## Purpose
The `qr_code_scan_registration` form is designed to collect and manage participant information for events using a unique QR code.

## How To Complete This Form
1. Enter the **Event Title**, a brief and descriptive name of the event.
2. Input the **Event Date**, the date when the event will take place.
3. Enter the **Participant Name**, the name of the person registering.
4. Enter the **Participant Email**, the contact email of the participant.
5. Enter the **Participant Phone**, the phone number of the participant (optional).
6. Input the **Participant Note**, any additional notes about the participant (optional).
7. Scan and input the **Participant QR Code**, a unique code identifying the participant.
8. Select the **Participant Type**, categorize the participant as 'Yes' or 'No'.
9. Enter the **Event Location**, the venue of the event.
10. Enter the **Event Organizer**, the person or organization hosting the event.
11. Enter the **Event Description**, a brief description of the event.
12. Input the **Event Start Date**, the date when the event starts.
13. Input the **Event End Date**, the date when the event ends.
14. Input the **Event Time**, the time when the event takes place.
15. Optionally, provide the **Participant Attendance**, any additional details about the participant's attendance.
16. Optionally, input the **Participant Attendance Code**, a code assigned to the participant.
17. Optionally, enter the **Participant Attendance Status**, a brief status update about the participant.
18. Optionally, enter the **Participant QR Code Type**, a note about the participant's QR code type.
19. Optionally, enter the **Event Status**, any additional details about the event status.

## Field-by-Field Explanation

* **Event Title** (`event_title`, text, required): Enter the name of the event.
* **Event Date** (`event_date`, date, required): Input the date when the event will take place.
* **Participant Name** (`participant_name`, text, required): Enter the name of the person registering.
* **Participant Email** (`participant_email`, email, required): Input the contact email of the participant.
* **Participant Phone** (`participant_phone`, text, optional): Enter the participant's phone number.
* **Participant Note** (`participant_note`, note, optional): Provide any additional notes about the participant.
* **Participant QR Code** (`participant_qr_code`, text, required): Scan and input the unique QR code identifying the participant.
* **Participant Type** (`participant_type`, select_one, required): Select 'Yes' or 'No' to categorize the participant.
* **Event Location** (`event_location`, text, optional): Enter the venue of the event.
* **Event Organizer** (`event_organizer`, text, required): Enter the person or organization hosting the event.
* **Event Description** (`event_description`, text, optional): Provide a brief description of the event.
* **Event Start Date** (`event_start_date`, date, required): Input the date when the event starts.
* **Event End Date** (`event_end_date`, date, required): Input the date when the event ends.
* **Event Time** (`event_time`, time, required): Input the time when the event takes place.
* **Participant Attendance** (`participant_attendance`, text, optional): Provide any additional details about the participant's attendance.
* **Participant Attendance Code** (`participant_attendance_code`, text, optional): Input a code assigned to the participant.
* **Participant Attendance Status** (`participant_attendance_status`, text, optional): Enter a brief status update about the participant.
* **Participant QR Code Type** (`participant_qr_code_type`, text, optional): Enter a note about the participant's QR code type.
* **Event Status** (`event_status`, text, optional): Enter any additional details about the event status.
