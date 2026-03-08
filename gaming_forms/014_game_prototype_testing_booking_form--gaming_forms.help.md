# Game Prototype Testing Booking Form - Help Guide
## Purpose
This form is designed to book a session for game prototype testing. It allows users to input necessary details about the session and tester information.

## How To Complete This Form
To complete this form, follow these steps:

- Fill in the required fields, marked with an asterisk (\*), with the necessary information.
- Review each field carefully to ensure it's accurate and complete.
- If a field is marked as optional, you can leave it blank if you don't have the information.

## Field-by-Field Explanation
### Session Details
* **Session Details** (`session_details`, `text`, required): Enter the details of the session you want to book, such as any relevant information.

### Tester Details
* **Tester Details** (`tester_details`, `text`, required): Enter your name and email address for the person who will be testing the game prototype. 
  * Note: Make sure to enter your correct email address so we can contact you with session details.

### Session Time
* **Session Time** (`session_time`, `time`, optional): Choose the time slot you are available for the session.

### Tester Email
* **Tester Email** (`tester_email`, `email`, required): Enter your email address. 
  * Note: This is a required field to ensure we can contact you with session details.

### Tester Name
* **Tester Name** (`tester_name`, `text`, optional): Enter your name. 

### Tester Phone
* **Tester Phone** (`tester_phone`, `text`, optional): Enter your phone number. 

### Tester Notes
* **Tester Notes** (`tester_notes`, `note`, optional): Any additional notes for the session.

### Session Schedule
* **Session Schedule** (`session_schedule`, `select_multiple`, required): Confirm your schedule availability for the session (yes or no). 
  * Note: Please select 'yes' if you are available for the session, and 'no' if not.
