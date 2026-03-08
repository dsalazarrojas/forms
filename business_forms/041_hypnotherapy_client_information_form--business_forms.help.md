<thinking>
To determine the purpose of this form, I'll review the fields and labels. The form appears to be designed for a client information management system within a hypnotherapy business. It seems to cover various aspects of client data, including contact information, appointment scheduling, and session tracking.
To ensure the form is not duplicated, I'll check for existing forms with similar fields and labels.
Upon reviewing the form, I see that it covers essential client information, including contact details, appointment schedule, and session metrics.
However, some fields are duplicates or seem to be unnecessary, such as client_status_2 and client_status_3. I'll assume that these fields are intended to be used as alternative status options, but they might be redundant. Client_status_2 and client_status_3 might be removed or merged into client_status.
</thinking>

# Hypnotherapy Client Information Form - Help Guide
## Purpose
The Hypnotherapy Client Information Form is a tool used to collect and manage essential information about clients in a hypnotherapy business. This form is designed to gather details such as contact information, appointment schedules, and session metrics to help the hypnotherapy professional track and provide effective services to their clients.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter the client's name in the "Client Name" field.
2. Provide the client's date of birth in the "Date of Birth" field.
3. Enter the client's email address in the "Email" field.
4. Enter the client's phone number in the "Phone" field.
5. Enter the client's address in the "Address" field.
6. Enter any additional notes about the client in the "Notes" field.
7. Select the client type (Self, Family Member, Referral, or Other) in the "Client Type" field.
8. Select the hypnotherapy tool used in the session (chatjimmy or chatjim) in the "Assisted By" field.
9. Enter the contact date in the "Contact Date" field.
10. Enter the contact time in the "Contact Time" field.
11. Set the session length in the "Session Length" field.
12. Enter the total number of sessions scheduled in the "Sessions Total" field.
13. Enter the number of sessions completed in the "Sessions Completed" field.
14. Enter the number of sessions remaining in the "Sessions Remaining" field.
15. Enter the total session time in the "Total Session Time" field.
16. Enter the date of the last session in the "Last Session Date" field.
17. Enter the time of the last session in the "Last Session Time" field.
18. Select the client status (Active, Completed, Inactive, or Pending) in the "Client Status" field.
19. Select the client status again (Active, Completed, Inactive, or Pending) in the "Client Status 2" field (Note: This field is redundant and might be removed).
20. Select the client status (Active or Inactive) in the "Client Status 3" field.
21. Select whether the client was submitted by the user (Yes or No) in the "Submitted By" field.
22. Enter the date the form was submitted in the "Submitted At" field.

## Field-by-Field Explanation

* **Client Name** (client_name, text, required: false): Enter the client's full name.
* **Date of Birth** (date_of_birth, date, required: false): Enter the client's date of birth in the format YYYY-MM-DD.
* **Email** (contact_email, email, required: false): Enter the client's email address.
* **Phone** (contact_phone, text, required: false): Enter the client's phone number.
* **Address** (address_line_1, text, required: false): Enter the client's address.
* **Address 2** (address_line_2, text, required: false): Enter any additional address information.
* **City** (city, text, required: false): Enter the client's city.
* **State** (state, text, required: false): Enter the client's state or region.
* **Zip Code** (zip_code, text, required: false): Enter the client's zip code.
* **Notes** (notes, note, required: false): Enter any additional notes about the client.
* **Client Type** (client_type, select_one, required: false): Select the client type (Self, Family Member, Referral, or Other).
* **Assisted By** (assigned_tool, select_one, required: false): Select the hypnotherapy tool used in the session (chatjimmy or chatjim).
* **Contact Date** (contact_date, date, required: false): Enter the date of the contact or appointment.
* **Contact Time** (contact_time, time, required: false): Enter the time of the contact or appointment.
* **Session Length** (client_session_length, number, required: false): Set the session length in minutes or hours.
* **Sessions Total** (sessions_total, number, required: false): Enter the total number of sessions scheduled.
* **Sessions Completed** (sessions_completed, number, required: false): Enter the number of sessions completed.
* **Sessions Remaining** (sessions_remaining, number, required: false): Enter the number of sessions remaining.
* **Total Session Time** (total_session_time, number, required: false): Enter the total session time in minutes or hours.
* **Last Session Date** (last_session_date, date, required: false): Enter the date of the last session.
* **Last Session Time** (last_session_time, time, required: false): Enter the time of the last session.
* **Client Status** (client_status, select_multiple, required: false): Select the client status (Active, Completed, Inactive, or Pending).
* **Client Status 2** (client_status_2, select_multiple, required: false): This field is redundant and might be removed. Select the client status again (Active, Completed, Inactive, or Pending).
* **Client Status 3** (client_status_3, select_multiple, required: false): Select the client status (Active or Inactive).
* **Submitted By** (submitted_by, select_multiple, required: false): Select whether the client was submitted by the user (Yes or No).
* **Submitted At** (submitted_at, date, required: false): Enter the date the form was submitted.

**Tips**

* Please ensure that all fields with required: false are filled in if necessary.
* If a field is not applicable, it's okay to leave it blank or select an option that best describes the situation.
* The form is designed to be flexible, so don't hesitate to add or remove fields as needed.
* If you have any questions or need help, please don't hesitate to contact the hypnotherapy team.
