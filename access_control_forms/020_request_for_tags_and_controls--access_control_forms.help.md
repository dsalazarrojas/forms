<thinking>
The purpose of the "Request For Tags And Controls" form is to collect information and preferences from users in a specific category, likely for access control or management purposes. This form likely serves as a central repository for users to request tags and controls for their projects or tasks. The form's design allows users to input various details, such as their name, email, and description, which will aid in identifying and categorizing their requests. Each field is carefully crafted to gather specific information, including tags, controls, and status updates. It is crucial to understand the form's purpose and usage correctly to ensure accurate and efficient processing of requests.
Before proceeding, please ensure you have read and understood the form's purpose and requirements. To avoid any confusion, we will not allow duplicate requests for the same tags and controls.
</thinking>

# Request For Tags And Controls - Help Guide
## Purpose

The "Request For Tags And Controls" form is a centralized platform for users to submit their requests for tags and controls. It is designed to gather specific information from users to facilitate efficient processing and management of their requests.

## How To Complete This Form

1. Fill out the form with the required and optional information as prompted. Ensure that you provide accurate and clear details to facilitate quick processing of your request.
2. Select the relevant tags and controls that you are requesting.
3. Provide a brief description of your request, if necessary.
4. Enter your email address so that the requester can contact you regarding your request.
5. If you have any specific deadlines, please provide the date and time for your request.
6. Indicate the priority level of your request.
7. Choose the reviewer or reviewers who will handle your request.
8. If you have any additional comments or remarks, please enter them in the designated field.
9. Select the status of your request (active or inactive).
10. Finally, submit your request for processing.

## Field-by-Field Explanation

* **User Input (Page 1)**: This field is where you enter your information for the request.
  * (`title`, `type`: `text`, `required`: `false`)
  * Enter your name or the title of your request in this field.
* **Select Tags**: Choose the relevant tags for your request from the options provided.
  * (`select_multiple`, `name`: `tag_selection`, `options`: `Yes` `No`)
  * Select all the tags that are relevant to your request.
* **Select Controls**: Choose the controls you are requesting.
  * (`select_multiple`, `name`: `control_selection`, `options`: `Yes` `No`)
  * Select all the controls you need for your request.
* **Description**: Provide a brief description of your request, if necessary.
  * (`type`: `text`, `required`: `false`)
  * Enter a short description of your request.
* **Requested By**: Enter your email address so that the requester can contact you.
  * (`type`: `email`, `required`: `false`)
  * Enter your email address in the format `example@email.com`.
* **Date**: If you have specific deadlines, provide the date for your request.
  * (`type`: `date`, `required`: `false`)
  * Enter the date in the format `YYYY-MM-DD`.
* **Time**: If you have specific deadlines, provide the time for your request.
  * (`type`: `time`, `required`: `false`)
  * Enter the time in the format `HH:MM`.
* **Priority**: Choose the priority level of your request.
  * (`select_one`, `name`: `priority`, `options`: `Yes` `No`)
  * Indicate the priority level of your request (high or low).
* **Reviewer**: Choose the reviewer or reviewers who will handle your request.
  * (`select_multiple`, `name`: `reviewer`, `options`: `Yes` `No`)
  * Select all the reviewers who will be handling your request.
* **Note**: If you have any additional comments or remarks, enter them here.
  * (`type`: `note`, `required`: `false`)
  * Enter any additional comments or remarks about your request.
* **Prophets**: Choose the relevant options here, though it seems unclear what this field represents.
  * (`select_multiple`, `name`: `prophets`, `options`: `Yes` `No`)
  * Select all the options relevant to your request (though it's unclear what this field is for).
* **Submit**: Indicate whether you are submitting your request.
  * (`select_one`, `name`: `submit`, `options`: `Yes` `No`)
  * Select "Yes" to submit your request for processing.
* **Status**: Indicate the status of your request.
  * (`select_one`, `name`: `status`, `options`: `Active` `Inactive`)
  * Select the status of your request (active or inactive).
* **Comments**: Enter any additional comments or remarks.
  * (`type`: `text`, `required`: `false`)
  * Enter any additional comments or remarks about your request.
* **Review Status**: Indicate the review status of your request.
  * (`select_one`, `name`: `review_status`, `options`: `Active` `Inactive`)
  * Select the review status of your request (active or inactive).

## Tips

* Please ensure that you provide clear and accurate information in the form to facilitate quick and efficient processing of your request.
* If you have any doubts or questions, please reach out to the requester or the form administrators for assistance.
* Duplicate requests will not be accepted to maintain the integrity and accuracy of the system.
