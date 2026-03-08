# Film Production Expense Report Form - Help Guide

## Purpose
The Film Production Expense Report Form is a tool used to document and track expenses related to film production projects. It's intended for individuals to report and track expenses on their projects, ensuring accurate financial reporting and compliance with company policies.

## How To Complete This Form

1. To begin, select the type of film production project you're reporting expenses for. This can be a Movie, Commercial, or TV Show.
2. Enter the start and end dates of your project.
3. Enter your company name, the type of expense (Equipment Hire, Location, etc.), and the total expense amount.
4. Provide the date of the expense and the amount spent.
5. Select the category of the expense (Pre-Production, Production, Post-Production).
6. Enter a brief description of the expense.
7. Choose who the expense is assigned to (Accountant, Producer, or Project Manager).
8. Select the status of the expense (In Progress, Completed, Canceled).
9. Enter the name of the person submitting the expense report.
10. Enter your email address and phone number (optional).
11. Enter the location of the project (optional).
12. Provide any additional notes about the expense.
13. Select the status of the project (In Progress, Completed, Canceled).
14. Choose who reviewed the expense (Accountant, Producer, or Project Manager).
15. Select the status of the review (Not Reviewed, Reviewed, In Progress).
16. Enter the date of the review.
17. Enter the name of the person reviewing the expense.
18. Select the status of the review (Not Reviewed, Reviewed, In Progress).

## Field-by-Field Explanation

* **Production Type** (`production_type`, select_one, required): Select the type of film production project you're reporting expenses for. This can be a Movie, Commercial, or TV Show.
* **Project Start Date** (`project_start_date`, date, required): Enter the start date of your project.
* **Project End Date** (`project_end_date`, date, required): Enter the end date of your project.
* **Company Name** (`company_name`, text, required): Enter your company name.
* **Expense Type** (`expense_type`, select_multiple, required): Select the type of expense (Equipment Hire, Location, etc.).
* **Total Expense** (`total_expense`, number, required): Enter the total expense amount.
* **Expense Date** (`expense_date`, date, required): Enter the date of the expense.
* **Expense Amount** (`expense_amount`, number, required): Enter the amount spent on the expense.
* **Category** (`category`, select_multiple, required): Select the category of the expense (Pre-Production, Production, Post-Production).
* **Description** (`description`, text, required): Enter a brief description of the expense.
* **Assignee** (`assigned_to`, select_one, required): Select who the expense is assigned to (Accountant, Producer, or Project Manager).
* **Status** (`project_status`, select_one, required): Select the status of the project (In Progress, Completed, Canceled).
* **Submitter Name** (`submitter_name`, text, required): Enter your name.
* **Email** (`email`, email, optional): Enter your email address.
* **Phone** (`phone`, text, optional): Enter your phone number.
* **Location** (`location`, text, optional): Enter the location of the project.
* **Notes** (`notes`, note, required): Provide any additional notes about the expense.
* **Review Status** (`review_status`, select_one, required): Select the status of the review (Not Reviewed, Reviewed, In Progress).
* **Review Date** (`review_date`, date, required): Enter the date of the review.
* **Reviewer Name** (`reviewer`, select_one, required): Select who reviewed the expense (Accountant, Producer, or Project Manager).
