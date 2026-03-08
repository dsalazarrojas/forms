# device_enrollment_notification_disable_request_form - Help Guide
## Purpose
The **device_enrollment_notification_disable_request_form** is used to request disabling device enrollment notifications for a specific device. This form is intended for authorized personnel to request disabling device enrollment notifications for a device that should not receive them.

## How To Complete This Form
1. Select the option to disable device enrollment notifications for the device.
2. Provide a clear reason for disabling the notification in the **reason** field.
3. Identify the affected devices and users in the **affected_devices**, **affected_users**, and **affected_groups** fields, if applicable.
4. Select the approver and submitter in the **approver** and **submitter** fields, if applicable.
5. Enter the date and time the notification should be disabled in the **date_disabled** and **time_disabled** fields, if applicable.
6. Indicate if the user disabled the device or not in the **user_disabled** field.
7. Enter the ID of the device to be affected in the **device_id** field.
8. Select the status of the device after disabling enrollment notification in the **status** field.
9. Indicate if the form was submitted by an authorized person in the **submitted_by** field.
10. Finally, review and submit the form.

## Field-by-Field Explanation
- **Disable device enrollment notification**: Select 'Yes' to request disabling device enrollment notifications for this device. This will disable the enrollment notifications and prevent any further notifications for this device. 
    * Required: Yes
    * Type: Select One
    * Purpose: Selecting this option will request disabling device enrollment notifications for the specified device.
- **Request Description**: Enter the reason for disabling the device enrollment notifications. This is a text field where you can enter a brief description of the reason.
    * Required: Yes
    * Type: Text
    * Purpose: Enter a clear and concise reason for disabling device enrollment notifications.
- **Select Device Type**: Select the type of device for which you are disabling the enrollment notification. This option should match the type of device that was initially enrolled.
    * Required: False
    * Type: Select One
    * Purpose: Select the correct device type for the specified device.
- **Reason**: Enter a clear and concise reason for disabling the device enrollment notification.
    * Required: True
    * Type: Text
    * Purpose: Enter a clear and concise reason for disabling device enrollment notifications.
- **Affected Devices**: Select if the disabling of enrollment notifications will affect other devices in addition to the specified device.
    * Required: True
    * Type: Select Multiple
    * Purpose: Select if other devices will be affected.
- **Affected Users**: Select if the users will be affected by disabling the enrollment notification.
    * Required: False
    * Type: Select Multiple
    * Purpose: Select if users will be affected.
- **Affected Groups**: Select if groups will be affected by disabling the enrollment notification.
    * Required: False
    * Type: Select Multiple
    * Purpose: Select if groups will be affected.
- **Comments**: Enter any comments related to the disabling of the enrollment notifications.
    * Required: False
    * Type: Text
    * Purpose: Enter any additional comments related to the request.
- **Submitter**: Select if the request is being submitted by an authorized person.
    * Required: False
    * Type: Select One
    * Purpose: Select if the request is being submitted by an authorized person.
- **Approver**: Select if the request needs to be reviewed and approved by an authorized person.
    * Required: True
    * Type: Select One
    * Purpose: Select if the request needs to be reviewed and approved.
- **Date Disabled**: Enter the date when the enrollment notifications should be disabled for the device.
    * Required: True
    * Type: Date
    * Purpose: Enter the date when the enrollment notifications should be disabled.
- **Time Disabled**: Enter the time when the enrollment notifications should be disabled for the device.
    * Required: False
    * Type: Time
    * Purpose: Enter the time when the enrollment notifications should be disabled.
- **User Disabled**: Indicate if the user disabled the device or not.
    * Required: False
    * Type: Select One
    * Purpose: Indicate if the user disabled the device.
- **Device ID**: Enter the ID of the device to be affected.
    * Required: True
    * Type: Number
    * Purpose: Enter the ID of the device to be affected.
- **Status**: Select the status of the device after disabling enrollment notifications.
    * Required: True
    * Type: Select One
    * Purpose: Select the status of the device after disabling enrollment notifications.
- **Submitted By**: Indicate if the form was submitted by an authorized person.
    * Required: False
    * Type: Select One
    * Purpose: Indicate if the form was submitted by an authorized person.
