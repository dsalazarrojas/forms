# Retreat Registration - Help Guide
## Purpose
This form is used to register for a retreat. Please fill it out to complete your registration.

## How To Complete This Form
To fill out this form, please follow these steps:

1. Fill in your **First Name** (`first_name`): This is the form field for your first name.
2. Fill in your **Last Name** (`last_name`): This is the form field for your last name.
3. Enter your **Email** (`email`): This is the form field for your email address.
4. Enter your **Phone** (`phone`): This is the form field for your phone number.
5. Choose your **Retreat Date** (`retreat_date`): Select the date of the retreat you're registering for.
6. Choose your **Time** (`time`): Select the time of the retreat you're registering for.
7. Answer the question **Retreat Attendee List** (`retreat_attendee_list`): Are you attending this retreat? If yes, please answer "Yes". If no, please answer "No".
8. Choose your **Assigned Tool** (`assigned_tool`): Select from the options provided, but if not sure what tool to choose, you can choose "Other" and provide more information.
9. If you have any files to upload, fill out **Output File** (`output_file`), **File Name** (`file_name`), and **File Path** (`file_path`): These fields are for uploading any relevant files for the retreat.
10. Finally, fill out **Category** (`category`), **Description 1-9** (`description_1-9`): These fields are for providing a brief description of the retreat, which will be used for internal purposes.

## Field-by-Field Explanation
- **First Name** (`first_name`, text, required: false): Your first name.
  - **Last Name** (`last_name`, text, required: true): Your last name.
  - **Email** (`email`, email, required: true): Your email address.
  - **Phone** (`phone`, text, required: false): Your phone number.
  - **Retreat Date** (`retreat_date`, date, required: true): The date of the retreat.
  - **Time** (`time`, time, required: true): The time of the retreat.
  - **Retreat Attendee List** (`retreat_attendee_list`, select_multiple, required: true): Are you attending this retreat? If yes, please answer "Yes". If no, please answer "No".
  - **Assigned Tool** (`assigned_tool`, select_one, required: false): The tool assigned to you.
  - **Output File** (`output_file`, text, required: false): Any relevant files for the retreat.
  - **File Name** (`file_name`, text, required: false): The name of the file.
  - **File Path** (`file_path`, text, required: false): The path of the file.
  - **Category** (`category`, text, required: false): A brief description of the category.
  - **Description 1-9** (`description_1-9`, text, required: false): A brief description of the retreat.
