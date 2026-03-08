# Machine Safety Evaluation Registration - Help Guide
## Purpose
The Machine Safety Evaluation Registration form is used to collect data on the safety status of machines within a facility. This form helps track the safety status of each machine, ensuring compliance with regulatory requirements and facilitating risk management.

## How To Complete This Form
- To start, ensure you are filling out this form for a machine safety evaluation and not for other purposes.
- Review the form and ensure you are not duplicating data for a machine already registered.
- Follow the instructions below for each field to complete the form accurately.

## Field-by-Field Explanation
- **Hazard** (`hazard_id`, select_one, required/optional): Indicate whether there is a hazard present or not. Select "Yes" if there is a known hazard, "No" otherwise.
- **Machine** (`machine_id`, number, required/optional): Enter the machine's ID number. This is a unique identifier for the machine.
- **Safety Manager** (`safety_manager`, select_multiple, required/optional): Identify the safety manager responsible for the machine. Select "Yes" if a safety manager is assigned, "No" otherwise.
- **Inspection Date** (`inspection_date`, date, required/optional): Enter the date of the inspection. This should be in the format MM/DD/YYYY.
- **Inspection Time** (`inspection_time`, time, required/optional): Enter the time of the inspection. This should be in the format HH:MM AM/PM.
- **Facility** (`facility_id`, select_multiple, required/optional): Indicate whether the machine is in a facility or not. Select "Yes" if the machine is located within a facility, "No" otherwise.
- **Compliance Status** (`compliance_status`, select_one, required/optional): Indicate the machine's compliance status. Select "Active" if the machine is compliant, "Inactive" otherwise.
- **Notes** (`notes`, note, required/optional): Enter any additional comments or notes about the machine's safety status.

## Tips
- Ensure all required fields are filled out accurately to maintain the form's integrity.
- If you're unsure about any field, consult with the safety manager or facility representative for guidance.
- Review the form regularly to ensure up-to-date safety data for the machines within the facility.
