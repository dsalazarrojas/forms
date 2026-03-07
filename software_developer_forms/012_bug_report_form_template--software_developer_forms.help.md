<thinking>

This form is a bug report template designed to help software developers gather essential information from end-users when a bug is encountered. It is not intended for general feedback or suggestions, but rather a systematic method to collect detailed information about the bug and report it to the development team. To ensure consistent and useful bug reports, please fill out this template thoroughly and accurately. If you are unsure about a specific field, try to provide the best possible answer or leave it blank if you are truly unsure. This template is not a replacement for in-depth debugging or troubleshooting, but rather a tool to aid in the reporting process. 

</thinking>

# Bug Report Form Template - Help Guide
## Purpose
The Bug Report Form is a systematic method for reporting bugs and issues encountered while using our software. It helps the development team to understand the problem, reproduce it, and resolve it efficiently.

## How To Complete This Form
1. Fill out each field thoroughly and accurately, providing as much detail as possible.
2. If you are unsure about a field, try your best to provide a reasonable answer or leave it blank if you are truly unsure.
3. Attach any relevant screenshots or logs to support your report.
4. Click "Submit" to send your report to the development team.

## Field-by-Field Explanation

* **Reporter Name** (`reporter_name`, text, required): Enter your full name as the person reporting the bug.
* **Email Address** (`email`, email, required): Enter your contact email address so we can reach you for further questions or clarification.
* **Team or Department** (`team`, text, optional): Enter your team or department name (if any).
* **Report Date** (`report_date`, date, required): Enter the date when you first encountered the bug.
* **Project Name** (`project_name`, text, required): Enter the name of the project related to the bug.
* **Module or Component** (`module_component`, text, required): Enter the module or component affected by the bug.
* **Bug Type** (`bug_type`, select_one, required): Choose the classification of the bug from the options provided (Functional, Performance, Security, Usability, Compatibility, Integration, Data, UI/UX).
* **Severity** (`severity`, select_one, required): Choose the impact level of the bug from the options provided (Blocker, Critical, Major, Minor, Trivial).
* **Priority** (`priority`, select_one, required): Choose the priority of the bug from the options provided (P1 - Critical, P2 - High, P3 - Medium, P4 - Low, P5 - Lowest).
* **Environment** (`environment`, select_one, required): Choose where the bug was found from the options provided (Development, Testing, Staging, Production, Other).
* **Browser** (`browser`, select_one, optional): Choose the browser used to encounter the bug.
* **Operating System** (`os`, select_one, optional): Choose the operating system used to encounter the bug.
* **Bug Summary** (`summary`, text, required): Provide a brief description of the bug.
* **Detailed Description** (`description`, text, required): Provide a full description of the bug, including any steps leading up to it.
* **Steps to Reproduce** (`reproduction_steps`, text, required): Provide step-by-step instructions on how to reproduce the bug.
* **Expected Result** (`expected_result`, text, required): Describe what you expected to happen.
* **Actual Result** (`actual_result`, text, required): Describe what actually happened.
* **Workaround Available** (`workaround`, select_one, optional): Check if there is a temporary fix available for the bug.
* **Attachments** (`attachments`, select_one, optional): If applicable, attach relevant screenshots or logs to support your report.
* **Assign To** (`assigned_to`, text, optional): Suggest a team member to assign the bug to for resolution.
