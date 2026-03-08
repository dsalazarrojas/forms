<thinking>

To create an internal and user-friendly help guide for the Counter Inquiry Log Form, we need to consider the following:

*   The form is designed to log inquiries from customers and track their progress through different status levels (Active/Inactive).
*   This form will be used for internal purposes, such as logging customer interactions and updating the status of inquiries.
*   The form includes various fields to capture detailed information about each inquiry, including customer contact information, description, status, and more.
*   Some fields are mandatory and must be filled out, while others are optional.
*   The form is intended for use within an organization, so internal logic and rules apply.

</thinking>

# Counter Inquiry Log Form - Help Guide

## Purpose

The Counter Inquiry Log Form is used to log and track inquiries from customers. This form captures essential information about each inquiry, enabling internal teams to monitor progress and update status levels.

## How To Complete This Form

To complete this form, follow these steps:

1.  Fill in the required fields:
    *   Customer Name
    *   Inquiry Type
    *   Description
    *   Status
    *   Assigned Tool
    *   Counter
    *   Updated By
    *   Updated By Counter
    *   Created By Counter
    *   Status Counter
    *   Updated At
2.  Optional fields:
    *   Contact Person
    *   Email
    *   Phone
    *   Date
    *   Time
    *   Notes
    *   Customer ID
3.  Select the correct options for:
    *   Inquiry Type
    *   Status
    *   Assigned Tool
    *   Status Counter

## Field-by-Field Explanation

*   **Customer Name** (`customer_name`, text, optional): Enter the customer's name.
*   **Inquiry Type** (`inquiry_type`, select_one, required): Choose the type of inquiry from the provided options.
*   **Description** (`description`, text, required): Briefly describe the customer's inquiry.
*   **Status** (`status`, select_multiple, required): Select the current status of the inquiry (Active/Inactive).
*   **Contact Person** (`contact_person`, text, optional): Enter the customer contact person's name.
*   **Email** (`email`, email, optional): Enter the customer's email address.
*   **Phone** (`phone`, text, optional): Enter the customer's phone number.
*   **Date** (`date`, date, required): Select the date of the inquiry.
*   **Time** (`time`, time, required): Select the time of the inquiry.
*   **Notes** (`notes`, note, optional): Add any additional notes about the inquiry.
*   **Assigned Tool** (`assigned_tool`, select_one, required): Choose the tool assigned to the inquiry.
*   **Customer ID** (`customer_id`, number, optional): Enter the customer ID.
*   **Updated By** (`updated_by`, text, required): Enter the person updating the status.
*   **Updated By Counter** (`updated_by_counter`, number, required): Enter the counter ID of the person updating the status.
*   **Created By Counter** (`created_by_counter`, number, required): Enter the counter ID of the person creating the inquiry.
*   **Status Counter** (`status_counter`, select_multiple, required): Select the status of the inquiry for the counter.
*   **Updated At** (`updated_at`, date, required): Select the date and time of the last update.
*   **Created By** (`created_by`, text, required): Enter the person creating the inquiry.
*   **Created Date** (`created_date`, date, optional): Select the date the inquiry was created.
*   **Created By Counter** (`created_by_counter`, number, optional): Enter the counter ID of the person creating the inquiry.
*   **Counter** (`counter`, number, required): Enter the counter ID.
*   **Counter Inquiry Log ID** (`counter_inquiry_log_id`, number, required): Enter the inquiry log ID.
*   **Counter Inquiry ID** (`counter_inquiry_id`, number, required): Enter the inquiry ID.
*   **Updated By Counter** (`updated_by_counter`, number, required): Enter the counter ID of the person updating the status.

Tips:

*   Make sure to select the correct status levels (Active/Inactive) for the inquiry and counter.
*   Update the status accordingly based on the inquiry's progress.
*   Use the provided fields to capture detailed information about each inquiry.
*   Ensure that all required fields are filled out to prevent incomplete or inaccurate data.
