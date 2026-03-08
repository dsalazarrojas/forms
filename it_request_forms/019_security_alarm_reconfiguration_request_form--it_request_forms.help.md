<thinking>...</thinking>

# Security Alarm Reconfiguration Request Form - Help Guide

## Purpose
This form is used to submit a request to reconfigure a security alarm. To be eligible to use this form, you must be an authorized user with access to security alarm management. Each request must be submitted by a valid user and requires confirmation from both a team lead and a manager. If you are not an authorized user, please refer to your internal documentation for alternative procedures.

## How To Complete This Form
To submit a reconfiguration request for a security alarm, follow these steps:

1. Fill out the required fields with your information.
2. Select the new status and reason for change.
3. Choose your team lead and manager's confirmation.

## Field-by-Field Explanation
- **user_email** (`user_email`, email, optional): Enter your email address to associate with this request.
- **alarm_id** (`alarm_id`, number, optional): Enter the ID of the alarm you wish to reconfigure.
- **old_status** (`old_status`, select_one, optional): Choose the current status of the alarm you wish to reconfigure.
  - Option 1: Pending
  - Option 2: Active
  - Option 3: Inactive
- **new_status** (`new_status`, select_multiple, optional): Choose the new status of the alarm.
  - Option 1: Active
  - Option 2: Inactive
- **reason_for_change** (`reason_for_change`, text, optional): Provide a brief explanation for the reason of the reconfiguration request.
- **date_of_change** (`date_of_change`, date, optional): Enter the date of the change, if applicable.
- **time_of_change** (`time_of_change`, time, optional): Enter the time of the change, if applicable.
- **requested_by** (`requested_by`, select_one, optional): Choose who submitted this request.
  - Option 1: User
  - Option 2: Manager
  - Option 3: System
- **team_lead_confirmation** (`team_lead_confirmation`, select_one, optional): Confirm that this request was submitted with the team lead's approval.
  - Option 1: Confirmed
  - Option 2: Unconfirmed
  - Option 3: Pending
- **manager_confirmation** (`manager_confirmation`, select_one, optional): Confirm that this request was submitted with the manager's approval.
  - Option 1: Confirmed
  - Option 2: Unconfirmed
  - Option 3: Pending

## Tips
- Make sure to fill out the form thoroughly and accurately.
- Ensure you have confirmation from both team lead and manager.
- If you are unsure about any field, please refer to your internal documentation.
