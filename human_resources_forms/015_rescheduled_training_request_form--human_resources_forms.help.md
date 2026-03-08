# Rescheduled Training Request Form - Help Guide
## Purpose
The Rescheduled Training Request Form is a tool used to request the rescheduling of a training session. This form will help the training coordinator to keep track of the rescheduled sessions and update the training status accordingly.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in the rescheduling date of the new session.
2. Enter the reason for rescheduling in the `Reason for reschedule` field.
3. Provide details of the new session in the `New session details` field.
4. Select the status of the rescheduled session in the `Rescheduled training status` field.
5. If necessary, enter the date of the new session in the `New session date` field.
6. Optionally, enter the name of the training coordinator in the `Training coordinator` field, if they are not the same as the current session.

## Field-by-Field Explanation
* **Rescheduling Date** (`rescheduling_date`, `date`, optional): Enter the date of the new session you are requesting to be rescheduled. Please format it in the standard date format (e.g., YYYY-MM-DD).
* **Reason for Reschedule** (`reason_for_reschedule`, `text`, optional): Enter a brief description of the reason for rescheduling the session. This will help the training coordinator to understand the cause of the reschedule request.
* **New Session Details** (`new_date`, `text`, optional): Provide any additional details about the new session, such as the new location or time.
* **Rescheduled Training Status** (`rescheduled_training_status`, `select_one`, optional): Select the status of the rescheduled session. You can choose from the following options:
	+ New: The session is rescheduled and not yet updated in the system.
	+ Rescheduled: The session has been rescheduled and the new date is available in the system.
	+ Completed: The session has been completed.
	+ Cancelled: The session has been cancelled.
	+ On hold: The session is on hold and not yet rescheduled.
	+ Pending: The session is pending and not yet rescheduled.
* **New Session Date** (`new_session_date`, `date`, optional): Enter the date of the new session, if different from the rescheduling date. Please format it in the standard date format (e.g., YYYY-MM-DD).
* **Training Coordinator** (`training_coordinator`, `text`, optional): If the training coordinator is not the same as the current session, enter their name here.
