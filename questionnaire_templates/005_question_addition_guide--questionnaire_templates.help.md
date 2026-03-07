<thinking>
This guide is intended for users who want to add new questions to the system. This form is used to create and manage questions across different categories. To complete this form, users should select the correct category (e.g., Quiz, Assessment, or Survey) that the question belongs to. The form also asks for the description of the question, which should be a clear and concise explanation of what the question is asking. Additionally, users can choose the tool that the question will be assigned to, which can be either ChatJot or FormJot. The guide aims to walk users through the process of filling out this form accurately and efficiently.
</thinking>

# Question Addition Guide - Help Guide
## Purpose
This guide is a step-by-step manual for users to add new questions to the system.

## How To Complete This Form
To add a new question, follow the steps below:

1. Select the category that the question belongs to from the "Category" dropdown menu.
2. Enter a clear and concise description of the question in the "Description" field.
3. Choose the tool that the question will be assigned to from the "Assigned Tool" dropdown menu.
4. Fill in any other required or optional fields as needed.

## Field-by-Field Explanation

* **Category** (`category`, `select_one`, required: false): Select the category that the question belongs to from the options provided. For example, select "Quiz" for a multiple-choice quiz question.
* **Description** (`description`, `text`, required: false): Enter a clear and concise description of the question in this field. This will help users understand what the question is asking.
* **Output File** (`output_file`, `text`, required: false): If the question requires an output file, enter the file name or reference number in this field.
* **Assigned Tool** (`assigned_tool`, `select_one`, required: false): Choose the tool that the question will be assigned to from the options provided. For example, select "ChatJot" for a question that will be answered with ChatJot.
* **Form ID** (`form_id`, `number`, required: false): Enter the ID number of the form that the question will be part of.
* **Form ID 2** (`form_id_2`, `number`, required: false): Enter the ID number of the secondary form that the question will be part of.
* **Submitted At** (`submitted_at`, `date`, required: false): Enter the date when the question was submitted.
* **Submitted By** (`submitted_by`, `text`, required: false): Enter the name of the person who submitted the question.
* **Submitted By 2** (`submitted_by_2`, `email`, required: false): Enter the email address of the person who submitted the question.
* **Submitted At 2** (`submitted_at_2`, `time`, required: false): Enter the time when the question was submitted.
