<thinking>
This form is designed to help users ensure that their application's Content Security Policy (CSP) is properly implemented. It's essential to fill out this form carefully to avoid any security issues. The form is meant to be a checklist to help developers and engineers verify that their project's CSP is correctly set up and functioning as expected. Please ensure you're only filling this form once for each project, as duplicating this form will not be processed.
</thinking>

# CSP Nonce Implementation Checklist - Help Guide
## Purpose
This form is used to collect information about the implementation of Content Security Policy (CSP) in a project or application. It helps ensure that the CSP is correctly set up and functioning as expected.

## How To Complete This Form
1. Fill out the form carefully, ensuring you're only filling it out once for each project.
2. Select the correct options for each field based on your project's specifics.
3. Verify the accuracy of your responses before submitting the form.

## Field-by-Field Explanation
* **Project name** (`project_name`, `text`, required): Enter the name of the project or application you're implementing the CSP for.
* **Owner or responsible engineer** (`owner`, `text`, required): Identify the primary contact person responsible for the project's CSP implementation.
* **Nonce generation method** (`nonce_generation_method`, `text`, required): Describe how nonces are created in your project. This could be a custom implementation or a library you're using.
* **Templating systems requiring nonce support** (`templating_integrations`, `text`, optional): List any templating systems (e.g., server-side templates) that your project uses and require nonce support.
* **Content security policy header set correctly** (`headers_set_correctly`, `select_one`, required): Verify that the Content Security Policy header is present on responses.
	+ Select 'True' if the header is correctly set.
	+ Select 'False' if the header is not present or not correctly set.
	+ Select 'Partial' if the header is partially set or not working as expected.
* **Security review status** (`review_status`, `select_one`, required): Finalize the security review status for your project.
	+ Select 'Passed' if the project has passed the security review.
	+ Select 'Action required' if there are outstanding security issues that require action.
	+ Select 'Not reviewed' if the project has not been reviewed yet.
* **Remediation tasks** (`remediation_tasks`, `text`, optional): Describe any outstanding remediation tasks and assign them to individuals responsible for fixing issues.
* **Expected completion date** (`completion_date`, `date`, optional): Enter the target date for completing all remediation tasks and ensuring the project's CSP is correctly implemented.

## Tips
* Ensure accuracy when filling out the form to avoid unnecessary rework or security issues.
* Review the form carefully before submitting it to verify that all information is correct.
* If you're unsure about any field, reach out to your project lead or security team for guidance.
