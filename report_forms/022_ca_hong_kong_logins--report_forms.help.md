# Ca Hong Kong Logins - Help Guide
## Purpose
The Ca Hong Kong Logins form is a tool for reporting and recording login events on various systems. It is used to track and monitor login activity, ensuring that any issues or anomalies are promptly addressed.

## How To Complete This Form
To complete the form, follow these steps:

1. Enter the report date in the **Report date** field.
2. Choose the system accessed from the **System name** field.
3. Enter the username used for the login attempt in the **Username used** field.
4. If available, enter the source IP address in the **IP address** field.
5. If known, enter the approximate location of the login attempt in the **Approximate location** field.
6. Select the outcome of the login attempt from the **Login success or failure** dropdown menu.
7. If there are any additional notes or comments about the login event, enter them in the **Notes** field.
8. If the login event was reported by someone else, enter their name in the **Reported by** field.

## Field-by-Field Explanation
* **Report date** (`report_date`, date, required): Enter the date of the login event.
* **System name** (`system_name`, text, required): Enter the name of the system accessed.
* **Username used** (`username`, text, required): Enter the username used for the login attempt.
* **IP address** (`ip_address`, text, not required): Enter the source IP address of the login event, if available.
* **Approximate location** (`location`, text, not required): Enter the approximate city or region of the login attempt.
* **Login success or failure** (`success_or_failure`, select_one, required): Select the outcome of the login attempt from "Success" or "Failure".
* **Notes** (`notes`, text, not required): Enter any additional comments or notes about the login event.
* **Reported by** (`reported_by`, text, not required): If someone else reported this event, enter their name in this field.
