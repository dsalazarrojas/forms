# Online Donor Event Recording Consent Form - Help Guide
## Purpose
This form is used to record a donor's consent for online events. It ensures that donors understand what their personal data will be used for and gives them an opportunity to provide their consent.

## How To Complete This Form
To complete this form, simply fill in each field with the requested information. If you are not comfortable providing any of the information, you may leave it blank.

## Field-by-Field Explanation
* **DonorEvent** (`donor_event`, text, optional): This field is used to describe the event that the donor is attending or participating in. You can enter any relevant details about the event.
* **Name** (`name`, text, optional): This field is used to record the donor's name. Please enter your full name as it appears on your official documents.
* **Email** (`email`, email, optional): This field is used to record the donor's email address. Please enter your email address as it appears in your official records.
* **PhoneNumber** (`phone_number`, text, optional): This field is used to record the donor's phone number. Please enter your phone number as it appears in your official records.
* **EventDate** (`event_date`, date, optional): This field is used to record the date of the event. Please select the date of the event using the format specified below.
*   Format: `MM/DD/YYYY`
* **EventTime** (`event_time`, time, optional): This field is used to record the time of the event. Please select the time of the event using the format specified below.
*   Format: `HH:MM AM/PM`
* **EventDetails** (`event_details`, text, optional): This field is used to record any additional details about the event. Please enter any relevant information about the event.
* **RecordingPermission** (`recording_permission`, select_one, optional): This field is used to record the donor's consent for the recording of the event.
*   Options: 
    + **Consent**: You are giving your consent for your event to be recorded.
    + **Decline**: You are declining the recording of your event.
* **RecordingType** (`recording_type`, select_one, optional): This field is used to record the type of event being recorded.
*   Options: 
    + **in person**: Your event is being recorded in person.
    + **virtual**: Your event is being recorded virtually.
