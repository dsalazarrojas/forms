<thinking>

To determine the purpose of the Outage Maintenance Request Form, we need to consider the context in which it's being used. This form is likely used by maintenance teams to gather information about outages that have occurred or are expected to occur. The form's design suggests it's intended to collect data that will help maintenance teams understand the impact of the outage, identify the cause, and determine the priority for resolving it. 

The form may be used in a variety of scenarios, such as when an outage is reported by a user or a system, or when a maintenance team is preparing for a scheduled maintenance window. 

Before filling out this form, it's essential to ensure that a duplicate request isn't made. This can be checked by verifying that a similar request hasn't been submitted recently or is currently being processed.

</thinking>

# Outage Maintenance Request Form - Help Guide

## Purpose
The Outage Maintenance Request Form is used to collect information about outages that have occurred or are expected to occur. This form helps maintenance teams understand the impact, identify the cause, and prioritize the resolution of the outage.

## How To Complete This Form
To complete this form, follow these steps:

1. Determine if the outage has occurred or is expected to occur.
2. Select whether the outage has affected the user (Yes/No).
3. Provide the date and time the outage was reported.
4. Describe the outage in detail.
5. Indicate the priority of the outage (Yes/No).
6. Identify the impact of the outage (Yes/No).
7. Select the cause of the outage (Yes/No).
8. Suggest a recommended action for resolution.
9. Enter the email address of the person to be assigned to resolve the outage.
10. Set the status of the outage (Active/Inactive).

## Field-by-Field Explanation
* **User Input** (`user_input`, `select_multiple`, required: false): Check if you, as the user, have been affected by the outage.
* **Date Reported** (`date_reported`, `date`, required: false): Provide the date the outage was reported.
* **Time Reported** (`time_reported`, `time`, required: false): Provide the time the outage was reported.
* **Description** (`description`, `text`, required: false): Describe the outage in detail, including what happened and how it affected you.
* **Priority** (`priority`, `select_one`, required: false): Indicate the priority of the outage, with options for high or low.
* **Impact** (`impact`, `select_one`, required: false): Identify the impact of the outage, with options for severe or minor.
* **Cause** (`cause`, `select_multiple`, required: false): Select all applicable causes for the outage.
* **Recommended Action** (`recommended_action`, `text`, required: false): Suggest a recommended action for resolution.
* **Assignee** (`assignee`, `email`, required: false): Enter the email address of the person to be assigned to resolve the outage.
* **Status** (`status`, `select_one`, required: false): Set the status of the outage, with options for Active or Inactive.

## Tips
* Make sure to provide as much detail as possible when describing the outage.
* If you've been affected by the outage, select "Yes" for User Input.
* Prioritize the outage based on its severity and impact.
* Be specific when suggesting a recommended action for resolution.
* Enter a valid email address for the assignee.
* Set the status correctly to reflect the current state of the outage.
