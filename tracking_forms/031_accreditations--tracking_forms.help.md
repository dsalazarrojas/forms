# Accreditations - Help Guide
## Purpose
The purpose of this form is to track accreditations, which are certifications or standards that an organization has met.

## How To Complete This Form
1. **Accreditation Name**: Enter the name of the specific certification or standard.
2. **Issuing Authority**: Enter the organization granting the accreditation.
3. **Current Status**: Select the current status of the accreditation process from the options provided.
4. **Renewal Deadline**: Enter the date by which the current accreditation expires.
5. **Required Evidence**: Select all documents that have already been collected for this accreditation.
6. **Assigned Compliance Officer**: Enter the internal lead for this project.
7. **Progress Percentage**: Enter the progress of the accreditation process (0-100).
8. **Milestone Tracking**: This is a note field for tracking milestones.
9. **Last Milestone Reached**: Select the last milestone reached in the process.
10. **External Consultant Name**: If applicable, enter the name of the external consultant involved.
11. **Internal Contact Email**: Enter the email of the internal contact person.

## Field-by-Field Explanation

* **Accreditation Name**: (`accrreditation_name`, `text`, required): The name of the specific certification or standard. For example, "ISO 9001:2015".
* **Issuing Authority**: (`issuing_authority`, `text`, required): The organization granting the accreditation. For example, "ASME".
* **Current Status**: (`current_status`, `select_one`, required): The current status of the accreditation process. Options: Planning, Documentation, Site Visit, Pending Decision, Approved, Expired. For example, "Approved".
* **Renewal Deadline**: (`renewal_deadline`, `date`, required): The date by which the current accreditation expires. Use the date format "YYYY-MM-DD".
* **Required Evidence**: (`required_evidence`, `select_multiple`, optional): Select all documents that have already been collected for this accreditation. Options: Self-Study Report, Financial Audits, Faculty CVs, Student Outcomes, Safety Records.
* **Assigned Compliance Officer**: (`assigned_compliance_officer`, `text`, required): The internal lead for this project. For example, "John Smith".
* **Progress Percentage**: (`progress_percentage`, `number`, optional): The progress of the accreditation process (0-100). For example, "75".
* **Milestone Tracking**: (`milestone_header`, `note`, optional): This field is for tracking milestones. Use this to note any significant events or actions taken in the accreditation process.
* **Last Milestone Reached**: (`milestone_reached`, `select_one`, optional): The last milestone reached in the process. Options: Application Submitted, Fee Paid, Review Scheduled. For example, "Application Submitted".
* **External Consultant Name**: (`external_consultant_name`, `text`, optional): If applicable, enter the name of the external consultant involved. For example, "Jane Doe".
* **Internal Contact Email**: (`internal_contact_email`, `email`, required): Enter the email of the internal contact person. For example, "john.smith@example.com".
