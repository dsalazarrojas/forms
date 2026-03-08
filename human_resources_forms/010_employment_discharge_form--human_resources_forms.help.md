# Employment Discharge Form - Help Guide
## Purpose
The Employment Discharge Form is used to document the termination or resignation of an employee. This form is necessary for administrative and HR purposes to track employee discharges.

## How To Complete This Form
To complete this form, follow these steps:
1. Review the reason for discharge carefully and select the correct option from the list provided.
2. Enter the date of the last day of work and termination date accurately.
3. If you are selecting a reason for discharge that is not listed, provide a detailed explanation in the "Reason for Termination Other" section.
4. If applicable, enter the severance package details.

## Field-by-Field Explanation

* **employment_discharge_form** (`employment_discharge_form`, text, required): This is the main field where you will enter the reason for discharge. Please select one of the options provided or enter a detailed explanation if none are applicable.
* **reason_for_discharge** (`reason_for_discharge`, text, required): Enter the reason for discharge briefly.
* **reason_for_discharge_details** (`reason_for_discharge_details`, text, required): Provide a detailed explanation of the reason for discharge.
* **reason_for_discharge_code** (`reason_for_discharge_code`, select_one, required): Select one of the provided options for the reason for discharge.
	+ Options: Voluntary Resignation, Termination, LayOff, Death
* **last_day_of_work** (`last_day_of_work`, date, required): Enter the date of the last day of work.
* **termination_date** (`termination_date`, date, required): Enter the termination date.
* **reason_for_termination_other** (`reason_for_termination_other`, text, required): If none of the provided options are applicable, enter a detailed explanation of the reason for termination.
* **reason_for_termination_other_note** (`reason_for_termination_other_note`, text, optional): If you have additional information to provide regarding the reason for termination, enter it here.
* **reason_for_termination_other_code** (`reason_for_termination_other_code`, select_one, optional): Select the reason for termination other from the provided options.
	+ Options: Voluntary Resignation, Termination, LayOff, Death
* **reason_for_termination_other_reason** (`reason_for_termination_other_reason`, text, optional): Enter the reason for termination other if it does not fit into any of the provided categories.
* **last_day_of_pay** (`last_day_of_pay`, date, required): Enter the last day of pay for the employee.
* **last_pay_date** (`last_pay_date`, date, required): Enter the last pay date for the employee.
* **severance_package** (`severance_package`, number, optional): If applicable, enter the severance package details.
* **severance_package_amount** (`severance_package_amount`, text, optional): Enter the severance package amount.

## Tips
* Ensure that all fields are completed accurately and thoroughly.
* Review the form carefully before submitting it.
* If you are unsure about any field, please contact your HR representative for assistance.
