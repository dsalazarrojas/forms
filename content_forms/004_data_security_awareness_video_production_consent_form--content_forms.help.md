# data_security_awareness_video_production_consent_form - Help Guide
## Purpose
This form is used to collect information for video production consent, specifically for staff members participating in data security awareness video shoots.

## How To Complete This Form
1. Select the correct answer for each field based on your role and participation in the video shoot.
2. Fill in the production title if required.
3. Choose your role in the video shoot.
4. Select locations where the video shoot will take place.
5. Enter the date of the video shoot.
6. Enter the time of the video shoot.
7. Enter any notes about the video shoot.
8. Select whether consent has been provided.

## Field-by-Field Explanation
* **staff_member** (`staff_member`, select_one, required): Select 'Yes' if you are a staff member participating in the video shoot, and 'No' otherwise.
* **production_title** (`production_title`, text, optional): Enter the title of the video production if required.
* **role** (`role`, select_multiple, optional): Choose your role in the video shoot, such as 'actor', 'producer', etc.
* **location** (`location`, select_multiple, optional): Select locations where the video shoot will take place, such as 'office', 'outdoor', etc.
* **date_of_video_shoot** (`date_of_video_shoot`, date, optional): Enter the date of the video shoot in the format 'YYYY-MM-DD'.
* **time_of_video_shoot** (`time_of_video_shoot`, time, optional): Enter the time of the video shoot in the format 'HH:MM' (e.g., 14:30 for 2:30 PM).
* **video_shoot_notes** (`video_shoot_notes`, note, optional): Enter any additional notes about the video shoot, such as 'special instructions' or 'equipment needed'.
* **consent_provided** (`consent_provided`, select_one, optional): Select 'Yes' if consent has been provided, and 'No' otherwise.
