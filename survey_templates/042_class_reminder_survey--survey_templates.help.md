<thinking>
We will create a help guide that explains the purpose of the "Class Reminder Survey" form, how to complete it, and provides detailed explanations of each field, making it easy for end-users to understand.

This form is designed to collect information from students to help instructors improve their class communication and organization. It is intended to be completed by students and will help instructors tailor reminders to their students' needs.

</thinking>

# Class Reminder Survey - Help Guide

## Purpose
The Class Reminder Survey is designed to help instructors improve their class communication and organization by gathering information from students about their preferences and needs.

## How To Complete This Form
1. Fill in your Student Name, if you wish to participate.
2. Provide your Student ID, if you wish to participate.
3. Enter your email address, which will be used for reminders.
4. Enter your Class Name or Section.
5. Enter the Instructor Name.
6. Select the semester or term of the class.
7. Answer "How useful are class reminders - scale 1-5" with a score from 1 to 5.
8. Select your preferred frequency for class reminders.
9. Select the best time to receive reminders.
10. Choose the preferred method for receiving reminders.
11. Select all the methods you prefer for receiving reminders.
12. Answer "What information in reminders is most useful" in free text.
13. Provide "What information is missing from reminders" in free text.
14. If you want to improve class communication, provide suggestions in free text.
15. If you have any additional communication needs, provide a brief description in free text.

## Field-by-Field Explanation

* **Student Name** (`student_name`, text, required): Enter your name as a student.
* **Student ID** (`student_id`, text, required): Enter your student ID, if you wish to participate.
* **Email Address** (`email`, email, required): Enter your email address, which will be used for reminders.
* **Class Name or Section** (`class_name`, text, required): Enter your class name or section.
* **Instructor Name** (`instructor_name`, text, required): Enter your instructor's name.
* **Semester or Term** (`semester_term`, text, required): Enter the semester or term of your class.
* **How useful are class reminders - scale 1-5** (`reminder_usefulness`, number, required): Answer this question with a score from 1 to 5.
* **Preferred Reminder Frequency** (`reminder_frequency`, select_one, required): Select from the options: Daily, Every few days, Weekly, Before class, As needed only, Less frequently, No reminders.
* **Best Time to Receive Reminders** (`reminder_timing`, select_one, required): Select from the options: Week before class, Few days before class, Day before class, Morning of class, 1 hour before class, Other.
* **Preferred Method for Reminders** (`reminder_method`, select_multiple, required): Select all the methods you prefer for receiving reminders: Email, Text message, Phone call, Mobile app notification, Canvas or LMS notification, Posted schedule, Other.
* **What information in reminders is most useful** (`reminder_content_usefulness`, text, required): Provide a brief description of the information that is most useful for you.
* **What information is missing from reminders** (`missing_information`, text, required): Provide a brief description of the information that is missing from reminders.
* **Do reminders help you attend class more regularly** (`attendance_impact`, select_one, required): Select from the options: Yes, very helpful, Yes, somewhat helpful, No impact, No, reminders discourage me.
* **Class Meeting Days** (`meeting_days`, text, required): Enter the days of your class meetings.
* **Class Meeting Time** (`meeting_time`, time, required): Enter the time of your class meetings.
* **Class Location or Room Number** (`location`, text, required): Enter the location or room number of your class.
* **Suggestions for improving class communication** (`suggestions`, text, required): Provide a brief description of your suggestions for improving class communication.
* **Any additional communication needs** (`additional_needs`, text, required): Provide a brief description of any additional communication needs you may have.
