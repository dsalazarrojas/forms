<thinking>
This form is designed to collect information about the water consumption in a factory. It's meant to be used by factory administrators or operators to report on the water usage, quality, and related parameters over a specific period. 
The form has a few different types of fields. The "factory_water_consumption_form" field is a text field that will be used to store information about the factory's water consumption. 
The factory_name field is a text field used to store the name of the factory. 
The consumption_start_date and consumption_end_date fields are date fields used to store the start and end dates of the consumption period, respectively. 
The water_usage field is a numeric field used to store the total water usage. 
The water_usage_unit field is a select field with four options: liters, gallons, m3, and cubic meters. It's used to store the unit of the water usage. 
The water_temperature field is a numeric field used to store the water temperature. 
The water_flow field is a numeric field used to store the water flow rate. 
The pump_status and leak_status fields are select fields that are meant to be multiple select. The options active and inactive are available for both fields and maintenance option is only available for pump_status. 
The leak_status field has an additional reported option.
The notes field is a free text field that the user can use for any other information that is not captured by other fields.
</thinking>

# Factory Water Consumption Report Form - Help Guide

## Purpose
This form is used by factory administrators or operators to report on the water consumption, quality, and related parameters over a specific period.

## How To Complete This Form
1. Fill in the factory_name field with the name of the factory.
2. Select the consumption_start_date and consumption_end_date fields to specify the period of consumption.
3. Enter the total water usage in the water_usage field.
4. Choose the unit of the water usage from the water_usage_unit options: liters, gallons, m3, or cubic meters.
5. Enter the water temperature in the water_temperature field.
6. Enter the water flow rate in the water_flow field.
7. For the pump_status field, select one or both of the options active or inactive, or maintenance (if applicable).
8. For the leak_status field, select one or both of the options active or inactive, or reported.
9. Use the notes field for any additional information not captured by other fields.

## Field-by-Field Explanation
- **Factory Name** (factory_name, text, required): Enter the name of the factory.
- **Consumption Start Date** (consumption_start_date, date, optional): Enter the start date of the consumption period.
- **Consumption End Date** (consumption_end_date, date, optional): Enter the end date of the consumption period.
- **Total Water Usage** (water_usage, number, optional): Enter the total water usage.
- **Water Usage Unit** (water_usage_unit, select, optional): Select the unit of the water usage: liters, gallons, m3, or cubic meters.
- **Water Temperature** (water_temperature, number, optional): Enter the water temperature.
- **Water Flow Rate** (water_flow, number, optional): Enter the water flow rate.
- **Pump Status** (pump_status, select, optional): Select the pump status: active, inactive, or maintenance (if applicable).
- **Leak Status** (leak_status, select, optional): Select the leak status: active, inactive, or reported.
- **Notes** (notes, note, optional): Use this field for any additional information not captured by other fields.
