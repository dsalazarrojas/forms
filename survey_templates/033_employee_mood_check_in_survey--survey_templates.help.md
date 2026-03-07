<thinking>As a designer, I need to ensure that the form is user-friendly and clear, while also conveying the necessary information to the users. I will create a help guide that explains the purpose of the form, how to complete it, and what each field means. I will base the explanation on the provided YAML fields and provide a clear and concise explanation for each field. I will also ensure that the guide is easy to read and understand, with bullet points for each field explanation. I will not invent any unsupported business logic and will stick to the provided YAML fields for explanation.</thinking>

# Employee Mood Check In Survey - Help Guide
## Purpose
This form is designed to help employees check in their mood and provide insights on their work environment and work-life balance. The survey is meant to help managers and HR teams understand the overall mood and well-being of their employees.

## How To Complete This Form
1. Fill in your employee name.
2. Select your job title.
3. Choose your mood rating (Very High, High, Medium, Low, Very Low).
4. Select your work-life balance (Excellent, Good, Fair, Poor).
5. Select your emotional state (Positive, Negative).
6. Fill in your job satisfaction score (out of 10).
7. Fill in your overall satisfaction score (out of 10).
8. Select your department (Accounting, Engineering, HR, Management, Sales).
9. Fill in your manager's name.
10. Fill in your manager's email.
11. Fill in your manager's phone number.
12. Fill in your team member's name (if applicable).
13. Fill in your team member's email (if applicable).
14. Fill in your team member's phone number (if applicable).
15. Fill in your work hours (HH:MM AM/PM format, e.g., 08:00 AM).
16. Select your work location (On-site, Remote, Hybrid, Other).
17. If your work location is Other, fill in the other field.
18. Select your job type (Full-time, Part-time, Contract, Intern, Other).
19. If your job type is Other, fill in the other field.
20. Select your job status (Active, Inactive, On Leave, On Vacation, On Sabbatical, Other).
21. If your job status is Other, fill in the other field.
22. Select your job urgency (High, Medium, Low, None).
23. If your job urgency is Other, fill in the other field.
24. Fill in your manager's rating score (out of 10).
25. Fill in your manager's rating scale (out of 10).

## Field-by-Field Explanation
* **Employee Name** (`employee_name`, text, optional): Please fill in your employee name.
* **Job Title** (`job_title`, text, optional): Please select your job title.
* **Mood Rating** (`mood_rating`, select_one, optional): This is a scale to rate your current mood. Select Very High, High, Medium, Low, or Very Low.
* **Work-Life Balance** (`work_life_balance`, select_multiple, optional): This is a scale to rate your work-life balance. Select Excellent, Good, Fair, or Poor.
* **Emotional State** (`emotional_state`, select_one, optional): This is a scale to rate your emotional state. Select Positive or Negative.
* **Job Satisfaction** (`job_satisfaction`, number, optional): This is a score to rate your job satisfaction out of 10.
* **Overall Satisfaction** (`overall_satisfaction`, number, optional): This is a score to rate your overall satisfaction out of 10.
* **Department** (`department`, select_one, optional): Select the department you belong to (Accounting, Engineering, HR, Management, Sales).
* **Manager Name** (`manager_name`, text, optional): Please fill in your manager's name.
* **Manager Email** (`manager_email`, email, optional): Please fill in your manager's email.
* **Manager Phone** (`manager_phone`, text, optional): Please fill in your manager's phone number.
* **Team Member Name** (`team_member_name`, text, optional): If you are a team member, please fill in your name.
* **Team Member Email** (`team_member_email`, email, optional): If you are a team member, please fill in your email.
* **Team Member Phone** (`team_member_phone`, text, optional): If you are a team member, please fill in your phone number.
* **Work Hours** (`work_hours`, time, optional): Please fill in your work hours in the format HH:MM AM/PM (e.g., 08:00 AM).
* **Work Location** (`work_location`, select_one, optional): Select your work location (On-site, Remote, Hybrid, Other).
* **Other Work Location** (`work_location_other`, text, optional): If your work location is Other, please fill in the other field.
* **Job Type** (`job_type`, select_one, optional): Select your job type (Full-time, Part-time, Contract, Intern, Other).
* **Job Type Other** (`job_type_other`, text, optional): If your job type is Other, please fill in the other field.
* **Job Status** (`job_status`, select_one, optional): Select your job status (Active, Inactive, On Leave, On Vacation, On Sabbatical, Other).
* **Job Status Other** (`job_status_other`, text, optional): If your job status is Other, please fill in the other field.
* **Job Urgency** (`job_urgency`, select_one, optional): Select your job urgency (High, Medium, Low, None).
* **Job Urgency Other** (`job_urgency_other`, text, optional): If your job urgency is Other, please fill in the other field.
* **Manager Rating** (`manager_rating`, number, optional): Please fill in your manager's rating score out of 10.
* **Manager Rating Scale** (`manager_rating_scale`, number, optional): Please fill in your manager's rating scale out of 10.
