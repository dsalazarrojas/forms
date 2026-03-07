<thinking>
This form is designed to create a mini math quiz with specific fields for the quiz title, category, student name, quiz type, teacher name, grading criteria, and submission date. The purpose of this form is to gather information from teachers to create a basic quiz setup.

To determine relevance and non-duplication, let's analyze the provided YAML fields:

*   `title` is a metadata field that provides a name for the form.
*   The `pages` field is an array of form pages.
*   Each page has `id`, `name`, `label`, `hint`, `type`, and `required` fields.
*   `id` and `name` are identifiers for the field.
*   `label` is the display name for the field.
*   `hint` provides additional information or guidance.
*   `type` defines the field type, e.g., text, select_one, note, or date.
*   `options` is an array of possible values for select fields.
*   `required` indicates whether the field is mandatory.
*   `submission_date` is a date field for tracking submission dates.

Given this analysis, it seems that the form is intended to collect quiz metadata, such as title, category, student details, and teacher information, with specific requirements for these fields. This form does not appear to be designed for repetitive data entry or duplicate submissions, as all fields have unique `id` values.

</thinking>

# Mini Math Quiz - Help Guide
## Purpose
The Mini Math Quiz form is designed to create a basic quiz setup with fields for quiz title, category, student name, quiz type, teacher name, grading criteria, and submission date. This form is meant to collect metadata for educational purposes.

## How To Complete This Form
1.  Start by entering a title for your quiz in the "Quiz Title" field.
2.  Select the category of the quiz from the options: Math, History, Science, or Other.
3.  Enter the name of the student taking the quiz.
4.  Choose the type of quiz: Formative or Summative.
5.  Enter your name as the teacher administering the quiz.
6.  Provide the grading criteria for the quiz.
7.  Select the date of submission for the quiz.

## Field-by-Field Explanation
*   **Quiz Title** (`quiz_title`, text, required): Enter a brief title for your quiz.
*   **Quiz Category** (`quiz_category`, select_one, required): Select the category of the quiz from the provided options.
*   **Student Name** (`student_name`, text, required): Enter the name of the student taking the quiz.
*   **Quiz Type** (`quiz_type`, select_one, required): Choose the type of quiz: Formative or Summative.
*   **Teacher Name** (`teacher_name`, text, required): Enter your name as the teacher administering the quiz.
*   **Grading Criteria** (`grading_criteria`, note, required): Describe the criteria used for grading this quiz.
*   **Submission Date** (`submission_date`, date, required): Enter the date of submission for the quiz.
