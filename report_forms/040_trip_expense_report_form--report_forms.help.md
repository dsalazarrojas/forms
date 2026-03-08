This form is designed to collect information about a trip, including the trip type, start and end dates, location, purpose, and any expenses incurred during the trip. The purpose of this form is to provide a structured way for users to submit trip-related information, which can be used for various purposes such as expense tracking, trip planning, or reporting. 

Before filling out the form, ensure that you have all the necessary information about the trip, including the start and end dates, location, and any expenses incurred. This form should not be used to report multiple trips, as each trip is treated as a distinct event.

When filling out the form, start with the Trip Information page, which provides a summary of the trip details.

### trip_expense_report_form - Help Guide

## Purpose
This form is designed to collect information about a trip, including the trip type, start and end dates, location, purpose, and any expenses incurred during the trip.

## How To Complete This Form
To complete this form, follow these steps:

1. Go to the Trip Information page and fill in the necessary details about the trip.
2. On the trip_type page, select the relevant option to specify the type of trip.
3. Enter the start and end dates of the trip using the date picker.
4. In the location field, enter the location of the trip.
5. In the purpose field, describe the reason for the trip.
6. If applicable, select the type of expenses incurred during the trip.
7. Enter the amount of expenses in the amount field.
8. Add any additional notes about the trip in the notes field.

## Field-by-Field Explanation

- **Trip Information** (`trip_page`, note, required: false): This page provides a summary of the trip details.
- **trip_type** (`trip_type`, select_one, required: false): Select the type of trip to specify its nature.
  - Option 1
  - Option 2
  - Option 3
- **start_date** (`start_date`, date, required: false): Enter the start date of the trip using the date picker.
- **end_date** (`end_date`, date, required: false): Enter the end date of the trip using the date picker.
- **location** (`location`, text, required: false): Enter the location where the trip took place.
- **purpose** (`purpose`, text, required: false): Describe the reason for the trip.
- **expense_type** (`expense_type`, select_multiple, required: false): Select the type of expenses incurred during the trip.
  - Option 1
  - Option 2
  - Option 3
- **amount** (`amount`, number, required: false): Enter the total amount of expenses.
- **notes** (`notes`, note, required: false): Add any additional notes about the trip.

## Tips

- Ensure that you have all the necessary information about the trip before filling out the form.
- If you are unsure about any of the fields, refer to the trip information page for a summary of the trip details.
- This form is designed to be used for a single trip, so ensure that you are filling out the form for a specific trip and not multiple trips.
