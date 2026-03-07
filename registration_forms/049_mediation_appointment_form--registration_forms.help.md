<thinking>
We need to create a user-facing help guide for a "mediation-appointment-form" form, which is used for users to schedule a mediation or arbitration appointment. This form is likely used by a mediation or arbitration service that provides a platform for users to resolve disputes. The form's purpose is to collect relevant information from users to facilitate the scheduling process. We should ensure that the form is clear and concise, with each field explained in a way that's easy to understand.

Before creating the help guide, let's review the form's fields:

* Mediation appointment form has 10 fields in total.
* The form is not required, and most fields are optional.
* The fields include date, time, mediation type, preferred time, session length, location, contact details, preferred date, and preferred time.
* Some fields have specific options, such as mediation type, preferred time, and preferred date.

Given this information, let's create a user-facing help guide that explains the form's purpose, how to complete it, and each field's meaning.

</thinking>

# mediation-appointment-form - Help Guide
## Purpose
The Mediation-Appointment-Form is used to schedule a mediation or arbitration appointment with our service. To get started, please follow the steps below.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the date and time you would like to schedule your appointment.
2. Choose the type of mediation or arbitration you require (Mediation, Arbitration, or both).
3. Indicate your preferred time slot (Morning, Afternoon, or Evening).
4. If necessary, specify the session length you require.
5. Enter your preferred location (if different from our default location).
6. Provide your email address or contact information so we can get in touch with you.
7. If you have a preferred date, please indicate it in the form.
8. Select your preferred time for the appointment (if different from the default time).

## Field-by-Field Explanation
* **Mediation appointment** (`1`, `text`, required/optional): This is the main field where you can enter any additional information about your mediation or arbitration appointment.
* **Date** (`2`, `date`, required/optional): Enter the date you would like to schedule your appointment.
* **Time** (`3`, `time`, required/optional): Enter the time you would like to schedule your appointment.
* **Mediation-type** (`4`, `select_one`, required/optional): Choose the type of mediation or arbitration you require:
	+ Mediation: A non-binding process to resolve conflicts between parties.
	+ Arbitration: A binding process to resolve conflicts between parties.
	+ Mediation/Arbitration: A combination of both processes.
* **Preferred-time** (`5`, `select_multiple`, required/optional): Select your preferred time slot:
	+ Morning: Appointments scheduled in the morning (typically between 9:00 AM and 12:00 PM).
	+ Afternoon: Appointments scheduled in the afternoon (typically between 1:00 PM and 4:00 PM).
	+ Evening: Appointments scheduled in the evening (typically between 5:00 PM and 8:00 PM).
* **Session-length** (`6`, `number`, required/optional): If you have a specific session length, please enter it here (e.g., 1 hour, 2 hours).
* **Location** (`7`, `text`, required/optional): Enter the location you prefer for your appointment (if different from our default location).
* **Contact-details** (`8`, `email`, required/optional): Enter your email address so we can get in touch with you.
* **Preferred-date** (`9`, `date`, required/optional): If you have a preferred date, please enter it here.
* **Preferred-time** (`10`, `time`, required/optional): If you have a preferred time, please enter it here.
