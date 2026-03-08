# Calendar Reception Confirmation Form - Help Guide
## Purpose

This form is used to gather information from clients before a scheduled appointment. The goal is to ensure that both the client and the appointment scheduler have the same understanding of the appointment details, which helps to reduce no-shows and last-minute cancellations.

## How To Complete This Form

To complete this form, follow these steps:

1. Fill out the appointment details on pages 3 and 4.
2. Enter the client's information on pages 6, 7, and 8.
3. Select the type and service type of the appointment on pages 10 and 11.
4. Confirm your attendance and preferred confirmation method on pages 14 and 21.
5. Add any special requests or accessibility needs on page 18.
6. Confirm your availability to arrive early on page 19.
7. Enter the number of additional guests on page 20.
8. Confirm your agreement with the appointment details on page 22.

## Field-by-Field Explanation

* **Appointment Date** (`appointment_date`, date, required): Enter the date of the appointment in the format `YYYY-MM-DD`.
* **Appointment Time** (`appointment_time`, time, required): Choose the time of the appointment from the available options.
* **Client Name** (`client_name`, text, required): Enter the client's name.
* **Email Address** (`client_email`, email, required): Enter the client's email address.
* **Phone Number** (`client_phone`, text, required): Enter the client's phone number.
* **Type of Appointment** (`appointment_type`, select_one, required): Select the type of appointment (e.g. Initial Consultation, Follow-up Visit).
* **Service or Department** (`service_type`, select_one, required): Select the service or department related to the appointment (e.g. Client Services, Sales).
* **Can You Confirm Your Attendance?** (`confirm_attendance`, select_one, required): Confirm whether you can attend the appointment.
* **Preferred Confirmation Method** (`confirmation_method`, select_one, required): Select how you would like to be confirmed about the appointment (e.g. Email, Phone).
* **I Confirm My Attendance at This Appointment** (`confirmation_acceptance`, select_one, required): Confirm that you agree with the appointment details.
