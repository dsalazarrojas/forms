# Innovative Project Voting Form - Help Guide
## Purpose
This form is designed to collect feedback and opinions on projects. It's intended to help project stakeholders understand the thoughts and feelings of team members, clients, or other stakeholders.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the project title and description in the text fields.
2. Select the project status from the dropdown menu.
3. Choose the project category from the list of options.
4. Enter the project rating and score, if applicable.
5. Provide the project date and time.
6. Enter the project contact email and phone number.
7. Add any comments or notes about the project.
8. Indicate your agreement or disagreement with the project by selecting "True" or "False".

## Field-by-Field Explanation
* **Project Title** (`project_title`, text, required: false): Enter the title of the project, a brief summary or name that describes it.
* **Project Description** (`project_description`, text, required: false): Provide a more detailed description of the project.
* **Project Status** (`project_status`, select_one, required: true): Select the current status of the project from the dropdown menu.
* **Project Category** (`project_category`, select_multiple, required: true): Choose one or multiple categories that apply to the project.
* **Project Rating** (`project_rating`, number, required: false): Rate the project on a scale of 1-10, if applicable.
* **Project Score** (`project_score`, number, required: false): Enter a score for the project, if applicable.
* **Project Date** (`project_date`, date, required: false): Enter the project date in the format YYYY-MM-DD.
* **Project Time** (`project_time`, time, required: false): Enter the project time in the format HH:MM:SS.
* **Project Email** (`project_email`, email, required: false): Enter the project contact email address.
* **Project Phone** (`project_phone`, text, required: false): Enter the project contact phone number.
* **Project Comments** (`project_comments`, note, required: false): Add any comments or notes about the project.
* **Agree** (`project_agree`, select_one, required: true): Indicate your agreement with the project by selecting "True".
* **Disagree** (`project_disagree`, select_one, required: false): Indicate your disagreement with the project by selecting "True".
* **Undecided** (`project_undecided`, select_one, required: false): Indicate your undecided stance on the project by selecting "True".
* **Other Comments** (`project_other_comments`, note, required: false): Add any additional comments or notes about the project.
