</thinking>

<insensitive>Thinking...</insensitive>

We need to make sure that this form is filled out for a specific purpose and not as a form of fishing for information. This form is intended for reporting errors related to application memory issues, and filling it out incorrectly might lead to confusion and misclassification of errors. 

Before starting the form, ensure you are reporting a genuine memory error and not a non-relevant event. If unsure, please double-check your understanding of the error before proceeding.

The purpose of this form is to gather detailed information about memory-related issues with the application. This form is a comprehensive tool for reporting such errors, and filling it out accurately ensures that the report will be helpful for diagnosis and resolution of the issue.

After completing the form, please review the information provided and ensure it's relevant to the reported issue.

</thinking>

<insensitive>Application Memory Error Report Form - Help Guide</insensitive>

## Purpose
The Application Memory Error Report Form is used to gather detailed information about memory-related errors encountered by the application. Filling this form accurately helps our team diagnose and resolve memory issues effectively.

## How To Complete This Form
1. Review the form carefully and ensure you are reporting a genuine memory-related error.
2. Fill out the form with the necessary information for your reported error.
3. Double-check your answers to ensure they accurately reflect the issue you are reporting.

## Field-by-Field Explanation

* **Report Date** (`report_date`, Date, Required): Enter the date when you noticed the error.
* **Time of Incident** (`report_time`, Time, Required): Enter the time when you encountered the error.
* **Reporter Name** (`reporter_name`, Text, Required): Enter your name for contact purposes.
* **Reporter Email** (`reporter_email`, Email, Required): Enter your email address for follow-up communication.
* **Incident Severity Level** (`incident_severity`, Select One, Required):
	+ Critical - Application crashed.
	+ High - Major functionality impaired.
	+ Medium - Minor functionality issue.
	+ Low - Informational only.
* **Error Details** (`error_details`, Note, Optional): Add any relevant details about the error, such as steps taken before the error occurred.
* **Error Type** (`error_type`, Select One, Required):
	+ Memory leak.
	+ Buffer overflow.
	+ Stack overflow.
	+ Out of memory.
	+ Memory access violation.
	+ Heap corruption.
	+ Other.
* **Error Message or Code** (`error_message`, Text, Required): Enter the exact error message or code encountered.
* **Detailed Description of Error** (`error_description`, Text, Required): Describe the situation when the error occurred.
* **Approximate Memory Usage at Time of Error** (`memory_usage_at_error`, Text, Optional): Estimate the memory usage at the time of the error.
* **Environment Details** (`environment_details`, Note, Optional): Add any relevant environment details, such as RAM, processor, or disk space.
* **Application Name** (`application_name`, Text, Required): Enter the name of the application.
* **Application Version** (`application_version`, Text, Required): Enter the version of the application.
* **Operating System** (`operating_system`, Select One, Required):
	+ Windows.
	+ macOS.
	+ Linux.
	+ iOS.
	+ Android.
	+ Other.
* **Operating System Version** (`os_version`, Text, Optional): Enter the operating system version.
* **Hardware Specification** (`hardware_specification`, Text, Optional): Enter relevant hardware specifications.
* **Reproduction Information** (`reproduction_steps`, Note, Optional): Add steps to reproduce the error.
* **Is the Error Reproducible?** (`reproducible`, Select One, Required):
	+ Always reproducible.
	+ Sometimes reproducible.
	+ Rarely reproducible.
	+ Cannot reproduce.
* **Steps to Reproduce the Error** (`reproduction_steps_detailed`, Text, Required): List specific actions that trigger the error.
* **Attachments Available** (`attachments_available`, Select One, Optional):
	+ Yes, attached.
	+ Yes, available separately.
	+ False.
* **Additional Information** (`additional_information`, Text, Optional): Add any additional comments or notes.
