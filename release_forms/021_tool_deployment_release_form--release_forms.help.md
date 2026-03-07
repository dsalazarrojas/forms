<thinking>
A technical user-facing help guide for the "Tool Deployment Release Form" should be created, explaining the form's purpose, how to complete it, and what each field means. This guide will help end-users understand the form's requirements and ensure accurate and efficient completion.

This form is used to request and track tool deployment releases within the organization. It captures essential information about the release, including the release date, type, environment, and status. The form is designed to streamline the release process and facilitate collaboration among team members.

Before proceeding, please ensure you are filling this form for a valid release request. If you're unsure, refer to the project documentation or ask your team lead for guidance.

</thinking>

# Tool Deployment Release Form - Help Guide
## Purpose
The Tool Deployment Release Form is a standardized form designed to gather and track essential information about tool deployments. It ensures that all necessary details are captured and communicated effectively among team members, promoting a smooth and efficient release process.

## How To Complete This Form
1.  To start, fill in the `Release Request` field with a brief description of the tool deployment.
2.  Select the correct `Release Date` for the deployment.
3.  Choose the `Release Type` from the provided options (`Yes` or `No`).
4.  Select the environment where the release will be deployed (`Dev`, `QA`, or `Prod`).
5.  Add any `Risk Notes` related to the deployment in the provided text field.
6.  Provide `Release Notes` about the deployment in the text field.
7.  Indicate if `Reviewers` are required for the release (`Yes` or `No`).
8.  Enter the `Reviewer Emails` of the team members involved.
9.  If applicable, select the `Release Status` (`Approved`, `Rejected`, or `In Progress`).
10. Enter the `Release Manager` name (if applicable).
11. If necessary, enter the `Approval Date`.
12. If necessary, enter the name of the person who reviewed the release (`Reviewed By`).
13. Provide any additional `Comments` about the release.
14. Enter any `Release Notes Comments` about the release.

## Field-by-Field Explanation
* **Release Request** (`release_request`, text, optional): A brief description of the tool deployment.
* **Release Date** (`release_date`, date, required): The date when the release will take place.
* **Release Type** (`release_type`, select_one, required): Select 'Yes' for a release or 'No' for a no-release.
* **Environment** (`environment`, select_one, required): Choose the environment where the release will be deployed (`Dev`, `QA`, or `Prod`).
* **Risk Notes** (`risk_notes`, text, optional): Add any risk-related notes related to the deployment.
* **Release Notes** (`release_notes`, text, optional): Provide detailed release notes.
* **Reviewers** (`reviewers`, select_multiple, required): Indicate if reviewers are needed (`Yes` or `No`).
* **Reviewer Emails** (`reviewer_emails`, text, optional): Enter the emails of the reviewers.
* **Release Status** (`release_status`, select_one, optional): Choose the release status (`Approved`, `Rejected`, or `In Progress`).
* **Release Manager** (`release_manager`, text, optional): Enter the release manager's name.
* **Approval Date** (`approval_date`, date, optional): Enter the approval date.
* **Reviewed By** (`reviewed_by`, text, optional): Enter the name of the person who reviewed the release.
* **Comments** (`comments`, text, optional): Add any comments about the release.
* **Release Notes Comments** (`release_notes_comments`, text, optional): Enter any release notes comments.
