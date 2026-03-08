# Request An Appointment Form - Help Guide
## Purpose
The purpose of this form is to collect information from patients and healthcare providers for scheduling appointments with a medical practice or specialist. This form is typically used to facilitate the process of booking appointments for various medical specialties, such as Cardiology, Pediatrics, and others.

## How To Complete This Form
To complete this form, follow these steps:

* Enter the name of the medical practice you are seeking an appointment with (Field 1: "Medical Practice").
* Select the medical specialty you are interested in (Field 2: "Medical Specialty", Field 10: "Specialty 2", and Field 11: "Specialty").
* Choose the date and time of your appointment (Field 3: "Appointment Date" and Field 4: "Appointment Time").
* Provide your phone number and email address (Field 5: "Phone" and Field 6: "Email").
* Type in any additional message or comments you have (Field 7: "Message").
* If applicable, select the tools you would like to be assigned to your appointment (Field 8: "Assigned Tool", note that multiple selections are allowed).
* Click the "Submit" button (Field 9: "Submit") to send your appointment request.

## Field-by-Field Explanation
* **Medical Practice** (`medical_practice`, text, required): Enter the name of the medical practice you are seeking an appointment with. This will help us to direct your request to the correct specialist.
* **Medical Specialty** (`medical_specialty`, select_one, optional): Select the specialty you are interested in (e.g., Cardiology, Pediatrics, etc.).
* **Specialty 2** (`medical_specialty_2`, select_one, optional): Select an additional specialty you are interested in (if applicable).
* **Appointment Date** (`appointment_date`, date, optional): Enter the date of your appointment. Please format the date in the YYYY-MM-DD format.
* **Appointment Time** (`appointment_time`, time, optional): Enter the time of your appointment in the 24-hour format.
* **Phone** (`phone`, text, optional): Enter your phone number so we can contact you for any further instructions.
* **Email** (`email`, email, optional): Enter your email address so we can send you appointment confirmations and notifications.
* **Message** (`message`, text, optional): Type any additional comments or questions you may have for the specialist.
* **Assigned Tool** (`assigned_tool`, select_multiple, optional): Select one or more tools you would like to be assigned to your appointment.
* **Submit** (`submit_button`, note, required): This button will send your appointment request to us.
