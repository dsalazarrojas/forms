<thinking>
We will create a user-facing help guide for the "Student Well Being Survey" form. This form is used to collect information about students' well-being and their experience with their school environment. To ensure the form is completed accurately, we will review the form's purpose and fields to prevent duplication and ensure relevance. We will base our explanation on the provided YAML fields and strive to be concrete, concise, and practical.

The form is divided into 10 pages, each with a unique ID, name, label, hint, type, and options. The form has a mix of text, number, select_one, and select_multiple fields, indicating that it captures both demographic information and subjective experiences.

To complete this form, students will need to answer a series of questions about their name, school location, family income, family education, family employment, student employment, school climate, school environment, well-being levels, and support in school. Each page will have a clear label, and some fields may have hints to guide the user.

We will now create the help guide in Markdown format.


# Student Well Being Survey - Help Guide
## Purpose
The Student Well Being Survey is a form designed to collect information about students' experiences and well-being within their school environment. This data will help administrators and educators better understand the needs and challenges of students and inform decisions to improve school policies and programs.

## How To Complete This Form

To complete this form, follow these steps:

1. Enter your name in the "What is your name" field (Field 1).
2. Type in your school location (Field 2).
3. If applicable, enter your family's annual income (Field 3).
4. Select the highest level of education of a parent or guardian (Field 4).
5. Choose all relevant options for your family employment status (Field 5).
6. Select all relevant options for your current employment status (Field 6).
7. Choose the best description for the school climate (Field 7).
8. Choose the best description for the school environment (Field 8).
9. If applicable, enter your well-being levels (Field 9).
10. If applicable, describe the support you have in your school (Field 10).

## Field-by-Field Explanation

* **What is your name** (`student_survey`, text, required): Please enter your full name.
* **School** (`school_location`, text, required): Type in the name of your school.
* **What is your family income** (`family_income`, number, optional): If applicable, enter your family's annual income.
* **What is the highest level of education of a parent or guardian** (`family_education`, select_one, required): Select from the options provided.
* **Is your family employed** (`family_employment`, select_multiple, required): Choose all relevant options.
* **Are you employed** (`student_employment`, select_multiple, required): Choose all relevant options.
* **What is the school climate** (`school_climate`, select_one, required): Select from the options provided.
* **What is the school environment** (`school_environment`, select_one, required): Select from the options provided.
* **What are the well-being levels?** (`well_being`, text, optional): If applicable, describe your well-being levels.
* **What kind of support do you have in your school?** (`student_support`, text, optional): If applicable, describe the support you have in your school.

## Tips

* Please answer each question accurately and honestly.
* If a field is optional, only answer it if you have information to provide.
* If you're unsure about any question, feel free to ask your teacher or school administrator for guidance.
