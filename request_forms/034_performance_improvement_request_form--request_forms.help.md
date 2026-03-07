<thinking>Before creating the help guide, I need to understand the form's purpose and how it's intended to be used. The form seems to be designed for employees to request performance improvements, possibly as part of a performance evaluation process. It may be used by supervisors and HR personnel to track and manage these requests.

To confirm, I'll review the form fields again:

*   `supervisor_name`: This field likely asks for the supervisor's name who is handling the request.
*   `subordinate_name`: This field may be for the employee making the improvement request.
*   `reason_for_request`: The employee would describe why they need a performance improvement.
*   `expected_performance_improvement`: This field is for the employee to specify what they hope to achieve with the improvement.
*   `suggested_improvement_plan`: The employee would outline their plan for improvement.
*   `date_of_request`: The date when the request was made.
*   `time_of_request`: The time when the request was made.
*   `submitted_by`: This field seems to be for selecting who submitted the request (Supervisor, HR, or Other).
*   `review_status`: Multiple options to track the request's status.
*   `comments`: A free-text field for additional notes.
*   `submitted_to`: This field may be for selecting who the request was addressed to (Manager or HR).

Given this analysis, the form is intended for supervisors, HR, or employees to request and track performance improvement requests within an organization. Now, let's create the help guide as per the requested structure.</thinking>

# Performance Improvement Request Form - Help Guide

## Purpose

The Performance Improvement Request Form is for supervisors and employees to record and track requests for improvement to enhance their work performance within the organization. Use this form to:

*   Record requests for improvement from supervisors or employees
*   Track and follow up on these requests for progress and outcomes

## How To Complete This Form

1.  Fill out the form with the required information, including:
    *   `supervisor_name`: Name of the person handling the request.
    *   `subordinate_name`: Employee submitting the request.
    *   `reason_for_request`: Description of the reason for the improvement request.
    *   `expected_performance_improvement`: Expected benefits or outcome of the improvement.
    *   `suggested_improvement_plan`: Plan to achieve the improvement.
    *   `date_of_request`: Date the request was made.
    *   `submitted_by`: Who submitted the request (Supervisor, HR, or Other).
    *   `review_status`: Status of the request (In Progress, Complete, Rejected, Approved, or Pending).
    *   `comments`: Additional comments or notes.
    *   `submitted_to`: To whom the request was made (Manager or HR).

## Field-by-Field Explanation

*   **Supervisor Name** (`supervisor_name`, `text`, Required): Enter the supervisor's name handling the request.
*   **Employee Name** (`subordinate_name`, `text`, Optional): Enter the employee who submitted the request.
*   **Reason for Request** (`reason_for_request`, `text`, Optional): Describe why this improvement request is needed.
*   **Expected Performance Improvement** (`expected_performance_improvement`, `text`, Optional): Specify the desired performance improvement.
*   **Suggested Improvement Plan** (`suggested_improvement_plan`, `text`, Optional): Outline the employee's plan for improvement.
*   **Date of Request** (`date_of_request`, `date`, Optional): Enter the date the request was made.
*   **Time of Request** (`time_of_request`, `time`, Optional): Enter the time the request was made.
*   **Submitted By** (`submitted_by`, `select_one`, Required): Select who submitted the request (Supervisor, HR, or Other).
*   **Review Status** (`review_status`, `select_multiple`, Optional): Update the request's status (In Progress, Complete, Rejected, Approved, or Pending).
*   **Comments** (`comments`, `note`, Optional): Add any additional comments or notes.
*   **Submitted To** (`submitted_to`, `select_multiple`, Optional): Select to whom the request was made (Manager or HR).

## Tips

*   Ensure you fill out the form with accurate and complete information.
*   Use the form to track and follow up on requests for progress and outcomes.
*   Update the `review_status` field as the request progresses.
*   Use the `comments` field for any additional notes or discussions.

By following this guide, you should be able to effectively use the Performance Improvement Request Form to request and track performance improvements within your organization.
