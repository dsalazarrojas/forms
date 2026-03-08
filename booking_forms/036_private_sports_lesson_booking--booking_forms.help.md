# private_sports_lesson_booking - Help Guide
## Purpose
This form is used to book a private sports lesson with a specific instructor or coach.

## How To Complete This Form
To complete this form, follow these steps:

1.  Fill in the main information on page 1: "Main Information"
2.  Enter the appointment details on page 2: "Appointment Details"
3.  Select the sports lesson type on page 3: "Lesson Details"
4.  Provide the customer's details on page 4: "Customer Details"
5.  Enter the payment details on page 5: "Payment Details"
6.  Add a message on page 6: "Message"

## Field-by-Field Explanation

* **Main Information**:
	+ **Main Information** (`main_information`, text, required): Enter the main information about the booking. This is a text field where you can write any relevant information you have about the lesson.
* **Appointment Details**:
	+ **Appointment Details** (`appointment_details`, text, required): Enter the date and time of the appointment. This field is used to schedule the lesson with the instructor.
* **Lesson Details**:
	+ **Select Lesson Type** (`lesson_details`, select_multiple, required): Choose the type of lesson you want to book. Select one or more sports lesson types from the options provided (Tennis, Swimming, Golf, Running, Basketball, Soccer, and Volleyball).
* **Customer Details**:
	+ **Customer Details** (`customer_details`, text, required): Enter the customer's name, email, or any other contact information if you need to get back to them.
* **Payment Details**:
	+ **Payment Details** (`payment_details`, text, required): Enter any additional details about the payment. Please include the amount you wish to pay, payment method, or other relevant financial information.
* **Message**:
	+ **Message** (`message`, text, required): Add any additional comment or message about the customer. This field can be used to include any important notes or reminders.
