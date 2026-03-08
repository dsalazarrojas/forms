The purpose of the Air Filtration System Maintenance Checklist is to gather critical information about the status of air filtration systems, ensuring their optimal performance and longevity. This form helps maintenance technicians to systematically inspect and report on the condition of filters, motors, and other critical components of the system. The goal is to prevent premature wear and tear, reduce downtime, and improve overall system efficiency. Please ensure that you only fill out this form for air filtration systems that require maintenance and follow the guidelines and instructions provided.

# Air Filtration System Maintenance Checklist - Help Guide
## Purpose
This form is designed to collect essential data on the condition and performance of air filtration systems, aiding technicians in identifying areas of concern and scheduling necessary maintenance.
## How To Complete This Form
To fill out this form accurately and effectively, follow these steps:

1.  Fill in the **Technician Name** field with your name.
2.  Ensure the **Date of Service** reflects the current date.
3.  Enter the **Unit ID** as the unit number or tag number assigned to the system.
4.  Check the **Filter Status (Visual)** carefully and choose the correct option: Clean, Slightly Dirty, Dirty, or Clogged / Replace Immediately.
5.  Answer the question "Was the Pre-Filter Changed?" with the corresponding option: True, False, or N/A.
6.  Answer the question "Was the HEPA/Main Filter Changed?" with the corresponding option: True, False, or N/A.
7.  Enter the **Airflow Reading (CFM)** in the cubic feet per minute (CFM) unit.
8.  Record the **Motor Amperage Draw** in the required format.
9.  Report the status of the **Fan Belt Tension**: OK, Adjusted, Replaced, or N/A (if directly driven).
10.  Indicate if the **Housing** has been cleaned: True or False.
11.  Schedule the **Next Service Due Date** for follow-up services.

## Field-by-Field Explanation
* **Technician Name** (`tech_name`, text, required): Enter your name as the maintenance technician.
* **Date of Service** (`date`, date, required): Record the current date for this maintenance event.
* **Unit ID** (`unit_id`, text, required): Provide the unit number or tag number assigned to the system.
* **Filter Status (Visual)** (`filter_status`, select_one, required): Choose from the options provided to describe the condition of main filters:
	+ Clean: Filters are new and free of contaminants.
	+ Slightly Dirty: Filters show some signs of wear but still function well.
	+ Dirty: Filters are heavily clogged and require immediate replacement.
	+ Clogged / Replace Immediately: Filters are severely clogged and need immediate replacement.
* **Pre-Filter Changed?** (`pre_filter_changed`, select_one, required): Answer if the pre-filter has been replaced:
	+ True: The pre-filter has been changed.
	+ False: The pre-filter has not been changed.
	+ N/A: Not applicable or unknown.
* **HEPA/Main Filter Changed?** (`hepa_filter_changed`, select_one, required): Answer if the HEPA/main filter has been replaced:
	+ True: The HEPA/main filter has been changed.
	+ False: The HEPA/main filter has not been changed.
	+ N/A: Not applicable or unknown.
* **Airflow Reading (CFM)** (`airflow_reading`, number, required): Record the air flow reading in cubic feet per minute (CFM).
* **Motor Amperage Draw** (`motor_amps`, number, required): Record the motor current load in the required format.
* **Fan Belt Tension** (`fan_belt`, select_one, required): Report the fan belt tension:
	+ OK: The belt is in good condition.
	+ Adjusted: The belt requires adjustment.
	+ Replaced: The belt has been replaced.
	+ N/A (Direct Drive): The system is not belt-driven.
* **Housing Cleaned?** (`housing_cleaned`, select_one, required): Indicate if the housing has been cleaned:
	+ True: The housing has been wiped down.
	+ False: The housing has not been cleaned.
* **Next Service Due Date** (`next_service`, date, required): Schedule the next service date for follow-up.
