# Valve Inspection Checklist - Help Guide
## Purpose
The purpose of this form is to facilitate the inspection and maintenance of valves within an asset or equipment. It serves as a tool for capturing critical information about each valve's status, condition, and maintenance needs.

## How to Complete This Form
To complete this form, simply follow these steps:

1. Enter **General Information** (Section 1) with the following details:
	* **Asset ID**, **Asset Name**, and **Location** are essential fields that help identify the specific asset being inspected.
	* **Inspection Date** is where you'll record the date of the inspection.
	* **Technician** is where you'll enter your name or ID.
2. In the **Valve Details** (Section 2), choose the correct status of the valve from the available options (Normal, Leaking, Closed, Open, Sticky, or Stuck).
3. The **Photo Evidence** (Section 3) is a space to attach any relevant photos or notes about the valve's condition.
4. In the **Valve Status** (Section 4), select the current status of the valve (Normal, Warning, Critical, or Emergency).
5. In the **Maintenance Plan** (Section 5), provide any necessary maintenance or repair plans for the valve.
6. If applicable, choose the **Recommended Replacements** (Section 13) for the valve.

## Field-by-Field Explanation
* **Asset ID** (`asset_id`, number, required): Enter the unique identifier of the asset being inspected.
* **Asset Name** (`asset_name`, text, required): Enter the name of the asset being inspected.
* **Location** (`location`, text, required): Enter the location where the asset is situated.
* **Inspection Date** (`inspection_date`, date, required): Record the date of the inspection.
* **Technician** (`technician`, text, required): Enter your name or ID as the technician performing the inspection.
* **General Information** (`general_info`, text, required): Enter any relevant information about the inspection.
* **Valve Details** (`valve_details`, select_multiple, required): Choose the status of the valve from the available options (Normal, Leaking, Closed, Open, Sticky, or Stuck).
* **Photo Evidence** (`photo_evidence`, note, required): Attach any relevant photos or notes about the valve's condition.
* **Valve Status** (`valve_status`, select_one, optional): Select the current status of the valve (Normal, Warning, Critical, or Emergency).
* **Maintenance Plan** (`maintenance_plan`, text, required): Provide any necessary maintenance or repair plans for the valve.
* **Recommended Replacements** (`recommended_replacements`, text, required): If applicable, enter recommended replacements for the valve.
* **Inspection Result** (`inspection_result`, select_one, optional): Select the outcome of the inspection (Pass, Fail, or Not Applicable).
* **Asset Condition** (`asset_condition`, select_multiple, optional): Choose the condition of the asset (Good, Fair, or Poor).
* **Maintenance Schedule** (`maintenance_schedule`, select_one, optional): Select the maintenance schedule for the valve (Immediate, Within 30 days, Within 1 week, Within 1 month, Within 6 months, or Within 1 year).
