<thinking>
The form is used to set up email notification settings for a business or organization. It allows users to configure how they would like to receive notifications, including the frequency and type of notifications, as well as the format and timezone of the emails they receive. This form is typically used by administrators or system owners to tailor the email notification settings to their needs.
</thinking>

# email_notification_settings - Help Guide
## Purpose
The email_notification_settings form is used to set up email notification settings for a business or organization.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the desired notification period from the options provided.
2. Choose the type of notification you would like to receive (Email, SMS, or Push).
3. Enter your email address in the format `user@example.com`.
4. Select the frequency at which you would like to receive emails (Daily, Weekly, or Monthly).
5. Choose the notification time from the available options.
6. Select your timezone from the list of available timezones (EST, EST5EDT, CDT, PST, CST, MST, or AST).
7. Choose the email format (Plain Text, HTML, or Rich Text).
8. Decide whether to enable or disable email notifications.
9. Test your email notification settings by clicking the "Test Email" button and entering a test email address.

## Field-by-Field Explanation
### Notification Period
* **Notification Period** (`select_one`, required: false): This field allows you to select the frequency at which you would like to receive notifications. Choose from Daily, Weekly, or Monthly to customize your notification schedule.

### Notification Type
* **Notification Type** (`select_one`, required: false): This field determines the type of notification you would like to receive. Select from Email, SMS, or Push to receive notifications via your preferred method.

### Email Address
* **Email Address** (`email`, required: false): Enter your email address in the format `user@example.com`. This is the address to which you will receive notifications.

### Email Frequency
* **Email Frequency** (`select_one`, required: false): This field allows you to specify how often you would like to receive emails. Choose from Daily, Weekly, or Monthly to customize your email frequency.

### Notification Time
* **Notification Time** (`time`, required: false): This field allows you to select the time of day you would like to receive notifications. Be sure to choose a time that is convenient for you.

### Timezone
* **Timezone** (`select_one`, required: false): This field allows you to select your timezone. Choose from EST, EST5EDT, CDT, PST, CST, MST, or AST to ensure that your notifications are received at the correct time.

### Email Format
* **Email Format** (`select_one`, required: false): This field determines the format of your email notifications. Choose from Plain Text, HTML, or Rich Text to customize the appearance of your emails.

### Status
* **Status** (`select_one`, required: false): This field enables or disables email notifications. Choose from Enabled or Disabled to control whether you receive notifications.

### Test Email
* **Test Email** (`email`, required: false): Click this button to test your email notification settings. Enter a test email address to see how your notifications will look and feel.
