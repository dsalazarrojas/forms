<thinking>Before we dive into the user-facing help guide, let's consider that this form is designed to gather information for management training enrollment, likely for an organization or company. This form might be used to track participant and manager information for management training sessions. The purpose of the form is to ensure that all necessary details are collected efficiently and accurately.</thinking>

# Management Training Enrollment Form - Help Guide
## Purpose
The Management Training Enrollment Form is designed to collect information for management training sessions. It captures details about participants, managers, and training enrollment status.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the training program you want to enroll in from the `training_program_id` field.
2. Enter your name and email address in the `participant_name` and `participant_email` fields, respectively.
3. Provide your phone number in the `participant_phone` field.
4. Enter the date and time of the training session in the `training_session_date` and `training_session_time` fields, respectively.
5. Enter your organization and manager's information, including name, email, and phone number in the `organization`, `manager_name`, `manager_email`, and `manager_phone` fields, respectively.
6. Add any notes or comments in the `participant_notes` and `manager_notes` fields.
7. Confirm your enrollment by selecting `Confirm` in the `training_enrollment_confirmation` field.
8. Agree to the terms of the form by selecting one of the options in the `participant_agreement` field.
9. Choose the status of your enrollment by selecting one of the options in the `training_enrollment_status` field.
10. If the form is cancelled, provide the reason for cancellation by selecting one of the options in the `reason_for_cancellation` field.
11. If the form is completed, provide the reason for completion by selecting one of the options in the `reason_for_completion` field.

## Field-by-Field Explanation

* **Training Program ID** (`training_program_id`, number, required): Select the training program you want to enroll in.
* **Participant Name** (`participant_name`, text, required): Enter your name.
* **Email** (`email`, email, required): Enter your email address.
* **Participant Phone** (`participant_phone`, text, required): Provide your phone number.
* **Participant Email** (`participant_email`, email, required): Enter your email address.
* **Training Session Date** (`training_session_date`, date, required): Enter the date of the training session.
* **Training Session Time** (`training_session_time`, time, required): Enter the time of the training session.
* **Organization** (`organization`, text, required): Enter your organization's name.
* **Manager Name** (`manager_name`, text, required): Enter your manager's name.
* **Manager Email** (`manager_email`, email, required): Enter your manager's email address.
* **Manager Phone** (`manager_phone`, text, required): Provide your manager's phone number.
* **Manager Organization** (`manager_organization`, text, required): Enter your manager's organization's name.
* **Participant Notes** (`participant_notes`, note, optional): Add any notes or comments about your enrollment.
* **Manager Notes** (`manager_notes`, note, optional): Add any notes or comments about your enrollment.
* **Training Enrollment Confirmation** (`training_enrollment_confirmation`, select one, required): Confirm your enrollment.
* **Participant Agreement** (`participant_agreement`, select multiple, required): Agree to the terms of the form.
* **Manager Agreement** (`manager_agreement`, select multiple, optional): Agree to the terms of the form.
* **Training Enrollment Status** (`training_enrollment_status`, select one, required): Choose the status of your enrollment.
* **Reason for Cancellation** (`reason_for_cancellation`, select one, optional): Provide the reason for cancellation if applicable.
* **Reason for Completion** (`reason_for_completion`, select one, optional): Provide the reason for completion if applicable.
* **Manager Comments** (`manager_comments`, note, optional): Add any comments from your manager.
* **Participant Comments** (`participant_comments`, note, optional): Add any comments from you.
* **Training Enrollment Date** (`training_enrollment_date`, date, required): Enter the date of your enrollment.
* **Training Enrollment Time** (`training_enrollment_time`, time, required): Enter the time of your enrollment.
