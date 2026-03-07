# Trainer Availability Form - Help Guide
## Purpose

The Trainer Availability Form is a tool used by trainers to input their availability for sessions. This form is essential for trainers to schedule sessions at times and frequencies that suit their needs.

## How To Complete This Form

To complete this form, follow these steps:

1. Select your preferred session frequency from the options: Mon-Fri, Sat, Sun, or Anytime.
2. Choose the length of your sessions: 30 minutes, 45 minutes, 60 minutes, or 90 minutes.
3. Select the specialties you offer as a trainer, such as Personal Trainer, Group Class, Personal Fitness, Yoga, Pilates, Dance, Strength, Cardio, Flexibility, Weight Loss, or Stress Relief.
4. Choose the locations where you prefer to conduct sessions: Gym, Home, Studio, or Outdoor.
5. Enter your availability date for sessions.
6. Select the start and end times of your sessions.
7. Enter your name as a trainer.
8. Provide your contact email.
9. Enter your phone number.
10. Enter any additional notes about your availability.
11. If there is a conflict with your session, select the type of conflict and provide additional details.

## Field-by-Field Explanation

* **Session Frequency**: (`session_frequency`, select_one, required)
  • Select the days of the week you are available to conduct sessions.
* **Session Length**: (`session_length`, select_one, required)
  • Choose the length of your sessions in minutes.
* **Specialties**: (`specialties`, select_multiple, required)
  • Select the types of sessions you offer as a trainer, such as Personal Trainer, Group Class, etc.
* **Location Preference**: (`location_preference`, select_multiple, required)
  • Choose the locations where you prefer to conduct sessions.
* **Availability**: (`availability`, date, required)
  • Enter the date of your availability for sessions.
* **Start Time**: (`start_time`, time, required)
  • Enter the start time of your sessions.
* **End Time**: (`end_time`, time, required)
  • Enter the end time of your sessions.
* **Trainer Name**: (`trainer_name`, text, required)
  • Enter your name as a trainer.
* **Email**: (`email`, email, required)
  • Provide your email address.
* **Phone**: (`phone`, text, required)
  • Enter your phone number.
* **Trainer Notes**: (`trainer_notes`, note, optional)
  • Enter any additional notes about your availability.
* **Business Name**: (`business_name`, text, optional)
  • Enter your business name (if applicable).
* **Trainer ID**: (`trainer_id`, text, required)
  • Enter your trainer ID.
* **Location**: (`location`, text, required)
  • Enter the location of your sessions.
* **Availability Note**: (`availability_note`, note, optional)
  • Enter any additional notes about your availability.
* **Session Date**: (`session_date`, date, required)
  • Enter the date of your session.
* **Session Time**: (`session_time`, time, required)
  • Enter the time of your session.
* **Conflict**: (`conflict`, select_one, required)
  • Select whether there is a conflict with your session or not.
* **Conflict Note**: (`conflict_note`, note, optional)
  • Enter additional details about the conflict.
* **Conflict Start Time**: (`conflict_start_time`, time, optional)
  • Enter the start time of the conflict.
* **Conflict End Time**: (`conflict_end_time`, time, optional)
  • Enter the end time of the conflict.
* **Conflict Session Date**: (`conflict_session_date`, date, optional)
  • Enter the date of the conflict.
* **Conflict Session Time**: (`conflict_session_time`, time, optional)
  • Enter the time of the conflict.
* **Conflict Session Frequency**: (`conflict_session_frequency`, select_one, optional)
  • Choose the session frequency of the conflict.

## Tips

* Make sure to fill out all required fields to ensure that your availability is accurately reflected in the system.
* If you have any conflicts, ensure that you provide detailed information about the conflict to avoid any scheduling issues.
