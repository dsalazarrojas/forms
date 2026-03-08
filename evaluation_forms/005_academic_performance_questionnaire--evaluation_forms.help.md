# Academic Performance Questionnaire - Help Guide
## Purpose
The Academic Performance Questionnaire is a tool used to collect information about your academic performance and study habits.

## How To Complete This Form
1. Enter your **Student full name**, which is your full name as it appears on your official records.
2. Enter your **Student ID number**, which is a unique identifier assigned to you by the institution.
3. Select your **Current academic level**, which indicates your current level of study (Freshman, Sophomore, Junior, Senior, or Graduate).
4. Enter your **Major or field of study**, which is the area of study you are currently pursuing.
5. Enter your **Current cumulative GPA**, which is your current grade point average on a 4.0 scale.
6. Enter the number of **Courses you are currently enrolled in**.
7. Select how many **hours per week** you spend on studying outside of class (Less than 5 hours, 5-10 hours, 11-15 hours, 16-20 hours, or More than 20 hours).
8. Rate your **Class attendance** this semester as Excellent - rarely miss class, Good - miss occasionally, Fair - miss somewhat often, or Poor - miss frequently.
9. If applicable, select all the **academic challenges** you are currently facing (Time management, Course difficulty, Lack of motivation, Test anxiety, Writing skills, Math or quantitative skills, or Language barriers).
10. If applicable, select all the **academic support services** you have used (Tutoring center, Writing center, Academic advising, Study groups, Office hours, Online learning resources, or None).
11. Rate your **satisfaction with your academic performance** as Very dissatisfied, Dissatisfied, Neutral, Satisfied, or Very satisfied.
12. Select **yes** if you have a plan to improve your academic performance, **somewhat** if you have some ideas, or **no** if you are not sure where to start.
13. Describe any **additional support** you need to improve academically.
14. Enter any **additional comments** you have about your academic experience.

## Field-by-Field Explanation

* **Student full name** (`student_name`, text, required): Enter your full name as it appears on your official records.
* **Student ID number** (`student_id`, text, required): A unique identifier assigned to you by the institution.
* **Current academic level** (`academic_level`, select_one, required): Your current level of study (Freshman, Sophomore, Junior, Senior, or Graduate).
* **Major or field of study** (`major_field`, text, required): The area of study you are currently pursuing.
* **Current cumulative GPA** (`current_gpa`, number, required): Enter your current grade point average on a 4.0 scale.
* **How many courses are you currently enrolled in** (`course_load`, number, required): The number of courses you are currently taking.
* **On average, how many hours per week do you spend on studying outside of class** (`study_hours_weekly`, select_one, required): Select how many hours per week you spend on studying outside of class (Less than 5 hours, 5-10 hours, 11-15 hours, 16-20 hours, or More than 20 hours).
* **How would you rate your class attendance this semester** (`class_attendance`, select_one, required): Rate your class attendance this semester as Excellent - rarely miss class, Good - miss occasionally, Fair - miss somewhat often, or Poor - miss frequently.
* **What academic challenges are you currently facing (select all that apply)** (`academic_challenges`, select_multiple, optional): Select all the academic challenges you are facing, if any.
* **Which academic support services have you used (select all that apply)** (`support_services_used`, select_multiple, optional): Select all the support services you have used, if any.
* **How satisfied are you with your overall academic performance** (`academic_satisfaction`, select_one, required): Rate your satisfaction with your overall academic performance as Very dissatisfied, Dissatisfied, Neutral, Satisfied, or Very satisfied.
* **Do you have a plan to improve your academic performance** (`improvement_plan`, select_one, required): Select yes if you have a plan, somewhat if you have some ideas, or no if you are not sure where to start.
* **What additional support would help you improve academically** (`additional_support_needed`, text, optional): Describe any additional support you need to improve academically.
* **Any additional comments about your academic experience** (`comments`, text, optional): Enter any additional comments you have about your academic experience.
