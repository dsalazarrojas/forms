<thinking>

This form is used to collect information from customers for a dance class. It's intended to be filled out by people interested in enrolling in a dance class, either for general or private lessons. It's not a required form, and the information gathered will be used by the dance class administration team to contact the customer and schedule a trial or private session.

To determine if the form is filled out for a duplicate purpose (e.g. for the same student), we'll use the first name, last name, and phone number fields to identify potential duplicates. If it's a duplicate, we'll send a notification to the customer and the dance class administration team.

</thinking>

# Dance Class Inquiry Form - Help Guide
## Purpose
This form is designed to be filled out by customers interested in enrolling in a dance class. It's meant to collect necessary information to contact the customer and schedule a trial or private session.

## How To Complete This Form
- Please fill out this form with accurate and up-to-date information.
- Make sure to enter your name and phone number to help us identify you and reach out if needed.
- If you're interested in enrolling in a general class, select "General" from the "Inquiry type" field.
- If you're interested in a private session, select "Private" from the "Inquiry type" field.
- You can select multiple days of the week for your preferred class schedule.
- Don't forget to leave any additional comments or questions in the "Comments" field.

## Field-by-Field Explanation
- **First name**: <code>first_name</code> (`text`, optional): Please enter your first name.
- **Last name**: <code>last_name</code> (`text`, optional): Please enter your last name.
- **Email**: <code>email</code> (`email`, optional): Please enter a valid email address.
- **Phone**: <code>phone</code> (`text`, optional): Please enter your phone number.
- **Class name**: <code>class_name</code> (`text`, optional): If you know the name of the class you're interested in, enter it here.
- **Start date**: <code>start_date</code> (`date`, optional): Enter the date you're interested in starting the class.
- **End date**: <code>end_date</code> (`date`, optional): If you have a specific end date in mind, enter it here.
- **Day**: <code>day</code> (`number`, optional): Select a number between 1 and 7 to choose the day of the week you'd like to attend the class.
- **Start time**: <code>start_time</code> (`time`, optional): Enter the start time of the class you'd like to attend.
- **End time**: <code>end_time</code> (`time`, optional): If your class has a specific end time, enter it here.
- **Days of the week**: <code>days_of_week</code> (`select_multiple`, optional): Select one or more days of the week you'd like to attend the class.
- **Class type**: <code>class_type</code> (`text`, optional): Enter a short description of the class type you're interested in.
- **Inquiry type**: <code>inquiry_type</code> (`select_one`, optional): Select the type of inquiry you're making (General, Private, or Trial).
- **Student level**: <code>student_level</code> (`text`, optional): Enter your current student level (e.g. beginner, intermediate, advanced).
- **Comments**: <code>comments</code> (`note`, optional): Add any additional comments or questions you have.
