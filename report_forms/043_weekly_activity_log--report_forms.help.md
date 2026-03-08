# weekly_activity_log - Help Guide
## Purpose
The "weekly_activity_log" form is designed to track the weekly activities and attendance of club members. Club members are required to fill out the form to report their activities and provide information about their club status.

## How To Complete This Form
To complete this form, follow these steps:

1. **Provide Club Details**: Enter a brief description of the club and any relevant details.
2. **Select Date**: Enter the date for which you are reporting your activities.
3. **Describe Activity**: Provide a brief description of your activity or task completed.
4. **List Attendees**: Check the box if you attended the activity.
5. **Enter Email**: If you want to provide your email address for further communication, enter it here.
6. **Enter Phone Number**: If you have a phone number, enter it here.
7. **Activities Completed**: Check the box if you completed the activity.
8. **Select Club Status**: Choose whether your club is Active or Inactive.
9. **Add Comments**: If you have any additional comments or notes, add them here.

## Field-by-Field Explanation
* **Club Details** (`club_details`, `text`, not required): Enter a brief description of the club you are reporting for.
* **Date** (`date`, `date`, required): Enter the date for which you are reporting your activities.
* **Activity** (`activity`, `text`, required): Provide a brief description of your activity or task completed.
* **Attendees** (`attendees`, `select_multiple`, required): Check the box for each person you attended with.
* **Email** (`email`, `email`, not required): Enter your email address for further communication.
* **Phone** (`phone`, `text`, not required): Enter your phone number for further communication.
* **Activities Completed** (`activities_completed`, `select_multiple`, required): Check the box if you completed the activity.
* **Club Status** (`club_status`, `select_one`, required): Choose whether your club is Active or Inactive.
* **Comments** (`comments`, `note`, not required): Add any additional comments or notes about the activity.
