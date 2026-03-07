<thinking>As we are creating a help guide for the "residents_booking" form, let's ensure it serves its intended purpose. Upon reviewing the form's schema, we aim to capture essential details related to resident bookings, likely for property management or similar scenarios. The form doesn't appear to be intended for sensitive or critical personal data. To avoid duplication, it's essential that the resident fills out the form correctly and accurately. If not completed correctly, it might lead to incorrect booking records. This form's purpose and fields should be straightforward and easy to understand for the end-user.</thinking>

# residents_booking - Help Guide
## Purpose
The residents_booking form is designed to capture essential information related to resident bookings for property management or similar purposes. This includes details about the apartment number, visit date, visit time, trade services, and resident contact information.

## How To Complete This Form
To fill out the residents_booking form, follow these steps:

1. Enter the apartment number where the resident will be visiting or staying.
2. Select the date of the visit in the format MM/DD/YYYY.
3. Choose the time of the visit using the 24-hour clock format (HH:MM).
4. Select the trade service you require (e.g., Electrician, Plumber, Handyman, or Mechanic).
5. Enter the start and end times of the visit.
6. If applicable, specify the duration of the visit in minutes.
7. Add any comments or notes about the visit.
8. Enter the resident's name.
9. Provide the resident's email address.
10. Enter the resident's phone number.

## Field-by-Field Explanation
* **Apartment Number (`apartment_number`, text, optional)**: Please enter the number of the apartment where the resident is visiting or staying.
* **Date of Visit (`date_of_visit`, date, optional)**: Enter the date of the visit using the MM/DD/YYYY format.
* **Time of Visit (`time_of_visit`, time, optional)**: Choose the visit time using the 24-hour clock format (HH:MM).
* **Trade Service (`trade_name`, text, optional)**: Select the trade service required (e.g., Electrician, Plumber, Handyman, Mechanic).
* **Trade Type (`trade_type`, select_one, optional)**: Choose the specific trade type from the available options.
* **Start Time (`start_time`, time, optional)**: Enter the start time of the visit.
* **End Time (`end_time`, time, optional)**: Enter the end time of the visit.
* **Duration (`duration`, number, optional)**: Specify the duration of the visit in minutes.
* **Comments (`comments`, note, optional)**: Add any comments or notes about the visit.
* **Resident Name (`resident_name`, text, optional)**: Enter the resident's name.
* **Resident Email (`resident_email`, email, optional)**: Enter the resident's email address.
* **Resident Phone (`resident_phone`, text, optional)**: Enter the resident's phone number.
