# expense-report-export-request-form - Help Guide
## Purpose
The Expense Report Export Request Form is a form designed to generate expense reports for a specified date range and category, exportable in different formats (CSV, JSON, or XLSX). This form helps employees or administrators request expense reports for specific dates and categories.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the desired date range using the "date-range" field.
2. Choose the category of expense report you need (e.g., "Business Forms" or "Business Report Forms").
3. Select the export format (CSV, JSON, or XLSX).
4. Choose how you want to receive the export (via Email, Export to CSV, or Export to Excel).
5. Optionally, specify the start and end dates for the export.

## Field-by-Field Explanation
* **date-range** (`date_range`, number, required: false): This field allows you to choose a specific date range for the export. Please enter a number that represents the number of days you want to export. For example, 14 for the last 14 days.
* **category** (`category`, select_one, required: false): Choose the category of expense report you need. Options are "Business Forms" and "Business Report Forms".
* **format** (`format`, select_one, required: false): Select the format of the export (CSV, JSON, or XLSX).
* **delivery-method** (`delivery_method`, select_one, required: false): Choose how you want to receive the export (Email, Export to CSV, or Export to Excel).
* **from-date** (`from_date`, date, required: false): If you want to specify a start date for the export, enter it here. Format should be MM/DD/YYYY.
* **to-date** (`to_date`, date, required: false): If you want to specify an end date for the export, enter it here. Format should be MM/DD/YYYY.
* **export-button** (no label, note, required: false): This is not a field for you to fill in. Click on it to proceed with the export request.
