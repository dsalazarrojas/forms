<thinking>From the provided YAML, it appears that the School Lunch Survey form is designed to collect information from parents and school administrators regarding their experiences and opinions about school lunches. The form includes fields for parent and school contact information, survey questions about the quality and variety of food, meal times, and options available, as well as spaces for free-form feedback and comments from students, parents, and school administrators. This form aims to gauge satisfaction and recommendations from parents and administrators, providing valuable insights for school administrators to improve their lunch programs.

The form has a mix of mandatory and optional fields, indicating that some sections are essential while others are not required. This suggests that the survey is designed to gather both quantitative and qualitative data from respondents.

To ensure that end-users understand the form's purpose and how to complete it, a clear and concise help guide is essential. Below is a help guide in Markdown format, following the specified structure.

# School Lunch Survey - Help Guide
## Purpose
The School Lunch Survey aims to gather feedback and opinions from parents and school administrators about their experiences with school lunches. Your input will help school administrators improve their lunch programs.

## How To Complete This Form
1. Please fill in your contact information (Parent Name, School Name, School Email, School Phone).
2. Answer the survey questions about food quality, variety, and options available.
3. Select your preferred meal times from the options provided.
4. Choose the food options you would like to be available.
5. Provide any comments or feedback about your experiences with school lunches.
6. Select your level of satisfaction and recommendation for the school's lunch program.
7. Answer any additional questions, if applicable.

## Field-by-Field Explanation

* **Parent Name** (`parent_name`, text, **Required**): Please enter your name.
* **School Name** (`school_name`, text, **Required**): Please enter your school's name.
* **Student Name** (`student_name`, text, **Required**): Please enter the name of the student you are surveying.
* **School Email** (`school_email`, email, **Required**): Please enter your school's email address.
* **School Phone** (`school_phone`, text, **Required**): Please enter your school's phone number.
* **Lunch Frequency** (`lunch_frequency`, number, **Optional**): Please select how often you have lunch at school.
* **Food Quality** (`food_quality`, select_one, **Required**): Choose your level of satisfaction with the food quality (Excellent, Good, Fair, Poor).
* **Food Variety** (`food_variety`, select_one, **Required**): Choose how great the variety of food options available (Great, Average, Fair, Poor).
* **Meal Time** (`meal_time`, select_multiple, **Required**): Select your preferred meal times (8:00 AM - 9:00 AM, 12:00 PM - 1:00 PM, 1:00 PM - 2:00 PM, 3:00 PM - 4:00 PM).
* **Food Options** (`food_options`, select_multiple, **Required**): Choose the food options you would like to be available (Sandwich, Salad, Fruit, Yogurt, Juice, Chips).
* **Student Feedback** (`student_feedback`, note, **Optional**): Please provide any feedback or comments from students.
* **Parent Feedback** (`parent_feedback`, note, **Optional**): Please provide any feedback or comments from parents.
* **School Administrator** (`school_admin`, select_one, **Required**): Indicate whether a school administrator is available to provide feedback (True or False).
* **School Administrator Name** (`school_admin_name`, text, **Optional**): Please enter the school administrator's name, if applicable.
* **School Administrator Email** (`school_admin_email`, text, **Optional**): Please enter the school administrator's email address, if applicable.
* **School Administrator Phone** (`school_admin_phone`, text, **Optional**): Please enter the school administrator's phone number, if applicable.
* **School Administrator Feedback** (`school_admin_feedback`, note, **Optional**): Please provide any feedback or comments from the school administrator.
* **School Administrator Response** (`school_admin_response`, select_multiple, **Optional**): Select whether the school administrator will respond to your feedback (Yes or No).
* **Parent Response** (`parent_response`, note, **Optional**): Please provide any response or comments from parents.
* **School Response** (`school_response`, note, **Optional**): Please provide any response or comments from the school.
* **School Response Time** (`school_response_time`, time, **Optional**): Please enter the time of the school's response.
* **Parent Satisfaction** (`parent_satisfaction`, number, **Required**): Please rate your level of satisfaction with the school's lunch program (e.g., 1-5).
* **School Satisfaction** (`school_satisfaction`, number, **Required**): Please rate the school's satisfaction with the lunch program (e.g., 1-5).
* **Parent Recommend** (`parent_recommend`, select_multiple, **Optional**): Indicate whether you recommend the school's lunch program (True, False, Unsure).
* **School Response Date** (`school_response_date`, date, **Optional**): Please enter the date of the school's response.

## Tips

* Please be as specific and honest in your responses.
* If you have any additional comments or feedback, please provide them in the free-form fields.
* If you have any questions or concerns, please do not hesitate to contact the school administrator.

I hope this help guide will assist end-users in navigating and completing the School Lunch Survey form.
