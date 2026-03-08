<thinking>

We're creating a user-facing help guide for a green building certification inspection form. The purpose of this form is to facilitate the process of evaluating and certifying buildings based on their environmental sustainability and efficiency. This form is likely used by building inspectors or auditors to assess various aspects of a building, such as its size, type, and energy usage, and provide a comprehensive report on its sustainability and efficiency ratings.

Before we dive into the help guide, let's ensure that this form is not redundant or duplicative. A quick review of the YAML schema reveals that the form is focused on collecting data for green building certification, which is a relatively specific and niche topic. There are no obvious areas where this form overlaps with other forms or processes. So, we can proceed with creating the help guide.

</thinking>

# Green Building Certification Inspection Form - Help Guide
## Purpose
The Green Building Certification Inspection Form is used to evaluate and certify buildings based on their environmental sustainability and efficiency. This form collects data on various aspects of a building, including its size, type, energy usage, and sustainability and efficiency ratings.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the type of building being inspected from the options provided in the "Building Type" field.
2. Choose the size of the building from the "Building Size" field. Note that this field is not currently populated with options, as it is a number field.
3. Select the level of energy usage from the "Energy Use" field. This will help the inspector understand the building's energy efficiency.
4. Choose the location of the building from the "Building Location" field. This can be Urban, Rural, or Suburban.
5. Enter the date of the inspection in the "Inspection Date" field.

## Field-by-Field Explanation
### Building Type (`building_type`)
* **Building Type** (`select_one`): Choose the type of building being inspected, such as Single-family dwelling, Apartment building, Commercial building, or Industrial building.
### Building Size (`building_size`)
* **Building Size** (`number`): Enter the size of the building. This can be any numerical value.
### Sustainability Rating (`sustainability_rating`)
* **Sustainability Rating** (`number`): This field is currently blank, but enter a numerical value to indicate the building's sustainability rating.
### Efficiency Rating (`efficiency_rating`)
* **Efficiency Rating** (`number`): Like the sustainability rating, this field is also blank and requires a numerical value.
### Energy Efficiency (`energy_efficiency`)
* **Energy Efficiency** (`number`): Enter a numerical value to indicate the building's energy efficiency.
### Water Efficiency (`water_efficiency`)
* **Water Efficiency** (`number`): Enter a numerical value to indicate the building's water efficiency.
### Waste Management (`waste_management`)
* **Waste Management** (`number`): Enter a numerical value to indicate the building's waste management efficiency.
### Energy Use (`energy_use`)
* **Energy Use** (`select_one`): Choose the level of energy usage from High, Medium, or Low.
### Building Location (`building_location`)
* **Building Location** (`select_one`): Choose the location of the building from Urban, Rural, or Suburban.
### Inspection Date (`inspection_date`)
* **Inspection Date** (`date`): Enter the date of the inspection.
### Inspector Notes (`inspector_notes`)
* **Inspector Notes** (`note`): This field is for any additional notes the inspector wishes to include in the report.

## Tips
- Make sure to select the correct building type and size to ensure accurate reporting.
- Enter numerical values for the sustainability, efficiency, energy, water, and waste management ratings.
- Choose the correct location for the building.
- Enter the correct energy usage level.
- Enter the date of the inspection accurately.
