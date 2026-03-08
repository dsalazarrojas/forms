<thinking>Before we dive into the help guide for the Audio Visual Setup Request Form, let's quickly review its purpose and relevance. This form is designed to gather information from users requesting setup of audio-visual equipment for meetings, presentations, or other events. It's essential to ensure that the form is completed accurately and thoroughly to guarantee the proper execution of these requests. To prevent duplication, please review the form carefully and only submit new requests that haven't been made before.</thinking>

# Audio Visual Setup Request Form - Help Guide
## Purpose
This form is used to gather information for setup of audio-visual equipment for meetings, presentations, or other events. Please fill out this form accurately to ensure that your request is processed correctly.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your name, email address, and phone number in the "Requester Full Name", "Email Address", and "Phone Number" fields respectively.
2. Choose your department or team from the "Department" dropdown menu.
3. Select the date and time you need the setup for in the "Request Date" and "Setup Time" fields.
4. Choose the building and room number where the setup will be performed in the "Building" and "Room Number" fields.
5. Indicate the number of people attending and whether there will be any remote participants in the "Expected Attendees" and "Remote Participants" fields.
6. Select the display equipment needed from the "Display Requirements" field.
7. Choose the computer source that will be used from the "Computer Source" field.
8. Select the connectivity and audio equipment needed from the "Connectivity Needs" and "Audio Requirements" fields.
9. If using a video conferencing platform, choose the platform from the "Video Conferencing Platform" field (optional).
10. Provide any special instructions or comments in the "Special Instructions" field (optional).
11. Confirm that your IT contact has approved this request in the "IT Contact Approval" field.
12. Finally, indicate when the setup can be torn down in the "Teardown Time" field (optional).

## Field-by-Field Explanation
* **Requester Full Name** (`requester_full_name`, text, required): Fill in your name accurately so that our team can contact you regarding your setup request.
* **Email Address** (`requester_email`, email, required): Enter your contact email address so that we can reach out to you with any updates or questions.
* **Phone Number** (`requester_phone`, text, required): Provide your contact phone number in case we need to reach out to you via phone.
* **Department** (`department`, select_one, required): Choose your department or team from the dropdown menu.
* **Request Date** (`request_date`, date, required): Select the date you need the setup to be performed.
* **Setup Date** (`setup_date`, date, required): Choose the date when the setup is needed.
* **Setup Time** (`setup_time`, time, required): Select the time of the setup.
* **Building** (`location_building`, text, required): Enter the building name or number where the setup will be performed.
* **Room Number** (`location_room`, text, required): Provide the room or conference room number where the setup will be performed.
* **Floor** (`location_floor`, text, optional): Enter the floor number where the setup will be performed (if applicable).
* **Meeting Type** (`meeting_type`, select_one, required): Choose the type of meeting or event (Internal, Client, Training, Video Conference, etc.).
* **Expected Attendees** (`expected_attendees`, number, required): Enter the number of people attending the meeting or event.
* **Remote Participants** (`remote_participants`, select_one, required): Indicate whether there will be remote participants and if so, choose the corresponding option.
* **Display Requirements** (`display_requirements`, select_multiple, required): Select the display equipment needed (Primary projector, Secondary projector, Large monitor, etc.).
* **Computer Source** (`computer_source`, select_one, required): Choose the computer source that will be used (Personal laptop, Company laptop, Room PC, etc.).
* **Connectivity Needs** (`connectivity_needs`, select_multiple, required): Select the connectivity needed (HDMI cable, VGA adapter, USB-C adapter, etc.).
* **Audio Requirements** (`audio_requirements`, select_multiple, required): Choose the audio equipment needed (Room microphone, Wireless microphone, Conference phone, etc.).
* **Video Conferencing Platform** (`video_conferencing_platform`, select_one, optional): Select the video conferencing platform that will be used (Zoom, Microsoft Teams, Google Meet, etc.).
* **Special Instructions** (`special_instructions`, text, optional): Provide any special setup instructions or comments.
* **IT Contact Approval** (`it_contact_approval`, select_one, required): Confirm that your IT contact has approved this request.
* **Teardown Time** (`teardown_time`, time, optional): Indicate when the setup can be torn down, if different from the setup time.
