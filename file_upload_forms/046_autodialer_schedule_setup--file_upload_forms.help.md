# Autodialer Schedule Setup - Help Guide
## Purpose
This form is used to set up the autodialer schedule for an outbound campaign. It requires specific information to configure the campaign settings for successful execution.

## How To Complete This Form

To complete this form, follow these steps:

1.  Fill in the required fields with the necessary information for the campaign.
2.  Choose the correct campaign type and operating days.
3.  Set up the scheduling details, including start and end dates, daily start and end times.
4.  Configure the call settings, such as concurrent call limit, retry on no answer, and maximum retries per number.
5.  Upload the contact list file and choose the caller ID display name.
6.  Add any additional setup notes or link to the call script.

## Field-by-Field Explanation

*   **Campaign Name** (`campaign_name`, `text`, `true`): Enter a unique name for this campaign.
*   **Department Name** (`department_name`, `text`, `true`): Enter the internal department requesting this setup.
*   **Campaign Type** (`campaign_type`, `select_one`, `true`): Select the primary purpose of the calls (e.g., Sales, Customer Support, etc.).
*   **Campaign Start Date** (`campaign_start_date`, `date`, `true`): Enter the start date of the campaign.
*   **Campaign End Date** (`campaign_end_date`, `date`, `true`): Enter the end date of the campaign.
*   **Daily Start Time** (`daily_start_time`, `time`, `true`): Enter the earliest time to place calls.
*   **Daily End Time** (`daily_end_time`, `time`, `true`): Enter the latest time to place calls.
*   **Operating Days** (`operating_days`, `select_multiple`, `true`): Select the days of the week for the campaign (e.g., Monday to Sunday).
*   **Concurrent Call Limit** (`concurrent_call_limit`, `number`, `true`): Set the maximum number of simultaneous calls.
*   **Retry on No Answer** (`retry_on_no_answer`, `select_one`, `true`): Choose whether to redial unanswered numbers.
*   **Maximum Retries per Number** (`max_retries`, `number`, `true`): Set the number of attempts before skipping a number.
*   **Contact List File Name** (`contact_list_file`, `text`, `true`): Enter the name of the uploaded CSV or Excel file.
*   **Caller ID Display Name** (`caller_id_name`, `text`, `false`): Optionally, enter the name shown on recipients' phones.
*   **Setup Notes or Script Link** (`setup_notes`, `text`, `false`): Add any additional technical details or link to the call script.

## Tips

*   Double-check the campaign type to ensure it aligns with the campaign purpose.
*   Verify the start and end dates, and daily start and end times for accurate scheduling.
*   Set the correct operating days for the campaign to avoid conflicts.
*   Be cautious with the concurrent call limit to avoid overloading the system.
*   Ensure the maximum retries per number is set to an appropriate value to avoid overwhelming users.
*   Upload the correct contact list file for the campaign.
*   Add any necessary setup notes or script links for reference.
