# Employee Contact Information Update Form - Help Guide

## Purpose
This form is designed to update employee contact information. Please fill out the form to ensure your up-to-date contact details are recorded in the system.

## How To Complete This Form

1. Fill in your **First Name**, **Last Name**, and **Job Title**.
2. Enter your **Work Phone**, **Cell Phone**, and **Work Email**, making sure to follow the email format `example@email.com`.
3. If you have multiple work email addresses, please enter them in the **Work Ext. Email** and **Work Ext. Email 2** fields.
4. Add your **Personal Email** if you have one.
5. Enter your **Work Address**, including your **Work Zip**.
6. Select your **Country** from the list.
7. For your **State**, **City**, and **Work Zip**, select the correct options from the respective dropdown menus.
8. Enter your **Birthday** in the format `MM/DD/YYYY`.
9. Select your **Birth Month** and **Birth Year** from the dropdown menus.
10. Choose your **Manager** from the list.
11. Choose your **Department** from the list.
12. Select your **Job Grade** and **Job Family** from the lists.
13. Optionally, add any **Notes** regarding your job or contact information.
14. Finally, confirm your **Job Title 2** (if applicable).

## Field-by-Field Explanation

* **First Name** (`first_name`, text, required): Enter your first name as it is typically used in formal communication.
* **Last Name** (`last_name`, text, required): Enter your last name as it is typically used in formal communication.
* **Job Title** (`job_title`, text, required): Enter your job title as assigned by the company.
* **Work Phone** (`work_phone`, text, required): Enter your work phone number in the format `XXX-XXX-XXXX`.
* **Work Ext. Phone** (`work_ext_phone`, text, optional): Enter an additional phone number for work.
* **Cell Phone** (`cell_phone`, text, required): Enter your cell phone number in the format `XXX-XXX-XXXX`.
* **Work Email** (`work_email`, email, required): Enter your work email address in the format `example@email.com`.
* **Work Ext. Email** (`work_ext_email`, email, optional): Enter an additional email address for work.
* **Work Ext. Email 2** (`work_ext_email_2`, email, optional): Enter another email address for work.
* **Personal Email** (`personal_email`, email, optional): Enter your personal email address in the format `example@email.com`.
* **Work Address** (`work_add`, text, required): Enter your work address in the format `123 Main St, Anytown, USA 10001`.
* **Country** (`country`, select_multiple, required): Select your country of residence from the list.
* **State** (`state`, select_one, optional): Select your state of residence from the list.
* **City** (`city`, select_one, optional): Select your city of residence from the list.
* **Work Zip** (`work_zip`, select_one, required): Select your work zip code from the list.
* **Work Ext. Zip** (`work_ext_zip`, select_one, required): Select your additional work zip code from the list.
* **Birthday** (`birthday`, date, required): Enter your birthday in the format `MM/DD/YYYY`.
* **Birth Month** (`birth_month`, date, optional): Select your birth month from the list.
* **Birth Year** (`birth_year`, date, required): Select your birth year from the list.
* **Manager** (`manager`, select_one, required): Select your direct manager from the list.
* **Department** (`department`, select_one, required): Select your department from the list.
* **Job Grade** (`job_grade`, select_one, required): Select your job grade from the list.
* **Job Family** (`job_family`, select_one, required): Select your job family from the list.
* **Notes** (`notes`, note, optional): Add any additional notes regarding your job or contact information.
* **Job Title 2** (`job_title_ext`, text, optional): Optionally enter another job title if applicable.
