# nanny_daily_report_form - Help Guide
## Purpose

This form is used to collect information from caregivers about the daily activities, feeding schedule, nap schedule, and any relevant medical notes or additional comments for the day.

## How To Complete This Form

To complete this form, please follow these steps:
1. Fill in the Morning Activities field with a brief description of the child's morning activities.
2. Select the correct option for the Feeding Schedule field, indicating whether the child was fed on time or not.
3. Select all relevant options for the Nap Schedule field, indicating the times when the child took a nap.
4. If applicable, add any relevant medical notes or comments in the Medical Notes field.
5. Optionally, add any additional comments in the Additional Comments field.
6. Fill in the Contact Info field with the caregiver's email address, if desired.
7. Fill in the Emergency Contact field with any relevant contact information, if desired.

## Field-by-Field Explanation

* **Morning Activities** (`morning_activities`, text, required): Briefly describe the child's morning activities, such as breakfast, bathing, or playtime.
* **Feeding Schedule** (`feeding_schedule`, select_one, required): Select "Yes" if the child was fed on time, "No" otherwise.
* **Nap Schedule** (`nap_schedule`, select_multiple, required): Select all the times when the child took a nap, such as 10:00 AM, 1:00 PM, or 3:00 PM.
* **Notes** (`notes`, note, optional): Add any additional notes or comments about the child's day.
* **Contact Info** (`contact_info`, email, optional): Enter the caregiver's email address, if desired.
* **Emergency Contact** (`emergency_contact`, text, optional): Enter any relevant contact information for the emergency contact person, if desired.
* **Medical Notes** (`medical_notes`, text, optional): Add any relevant medical notes or comments, if applicable.
* **Additional Comments** (`additional_comments`, select_one, optional): Select "Yes" if there are any additional comments or "No" otherwise.
