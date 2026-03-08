# wind_turbine_inspection_check_in_form - Help Guide
## Purpose
This form is used to gather information on the current status of wind turbines, including inspection dates, site and turbine IDs, and any issues or comments.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the inspection date for the wind turbine.
2. Enter the site ID for the wind turbine.
3. Enter the turbine ID for the wind turbine.
4. Select the current status of the wind turbine (Active or Inactive).
5. Describe any issues or concerns with the wind turbine.
6. Select whether any tools were assigned to the wind turbine.
7. Enter any comments or notes for the wind turbine.
8. Select whether a wind turbine technician was assigned to the wind turbine.
9. Enter the date any issues or concerns were identified.
10. Describe any details about the issues or concerns.

## Field-by-Field Explanation
* **Inspection Date** (`inspection_date`, date, required): Enter the date of the current inspection.
* **site_id** (`site_id`, number, required): Enter the site ID for the wind turbine.
* **site_name** (`site_name`, text, optional): Enter the name of the site where the wind turbine is located.
* **turbine_id** (`turbine_id`, text, required): Enter the ID of the wind turbine.
* **Wind Turbine Status** (`wind_turbine_status`, select multiple, required): Select the current status of the wind turbine (Active or Inactive).
* **Issue Description** (`issue_description`, text, optional): Describe any issues or concerns with the wind turbine.
* **Assigned Tool** (`assigned_tool`, text, optional): Select whether any tools were assigned to the wind turbine.
* **Comments** (`comments`, text, optional): Enter any comments or notes for the wind turbine.
* **Wind Turbine Technician** (`wind_turbine_technician`, select one, optional): Select whether a wind turbine technician was assigned to the wind turbine.
* **Issue Date** (`issue_date`, date, optional): Enter the date any issues or concerns were identified.
* **Issue Description Details** (`issue_description_details`, text, optional): Describe any details about the issues or concerns.
