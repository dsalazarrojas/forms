# Booking Requirements Checklist - Help Guide
## Purpose
The "Booking Requirements Checklist" is a form used to gather detailed information about an event or meeting booking. It helps event managers and organizers to collect and track essential details about the booking, ensuring that all necessary requirements are met.

## How To Complete This Form
To complete the form accurately, follow these steps:

1. Fill in the booking name and date.
2. Provide the contact information of the person organizing the event, including their name and email address.
3. Indicate whether the location is confirmed and select the necessary equipment and catering requirements.
4. Enter the approximate number of guests attending the event.
5. Specify the required setup time and whether parking is needed.
6. List any accessibility needs.
7. Mention any security measures needed.
8. Confirm the completion status of the requirements.

## Field-by-Field Explanation

* **Booking Name**: (`booking_name`, text, required)
Enter the name or title of the event.
* **Booking Date**: (`booking_date`, date, required)
Enter the date of the event in the format YYYY-MM-DD.
* **Organizer Name**: (`organizer_name`, text, required)
Enter the name of the person organizing the event.
* **Organizer Email**: (`organizer_email`, email, required)
Enter the email address of the person organizing the event.
* **Organizer Phone**: (`organizer_phone`, text, optional)
Enter the phone number of the person organizing the event (not required).
* **Location Confirmed**: (`location_required`, select_one, required)
Indicate whether the location is confirmed (True) or not confirmed (False).
* **Equipment Needed**: (`equipment_list`, select_multiple, optional)
Select all necessary equipment required for the event, such as tables, chairs, microphones, etc.
* **Catering Required**: (`catering_required`, select_one, required)
Indicate whether catering is required (True) or not required (False).
* **Catering Details**: (`catering_details`, text, optional)
Provide specific catering requirements, if applicable.
* **Expected Guest Count**: (`guest_count`, number, required)
Enter the approximate number of guests attending the event.
* **Setup Time Required**: (`setup_time`, select_one, required)
Choose the required setup time, from 30 minutes to more than 3 hours.
* **Parking Required**: (`parking_required`, select_one, optional)
Indicate whether parking is needed (True) or not needed (False).
* **Accessibility Requirements**: (`accessibility_needs`, select_multiple, optional)
List any accessibility needs, such as wheelchair access, parking for disabled, etc.
* **Security Requirements**: (`security_requirements`, text, optional)
Mention any security measures needed, if applicable.
* **Checklist Completion Status**: (`checklist_status`, select_one, required)
Select the current status of the requirements, such as all confirmed, mostly confirmed, etc.
