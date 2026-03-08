<thinking>As a seasoned expert in form design and technical writing, I'll create a comprehensive user-facing help guide for the Houzway Agent Onboarding form. To confirm, this form is used for onboarding new agents, and it's crucial to ensure that users understand its purpose, how to complete it, and what each field means. Upon reviewing the provided YAML, I'll break down the form into sections to explain each field in a concise and practical manner.</thinking>

# Houzway Agent Onboarding - Help Guide
## Purpose
The Houzway Agent Onboarding form is used to collect information from new agents during the onboarding process. This form is essential for creating a record of new agents and their associated data.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the required fields (First Name, Last Name, Email, and Date) with the new agent's information.
2. Select the onboarding type and associated options for Onboarding Type and Onboarding Forms.
3. If necessary, add a note for additional context.
4. Select the assigned tool and onboarding forms as needed.
5. Review and submit the form.

## Field-by-Field Explanation

* **First Name** (`first_name`, `text`, required): Enter the new agent's first name.
* **Last Name** (`last_name`, `text`, required): Enter the new agent's last name.
* **Email** (`email`, `email`, required): Enter the new agent's email address.
* **Phone** (`phone`, `text`, optional): Enter the new agent's phone number (optional).
* **Date** (`date`, `date`, required): Enter the date of the onboarding process.
* **Time** (`time`, `time`, optional): Enter the time of the onboarding process (optional).
* **Onboarding Type** (`onboarding_type`, `select_one`, optional): Select the type of onboarding (Type 1 or Type 2).
* **Onboarding Type 1** (`onboarding_type_1`, `select_multiple`, optional): Select the specific onboarding type 1 options (Type 1.1, Type 1.2, or Type 1.3).
* **Onboarding Type 2** (`onboarding_type_2`, `select_multiple`, optional): Select the specific onboarding type 2 options (Type 2.1, Type 2.2, or Type 2.3).
* **Note** (`note`, `note`, optional): Add any additional context or notes for the onboarding process.
* **Assigned Tool** (`assigned_tool`, `text`, optional): Enter the assigned tool for the new agent (if applicable).
* **Onboarding Forms** (`onboarding_forms`, `select_one`, optional): Select the onboarding forms to be assigned to the new agent (Form 1, Form 2, or Form 3).
* **Onboarding Forms 1** (`onboarding_forms_1`, `select_multiple`, optional): Select the specific onboarding forms 1 options (Form 1.1, Form 1.2, or Form 1.3).
* **Onboarding Forms 2** (`onboarding_forms_2`, `select_multiple`, optional): Select the specific onboarding forms 2 options (Form 2.1, Form 2.2, or Form 2.3).
* **Submitted By** (`submitted_by`, `text`, optional): Enter the name of the person who submitted the form.
* **Submitted On** (`submitted_on`, `date`, optional): Enter the date the form was submitted.
* **Submitted At** (`submitted_at`, `time`, optional): Enter the time the form was submitted (if applicable).
* **Updated By** (`updated_by`, `text`, optional): Enter the name of the person who updated the form.
* **Updated On** (`updated_on`, `date`, optional): Enter the date the form was updated (if applicable).
* **Updated At** (`updated_at`, `time`, optional): Enter the time the form was updated (if applicable).
* **Created By** (`created_by`, `text`, optional): Enter the name of the person who created the form.
* **Created On** (`created_on`, `date`, optional): Enter the date the form was created.
* **Created At** (`created_at`, `time`, optional): Enter the time the form was created.
* **Deleted By** (`deleted_by`, `text`, optional): Enter the name of the person who deleted the form (if applicable).

Note: The required fields are marked with `required: true`. The optional fields are marked with `required: false`.
