# employee_digital_resources_agreement - Help Guide
## Purpose
The "employee_digital_resources_agreement" form is used to request and manage digital resources for employees.

## How To Complete This Form
To complete this form, follow these steps:

1. Select your company name from the list of available options.
2. Choose the roles that apply to you from the list of available options.
3. If you have a device, select the type of device you are requesting (e.g., laptop, smartphone, or tablet).
4. Enter your device ID (if you are requesting a device).
5. Enter the start date when you will begin using the device.
6. Enter the end date when you will finish using the device.
7. Enter the name of the resource that will be assigned to you (e.g., an IT specialist).
8. Indicate how many prophets will use the resource (not applicable for all users, but for some specific resources).
9. Select the location where you will be using the device (e.g., HQ or Branch Office).
10. Select the team you belong to (e.g., Alpha Team or Beta Team).
11. Add any additional notes or comments about the device and its usage.
12. Enter your email address so that we can contact you about your device assignment.
13. Enter your phone number (if you have one).
14. Enter the name and phone number of your direct manager.

## Field-by-Field Explanation
### 1. **Company Name**
* (`company`, `select_one`, required): Select your company name from the list of available options.

### 2. **Role**
* (`role`, `select_multiple`, required): Choose the roles that apply to you from the list of available options.

### 3. **Device Type**
* (`device_type`, `select_one`, optional): If you have a device, select the type of device you are requesting (e.g., laptop, smartphone, or tablet).

### 4. **Device ID**
* (`device_id`, `text`, optional): Enter your device ID (if you are requesting a device).

### 5. **Start Date**
* (`start_date`, `date`, required): Enter the date when you will begin using the device.

### 6. **End Date**
* (`end_date`, `date`, required): Enter the date when you will finish using the device.

### 7. **Assigned Resource**
* (`assigned_resource`, `text`, required): Enter the name of the resource that will be assigned to you (e.g., an IT specialist).

### 8. **Resource Uses Prophets**
* (`resource_uses_prophets`, `number`, optional): Indicate how many prophets will use the resource (not applicable for all users, but for some specific resources).

### 9. **Location**
* (`location`, `select_one`, optional): Select the location where you will be using the device (e.g., HQ or Branch Office).

### 10. **Team**
* (`team`, `select_one`, optional): Select the team you belong to (e.g., Alpha Team or Beta Team).

### 11. **Notes**
* (`notes`, `note`, optional): Add any additional notes or comments about the device and its usage.

### 12. **Email**
* (`email`, `email`, required): Enter your email address so that we can contact you about your device assignment.

### 13. **Phone**
* (`phone`, `text`, optional): Enter your phone number (if you have one).

### 14. **Manager's Name**
* (`manager_name`, `text`, required): Enter the name of your direct manager.

### 15. **Manager's Phone**
* (`manager_phone`, `text`, optional): Enter your manager's phone number (if you have it).
