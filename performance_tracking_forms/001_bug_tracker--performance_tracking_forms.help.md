<thinking> 
This help guide is intended for end-users to report bugs and issues they encounter while using our platform. It is crucial to ensure that users provide accurate and comprehensive information to help our development team reproduce and resolve the bugs efficiently.

Before using this form, please note that it is not a general feedback or feature request form. It is specifically designed for bug reporting, so please ensure that you have a clear understanding of the issue you are experiencing.

Before filling out this form, take a moment to review the following sections to ensure you provide the most accurate information:

*   **Bug Title**: Give a brief summary of the issue you are experiencing
*   **Detailed Description**: Provide as much context as possible about the bug
*   **Expected Behavior**: Describe what you thought should happen
*   **Actual Behavior**: Describe what actually happened
*   **Attachments**: If you have any screenshots or logs, please attach them

When filling out the form, please ensure you provide your contact information so that we can reach out to you for follow-up questions. 

</thinking>

# Bug Tracker - Help Guide
## Purpose
The Bug Tracker form is used to report any issues or bugs you encounter while using our platform. This form is designed to help our development team reproduce and resolve the bugs efficiently.

## How To Complete This Form

To complete this form, follow these steps:

1.  Fill in the **Bug Title** field with a brief summary of the issue you are experiencing.
2.  In the **Detailed Description** field, provide as much context as possible about the bug. This should include any steps you took to reproduce the issue and any error messages you received.
3.  In the **Expected Behavior** field, describe what you thought should happen when you encountered the bug.
4.  In the **Actual Behavior** field, describe what actually happened.
5.  For each field, ensure you fill in the correct **Operating System** and **Browser Type** you were using when you encountered the bug.
6.  If you have any attachments such as screenshots or logs, select **True** in the **Attachments** field.
7.  Finally, fill in your contact information so that we can reach out to you for follow-up questions.

## Field-by-Field Explanation

*   **Date of Bug Report**: <small>Date of Bug Report</small> (`report_date`, date, required)
    This field indicates when you first encountered the bug.
*   **Bug Title**: <small>Bug Title</small> (`bug_title`, text, required)
    Enter a brief summary of the issue you are experiencing
*   **Detailed Description**: <small>Detailed Description</small> (`bug_description`, text, required)
    Provide as much context as possible about the bug.
*   **Severity Level**: <small>Severity Level</small> (`severity_level`, select\_one, required)
    Indicate how critical this bug is. Choose from: Critical, High, Medium, Low
*   **Browser Type**: <small>Browsing Type</small> (`browser_type`, select\_one, required)
    Select the browser you were using when you encountered the bug. Choose from: Chrome, Firefox, Safari, Edge, Opera
*   **Browser Version**: <small>Browsing Version</small> (`browser_version`, text, not required)
    If available, enter the version number of the browser you were using
*   **Operating System**: <small>Operating System</small> (`operating_system`, select\_one, required)
    Select the operating system you were using when you encountered the bug. Choose from: Windows, macOS, Linux, iOS, Android
*   **Operating System Version**: <small>Operating System Version</small> (`os_version`, text, not required)
    If available, enter the version number of the operating system you were using
*   **Steps to Reproduce**: <small>Steps to Reproduce</small> (`steps_to_reproduce`, text, required)
    Describe the steps you took to reproduce the bug.
*   **Expected Behavior**: <small>Expected Behavior</small> (`expected_behavior`, text, required)
    Describe what you thought should happen when you encountered the bug.
*   **Actual Behavior**: <small>Actual Behavior</small> (`actual_behavior`, text, required)
    Describe what actually happened when you encountered the bug.
*   **Your Name**: <small>Your Name</small> (`reporter_name`, text, required)
    Enter your full name.
*   **Your Email Address**: <small>Your Email Address</small> (`reporter_email`, email, required)
    Enter your email address so we can contact you.
*   **Your Phone Number**: <small>Your Phone Number</small> (`reporter_phone`, text, not required)
    Enter your phone number for optional contact.
*   **Attachments**: <small>Attachments</small> (`attachments_present`, select\_one, not required)
    If you have any attachments such as screenshots or logs, select True
*   **Additional Notes**: <small>Additional Notes</small> (`additional_notes`, text, not required)
    Provide any other information that might help us understand the bug. 

Note: Please ensure you fill in all required fields to ensure we can reproduce and solve the issue efficiently. If you have any questions or concerns, do not hesitate to reach out to us.
