<thinking>
This form is designed to collect employee improvement suggestions from employees, allowing them to submit their ideas and proposals for implementing improvements in the company. This form is used by HR department to collect, review, and track the suggestions, and to ensure that they are properly managed and implemented. To prevent duplication of suggestions, this form has a unique ID assigned to each suggestion, and it's also reviewed manually by HR staff before allowing submission.
</thinking>

# employee_improvement_suggestion_form - Help Guide
## Purpose
The employee improvement suggestion form is a tool for employees to submit suggestions and ideas for improving the company. This form is meant to be used by all employees to submit their suggestions, which are then reviewed and managed by the HR department.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill in the suggested name of the employee who submitted the suggestion.
2. Select one or more categories that best fit your suggestion.
3. Enter a clear and concise description of your suggestion.
4. Select the status of your suggestion (Pending, Rejected, or Approved).
5. Fill in your name and email address (if you wish to be contacted regarding your suggestion).
6. Fill in your phone number (if you wish to be contacted regarding your suggestion).

## Field-by-Field Explanation

* **Suggestion** (`suggestion_section`, note, required: false): Please write a brief description of your suggestion, explaining your idea for improving the company.
* **Suggested By** (`suggested_by`, text, required: false): This is your name as the employee who submitted the suggestion. Please enter your full name for reference purposes.
* **Category** (`suggestion_category`, select_multiple, required: true): This is where you select the category/categories that your suggestion falls under. Please select one or more of the following options: Category A, Category B, Category C.
* **Description** (`suggestion_description`, text, required: false): In this field, please provide a clear and concise description of your suggestion, explaining your idea in detail.
* **Date** (`suggestion_date`, date, required: false): If you wish to provide a specific date related to your suggestion, you can do so here in the YYYY-MM-DD format.
* **Submission Date** (`submission_date`, date, required: false): This is automatically generated date/time when you submitted your suggestion.
* **Status** (`suggestion_status`, select_one, required: true): Please select the current status of your suggestion from the following options: Pending, Rejected, Approved.
* **Submitted By** (`submitted_by_name`, text, required: false): This is your name as the employee who submitted the suggestion. Please enter your full name for reference purposes.
* **Submitted By** (`submitted_by_email`, email, required: false): If you wish to be contacted regarding your suggestion, please enter your email address.
* **Submitted By** (`submitted_by_phone`, text, required: false): If you wish to be contacted regarding your suggestion, please enter your phone number.
