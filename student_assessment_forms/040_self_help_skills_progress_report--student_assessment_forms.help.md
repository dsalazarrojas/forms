<thinking>
We need to create a user-facing help guide for a form that is used to track the progress of students who receive services. The form should be filled out by caregivers or providers who work with these students. We need to ensure that the form is easy to understand and complete, and that each field has a clear explanation of its purpose and requirements. This form will help caregivers track the progress of students in various areas, including self-help skills, and provide valuable information for future assessments and interventions.
</thinking>

# self-help-skills-progress-report - Help Guide
## Purpose
This form is used by caregivers or providers to document the progress of students in self-help skills. It helps track student progress over time and provides valuable information for future assessments and interventions.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the student's name and date of the progress report.
2. Enter the student's age and grade level.
3. Select the student's caregiver provider name and title.
4. Enter the date and time spent in services.
5. Describe the student's progress in self-help skills.
6. Review and submit the form for final review.

## Field-by-Field Explanation

* **Student Name** (`student_name`, text, required): Enter the name of the student being reported on.
* **Date Progress Report** (`date_progress_report`, date, required): Enter the date this progress report is being completed.
* **Student Age** (`student_age`, number, required): Enter the age of the student at the time of this progress report.
* **Student Grade Level** (`student_grade_level`, select_one, required): Select the grade level of the student at the time of this progress report.
* **Caregiver/Provider Name** (`caregiver_provider_name`, text, required): Enter the name of the individual providing services to the student.
* **Caregiver/Provider Title** (`caregiver_provider_title`, text, required): Enter the title of the individual providing services to the student.
* **Date of Service** (`date_of_service`, date, required): Enter the date services were provided to the student.
* **Time Spent in Services** (`time_spent_in_services`, time, required): Enter the amount of time spent providing services to the student.
* **Student Progress** (`student_progress`, text, required): Describe the student's progress in self-help skills, including any strengths and areas for improvement.
