<thinking>
The purpose of this form is to track and report bugs or issues encountered during testing of applications or software. This form is used to gather relevant information about the bug, including the tester's name, contact email, the application being tested, and details about the bug itself. The form also allows the tester to specify the severity and priority of the bug, as well as its current status. This form will help ensure that all necessary information is collected in a structured and consistent manner, making it easier to track and manage bugs throughout the testing process.
</thinking>

# Bug Tracking Form - Help Guide
## Purpose
The Bug Tracking Form is a tool used to gather and record information about bugs or issues encountered during testing of applications or software.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your name and contact email.
2. Specify the application or software being tested.
3. Describe the bug in detail, including the steps to reproduce it and the expected and actual results.
4. Specify the severity and priority of the bug.
5. Select the current status of the bug.
6. Add any additional notes or evidence (screenshots, logs, etc.) that can help in resolving the issue.

## Field-by-Field Explanation

* **Tester Name** (`tester_name`, text, required): Enter your name and contact information.
* **Email Address** (`email`, email, required): Enter your contact email address.
* **Test Date** (`test_date`, date, required): Enter the date the bug was encountered.
* **Application Under Test** (`application`, text, required): Enter the name of the application or software being tested.
* **Build Version** (`build_version`, text, required): Enter the build or version number of the application or software being tested.
* **Test Environment** (`test_environment`, select_one, required): Select the testing environment where the bug was encountered.
* **Bug Severity** (`bug_severity`, select_one, required): Select the severity level of the bug.
* **Bug Priority** (`bug_priority`, select_one, required): Select the priority level of the bug.
* **Bug Status** (`bug_status`, select_one, required): Select the current status of the bug.
* **Browser** (`browser`, select_one, optional): Select the browser used to encounter the bug.
* **Operating System** (`operating_system`, select_one, optional): Select the operating system used to encounter the bug.
* **Bug Title** (`bug_title`, text, required): Enter a short title for the bug.
* **Bug Description** (`bug_description`, text, required): Enter a detailed description of the bug.
* **Steps to Reproduce** (`steps_to_reproduce`, text, required): Enter the steps to reproduce the bug.
* **Expected Result** (`expected_result`, text, required): Enter the expected result or behavior.
* **Actual Result** (`actual_result`, text, required): Enter the actual result or behavior.
* **Test Data Used** (`test_data`, text, optional): Enter any specific test data used to encounter the bug.
* **Evidence Attached** (`evidence`, select_one, optional): Select if evidence (screenshots, logs, etc.) was attached.
* **Related Bugs** (`related_bugs`, text, optional): Enter any related bug IDs.
* **Additional Notes** (`notes`, text, optional): Enter any additional information.
