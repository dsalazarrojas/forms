<thinking>
Are we creating a form to collect information from project team members regarding a specific development project? This form appears to be designed for capturing crucial data such as project name, lead contact, and other essential details for project planning and progress tracking. It's essential to ensure the form accurately captures the required information without duplication or repetition.
</thinking>

# Development Checklist Form - Help Guide
## Purpose
The Development Checklist Form is a tool to gather essential information from project team members about a development project. This form helps to ensure that all necessary data is collected and reviewed before project progress.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the project name in the "Project name" field.
2. Provide the name of the project lead (primary contact) in the "Project lead name" field.
3. Confirm the submission of key planning documents by selecting either "True" or "False" in the "Planning documents submitted" field.
4. Verify the completion of the environmental review process by selecting either "True" or "False" in the "Environmental review complete" field.
5. Confirm that engagement with stakeholders has occurred by selecting either "True" or "False" in the "Community engagement done" field.
6. Confirm that funding sources are ready by selecting either "True" or "False" in the "Finance plan ready" field.
7. If necessary, provide any additional notes or next steps in the "Checklist notes and next steps" field.

## Field-by-Field Explanation
* **Project name** (`project_name`, text, **required**): Enter the title of the development project. This field is required.
* **Project lead name** (`project_lead`, text, **required**): Provide the name of the project lead, who is typically the primary contact for the project.
* **Planning documents submitted** (`planning_documents_submitted`, select_one, **required**): Confirm whether the key planning documents have been submitted. Select "True" if they have, and "False" otherwise.
* **Environmental review complete** (`environmental_review_complete`, select_one, **required**): Verify the completion of the environmental review process. Select "True" if it's complete, and "False" otherwise.
* **Community engagement done** (`community_engagement_done`, select_one, **required**): Confirm that engagement with stakeholders has occurred. Select "True" if it has, and "False" otherwise.
* **Finance plan ready** (`finance_plan_ready`, select_one, **required**): Confirm that funding sources are ready. Select "True" if they are, and "False" otherwise.
* **Checklist notes and next steps** (`checklist_notes`, text, **optional**): If you have any additional notes or next steps for the project, enter them here. This field is not required.
* **Checklist notes and next steps** hint: This field is for any information that does not fit in the other fields. If you need to add extra details, use this space.
