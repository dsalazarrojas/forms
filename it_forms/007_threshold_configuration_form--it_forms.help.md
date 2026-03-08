# Threshold Configuration Form - Help Guide
## Purpose
The Threshold Configuration Form is used to configure threshold settings for monitoring and alerting. This form defines the conditions under which a threshold is breached, chooses how to notify users, and determines the frequency of actions taken when the threshold is reached.

## How To Complete This Form
To complete this form, follow these steps:

1. Choose a monitoring condition that triggers the threshold breach.
2. Select a notification method to alert users when the threshold is breached.
3. Decide on an action to be taken when the threshold is breached.
4. Set the monitoring frequency (optional).
5. Set the threshold value (e.g., temperature, voltage, etc.).
6. Specify the threshold units (e.g., °C, mm, etc.).
7. Choose the action frequency (optional).
8. Set the action threshold value (e.g., the value above which the action is triggered).

## Field-by-Field Explanation
* **Monitoring Condition** (`monitoring_condition`, select_one, required: false): Choose a condition that determines when the threshold is breached. This field has three options:
	+ Threshold Breached: The threshold is breached when it is exceeded.
	+ Threshold Achieved: The threshold is breached when it is not exceeded.
* **Notification Method** (`notification_method`, select_one, required: false): Choose how users will be notified when the threshold is breached. This field has two options:
	+ Email: Send an email notification.
	+ Phone: Send a phone notification.
* **Action** (`action`, select_one, required: false): Choose an action to be taken when the threshold is breached. This field has two options:
	+ Send Alert: Send an alert to users.
	+ Trigger Ticket: Trigger a ticket for further action.
* **Monitoring Frequency** (`monitoring_frequency`, number, required: false): Set the frequency at which the threshold is monitored. This field is optional and allows you to set a specific interval (e.g., every 5 minutes).
* **Threshold** (`threshold`, number, required: false): Set the threshold value. This field is optional and allows you to set a specific value (e.g., 10°C).
* **Threshold Units** (`threshold_units`, text, required: false): Specify the units of the threshold value. This field is optional and allows you to specify the units of the threshold value (e.g., °C, mm, etc.).
* **Action Frequency** (`action_frequency`, number, required: false): Set the frequency at which the action is taken. This field is optional and allows you to set a specific interval (e.g., every 10 minutes).
* **Action Threshold** (`action_threshold`, number, required: false): Set the threshold value for the action to be taken. This field is optional and allows you to set a specific value (e.g., 15°C) above which the action is triggered.
