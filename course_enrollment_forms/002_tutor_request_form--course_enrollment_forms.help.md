# Tutor Request Form - Help Guide
## Purpose
This form is used to request a tutor for a specific course. You will be asked to provide your name, email, phone number, course, and other relevant details. Please fill out this form accurately to help us process your request efficiently.

## How To Complete This Form
1. Enter your **Student Name** in the first field. Please use your full first and last name.
2. Enter your **Email** in the format of `username@domain.com`. This will be used to contact you about your tutor request.
3. (Optional) Enter your **Phone Number** in the format `XXX-XXX-XXXX`. This will be used to contact you about your tutor request.
4. Select the **Course** you are requesting a tutor for from the dropdown menu. Please choose the correct course that you are currently taking.
5. Enter your **Homework Question** in the text field. Please be as detailed as possible about the topic you need help with.
6. Select all the **Preferred Languages** you can work with from the dropdown menu. Please select all languages you are proficient in.
7. Enter your **Tutor Subject** in the text field. Please describe the topic you need help with.
8. Enter your **Message** in the text field. Please provide any additional information you think might be helpful for us to know.
9. Decide if you have been **Assigned a Tool** or not. This will help us track internal processing.
10. Select who **Submitted the Request**, whether it's a **Student**, **Tutor**, or **Both**.
11. Select if the request was **Submitted To** the correct person or not.
12. (Optional) Enter the **Submitted Date** and **Submitted Time** of when you submitted the request.
13. (Optional) Enter the **Updated Date** and **Updated Time** of when the request was updated.
14. Decide if the request was **Updated By** someone.
15. (Optional) Decide if the request was **Created By** someone.
16. (Optional) Enter the **Created Date** and **Created Time** of when the request was created.

## Field-by-Field Explanation

* **Student Name** (`student_name`, text, required): Enter your full first and last name.
* **Email** (`email`, email, required): Enter your email address in the format `username@domain.com`.
* **Phone** (`phone`, text, optional): Enter your phone number in the format `XXX-XXX-XXXX`. (Not required, but recommended for faster contact.)
* **Course** (`course`, select_one, required): Select the course you are currently taking.
* **Homework Question** (`homework_question`, text, required): Describe the homework topic you need help with.
* **Preferred Language(s)** (`tutor_preferred_language`, select_multiple, optional): Select all languages you are proficient in.
* **Tutor Subject** (`tutor_subject`, text, required): Describe the topic you need help with.
* **Message** (`message`, text, required): Provide any additional information about your request.
* **Assigned Tool** (`assigned_tool`, select_one, required): Indicate if you have been assigned a tool or not.
* **Submitted By** (`submitted_by`, select_one, required): Indicate who submitted the request, either as a **Student**, **Tutor**, or **Both**.
* **Submitted To** (`submitted_to`, select_one, required): Indicate if the request was submitted to the correct person or not.
* **Submitted Date** (`submitted_date`, date, optional): Enter the date you submitted the request.
* **Submitted Time** (`submitted_time`, time, optional): Enter the time you submitted the request.
* **Updated By** (`updated_by`, select_one, required): Indicate if the request was updated by someone.
* **Updated Date** (`updated_date`, date, optional): Enter the date the request was updated.
* **Updated Time** (`updated_time`, time, optional): Enter the time the request was updated.
* **Created By** (`created_by`, select_one, optional): Indicate if the request was created by someone.
* **Created Date** (`created_on`, date, optional): Enter the date the request was created.
* **Created Time** (`created_time`, time, optional): Enter the time the request was created.
* **Assigned User** (`assigned_user`, select_one, required): Indicate if you have been assigned a user.
* **Assigned Group** (`assigned_group`, select_one, required): Indicate if you have been assigned a group.
