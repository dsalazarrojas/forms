<thinking>...</thinking>

# security_plan_deviation_request_form - Help Guide

## Purpose
The **Security Plan Deviation Request Form** is used by authorized personnel to request a deviation from the security plan. This form is used to document the reason for the deviation, the impacted team members, and other relevant details.

## How To Complete This Form

To complete this form, follow these steps:

1.  Enter the **Risk Context** in the first field. This is the brief description of the reason for the deviation.
2.  Select the impacted **Route Requesters**: IT, Operations, or Both.
3.  Choose the team members that will review your deviation request in the **Reviewers** field. You can select multiple team members, such as IT, Operations, or Both.
4.  If necessary, add any additional details for **Data Collection**.
5.  In the **Form Submission** field, enter a brief description of how you submit this form, such as "email," "phone call," or "in-person meeting".
6.  Enter the updated **Security Plan**, describing the new plan in place of the deviation.
7.  If the deviation occurred on a specific **Deviation Date**, enter the date in the correct format (yyyy-mm-dd).
8.  Select the **Time** the deviation was requested. Enter the time in 24-hour format (HH:MM).
9.  If you have a preferred **Contact Email**, enter the email address of who should contact you.
10.  Provide your **Phone Number** for additional contact information.

## Field-by-Field Explanation

*   **Risk Context** (`title`, `text`, **Required**):
    This field is the description of the reason for the deviation.
*   **Route Requesters** (`route_requesters`, `select_one`, **Required**):
    Select which team requests this deviation (IT, Operations, or Both).
*   **Reviewers** (`reviewers`, `select_multiple`, **Required**):
    Select the team members that will review your deviation request.
*   **Data Collection** (`data_collection`, `note`, **Optional**):
    Enter any additional details for data collection.
*   **Form Submission** (`form_submission`, `text`, **Required**):
    Enter the method for submitting this form.
*   **Security Plan** (`security_plan`, `text`, **Required**):
    Describe the updated security plan in place of the deviation.
*   **Deviation Date** (`deviation_date`, `date`, **Optional**):
    Enter the date of the deviation in the correct format (yyyy-mm-dd).
*   **Time** (`time`, `time`, **Optional**):
    Enter the time of the deviation in 24-hour format (HH:MM).
*   **Email** (`email`, `email`, **Optional**):
    Enter the preferred contact email.
*   **Phone** (`phone`, `text`, **Optional**):
    Provide your phone number for additional contact information.
