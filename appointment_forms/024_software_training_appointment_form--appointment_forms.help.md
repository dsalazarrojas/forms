# Software Training Appointment Form - Help Guide
## Purpose
The Software Training Appointment Form is designed to collect information for software training appointments. This form helps trainers and administrators to schedule and manage training sessions efficiently.

## How To Complete This Form
To complete this form, follow these steps:

1. Select your preferred dates for the training session.
2. Choose the start and end times for the session.
3. Indicate whether the training session is yes or no.
4. Select the preferred language and training room for the session.
5. Enter the training capacity and maximum capacity.
6. Specify the available days and time for the session.
7. Choose the training duration.
8. Add any notes or additional comments about the session.
9. Provide your email address and phone number for contact purposes.
10. Indicate whether a specific tool is assigned for the training session.

## Field-by-Field Explanation
- **Preferred Dates** (`preferred_dates`, select_multiple, required: false): Select the dates when you are available for the training session.
- **Start Time** (`start_time`, select_one, required: false): Choose the start time for the training session.
- **End Time** (`end_time`, select_one, required: false): Select the end time for the training session.
- **Training Session** (`training_session`, select_one, required: false): Indicate whether the training session is yes or no.
- **Instructor** (`instructor`, select_one, required: false): Choose whether the instructor is yes or no.
- **Training Type** (`training_type`, select_one, required: false): Select the type of training (yes or no).
- **Training Location** (`training_location`, select_one, required: false): Choose the location for the training session.
- **Training Date** (`training_date`, date, required: false): Enter the training date.
- **Training Time** (`training_time`, time, required: false): Enter the training time.
- **Preferred Language** (`preferred_language`, select_one, required: false): Select your preferred language.
- **Training Room** (`training_room`, select_one, required: false): Choose the training room.
- **Training Capacity** (`training_capacity`, number, required: false): Enter the training capacity.
- **Max Capacity** (`training_max_capacity`, number, required: false): Enter the maximum capacity.
- **Available Days** (`available_days`, select_multiple, required: false): Specify the available days for the session.
- **Available Time** (`available_time`, select_multiple, required: false): Choose the available time for the session.
- **Training Duration** (`training_duration`, select_one, required: false): Select the training duration.
- **Notes** (`notes`, note, required: false): Add any notes or additional comments about the session.
- **Email** (`email`, email, required: false): Enter your email address for contact purposes.
- **Phone** (`phone`, text, required: false): Enter your phone number for contact purposes.
- **Assigned Tool** (`assigned_tool`, select_one, required: false): Indicate whether a specific tool is assigned for the training session.
