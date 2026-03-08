<thinking>...internal reasoning and duplication check...</thinking>

# Test Blueprint Creation Form - Help Guide
## Purpose
The Test Blueprint Creation Form is used to create a blueprint for assessments, which are used to evaluate and measure the performance of trainees in a training program. This form helps create a detailed plan for an assessment, including its objectives, criteria, and due dates.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the type of blueprint you want to create ("Yes" or "No").
2. Enter the name and description of the assessment.
3. Choose the category, level, and type of assessment.
4. Select the training area and level for the assessment.
5. Specify the assessment objectives and criteria.
6. Enter the review status, options, and due date for the assessment.
7. Enter the created by, created at, and updated at dates for the assessment.
8. Set the assessment start and end dates, start and end times, and duration.
9. Enter any additional information as required.

## Field-by-Field Explanation

* **Test Blueprints** (`test_blueprint_creation_form`, `select_multiple`, required: false): Select "Yes" or "No" to indicate if you want to create a blueprint for an assessment.
* **Assessment Name** (`assessment_name`, `text`, required: false): Enter a name for the assessment.
* **Assessment Description** (`assessment_description`, `text`, required: false): Enter a description for the assessment.
* **Assessment Category** (`assessment_category`, `select_one`, required: false): Choose the category for the assessment.
* **Assessment Level** (`assessment_level`, `select_one`, required: false): Choose the level of the assessment.
* **Training Area** (`training_area`, `select_one`, required: false): Choose the training area for the assessment.
* **Training Level** (`training_level`, `select_one`, required: false): Choose the training level for the assessment.
* **Assessment Type** (`assessment_type`, `select_one`, required: false): Choose the type of assessment.
* **Assessment Objectives** (`assessment_objectives`, `text`, required: false): Enter the objectives for the assessment.
* **Assessment Criteria** (`assessment_criteria`, `text`, required: false): Enter the criteria for the assessment.
* **Assessment Evidence** (`assessment_evidence`, `text`, required: false): Enter any evidence for the assessment.
* **Assessment Review Status** (`assessment_review_status`, `select_one`, required: false): Choose the review status for the assessment.
* **Review Status Options** (`review_status_options`, `select_multiple`, required: false): Select multiple review status options for the assessment.
* **Created By** (`created_by`, `text`, required: false): Enter the name of the person who created the assessment.
* **Created At** (`created_at`, `date`, required: false): Enter the date the assessment was created.
* **Updated At** (`updated_at`, `date`, required: false): Enter the date the assessment was last updated.
* **Assessment Due Date** (`assessment_due_date`, `date`, required: false): Enter the due date for the assessment.
* **Assessment Start Date** (`assessment_start_date`, `date`, required: false): Enter the start date for the assessment.
* **Assessment End Date** (`assessment_end_date`, `date`, required: false): Enter the end date for the assessment.
* **Assessment Start Time** (`assessment_start_time`, `time`, required: false): Enter the start time for the assessment.
* **Assessment End Time** (`assessment_end_time`, `time`, required: false): Enter the end time for the assessment.
* **Duration** (`duration`, `number`, required: false): Enter the duration for the assessment.
* **Created By Name** (`created_by_name`, `text`, required: false): Enter the name of the person who created the assessment.
* **Created By Email** (`created_by_email`, `email`, required: false): Enter the email of the person who created the assessment.

Note: All fields are optional, but entering values will help to create a more complete and detailed blueprint for the assessment.
