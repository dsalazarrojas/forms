# Disciplinary Action Amendment Form - Help Guide

## Purpose
The Disciplinary Action Amendment Form is used to make changes to a disciplinary action that has been taken against an employee. This form allows administrators to update the details of the action, including the reason for the amendment, the new status of the action, and any other relevant information.

## How To Complete This Form

To complete this form, follow these steps:

1. Ensure that the disciplinary action you are attempting to amend is still open or that you have the necessary permissions to make changes.
2. Select the reason for the amendment from the options provided in the `action_amended` field.
3. Enter the date and time of the amendment in the `amended_date` and `amended_time` fields.
4. Enter any additional notes or information in the `notes` field.
5. Select the original action ID from the `original_action_id` field, if applicable.
6. Enter the reason for the amendment in the `action_amendment_reason` field.
7. Enter the reason for the amended action in the `amended_reason` field.

## Field-by-Field Explanation

* **Disciplinary Action ID** (`disciplinary_action_id`, number, required/optional): Enter the ID of the disciplinary action you are attempting to amend.
* **Reason for Amendment** (`reason_for_amendment`, text, optional): Enter the reason for making the amendment.
* **Action Amended** (`action_amended`, select_one, optional): Select the new status of the action (e.g. Action Amended, Action Reinstated, Action Cancelled).
* **Amended Date** (`amended_date`, date, optional): Enter the date of the amendment.
* **Amended Time** (`amended_time`, time, optional): Enter the time of the amendment.
* **User ID** (`user_id`, number, optional): Enter the ID of the user who made the original action.
* **User Name** (`user_name`, text, optional): Enter the name of the user who made the original action.
* **Updated By** (`updated_by`, text, optional): Enter the name of the user who made the amendment.
* **Amended By** (`amended_by`, text, optional): Enter the name of the user who made the amendment.
* **Notes** (`notes`, text, optional): Enter any additional notes or information about the amendment.
* **Action Date** (`action_date`, date, optional): Enter the date of the original action.
* **Action Time** (`action_time`, time, optional): Enter the time of the original action.
* **Original Action ID** (`original_action_id`, number, optional): Enter the ID of the original action.
* **Action Amendment Reason** (`action_amendment_reason`, text, optional): Enter the reason for the amendment.
* **Amended Reason** (`amended_reason`, text, optional): Enter the reason for the amended action.
