<thinking>
This form is designed to track earnings reports for companies. It is intended for companies that release earnings reports on a regular basis, and users will use it to track the status and details of these reports. The form should be used by financial analysts, investors, and other stakeholders who need to monitor earnings reports for companies across various sectors.

To avoid redundancy and ensure accuracy, please do not use this form to track earnings reports for companies that do not regularly release earnings reports or do not require frequent monitoring.</thinking>

# Earnings Report Date Tracker Form - Help Guide
## Purpose
The Earnings Report Date Tracker Form is designed to track earnings reports for companies across various sectors. This form helps users to monitor the status and details of these reports.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the report status (Pending, Released, Delayed, or Cancelled) for the company's earnings report.
2. Choose the sector in which the company operates (Financial, Industrials, Healthcare, Technology, Consumer, or Other).
3. Enter the company name (if required).
4. Select the report frequency (Daily, Quarterly, or Annually).
5. Provide any additional submission notes.

## Field-by-Field Explanation

* **Report Date** (`report_date`, date, required: false): Enter the date of the report, if applicable.
* **Ticker Symbol** (`ticker_symbol`, text, required: false): Enter the ticker symbol for the company (if available).
* **Report Announcement Date** (`report_announcement_date`, date, required: false): Enter the date when the report was announced.
* **Earnings Release Date** (`earnings_release_date`, date, required: false): Enter the date when the report was released.
* **Report Status** (`report_status`, select_one, required: true): Select the status of the report (Pending, Released, Delayed, or Cancelled).
* **Company Sector** (`company_sector`, select_multiple, required: true): Choose the sector in which the company operates (Financial, Industrials, Healthcare, Technology, Consumer, or Other).
* **Company Name** (`company_name`, text, required: false): Enter the name of the company (if required).
* **Report Frequency** (`report_frequency`, select_one, required: false): Select the frequency of the report (Daily, Quarterly, or Annually).
* **Report Frequency Details** (`report_frequency_details`, text, required: false): Provide any additional details about the report frequency.
* **Submission Notes** (`submission_notes`, note, required: false): Enter any additional comments or notes about the submission.

Note: Fields with required: false can be left blank if not applicable.
