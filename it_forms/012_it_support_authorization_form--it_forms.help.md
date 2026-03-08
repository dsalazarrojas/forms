<thinking>
This form is used to request support authorization for a specific user. The purpose of this form is to provide a structured way for a user to request access to specific devices and systems. The form must be completed by the user to ensure that their support request is processed accurately and efficiently.

To complete this form, follow these steps:

*   Ensure you have the necessary access level (Limited, Full, or Custom) and department (IT, Finance, HR, or Admin) information.
*   Select the appropriate access level and department from the respective drop-down menus.
*   If your supervisor has not already approved or denied your request, select the correct option from the supervisor approval drop-down menu.
*   Choose the devices you need access to from the device access drop-down menu.
*   Choose the systems you need access to from the system access drop-down menu.
*   If you are requesting access to start and end times, enter your start and end dates and times in the date and time fields.
*   Submit the form once all fields are filled.

</thinking>

# it_support_authorization_form - Help Guide
## Purpose
The it_support_authorization_form is a structured form used to request support authorization for a user.

## How To Complete This Form
To complete this form, follow these steps:

1.  Ensure you have the necessary access level and department information.
2.  Select the appropriate access level and department from the respective drop-down menus.
3.  If your supervisor has not already approved or denied your request, select the correct option from the supervisor approval drop-down menu.
4.  Choose the devices you need access to from the device access drop-down menu.
5.  Choose the systems you need access to from the system access drop-down menu.
6.  If you are requesting access to start and end times, enter your start and end dates and times in the date and time fields.

## Field-by-Field Explanation
*   **User Name** (`user_name`, text, required: false): Enter your name to identify yourself.
*   **Job Title** (`job_title`, text, required: false): Enter your job title to provide context for your support request.
*   **Department** (`department`, select_one, required: true): Select your department (IT, Finance, HR, or Admin) to ensure accurate routing of your support request.
*   **Access Level** (`access_level`, select_multiple, required: true): Select your access level (Limited, Full, or Custom) to determine the scope of your support request.
*   **End Date** (`end_date`, date, required: false): If you are requesting access up to a specific date, enter the date in the format mm/dd/yyyy.
*   **Start Time** (`start_time`, time, required: false): If you are requesting access to start at a specific time, enter the time in the format 12:00 AM or 12:00 PM.
*   **End Time** (`end_time`, time, required: false): If you are requesting access to end at a specific time, enter the time in the format 12:00 AM or 12:00 PM.
*   **Device Access** (`device_access`, select_multiple, required: true): Select the devices you need access to (Laptop, Mobile Phone, Printer, or Network Switch).
*   **System Access** (`system_access`, select_multiple, required: true): Select the systems you need access to (Windows, Linux, Mac, or Other).
*   **Supervisor Approval** (`supervisor_approval`, select_one, required: true): If your supervisor has not already approved or denied your request, select the correct option.
