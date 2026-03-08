# Security Guard Exam Form - Help Guide
## Purpose
The purpose of this form is to collect information from security guards regarding their exam details.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your First Name.
2. Enter your Last Name.
3. Provide your Email address.
4. Enter your Phone number.
5. Select your Date of birth (mm/dd/yyyy).
6. Enter your Address.
7. Enter your Exam ID number.
8. Select your Security Clearance level.
9. Choose your shift (morning, afternoon, evening, or night).
10. Select the tools you have been assigned to use (security-camera, motion-detector, or fire-alarm).
11. Add any additional Notes about your exam.
12. Select your Language proficiency level (assuming "First Language" and "Second Language" fields are not used for this guide).
13. Select your Exam Status (Not Passed, Passed, or Failed).
14. Enter your Assigned Tool ID.
15. Enter your Assigned Tool Name.
16. Select your Exam Date (mm/dd/yyyy).
17. Select your Exam Time (HH:MM).
18. Enter your Exam Location.
19. Enter your Exam Duration.
20. Enter your Exam Comment.

## Field-by-Field Explanation
* **First Name** (`first_name`, text, required): Enter your first name.
* **Last Name** (`last_name`, text, required): Enter your last name.
* **Email** (`email`, email, required): Enter your email address. This will be used for communication purposes.
* **Phone** (`phone`, text, required): Enter your phone number.
* **Date** (`date`, date, required): Select your date of birth in mm/dd/yyyy format.
* **Address** (`address`, text, required): Enter your address.
* **Exam ID** (`exam_id`, text, required): Enter your exam ID number.
* **Security Clearance** (`security_clearance`, text, required): Select your security clearance level.
* **Shift** (`shift`, select_one, required): Choose your shift (morning, afternoon, evening, or night).
* **Assigned Tool** (`assigned_tool`, select_multiple, required): Select the tools you have been assigned to use (security-camera, motion-detector, or fire-alarm).
* **Notes** (`notes`, note, required): Add any additional notes about your exam.
* **Security Level** (`security_level`, select_one, required): Select your language proficiency level (Low, Medium, High).
* **Exam Status** (`exam_status`, select_one, required): Select your exam status (Not Passed, Passed, Failed).
* **Exam Location** (`exam_location`, text, required): Enter your exam location.
* **Exam Duration** (`exam_duration`, text, required): Enter your exam duration.
* **Exam Comment** (`exam_comment`, text, required): Enter your exam comment.
