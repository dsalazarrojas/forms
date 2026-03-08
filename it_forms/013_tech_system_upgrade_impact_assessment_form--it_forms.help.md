# tech_system_upgrade_impact_assessment_form - Help Guide
## Purpose

This form is used to assess the impact of a technology system upgrade on an organization. It helps in understanding the potential effects of an upgrade on the organization's technical systems and processes.

## How To Complete This Form

1. Please answer each question carefully and thoroughly.
2. If you are unsure about any question, please consult with relevant stakeholders or experts.
3. Please provide concrete evidence or justifications for your answers where possible.

## Field-by-Field Explanation

* **tech_system_upgrade** (`tech_system_upgrade`, select_multiple, required/optional): This field asks about the type of technology system upgrade being considered. Please select all that apply.
	+ Yes: The upgrade is being considered for this technology system.
	+ No: The upgrade is not being considered for this technology system.
* **expected_impact** (`expected_impact`, select_one, required/optional): This field asks about the expected impact of the upgrade on the organization. Please select one option.
	+ High: The upgrade is expected to have a significant impact on the organization.
	+ Medium: The upgrade is expected to have a moderate impact on the organization.
	+ Low: The upgrade is expected to have a low impact on the organization.
* **tech_system_readiness** (`tech_system_readiness`, select_multiple, required/optional): This field asks about the readiness of the technology system for an upgrade. Please select all that apply.
	+ Yes: The technology system is ready for an upgrade.
	+ No: The technology system is not ready for an upgrade.
* **tech_readiness_level** (`tech_readiness_level`, select_one, required/optional): This field asks about the level of readiness of the technology system for an upgrade. Please select one option.
	+ High: The technology system is very ready for an upgrade.
	+ Medium: The technology system is moderately ready for an upgrade.
	+ Low: The technology system is not ready for an upgrade.
* **readiness_risks** (`readiness_risks`, select_multiple, required/optional): This field asks about the risks associated with the technology system's readiness for an upgrade. Please select all that apply.
	+ Yes: There are risks associated with the technology system's readiness for an upgrade.
	+ No: There are no risks associated with the technology system's readiness for an upgrade.
* **readiness_risks_level** (`readiness_risks_level`, select_one, required/optional): This field asks about the level of risk associated with the technology system's readiness for an upgrade. Please select one option.
	+ High: There are significant risks associated with the technology system's readiness for an upgrade.
	+ Medium: There are moderate risks associated with the technology system's readiness for an upgrade.
	+ Low: There are low risks associated with the technology system's readiness for an upgrade.
* **planned_upgrade_schedule** (`planned_upgrade_schedule`, date, required/optional): This field asks about the planned upgrade schedule. Enter a date in the format `YYYY-MM-DD`.
* **actual_upgrade_start_date** (`actual_upgrade_start_date`, date, required/optional): This field asks about the actual start date of the upgrade. Enter a date in the format `YYYY-MM-DD`.
* **actual_upgrade_complete_date** (`actual_upgrade_complete_date`, date, required/optional): This field asks about the actual completion date of the upgrade. Enter a date in the format `YYYY-MM-DD`.
* **tech_system_support_level** (`tech_system_support_level`, select_multiple, required/optional): This field asks about the level of support for the technology system. Please select all that apply.
	+ High: The technology system has a high level of support.
	+ Low: The technology system has a low level of support.
* **tech_support_level** (`tech_support_level`, select_one, required/optional): This field asks about the level of support for the technology system. Please select one option.
	+ High: The technology system has a high level of support.
	+ Medium: The technology system has a moderate level of support.
	+ Low: The technology system has a low level of support.
* **upgrade_risks** (`upgrade_risks`, select_multiple, required/optional): This field asks about the risks associated with the upgrade. Please select all that apply.
	+ Yes: There are risks associated with the upgrade.
	+ No: There are no risks associated with the upgrade.
* **upgrade_risks_level** (`upgrade_risks_level`, select_one, required/optional): This field asks about the level of risk associated with the upgrade. Please select one option.
	+ High: There are significant risks associated with the upgrade.
	+ Medium: There are moderate risks associated with the upgrade.
	+ Low: There are low risks associated with the upgrade.
* **actual_upgrade_cost** (`actual_upgrade_cost`, number, required/optional): This field asks about the actual cost of the upgrade. Enter a number in the format `####.##`.
* **actual_upgrade_cost_justification** (`actual_upgrade_cost_justification`, text, required/optional): This field asks for a justification of the actual cost of the upgrade. Please provide a brief explanation.
* **planned_upgrade_cost** (`planned_upgrade_cost`, number, required/optional): This field asks about the planned cost of the upgrade. Enter a number in the format `####.##`.
* **planned_upgrade_cost_justification** (`planned_upgrade_cost_justification`, text, required/optional): This field asks for a justification of the planned cost of the upgrade. Please provide a brief explanation.
* **tech_system_change_request** (`tech_system_change_request`, select_one, required/optional): This field asks about whether a change request is needed after the upgrade. Please select one option.
	+ True: A change request is needed after the upgrade.
	+ False: A change request is not needed after the upgrade.
* **actual_upgrade_status** (`actual_upgrade_status`, select_one, required/optional): This field asks about the status of the upgrade. Please select one option.
	+ Planned: The upgrade is planned.
	+ In Progress: The upgrade is in progress.
	+ Complete: The upgrade is complete.
