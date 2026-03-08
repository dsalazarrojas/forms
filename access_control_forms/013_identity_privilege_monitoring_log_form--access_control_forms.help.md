# Identity Privilege Monitoring Log Form - Help Guide
## Purpose
The Identity Privilege Monitoring Log Form is designed to track and monitor user privileges and access levels. This form helps collect relevant information about user actions, ensuring that access is properly managed and monitored.

## How To Complete This Form
1. Fill in your name as the user who performed the action.
2. Enter the date of the event.
3. Input your user ID.
4. Select whether the action resulted in a privilege.
5. Choose the level of access granted.
6. Indicate whether the resource was accessed.
7. Enter a brief description of the action (optional).
8. Add any additional notes about the action (optional).
9. Input your name as the submitter.
10. Enter the date and time you submitted the form.
11. Input any additional information about the action (optional).

## Field-by-Field Explanation

* **User Name** (user_name, text, required): Enter your name as the user who performed the action. This is the primary identifier for the logged action.
* **Event Date** (event_date, date, required): Enter the date of the event being logged. This helps track when the action occurred.
* **User ID** (user_id, number, required): Input your user ID, which helps identify you as the user who performed the action.
* **Privilege** (privilege, select_one, required): Select 'Yes' if the action resulted in a privilege being granted or denied. If the action did not involve privilege, choose 'No'.
* **Access Level** (access_level, select_multiple, required): Choose the access level granted or denied for the action. Options are 'High' and 'Low'.
* **Resource** (resource, select_one, required): Select 'Yes' if the resource was accessed during the action. If not, choose 'No'.
* **Action** (action, text, optional): Provide a brief description of the action taken.
* **Description** (description, text, optional): Add any additional details about the action.
* **Notes** (notes, note, optional): Enter any additional notes about the action.
* **Submitter** (submitter, text, required): Enter your name as the submitter of the form.
* **Date Submitter** (date_submitted, date, required): Enter the date and time you submitted the form.
* **Timestamp** (timestamp, time, required): Input the time of submission.
* **User Input** (user_input, text, optional): Enter any additional information about the action, if needed.
