# factory_operation_efficiency_report_request_form - Help Guide
## Purpose
The factory operation efficiency report request form is used to request an efficiency report for a specific production line. This form captures relevant information such as production line, date, shift, machine ID, efficiency percentage, and any comments.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the **Production Line** where the efficiency report is needed.
2. Enter the **Date** of the report request.
3. Select the **Shift** during which the report is needed.
4. Enter the **Machine ID** for which the report is requested.
5. Provide the **Efficiency Percentage** for the production line.
6. Optionally, enter any **Comments** regarding the request.
7. Select the **Submit** button to confirm your request.

## Field-by-Field Explanation
* **Production Line** (`production_line`, text, required): Enter the name of the production line where you want to request an efficiency report.
* **Date** (`date`, date, required): Enter the date for which you want to request an efficiency report.
* **Shift** (`shift`, text, required): Select the shift during which the report is needed.
* **Machine ID** (`machine_id`, text, required): Enter the machine ID for which you want to request an efficiency report.
* **Efficiency Percentage** (`efficiency_percentage`, number, required): Enter the efficiency percentage for the production line.
* **Comments** (`comments`, note, optional): Provide any additional comments or notes for the report request.
* **Submit** (`submit`, select_one, required): Select this button to confirm your request for an efficiency report.
