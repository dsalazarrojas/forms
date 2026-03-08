<thinking>
This form is intended for users to calculate future dates by adding a specified number of days to a given start date. The form is designed to provide a simple and efficient way to calculate projected dates in various scenarios, such as business or calendar days. The user is asked to select a start date, the number of days to add, and the calculation method (e.g., standard calendar days, business days, or working days). The calculated date is then displayed, and the user can confirm its accuracy.
</thinking>

# Add Days - Date Calculation Form - Help Guide

## Purpose
This form is designed to calculate future dates by adding a specified number of days to a given start date. It helps users to project dates in various scenarios, such as business or calendar days.

## How To Complete This Form

1.  Select the start date for the calculation.
2.  Enter the number of days to add to the start date.
3.  Choose the calculation method (e.g., standard calendar days, business days, or working days).
4.  Review the calculated date and confirm its accuracy.

## Field-by-Field Explanation

*   **-- Date Calculation Tool --** (`calc_intro`, note, required: false): This is a introductory note explaining the form's purpose.
*   **Select Start Date** (`start_date`, date, required: true): Enter the initial date for the calculation. This date will be used as the base for the calculation.
*   **Number of Days to Add** (`days_to_add`, number, required: true): Enter the whole number of days to add to the start date.
*   **Calculation Logic** (`calculation_method`, select_one, required: true): Choose the type of days to add:
    +  **Calendar Days (Standard)**: This will add the specified number of days to the start date, including weekends.
    +  **Business Days Only (Excl. Weekends)**: This will add the specified number of days to the start date, excluding weekends.
    +  **Working Days (Excl. Weekends and Holidays)**: This will add the specified number of days to the start date, excluding weekends and holidays.
*   **-- Calculation Result --** (`result_header`, note, required: false): This is a note indicating that this section contains the calculated date.
*   **Calculated Target Date** (`projected_date`, date, required: false): This is the calculated date resulting from adding the specified number of days to the start date.
*   **Project or Reference Name** (`project_reference`, text, required: false): This field is optional and allows users to add a reference name or project ID to the calculation for their records.
*   **I confirm the calculated date is correct for my records** (`user_confirmation`, select_one, required: true): Verify that the calculated date is accurate for your records before proceeding.
