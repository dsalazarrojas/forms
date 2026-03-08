# personal_trainer_appointment_reservation_form - Help Guide
## Purpose
This form is designed to book a personal trainer appointment.

## How To Complete This Form
To complete this form, follow the steps below:

1. Enter your personal details (page 1).
2. Provide appointment details (page 1).
3. Select the time slot you would like to book for your appointment (page 2).
4. Choose a date for your appointment (page 3).
5. Confirm your appointment details by writing a message to your trainer (page 4).
6. Double check that you have confirmed your appointment by selecting 'Yes' on the final page.

## Field-by-Field Explanation
* **Personal Trainer Details** (`personal_trainer_details`, text, optional): Enter your personal details, such as name and email.
* **Appointment Details** (`appointment_details`, text, optional): Enter any additional details about your appointment, such as any specific exercises or goals you want to focus on.
* **Time Slots** (`time_slots`, select multiple, required): Select the time slot you would like to book for your appointment. Please choose from the available options: 09:00 AM - 10:00 AM, 10:00 AM - 11:00 AM, 11:00 AM - 12:00 PM, 01:00 PM - 02:00 PM, 02:00 PM - 03:00 PM, 03:00 PM - 04:00 PM, 04:00 PM - 05:00 PM, 05:00 PM - 06:00 PM, 06:00 PM - 07:00 PM.
* **Availability** (`availability`, time, optional): Select your availability to accommodate the trainer's schedule.
* **Message** (`message`, text, required): Write a message to your trainer with any specific details about your appointment.
* **Confirm Message** (`confirm_message`, text, required): Repeat the message to confirm that you have read and understood the details of your appointment.
* **Confirm Appointment** (`confirm_appointment`, select one, required): Select 'Yes' to confirm that you have read and understood the details of your appointment.

**Tips**

* Please make sure to select the time slot that best suits your schedule and the trainer's availability.
* Be clear and concise in your message to ensure the trainer understands your needs and preferences.
* Double check that you have confirmed your appointment to avoid any mistakes.
