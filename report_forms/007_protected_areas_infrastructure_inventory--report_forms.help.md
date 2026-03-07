<thinking> 
This form is intended to gather information about the infrastructure in protected areas, which may include parks, monuments, or other protected sites that require maintenance and upkeep to ensure their condition and safety. The purpose of the form is to provide a structured way to capture relevant details about the infrastructure, including its type, condition, and maintenance status. The form is likely used by maintenance teams to identify areas that require urgent attention or to track ongoing maintenance activities.

</thinking>
# Protected Areas Infrastructure Inventory - Help Guide

## Purpose
This form is designed to collect information about the infrastructure in protected areas, including its condition, maintenance status, and other relevant details.

## How To Complete This Form
To complete this form, follow these steps:
- Select the type of asset you are reporting on, such as "Yes" or "No".
- Rate the condition of the asset, such as "Good" or "Fair".
- Provide a description of the asset and its location.
- Indicate if there are photos available for the asset.
- Select the status of the asset, such as "Active" or "Inactive".
- Enter the date and time of the last maintenance.
- Enter the person responsible for the last maintenance.
- Enter the position of the person responsible for the last maintenance.
- Indicate if maintenance is required for the asset, such as "Yes" or "No".
- Select the status of the maintenance, such as "Active" or "Inactive".
- Rate the condition of the asset, such as "Yes" or "No".
- Provide a description of the asset.
- Add any additional notes or comments about the asset.

## Field-by-Field Explanation

* **Asset Type** (`asset_type`, select_one, required: false): Select "Yes" or "No" to indicate if the asset is in a protected area or not.
* **Condition Rating** (`condition_rating`, select_one, required: false): Rate the condition of the asset as "Good", "Fair", or other options as needed.
* **Condition Description** (`condition_description`, text, required: false): Provide a brief description of the asset's condition.
* **Infrastructure Type** (`infrastructure_type`, select_one, required: false): Select "Yes" or "No" to indicate if the asset is an infrastructure type or not.
* **Location Name** (`location_name`, text, required: false): Enter the name of the location where the asset is situated.
* **Location Description** (`location_description`, text, required: false): Enter a brief description of the location where the asset is situated.
* **Photos** (`photos`, text, required: false): Indicate if there are photos available for the asset.
* **Asset Status** (`asset_status`, select_one, required: false): Select "Active" or "Inactive" to indicate the status of the asset.
* **Last Maintenance Date** (`last_maintenance_date`, date, required: false): Enter the date of the last maintenance.
* **Last Maintenance By** (`last_maintenance_by`, text, required: false): Enter the name of the person responsible for the last maintenance.
* **Last Maintenance By Position** (`last_maintenance_by_position`, text, required: false): Enter the position of the person responsible for the last maintenance.
* **Last Maintenance Date** (`last_maintenance_by_date`, date, required: false): Enter the date of the last maintenance.
* **Last Maintenance Time** (`last_maintenance_by_time`, time, required: false): Enter the time of the last maintenance.
* **Maintenance Frequency** (`maintenance_frequency`, select_one, required: false): Indicate if maintenance is required for the asset, such as "Yes" or "No".
* **Maintenance Status** (`maintenance_status`, select_one, required: false): Select "Active" or "Inactive" to indicate the status of the maintenance.
* **Asset Condition** (`asset_condition`, select_one, required: false): Rate the condition of the asset as "Yes" or "No".
* **Infrastructure Description** (`infrastructure_description`, text, required: false): Enter a brief description of the asset.
* **Notes** (`notes`, note, required: false): Add any additional comments or notes about the asset.
