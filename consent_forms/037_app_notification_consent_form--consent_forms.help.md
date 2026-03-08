<thinking>
The purpose of this form is to collect user consent for app notifications, allowing users to customize their notification preferences and opt-in or opt-out of various categories of notifications. To prevent duplication, we should ensure that users only submit this form once. This form is designed to be completed by users who want to receive notifications for specific events or updates within the app.
</thinking>

# App Notification Consent Form - Help Guide

## Purpose
The App Notification Consent Form is used to collect user consent for app notifications, allowing users to choose what types of notifications they want to receive and the frequency of those notifications.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter your User Identifier (Email or ID) in the "User Identifier (Email or ID)" field.
2. Select the current version of the app you are using.
3. Choose your notification preferences in the "Notification Settings --" section.
	* Select "Yes, I opt-in" for the types of notifications you want to receive.
	* Select the categories of notifications you are interested in (e.g., Product Updates and New Features, Promotional Offers and Discounts).
4. Choose the desired notification frequency in the "Desired Notification Frequency" field.
5. Confirm that you understand how notification delivery may use minimal data by selecting "I acknowledge" in the "Data Usage Acknowledgement" section.
6. Confirm that you understand you can change these settings at any time in the app by selecting "I understand" in the "Setting Change Awareness" section.
7. Enter the date of your consent.

## Field-by-Field Explanation

* **User Identifier (Email or ID)** (`user_id_email`, `text`, required): Enter your email address or user ID to identify yourself in the app.
* **Current App Version** (`app_version`, `text`, optional): Select the current version of the app you are using.
* **Notification Settings --** (`push_consent_header`, `note`, optional): This section allows you to choose what types of notifications you want to receive. Select "Yes, I opt-in" for each category you are interested in.
* **Do you wish to receive push notifications?** (`enable_notifications`, `select_one`, required): Select "Yes, I opt-in" to receive push notifications.
* **Select Notification Categories** (`notification_categories`, `select_multiple`, required): Choose the categories of notifications you are interested in (e.g., Product Updates and New Features, Promotional Offers and Discounts).
* **Desired Notification Frequency** (`frequency_preference`, `select_one`, required): Choose how often you want to receive notifications (e.g., Real-time, Daily Digest, Weekly Summary).
* **We respect your time - No non-critical notifications will be sent between 10 PM and 7 AM** (`quiet_hours_note`, `note`, optional): This section explains that non-critical notifications will not be sent between 10 PM and 7 AM.
* **I acknowledge that notification delivery may use minimal data** (`data_usage_acknowledgement`, `select_multiple`, required): Select "I acknowledge" to confirm that you understand notification delivery may use minimal data.
* **I understand I can change these settings at any time in the app** (`setting_change_awareness`, `select_multiple`, required): Select "I understand" to confirm that you understand you can change these settings at any time in the app.
* **Date of Consent** (`consent_date`, `date`, required): Enter the date you gave consent for notifications.
