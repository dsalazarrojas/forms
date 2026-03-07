<thinking>
We need to create a user-facing help guide for a form used for Quality Assurance (QA) surveys. This form is designed to collect feedback from customers about the quality of a product or service they've used. The purpose of this guide is to walk users through the process of completing the form and explaining each field in a way that makes sense for non-technical users.

Before we dive into the guide, let's consider the following points to ensure relevance and avoid duplication:
- The form is intended for customers to provide feedback on the quality of a product or service.
- The form contains various fields, including select-one, select-multiple, text, and email fields.
- Some fields are not required, while others have specific options.

</thinking>

# Quality Assurance Survey - Help Guide
## Purpose
This form is designed to collect feedback from customers about the quality of a product or service you've used.

## How To Complete This Form

1. Review the survey questions carefully and answer them truthfully.
2. Select the options that best match your experience.
3. If you have any additional comments, please use the "Comments" field.
4. Enter your email address and phone number for contact purposes.
5. Click "Submit" to send your feedback.

## Field-by-Field Explanation

* **Quality Assurance Survey** (`title`, `text`, required: false): This is the title of the survey.
* **Product Quality** (`product_quality`, select_one, required: false): Choose how you rate the product's quality. Options: Good, Poor.
* **Product Features** (`product_features`, select_multiple, required: false): Select all the features that are available to you. Options: Yes, No.
* **Service Quality** (`service_quality`, select_one, required: false): Choose how you rate the service's quality. Options: Good, Poor.
* **Service Features** (`service_features`, select_multiple, required: false): Select all the features that are available to you. Options: Yes, No.
* **Customer Support** (`customer_support`, select_multiple, required: false): Select the level of customer support you received. Options: Yes, No.
* **Company Reputation** (`company_reputation`, select_one, required: false): Choose how you rate the company's reputation. Options: Yes, No.
* **Overall Experience** (`overall_experience`, number, required: false): Rate your overall experience with the product or service.
* **Comments** (`comments`, text, required: false): Add any additional comments or feedback you'd like to share.
* **Email** (`email`, email, required: false): Enter your email address for contact purposes.
* **Phone Number** (`phone_number`, text, required: false): Enter your phone number for contact purposes.
* **Date/Time** (`date_time`, select_one, required: false): Choose the date and time of your experience.
* **Company Name** (`company_name`, text, required: false): Enter the name of the company you interacted with.
* **Assigned Tool** (`assigned_tool`, text, required: false): Enter the name of the tool used for the experience.
* **Assigned Form** (`assigned_form`, text, required: false): Enter the name of the form used for the experience.
* **Form ID** (`form_id`, number, required: false): Enter the ID of the form used for the experience.
* **Form Version** (`form_version`, number, required: false): Enter the version of the form used for the experience.
* **Description** (`description`, text, required: false): Enter a brief description of your experience.
* **Category** (`category`, text, required: false): Enter the category of your experience.
* **Output File** (`output_file`, text, required: false): Enter the name of the output file used for the experience.
* **Category ID** (`category_id`, text, required: false): Enter the ID of the category used for the experience.
* **Assigned By** (`assigned_by`, text, required: false): Enter the name of the person who assigned the experience.
* **Created At** (`created_at`, text, required: false): Enter the date and time the experience was created.
* **Updated At** (`updated_at`, text, required: false): Enter the date and time the experience was updated.
* **Deleted At** (`deleted_at`, text, required: false): Enter the date and time the experience was deleted.

Note: Some fields are not required, but it's good practice to fill them out for better accuracy and helpfulness in reviewing your feedback.
