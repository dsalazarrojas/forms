# COVID 19 Attendance Checklist - Help Guide

## Purpose
The COVID 19 Attendance Checklist is used to track student attendance, health screening, and other relevant details to ensure the safety and well-being of students, parents, and instructors during martial arts classes.

## How To Complete This Form

To complete this form, please follow these steps:

1. Fill in the student's name, ID, and date of birth as required fields.
2. Enter the parent or guardian's name and contact phone number as required fields.
3. Enter the student's email address for communication purposes.
4. Enter the date and time of the class as required fields.
5. Select the class type and instructor name as required fields.
6. Choose the attendance status of the student (Present, Absent - Excused, Absent - Unexcused, Late Arrival, or Early Departure) as required fields.
7. Enter the arrival time if applicable.
8. Answer the health screening questions regarding temperature and symptoms.
9. Indicate whether the student wore a mask during the class.
10. Check if social distancing was maintained during the class.
11. Check if hand sanitizing was performed before and after class.
12. Select the equipment used during the class (Mats, Punching bags, Focus pads, Sparring gear, Weapons, etc.).
13. Check if the equipment was sanitized before and after use.
14. Choose the sparring participation level (Full contact, Light contact, No contact, Did not spar).
15. Enter the skills practiced during the class.
16. Select the current belt rank of the student.
17. Enter the next belt test date if scheduled.
18. Enter any attendance notes or observations.
19. Sign the instructor's name as required.
20. Check if a parent notification was sent regarding attendance confirmation.

## Field-by-Field Explanation

* **Student Name** (`student_name`, text, required): Enter the full name of the student.
* **Student ID** (`student_id`, text, required): Enter the student's identification number.
* **Date of Birth** (`date_of_birth`, date, required): Enter the student's date of birth in MM-DD-YYYY format.
* **Parent or Guardian Name** (`parent_guardian_name`, text, required): Enter the full name of the parent or guardian.
* **Parent or Guardian Phone** (`parent_guardian_phone`, text, required): Enter the best contact phone number of the parent or guardian.
* **Email Address** (`email_address`, email, required): Enter the student's email address for communication purposes.
* **Class Date** (`class_date`, date, required): Enter the date of the class.
* **Class Time** (`class_time`, text, required): Enter the scheduled time of the class.
* **Instructor Name** (`instructor_name`, text, required): Enter the name of the instructor.
* **Class Type** (`class_type`, select_one, required): Select the type of martial arts class the student is attending (Beginner, Intermediate, Advanced, Black Belt, etc.).
* **Attendance Status** (`attendance_status`, select_one, required): Select the attendance status of the student (Present, Absent - Excused, Absent - Unexcused, etc.).
* **Arrival Time** (`arrival_time`, time, optional): Enter the time the student arrived if not present at class start.
* **Health Screening Completed** (`health_screening_completed`, select_one, required): Answer if the health screening was completed (Yes - Passed, Yes - With concerns, No - Not completed).
* **Temperature Reading** (`temperature_check`, number, optional): Enter the temperature reading in Fahrenheit.
* **Any Symptoms Present** (`symptoms_check`, select_one, required): Answer if the student has any COVID-19 symptoms (No symptoms, Yes - Symptoms present, Not checked).
* **Mask Worn** (`mask_worn`, select_one, required): Select if the student wore a mask during the class (Yes - Entire class, Yes - Partially, No - Removed during activity, No - Not required).
* **Social Distancing Maintained** (`social_distancing`, select_one, required): Select if social distancing was maintained during the class (Yes - Always, Yes - Mostly, No - Close contact occurred).
* **Hand Sanitizing** (`hand_sanitizing`, select_one, required): Select if hand sanitizing was performed before and after the class (Yes - Both times, Yes - Before only, Yes - After only, False).
* **Equipment Used** (`equipment_used`, select_multiple, required): Select all equipment used during the class (Mats, Punching bags, Focus pads, Sparring gear, etc.).
* **Equipment Sanitized** (`equipment_sanitized`, select_one, required): Select if equipment was sanitized before and after use (True, False, Not applicable).
* **Sparring Participation** (`sparring_participation`, select_one, required): Select the sparring participation level (Yes - Full contact, Yes - Light contact, Yes - No contact, No - Did not spar).
* **Skills Practiced** (`skill_practiced`, text, optional): Enter any skills practiced during the class.
* **Current Belt Rank** (`belt_rank`, select_one, required): Select the current belt rank of the student.
* **Next Belt Test Date** (`next_belt_test`, date, optional): Enter the next belt test date if scheduled.
* **Attendance Notes** (`attendance_notes`, text, optional): Enter any attendance notes or observations.
* **Instructor Signature** (`instructor_signature`, text, required): Enter the full name of the instructor.
* **Parent Notification Sent** (`parent_notification`, select_one, optional): Select if a parent notification was sent regarding attendance confirmation (Yes - Email, Yes - Text, Yes - Both, False).
