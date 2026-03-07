</thinking>

# Pruning Request Form - Help Guide
## Purpose
This form is used to submit a pruning request to the relevant authorities. It requires information for the purpose of scheduling and tracking the process.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter your first name in the "First Name" field.
2. Enter your email address in the "Email" field.
3. Enter your phone number in the "Phone" field.
4. Enter the date and time you would like to be pruned in the "Date" and "Time" fields, if applicable.
5. Optionally, you can add notes in the "Note" field.
6. If you have a second contact email, you can enter it in the "Email 2" field.
7. If you have a second phone number, you can enter it in the "Phone 2" field.
8. If you need to enter a second date, you can enter it in the "Date 2" field.
9. If you need to enter a second time, you can enter it in the "Time 2" field.
10. If you have additional information, please enter it in the "Note 2" field.
11. Enter the first name of the person you are requesting for in the "First Name 2" field.
12. Enter the last name of the person you are requesting for in the "Last Name" field.
13. Enter the company name of the person you are requesting for in the "Company" field.
14. Enter the job title of the person you are requesting for in the "Job Title" field.
15. Enter the department of the person you are requesting for in the "Department" field.
16. Enter the job description of the person you are requesting for in the "Job Description" field.
17. Select the status of your request in the "Request Status" field.
18. Select the assigned tool in the "Assigned Tool" field.
19. Enter any additional request message in the "Request Message" field.
20. Enter any additional request notes in the "Request Notes" field.
21. Optionally, you can enter another first name in the "First Name 3" field.
22. Optionally, you can enter another last name in the "Last Name 2" field.

## Field-by-Field Explanation

* **First Name** (`first_name`, text, required): This is the first name of the person making the request.
* **Email** (`email`, email, required): This is the email address of the person making the request.
* **Phone** (`phone`, text, required): This is the phone number of the person making the request.
* **Date** (`date`, date, false): This is the date you would like to be pruned. If not provided, will be set to the current date.
* **Time** (`time`, time, false): This is the time you would like to be pruned. If not provided, will be set to the current time.
* **Note** (`note`, note, false): This is any additional information you would like to add to your request.
* **Email 2** (`email_2`, email, false): This is an optional second email address.
* **Phone 2** (`phone_2`, text, false): This is an optional second phone number.
* **Date 2** (`date_2`, date, false): This is an optional second date.
* **Time 2** (`time_2`, time, false): This is an optional second time.
* **Note 2** (`note_2`, note, false): This is an optional additional note.
* **First Name 2** (`first_name_2`, text, false): This is the first name of the person you are requesting for. If not provided, will be blank.
* **Last Name** (`last_name`, text, false): This is the last name of the person you are requesting for.
* **Company** (`company`, text, false): This is the name of the company you are requesting for.
* **Job Title** (`job_title`, text, false): This is the job title of the person you are requesting for.
* **Department** (`department`, text, false): This is the department of the person you are requesting for.
* **Job Description** (`job_description`, text, false): This is a brief description of the person's job.
* **Request Date** (`request_date`, date, true): This is the date you would like to schedule the pruning for.
* **Request Time** (`request_time`, time, true): This is the time you would like to schedule the pruning for.
* **Request Status** (`request_status`, select_one, true): This is the status of your request, which can be "Pending", "Approved", or "Denied".
* **Assigned Tool** (`assigned_tool`, select_multiple, true): This is the tool assigned for the pruning, which can be "chatjimmy" or "Other".
* **Request Message** (`request_message`, note, false): This is any additional message for the request.
* **Request Notes** (`request_notes`, note, false): This is any additional notes for the request.
* **First Name 3** (`first_name_3`, text, false): This is an additional first name, if needed.
* **Last Name 2** (`last_name_2`, text, false): This is an additional last name, if needed.

## Tips
* Please make sure to fill out all required fields.
* If you have any additional information or questions, please enter it in the "Note" field.
* If you are unsure about any of the fields, please ask for help.
