# Machine Safety Evaluation Registration - Help Guide
## Purpose
This form is used to document a machine's safety evaluation status, enabling ongoing risk assessment and corrective actions to be taken.

## How To Complete This Form
To complete this form, follow the steps below:

1. Determine whether the machine is safe to operate or not.
	* Select 'Yes' if the machine is safe to operate.
	* Select 'No' if the machine is not safe to operate.
2. Specify the facility where the machine is located.
3. Enter the name of the facility where the machine is located.
4. Identify the type of the machine.
5. Describe the location of the hazard associated with the machine.
6. Provide a brief description of the hazard.
7. If necessary, describe the corrective action taken to address the hazard.
8. Enter the effective date of the corrective action.
9. Specify the current compliance status of the machine.
	* Select 'Active' if the machine is compliant.
	* Select 'Inactive' if the machine is non-compliant.
10. Assign a safety rating to the machine, based on its assessed risk level.
11. Determine the risk level associated with the machine.
	* Select 'High' if the machine poses a significant risk.
	* Select 'Low' if the machine poses a minimal risk.
12. Set the date for the next review of the machine's safety status.
13. Confirm whether the task is completed or not.
14. Provide any reviewer comments, if needed.

## Field-by-Field Explanation

* **Is the machine safe to operate?** (`machine_safety_evaluation_form`, select_one, required)
	+ This field determines if the machine is currently safe to operate.
* **Where is the facility located?** (`facility_location`, text, required)
	+ Enter the specific location where the machine is housed.
* **Facility name** (`facility_name`, text, required)
	+ Provide the name of the facility where the machine is located.
* **Type of the machine** (`machine_type`, text, required)
	+ Specify the type of machine (e.g., industrial robot, forklift, etc.).
* **Where is the hazard located?** (`hazard_location`, text, required)
	+ Indicate the location of the hazard associated with the machine.
* **Description of the hazard?** (`hazard_description`, text, required)
	+ Provide a brief description of the hazard.
* **Corrective action taken?** (`corrective_action`, text, optional)
	+ If applicable, describe any corrective actions taken to address the hazard.
* **Effective date of corrective action?** (`corrective_action_date`, date, optional)
	+ Enter the date when the corrective action was implemented.
* **Compliance status?** (`compliance_status`, select_one, required)
	+ Specify the machine's current compliance status.
* **Safety rating** (`safety_rating`, number, required)
	+ Assign a numerical safety rating based on the risk level (e.g., 1-5).
* **Risk level?** (`risk_level`, select_one, required)
	+ Assess the risk level associated with the machine (High, Low).
* **Next review date?** (`review_date`, date, optional)
	+ Set the date for the next review of the machine's safety status.
* **Is the task completed?** (`completed`, select_one, required)
	+ Confirm whether the task is completed or not.
* **Reviewer comments?** (`reviewer_comments`, note, optional)
	+ Provide any additional comments from the reviewer, if needed.
