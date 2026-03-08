# energy_audit_check_in_form - Help Guide
## Purpose
The energy_audit_check_in_form is designed to collect information from building owners or managers for energy audit purposes. This form will help identify areas for improvement or optimization in a building's energy usage.

## How To Complete This Form
1. Please fill out the form carefully and thoroughly, ensuring that all required fields are completed.
2. If a field is not relevant to your building, please leave it blank or select "N/A" if applicable.
3. Use the "Yes" or "No" options for fields that require a simple binary response.
4. For fields with multiple options, select all applicable answers using a comma-separated list.

## Field-by-Field Explanation
* **energy_audit_check_in_form** (`energy_audit_check_in_form`, note, optional): This is a note field where you can enter any additional information or comments about the building.
* **building_name** (`building_name`, text, optional): Enter the name of the building.
* **address** (`address`, text, optional): Enter the address of the building.
* **building_type** (`building_type`, select_one, optional): Select "Yes" if the building is a certain type (e.g., commercial, residential).
* **building_square_footage** (`building_square_footage`, number, optional): Enter the square footage of the building.
* **building_age** (`building_age`, select_multiple, optional): Select all applicable answers for the building's age (e.g., "Yes" for yes, "No" for no, "Not Applicable").
* **number_of_floors** (`number_of_floors`, number, optional): Enter the number of floors in the building.
* **number_of_units** (`number_of_units`, number, optional): Enter the number of units in the building.
* **building_year_built** (`building_year_built`, date, optional): Enter the year the building was built.
* **building_year_renovated** (`building_year_renovated`, date, optional): Enter the year the building was renovated.
* **building_owner** (`building_owner`, email, optional): Enter the contact email of the building owner or manager.
* **building_manager** (`building_manager`, text, optional): Enter the name and title of the building manager.
* **building_contact_phone_number** (`building_contact_phone_number`, text, optional): Enter the contact phone number of the building.
* **building_notes** (`building_notes`, note, optional): This is a note field where you can enter any additional information or comments about the building.
* **building_energy_usage_data** (`building_energy_usage_data`, select_multiple, optional): Select all applicable answers for the building's energy usage data (e.g., "Yes" for yes, "No" for no, "Not Applicable").
* **building_electricity_cost** (`building_electricity_cost`, number, optional): Enter the electricity cost for the building.
* **building_gas_cost** (`building_gas_cost`, number, optional): Enter the gas cost for the building.
* **building_oil_cost** (`building_oil_cost`, number, optional): Enter the oil cost for the building.
* **building_water_cost** (`building_water_cost`, number, optional): Enter the water cost for the building.
* **building_heating_source** (`building_heating_source`, select_one, optional): Select the heating source (e.g., "Yes" for yes, "No" for no).
* **building_heating_fuel** (`building_heating_fuel`, select_multiple, optional): Select all applicable answers for the building's heating fuel (e.g., "Yes" for yes, "No" for no).
* **building_cooling_source** (`building_cooling_source`, select_one, optional): Select the cooling source (e.g., "Yes" for yes, "No" for no).
* **building_cooling_fuel** (`building_cooling_fuel`, select_multiple, optional): Select all applicable answers for the building's cooling fuel (e.g., "Yes" for yes, "No" for no).
* **building_hot_water_source** (`building_hot_water_source`, select_one, optional): Select the hot water source (e.g., "Yes" for yes, "No" for no).
* **building_hot_water_fuel** (`building_hot_water_fuel`, select_multiple, optional): Select all applicable answers for the building's hot water fuel (e.g., "Yes" for yes, "No" for no).
