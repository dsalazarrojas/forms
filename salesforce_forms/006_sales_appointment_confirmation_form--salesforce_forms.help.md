# sales_appointment_confirmation_form - Help Guide
## Purpose
This form is used to confirm sales appointments and update the sales system with post-appointment details.

## How To Complete This Form
1. **Sales Agent**: Enter the name of the sales agent who made the appointment.
2. **Customer Name**: Enter the name of the customer who was scheduled to meet.
3. **Customer Email**: Enter the email address of the customer.
4. **Lead Status**: Select the status of the lead (either "lead" or "customer").
5. **Scheduled Time**: Select the time of the scheduled appointment.
6. **Scheduled Date**: Select the date of the scheduled appointment.
7. **Appointment Duration**: Enter the duration of the appointment (in minutes).
8. **Appointment Note**: Add any notes or comments about the appointment.
9. **Sync Zoom**: Select whether the appointment was synced with Zoom (yes or no).
10. **Sync Google Calendar**: Select whether the appointment was synced with Google Calendar (yes or no).
11. **Sync Google Calendar Event**: Select whether a new Google Calendar event was created for the appointment (yes or no).
12. **Sync Zoom Meeting ID**: Enter the meeting ID of the Zoom meeting (if applicable).
13. **Sync Gmail Event**: Select whether a new Gmail event was created for the appointment (yes or no).
14. **Sync Gmail ID**: Enter the ID of the Gmail event (if applicable).
15. **Sync Outlook Calendar**: Select whether the appointment was synced with Outlook Calendar (yes or no).
16. **Sync Outlook ID**: Enter the ID of the Outlook meeting (if applicable).
17. **Sync CRM Integration**: Select whether the appointment was synced with the CRM integration (yes or no).

## Field-by-Field Explanation

* **Sales Agent** (`sales_agent`, text, required): Enter the name of the sales agent who made the appointment.
* **Customer Name** (`customer_name`, text, required): Enter the name of the customer who was scheduled to meet.
* **Customer Email** (`customer_email`, text, required): Enter the email address of the customer.
* **Lead Status** (`lead_status`, select_one, required): Select the status of the lead (either "lead" or "customer").
* **Scheduled Time** (`scheduled_time`, time, required): Select the time of the scheduled appointment.
* **Scheduled Date** (`scheduled_date`, date, required): Select the date of the scheduled appointment.
* **Appointment Duration** (`appointment_duration`, number, required): Enter the duration of the appointment (in minutes).
* **Appointment Note** (`appointment_note`, note, required): Add any notes or comments about the appointment.
* **Sync Zoom** (`sync_zoom`, select_one, required): Select whether the appointment was synced with Zoom (yes or no).
* **Sync Google Calendar** (`sync_google_calendar`, select_one, required): Select whether the appointment was synced with Google Calendar (yes or no).
* **Sync Google Calendar Event** (`sync_google_calendar_event`, select_one, required): Select whether a new Google Calendar event was created for the appointment (yes or no).
* **Sync Zoom Meeting ID** (`sync_zoom_meeting_id`, text, required): Enter the meeting ID of the Zoom meeting (if applicable).
* **Sync Gmail Event** (`sync_gmail_event`, select_one, required): Select whether a new Gmail event was created for the appointment (yes or no).
* **Sync Gmail ID** (`sync_gmail_id`, text, required): Enter the ID of the Gmail event (if applicable).
* **Sync Outlook Calendar** (`sync_outlook_calendar`, select_one, required): Select whether the appointment was synced with Outlook Calendar (yes or no).
* **Sync Outlook ID** (`sync_outlook_id`, text, required): Enter the ID of the Outlook meeting (if applicable).
* **Sync CRM Integration** (`sync_crm_integration`, select_one, required): Select whether the appointment was synced with the CRM integration (yes or no).
