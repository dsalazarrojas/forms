<thinking>Before diving into creating the help guide, I'd like to clarify that the form seems to have a lot of fields that are not required, and some fields appear to be identical (e.g., multiple "event_registration_form_shift" fields with different IDs). I'll assume that these are intentional design choices and not errors.

The form is designed for volunteers to register for a race event, and it seems to gather information about their personal details, shift assignments, and agreement to certain conditions. The non-required fields might be optional or used for future enhancements. I'll provide the help guide based on this understanding.</thinking>

# Volunteer Form For Race Event - Help Guide
## Purpose
The Volunteer Form for Race Event is designed to register volunteers for the event. This guide will walk you through each field to ensure you complete the form accurately and efficiently.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your **First name** and **Last name** in the corresponding fields.
2. Provide your **Email** and **Phone** numbers to ensure we can contact you with any important updates or information.
3. Select your **Shift** from the available options (Morning, Afternoon, All Day, or Evening).
4. Choose when you can attend with the **Date** and **Time** fields (although these are not required).
5. If you have any **Additional info** (e.g., special requests or notes), please use the text fields for **Additional info 1** to **8**.

## Field-by-Field Explanation

* **First name** (`event_registration_form_first_name`, text, optional): Please enter your given name.
* **Last name** (`event_registration_form_last_name`, text, optional): Please enter your surname.
* **Email** (`event_registration_form_email`, email, optional): Enter your email address so we can contact you with updates.
* **Phone** (`event_registration_form_phone`, text, optional): Enter your phone number so we can contact you with important information.
* **Shift** (`event_registration_form_shift`, select_one, required): Choose one of the available shifts to volunteer during the event (Morning, Afternoon, All Day, or Evening).
* **Date** (`event_registration_form_date`, date, optional): Choose a date you can attend the event. This helps us plan our volunteer schedule.
* **Time** (`event_registration_form_time`, time, optional): Choose a specific time you can attend the event.
* **Note** (`event_registration_form_note`, note, optional): If you have any additional information or notes, please add them here.
* **Shift** (`event_registration_form_shift`, select_one, required): Repeat of Shift field, please choose one of the available shifts (Morning, Afternoon, All Day, or Evening). This field is required.
* **I agree** (`event_registration_form_agree`, select_multiple, required): Agree to the conditions set by the event organizers. Please select 'True'.
* **Why** (`event_registration_form_why`, text, optional): If you have a specific reason for volunteering, please explain it here.
* **Additional info 1** (`event_registration_form_additional_info`, note, optional): Add any additional information or notes here.
* **Additional info 2** (`event_registration_form_additional_info_2`, note, optional): Add any additional information or notes here.
* **Additional info 3** (`event_registration_form_additional_info_3`, note, optional): Add any additional information or notes here.
* **Additional info 4** (`event_registration_form_additional_info_4`, note, optional): Add any additional information or notes here.
* **Additional info 5** (`event_registration_form_additional_info_5`, note, optional): Add any additional information or notes here.
* **Additional info 6** (`event_registration_form_additional_info_6`, note, optional): Add any additional information or notes here.
* **Additional info 7** (`event_registration_form_additional_info_7`, note, optional): Add any additional information or notes here.
* **Additional info 8** (`event_registration_form_additional_info_8`, note, optional): Add any additional information or notes here.
