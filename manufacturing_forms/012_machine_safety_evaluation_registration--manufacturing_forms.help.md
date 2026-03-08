# Machine Safety Evaluation Registration - Help Guide
## Purpose
This form is used to register the safety evaluation data for a machine. It helps to ensure that machines are properly inspected and maintained to prevent accidents and ensure regulatory compliance.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the machine ID, which is a unique identifier for the machine.
2. Select the inspection frequency for the machine (e.g., Quarterly, Semi-Annual, Monthly, Annually).
3. Indicate the machine's inspection status (e.g., Active, Inactive).
4. Enter the machine model number.
5. Describe any safety hazards associated with the machine.
6. Select the compliance status for the machine (e.g., Not compliant, Compliant, Partially compliant).
7. Provide a detailed description of any corrective actions taken or planned.
8. Enter any notes or comments about the machine's safety evaluation.

## Field-by-Field Explanation

* **Machine ID** (`machine_id`, number, required): This is a unique identifier for the machine. Enter the machine ID number.
* **Inspection Frequency** (`inspection_frequency`, select_one, required): This field indicates how often the machine is inspected. Select from the options: Quarterly, Semi-Annual, Monthly, Annually.
* **Inspection Status** (`inspection_status`, select_multiple, required): This field indicates whether the machine's inspection is active or inactive. Select from the options: Active, Inactive.
* **Machine Model** (`machine_model`, text, required): Enter the machine model number or description.
* **Safety Hazard** (`safety_hazard`, text, required): Describe any safety hazards associated with the machine.
* **Compliance Status** (`compliance_status`, select_one, required): This field indicates the machine's compliance status. Select from the options: Not compliant, Compliant, Partially compliant.
* **Corrective Action** (`corrective_action`, text, required): Provide a detailed description of any corrective actions taken or planned.
* **Notes** (`notes`, note, required): Enter any additional comments or notes about the machine's safety evaluation.
