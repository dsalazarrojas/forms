<thinking>
This form is intended to collect information from shareholders regarding their financial reports. The purpose of this form is to gather essential details from shareholders about their selected reporting period, total shares owned, percentage owned, and submission status. This form is crucial in ensuring accurate and up-to-date financial information for business decision-making purposes. It is recommended that each field is filled accurately and correctly to avoid delays in processing the financial reports.
</thinking>

# Shareholder Financial Report Voting Form - Help Guide
## Purpose
The Shareholder Financial Report Voting Form is designed to collect crucial information from shareholders about their financial reports. This includes details about the selected reporting period, total shares owned, and submission status. The collected data helps businesses make informed decisions regarding financial investments and strategic planning.
## How To Complete This Form
- Please ensure that you have selected the correct reporting period (Quarterly, Semi-Annual, or Annual).
- Choose at least one reporting period if not required (Q1, Q2, Q3, Q4).
- Enter your name as you would like it to be displayed on the report.
- If required, enter your email address for contact purposes.
- Enter a valid phone number for easy communication.
- Select your submission status from the available options (Pending, Approved, Rejected).
## Field-by-Field Explanation
- **User Name**: Enter your name as you would like it to be displayed on the report.
  (`user_name`, text, required: false)
- **Selected Reporting Period**: Choose the reporting period that applies to your financial report (Quarterly, Semi-Annual, or Annual).
  (`selected_reporting_period`, select_one, required: true)
- **Reporting Period**: Select at least one reporting period if required (Q1, Q2, Q3, Q4).
  (`reporting_period`, select_multiple, required: false)
- **Total Shares Owned**: Enter the total number of shares you own.
  (`total_shares_owned`, number, required: false)
- **Percentage Owned**: Enter the percentage of shares you own.
  (`percentage_owned`, number, required: false)
- **Email**: Enter your email address for contact purposes.
  (`email`, email, required: false)
- **Phone Number**: Enter a valid phone number for easy communication.
  (`phone_number`, text, required: false)
- **Submission Date**: Enter the date of submission (not required, but recommended for tracking purposes).
  (`submission_date`, date, required: false)
- **Submission Time**: Enter the time of submission (not required, but recommended for tracking purposes).
  (`submission_time`, time, required: false)
- **Submission Note**: Enter any additional comments or notes about your submission.
  (`submission_note`, note, required: false)
- **Submission Status**: Select your submission status from the available options (Pending, Approved, Rejected).
  (`submission_status`, select_one, required: true)
- **Submission Status Hint**: Please select an option from above.
  (`submission_status_hint`, text, required: false)
