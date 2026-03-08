# Data Recovery Appointment Form - Help Guide
## Purpose
The Data Recovery Appointment Form is used by clients to schedule appointments with technicians for data recovery services.

## How To Complete This Form
To complete this form, follow these steps:
1. Select the date you would like to schedule the appointment.
2. Enter your full name and contact information (email and phone number).
3. Choose the services you would like to have performed during the appointment.
4. Select the technician you would like to schedule the appointment with.
5. Choose the time slot for the appointment.

## Field-by-Field Explanation
* **Appointment Date** (`appointment_date`, date, required: false): Enter the date you would like to schedule the appointment.
* **Client Name** (`client_name`, text, required: false): Enter your full name.
* **Email** (`email`, email, required: false): Enter your email address.
* **Phone** (`phone`, text, required: false): Enter your phone number.
* **Services** (`services`, select_multiple, required: false): Choose the services you would like to have performed during the appointment (Data Recovery Services, Data Destruction Services, Data Backup Services).
* **Technician** (`technician`, select_one, required: false): Select the technician you would like to schedule the appointment with (John Doe, Jane Smith, Jim Brown).
* **Booking Time** (`booking_time`, time, required: false): Enter the time slot you would like to schedule the appointment.
* **Status** (`status`, note, required: false): This field is currently not used and can be ignored.

Note: The required fields are currently set to false, indicating that they are not mandatory for clients to fill in. However, it is still important for the client to provide accurate and complete information for the technician to perform the data recovery services efficiently.
