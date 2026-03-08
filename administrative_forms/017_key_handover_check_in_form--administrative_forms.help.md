<thinking>...</thinking>

# Key Handover Check In Form - Help Guide

## Purpose
The Key Handover Check In Form is used to record the status of a key handover process. This form helps to track the key, its current status, and other relevant details.

## How To Complete This Form
To complete the Key Handover Check In Form, follow these steps:

1. Enter the title of the key handover process in the "Key Handover Check In Form" field.
2. Fill in the `key_id` field with a unique identifier for the key.
3. Select whether the key is currently active or inactive in the `user_id` field.
4. Enter the date and time the key was checked in using the `check_in_date` and `check_in_time` fields.
5. If the key was checked out at a specific time, enter the `check_out_time` field.
6. Add any additional notes about the key handover process in the `notes` field.
7. Set the status of the key as Active, Inactive, or Archived in the `status` field.

## Field-by-Field Explanation

* **Key Handover Check In Form** (`key_handover_check_in_form`, text, optional): Enter a brief description of the key handover process.
* **Key ID** (`key_id`, text, optional): Enter a unique identifier for the key.
* **User ID** (`user_id`, select_one, optional): Select whether the key is currently active or inactive.
	+ Select 'Yes' for Active or 'No' for Inactive.
* **Check In Date** (`check_in_date`, date, optional): Enter the date the key was checked in.
* **Check In Time** (`check_in_time`, time, optional): Enter the time the key was checked in.
* **Check Out Time** (`check_out_time`, time, optional): If the key was checked out, enter the time it was checked out.
* **Notes** (`notes`, note, optional): Add any additional notes about the key handover process.
* **Status** (`status`, select_multiple, optional): Set the status of the key as Active, Inactive, or Archived.
	+ Select the status that best describes the current state of the key.
