# sports_training_contact_form - Help Guide
## Purpose
The sports training contact form is a tool for athletes to contact a sports coach or trainer for training inquiries.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your name in the "sports_training_inquiry_name" field.
2. Provide your email address in the "email" field.
3. Enter your phone number in the "athlete_phone" field.
4. Describe your training goals in the "athlete_goals" field.
5. Select your availability for a coaching session in the "coach_availability" field.
6. Choose the type of trainer you prefer to work with (Coach, Trainer, or Academy) in the "trainer_name" field.
7. Select the sports academy you are interested in (Basketball, Football, or Tennis) in the "sports_academy" field.
8. Choose the sports category you are interested in (Running, Swimming, or Cycling) in the "sports_category" field.
9. Enter a message to the coach in the "message_to_coach" field.
10. Select a date and time for the coaching session in the "date_of_interest" and "time_of_interest" fields.
11. Confirm your email address in the "confirm_email" field.

## Field-by-Field Explanation
* **sports_training_inquiry_name** (`name`, `text`, Optional): Enter your name as the athlete.
* **email** (`email`, `email`, Optional): Enter your email address for communication.
* **athlete_phone** (`phone`, `text`, Optional): Enter your phone number for contact.
* **athlete_goals** (`goals`, `text`, Optional): Describe your training goals and objectives.
* **coach_availability** (`availability`, `date`, Optional): Select a date and time for your coaching session.
* **trainer_name** (`trainer`, `select_one`, Optional): Choose the type of trainer you prefer (Coach, Trainer, or Academy).
* **sports_academy** (`academy`, `select_multiple`, Optional): Select the sports academy you are interested in (Basketball, Football, or Tennis).
* **sports_category** (`category`, `select_multiple`, Optional): Choose the sports category you are interested in (Running, Swimming, or Cycling).
* **message_to_coach** (`message`, `text`, Optional): Enter a message to the coach with your training inquiry.
* **date_of_interest** (`date`, `date`, Optional): Select a date for your coaching session.
* **time_of_interest** (`time`, `time`, Optional): Select a time for your coaching session.
* **confirm_email** (`confirm`, `email`, Optional): Confirm your email address to ensure correct communication.
