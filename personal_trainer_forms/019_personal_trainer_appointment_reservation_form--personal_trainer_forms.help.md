# Personal Trainer Appointment Reservation Form - Help Guide
## Purpose
This form is designed for clients to reserve a personal trainer appointment with one of our trainers. Please fill out the form below to provide your information and schedule your appointment.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the client information section with your name, phone number, and email address.
2. Select the trainer you would like to work with from the options provided.
3. Choose the time slot you would like to schedule your appointment from the options provided.
4. Provide a brief message to the trainer with any questions or concerns you may have.
5. If you have any special requests or notes, use the "Trainer Notes" field to include them.

## Field-by-Field Explanation

* **Client Information** (`id: 1`, `type: text`, `required: false`): Fill out your name, phone number, and email address to help us contact you about your appointment.
* **Trainer Information** (`id: 2`, `type: text`, `required: false`): Select the personal trainer you would like to work with from the list of available trainers.
* **Appointment Details** (`id: 3`, `type: text`, `required: false`): Briefly describe the type of appointment you would like to schedule (e.g., fitness training, nutrition planning, etc.).
* **Date and Time** (`id: 4`, `type: date`, `required: false`): Select the date and time for your appointment.
* **Trainer's Time Availability** (`id: 5`, `type: select_multiple`, `required: true`): Choose one or more time slots you are available to schedule your appointment from the options: Morning, Afternoon, Evening.
* **Client Phone** (`id: 6`, `type: text`, `required: false`): If you would like to be contacted about your appointment, please provide your phone number.
* **Email** (`id: 7`, `type: email`, `required: false`): If you would like to be contacted about your appointment, please provide your email address.
* **Message** (`id: 8`, `type: text`, `required: false`): If you have any questions or concerns, please include them here.
* **Trainer Notes** (`id: 9`, `type: text`, `required: false`): If you have any special requests or notes for the trainer, please include them here.
* **Trainer's Availability** (`id: 10`, `type: select_one`, `required: false`): Select whether the trainer is available or not to schedule your appointment.
