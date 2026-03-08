<thinking>...</thinking>

# Antenna Maintenance Checklist - Help Guide
## Purpose
The Antenna Maintenance Checklist is a form used to assess the condition of antenna systems, providing a systematic approach to identifying potential issues and scheduling maintenance. This document serves as a guide for completing the form accurately and effectively.

## How To Complete This Form
1. Ensure you have all necessary information and equipment before starting the inspection.
2. Read each field description carefully and fill in the corresponding information or select the relevant options.
3. Complete all required fields before submitting the form.

## Field-by-Field Explanation

* **-- Site Information --** (`site_info_header`, note, required: false): This field is used to provide a brief overview of the site being inspected. You can enter any relevant details or notes about the site.
* **Site ID** (`site_id`, text, required: true): Enter the unique identification number for the site.
* **Technician Name** (`technician_name`, text, required: true): Enter your name as the technician performing the inspection.
* **Inspection Date** (`inspection_date`, date, required: true): Enter the date of the inspection.
* **Antenna Type** (`antenna_type`, select_one, required: true): Select the type of antenna being inspected (e.g., Yagi, Omnidirectional, Panel, etc.).
* **Visual Inspection of Mast and Mounts** (`mast_condition`, select_one, required: true): Assess the condition of the mast and mounts, checking for signs of rust, loose bolts, or structural damage. Choose "Pass" if no issues are found, "Fail" if issues are present, or "Requires Attention" if minor issues are found.
* **Coaxial Cable Condition** (`cable_integrity`, select_one, required: true): Check for signs of damage, such as cracks, fraying, or UV damage. Choose "Pass" if no issues are found, "Fail" if issues are present, or "Requires Attention" if minor issues are found.
* **Connector Weatherproofing Status** (`connector_seal`, select_one, required: true): Verify that the sealant or tape is intact and functioning correctly. Choose "Good" if the seal is intact, "Degraded" if it's partially intact, or "Missing" if the seal is non-existent.
* **Measured Signal Strength (dBm)** (`signal_strength`, number, required: true): Measure and record the signal strength in dBm.
* **Standing Wave Ratio (SWR) Reading** (`swr_reading`, number, required: true): Measure and record the SWR reading.
* **Lightning Protection and Grounding Check** (`grounding_status`, select_one, required: true): Check the lightning protection and grounding system, ensuring it's properly grounded. Choose "Properly Grounded" if it's functioning correctly, "Grounding Faulty" if there's a fault, or "No Grounding Found" if it's not present.
* **Weather Conditions During Inspection** (`weather_at_time`, select_one, required: false): Optional field for recording the weather conditions during the inspection.
* **Maintenance Recommendations** (`recommendations`, text, required: true): Provide any necessary maintenance recommendations for the antenna system.
* **Recommended Next Inspection Date** (`next_inspection`, date, required: false): Optional field for scheduling the next inspection date.

Note:
- Make sure to answer all required fields before submitting the form.
- If you're unsure about any field, refer to the provided hints or seek guidance from a relevant expert.
- This guide is intended to be used in conjunction with other relevant safety protocols and procedures.
