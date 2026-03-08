# Polymer Properties Assessment - Help Guide
## Purpose
The "Polymer Properties Assessment" form is designed to collect and store information about the properties of a polymer sample. The form is meant to be filled out for every polymer sample that is being assessed.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the **Polymer Sample ID** (ID of the sample being assessed). This is a unique identifier that helps us keep track of each sample.
2. Enter the **Sample Name** (a brief description of the sample).
3. Select the **Sample Type** from the dropdown list.
4. Enter the **Sample Weight** (in grams).
5. Enter the **Density** (in g/cm³).
6. Enter the **Tensile Strength** (in megapascals).
7. Enter the **Hardness** (in points).
8. Enter the **Elongation** (in %).
9. Select the **Thermal Resistance** (High, Medium, or Low).
10. Select the **Chemical Stability** (High, Medium, or Low).
11. Enter the **Date** (in YYYY-MM-DD format).
12. Enter the **Time** (in 24-hour format).
13. Add any **Notes** about the sample (optional).

## Field-by-Field Explanation
- **Polymer Sample ID** (`polymer_sample_id`, text, required): Enter the unique ID of the sample being assessed.
- **Sample Name** (`sample_name`, text, required): Enter a brief description of the sample.
- **Sample Type** (`sample_type`, select_one, required): Select the type of polymer from the dropdown list.
- **Sample Weight** (`sample_weight`, number, optional): Enter the weight of the sample (in grams).
- **Density** (`density`, number, optional): Enter the density of the sample (in g/cm³).
- **Tensile Strength** (`tensile_strength`, number, optional): Enter the tensile strength of the sample (in megapascals).
- **Hardness** (`hardness`, number, optional): Enter the hardness of the sample (in points).
- **Elongation** (`elongation`, number, optional): Enter the elongation of the sample (in %).
- **Thermal Resistance** (`thermal_resistance`, select_multiple, optional): Select the thermal resistance of the sample (High, Medium, or Low).
- **Chemical Stability** (`chemical_stability`, select_multiple, optional): Select the chemical stability of the sample (High, Medium, or Low).
- **Date** (`date`, date, optional): Enter the date of the assessment (in YYYY-MM-DD format).
- **Time** (`time`, time, optional): Enter the time of the assessment (in 24-hour format).
- **Notes** (`notes`, note, optional): Add any additional notes about the sample.

## Tips
* Make sure to enter accurate values for each field.
* If a field is required, it is indicated with an asterisk (\*) in the label.
