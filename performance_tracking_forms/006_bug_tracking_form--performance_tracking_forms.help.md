<thinking>

The Bug Tracking Form is used for reporting and tracking bugs found in software applications. This form helps to gather necessary information about the bug, including details about the issue, its severity, status, and any relevant environment information. The form is designed to be completed by the person who found the bug and provides a structured way to report the issue, allowing for efficient tracking and resolution.

This form is not meant to be a comprehensive bug report, but rather a starting point for further investigation and discussion. It should only be used for reporting bugs, not for other types of issues or requests.

It is essential to fill out this form accurately and thoroughly, as it will aid in the swift and efficient resolution of the bug.

</thinking>

# Bug Tracking Form - Help Guide
## Purpose
The Bug Tracking Form is used for reporting and tracking bugs found in software applications.

## How To Complete This Form
To complete the form, follow these steps:

1. Fill in the required fields with accurate information about the bug.
2. Provide a clear and concise description of the issue.
3. Select the correct severity, status, and category for the bug.
4. Attach any relevant error logs or screenshots.
5. Provide any temporary fixes or observations in the workaround notes field.

## Field-by-Field Explanation
### Reporter Details
* **Reporter name** (`reporter_name`, text, required): Enter your name as the person reporting the bug.
* **Email address** (`reporter_email`, email, required): Enter your email address for contact purposes.
* **Department or team** (`department`, text, optional): If applicable, enter the department or team you belong to.

### Bug Summary
* **Bug title** (`bug_title`, text, required): Briefly summarize the issue in one line.
* **Severity level** (`severity`, select_one, required): Select the severity level of the bug (Critical, High, Medium, Low, Trivial).
* **Bug status** (`status`, select_one, required): Select the current status of the bug (New, Assigned, In Progress, Testing, Resolved, Closed).

### Detailed Description
* **Bug description** (`description`, text, required): Provide a complete description of the issue.
* **Expected behavior** (`expected_behavior`, text, required): Describe what you expected to happen.
* **Actual behavior** (`actual_behavior`, text, required): Describe what is actually happening.
* **Steps to reproduce** (`steps_to_reproduce`, text, required): Numbered list of steps to reproduce the issue.

### Environment Information
* **Application version** (`app_version`, text, required): Enter the version of the application you are using.
* **Build number** (`build_number`, text, optional): If applicable, enter the build number.
* **Operating system** (`os`, text, required): Enter the operating system you are using.
* **Browser and version** (`browser`, text, optional): If applicable, enter the browser and version.
* **Database version** (`database`, text, optional): If applicable, enter the database version.

### Additional Information
* **Error logs or stack trace** (`error_logs`, text, optional): Paste any relevant error logs or stack trace.
* **Screenshot attached** (`screenshot_available`, select_one, optional): Check if a screenshot is attached.
* **Workaround or notes** (`workaround_notes`, text, optional): Any temporary fixes or observations.
* **Priority** (`priority`, select_one, optional): Select the priority level of the bug (Blocker, High, Medium, Low).
