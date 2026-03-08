<thinking>
To create an effective help guide for this form, we need to consider the following:

This form is for setting up an autodialer schedule, which suggests it's used for automating phone calls to a list of contacts. The purpose of this form is to configure the autodialer settings, including the campaign name, department name, campaign type, schedule details, call configuration, and more. The key fields in this form are:

*   Campaign name: A unique name for the outbound campaign.
*   Department name: The internal department requesting the setup.
*   Campaign type: The primary purpose of the calls (e.g., Sales, Customer Support, etc.).
*   Scheduling details: The start and end dates for the campaign, as well as the daily start and end times.
*   Operating days: The days of the week when the campaign will run.
*   Call configuration: Settings for concurrent call limit, retry on no answer, and maximum retries per number.
*   Contact list file: The uploaded CSV or Excel file containing the contact list.
*   Caller ID display name: The name shown on recipients' phones.
*   Setup notes or script link: Any additional technical details or link to the call script.

We'll aim to provide clear explanations for each field to help users complete the form correctly and effectively.
</thinking>

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
