# Class Media Center Visit Schedule - Help Guide
## Purpose
The Class Media Center Visit Schedule form is used to schedule a visit to the Class Media Center for educational activities and events.

## How To Complete This Form
To complete this form, simply follow these steps:

1. Fill out the form with the required information, including your name, email address, phone number, class grade level, class name or subject, expected number of students, and preferred visit date and time.
2. Select the purpose of your visit from the provided options.
3. Indicate if you will need any special equipment or technology resources.
4. If you have any specific books or materials you need, select the relevant options and list the titles or topics.
5. Choose whether you will need any librarian assistance during your visit.
6. If you have any special needs or accommodations, select "True" and provide a brief description.
7. Confirm that this is not a repeat visit for this school year.

## Field-by-Field Explanation
* **Teacher Name** (`teacher_name`, `text`, required): This is your full name, which will be used for communication and scheduling purposes.
* **Email Address** (`email_address`, `email`, required): This is your school email address, which will be used for communication and follow-up.
* **Phone Number** (`phone_number`, `text`, optional): This is your best contact number, which will be used for last-minute updates or changes.
* **Grade Level** (`grade_level`, `select_one`, required): Select your class grade level from the provided options (e.g. Kindergarten, Grade 1, Grade 2, etc.).
* **Class Name or Subject** (`class_name`, `text`, required): Enter the name of your class or subject (e.g. English 101).
* **Number of Students** (`number_of_students`, `number`, required): Enter the expected number of students for your visit.
* **Number of Chaperones** (`number_of_chaperones`, `number`, optional): Enter the number of chaperones (adults) accompanying your students.
* **Preferred Visit Date** (`preferred_date`, `date`, required): Select your preferred visit date.
* **Preferred Time** (`preferred_time`, `time`, required): Select your preferred visit time.
* **Expected Duration** (`visit_duration`, `select_one`, required): Choose the length of time you expect to stay at the media center (e.g. 30 minutes, 1 hour, etc.).
* **Alternative Date** (`alternative_date`, `date`, optional): If you have a second preferred date, select it here.
* **Purpose of Visit** (`visit_purpose`, `select_one`, required): Select the purpose of your visit from the provided options (e.g. book checkout, research project, etc.).
* **Planned Activities** (`activities_planned`, `text`, required): Describe the activities you have planned for your visit.
* **Special Needs or Accommodations** (`special_needs`, `select_one`, required): Indicate if you have any special needs or accommodations for any students.
* **Please Describe Special Needs** (`special_needs_details`, `text`, optional): If you selected "True" for special needs, provide a brief description.
* **Will You Need Technology Resources** (`technology_needed`, `select_one`, required): Select whether you need any technology resources (e.g. computers, tablets, etc.).
* **Will You Need Specific Books or Materials** (`books_needed`, `select_one`, required): Select whether you need any specific books or materials.
* **List Specific Titles or Topics** (`book_titles`, `text`, optional): If you selected "Yes" for specific books or materials, list the titles or topics you need.
* **Will You Need Librarian Assistance** (`librarian_assistance`, `select_one`, required): Choose whether you need any librarian assistance during your visit.
* **Describe Assistance Needed** (`assistance_details`, `text`, optional): If you selected "Yes" for librarian assistance, describe the specific help you need.
* **Has Your Class Visited Before** (`previous_visits`, `select_one`, required): Indicate if this is a repeat visit for this school year.
* **Additional Comments or Requests** (`additional_comments`, `text`, optional): Enter any additional comments or requests you have.
