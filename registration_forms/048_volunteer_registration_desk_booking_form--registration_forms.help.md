# Volunteer Registration Desk Booking Form - Help Guide
## Purpose
This form is used to register volunteers for events, providing their contact information and event details.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your organization's name in the **Organization Name** field.
2. Provide your name in the **Contact Name** field.
3. Enter your email address in the **Email** field (if applicable).
4. Enter your phone number in the **Phone** field.
5. Enter your address in the **Address** field.
6. Choose the **Event Date** for which you are volunteering.
7. Select the time you will be working at the **Event Time** field.
8. Choose your **Volunteer Role** from the provided options.
9. Enter the start and end times of your shift in the **Shift Start Time** and **Shift End Time** fields (if applicable).
10. Provide any additional **Notes** about your volunteer experience.
11. Enter the number of volunteers attending in the **Volunteer Count** field (if applicable).
12. Enter the **Event ID**, **Event Name**, and other event details in their respective fields.
13. Select the correct **Event Location**, and enter the address and phone number of the event organizer in their respective fields.
14. Enter the event's **Start Time** and **End Time**.
15. Finally, select the options for **Form Submissions** (if applicable).

## Field-by-Field Explanation

* **Organization Name** (`organization_name`, text, required): Enter your organization's name.
* **Contact Name** (`contact_name`, text, required): Provide your name.
* **Email** (`email`, email, optional): Enter your email address (if applicable).
* **Phone** (`phone`, text, required): Enter your phone number.
* **Address** (`address`, text, required): Enter your address.
* **Event Date** (`event_date`, date, required): Choose the event date for which you are volunteering.
* **Event Time** (`event_time`, time, required): Select the event time.
* **Volunteer Role** (`volunteer_role`, select_one, optional): Choose your volunteer role.
* **Shift Start Time** (`shift_start_time`, time, optional): Enter the start time of your shift (if applicable).
* **Shift End Time** (`shift_end_time`, time, optional): Enter the end time of your shift (if applicable).
* **Notes** (`notes`, note, optional): Provide any additional notes about your volunteer experience.
* **Volunteer Count** (`volunteer_count`, number, optional): Enter the number of volunteers attending (if applicable).
* **Event ID** (`event_id`, text, required): Enter the event ID.
* **Event Name** (`event_name`, text, required): Enter the event name.
* **Event Date** (`event_date`, date, required): Choose the event date.
* **Event Time** (`event_time`, time, required): Select the event time.
* **Event Location** (`event_location`, text, required): Select the event location.
* **Event Description** (`event_description`, text, optional): Provide a description of the event.
* **Event Organizer** (`event_organizer`, text, optional): Enter the event organizer's name.
* **Event Category** (`event_category`, text, optional): Enter the event category.
* **Event Start Time** (`event_start_time`, time, required): Enter the start time of the event.
* **Event End Time** (`event_end_time`, time, required): Enter the end time of the event.
* **Event Location Address** (`event_location_address`, text, required): Enter the address of the event location.
* **Event Organizer Phone** (`event_organizer_phone`, text, required): Enter the phone number of the event organizer.
* **Form Submissions** (`form_submissions`, select_multiple, optional): Select the options for form submissions.
