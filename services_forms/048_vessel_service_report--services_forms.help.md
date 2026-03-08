# vessel_service_report - Help Guide
## Purpose

The "vessel_service_report" form is used to document and track the condition of a vessel, including its current status and any services or maintenance performed on it.

## How To Complete This Form

1. Review the form instructions carefully to ensure that you are completing the form accurately and consistently for each vessel.
2. Select the correct vessel type from the dropdown menu.
3. Enter the date and time the service was performed, if applicable.
4. Choose the current status of the vessel (Active or Inactive).
5. Indicate whether the vessel is assigned to someone or something.
6. Indicate whether a tool is assigned to the vessel.
7. Enter any additional remarks or comments about the vessel's condition.

## Field-by-Field Explanation

* **vessel_type** (`vessel_type`, select_multiple, required): Select the type of vessel (e.g. boat, aircraft, vehicle).
* **service_date** (`service_date`, date, required): Enter the date the service was performed (if applicable).
* **service_time** (`service_time`, time, required): Enter the time the service was performed (if applicable).
* **vessel_status** (`vessel_status`, select_one, required): Choose the current status of the vessel (Active or Inactive).
* **assigned_to** (`assigned_to`, select_one, required): Indicate whether the vessel is assigned to someone or something.
* **assigned_tool** (`assigned_tool`, select_one, required): Indicate whether a tool is assigned to the vessel.
* **remarks** (`remarks`, note, required): Enter any additional remarks or comments about the vessel's condition.
