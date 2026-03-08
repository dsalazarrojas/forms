# Temperature Monitoring Alert Request Form - Help Guide
## Purpose
The Temperature Monitoring Alert Request Form is a one-time request for temperature monitoring in a specific environment. It's used to inform the monitoring team of a temperature anomaly and to ensure that the monitoring system is alerted to the issue.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the name of the environment that you need to request monitoring for.
2. Enter the current temperature reading.
3. Set the threshold for temperature alert (e.g., Low, Medium, High).
4. Select the frequency at which you want to be alerted (e.g., Low, Medium, High).
5. Enter a brief message to provide context for the monitoring team.
6. Enter your name and email (optional) to be contacted for follow-up.

## Field-by-Field Explanation
### 1. Environment Name
* `environment_name` (`environment_name`, text, **Required**): Enter the name of the environment where you need to request monitoring.

### 2. Temperature Value
* `temperature_value` (`temperature_value`, number, **Required**): Enter the current temperature reading of the environment.

### 3. Alert Threshold
* `alert_threshold` (`alert_threshold`, number, **Required**): Set the threshold for temperature alert (e.g., below, above, at).

### 4. Alert Frequency
* `alert_frequency` (`alert_frequency`, select, **Required**): Select how often you want to be alerted (e.g., Low, Medium, High).

### 5. Alert Message
* `alert_message` (`alert_message`, text, **Optional**): Enter a brief message to provide context for the monitoring team.

### 6. Requestor Name
* `requestor_name` (`requestor_name`, text, **Required**): Enter your name for follow-up.

### 7. Requestor Email
* `requestor_email` (`requestor_email`, text, **Optional**): Enter your email address for follow-up.

### 8. Requestor Phone
* `requestor_phone` (`requestor_phone`, text, **Optional**): Enter your phone number for follow-up.

## Tips
- Please ensure that you enter accurate and relevant information to help the monitoring team make informed decisions.
- If you have any questions or concerns, contact your internal teams or external partners for assistance.
- This form is a one-time request and not intended for recurring or continuous monitoring.
