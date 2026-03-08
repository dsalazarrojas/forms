<thinking>
This form is designed to collect data from users for calculating the result of a titration experiment. Titration is a method used to determine the concentration of an unknown concentration by reacting it with a known concentration of another substance. The form should only be used for this specific purpose. The fields included are for providing information about the experiment details, reagents used, calculated results, and user information. The form requires some calculated fields to be filled in, but the user can optionally provide additional information and notes. The fields are divided into pages, each with its own specific purpose, such as providing details about the experiment, reagents, and calculated results.
</thinking>

# Titration Data Collection Form - Help Guide
## Purpose
The Titration Data Collection Form is designed to collect data from users for calculating the result of a titration experiment. This form should only be used for this specific purpose and not for any other type of calculation or analysis.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the Experiment Details page with the required information about the experiment.
2. Provide details about the Reagent used in the experiment.
3. Enter the calculated results in the Calculated Results page.
4. Optionally, add any additional Notes if needed.
5. Fill in the user information page with your name and email (if required).

## Field-by-Field Explanation
### Experiment Details
* **Experiment Details** (`experiment_details`, `text`, required: false): This page is for providing a brief description of the experiment.
* **Reagent** (`reagent`, `text`, required: false): This page is for providing details about the reagent used in the experiment.
* **Titralable Solute** (`titratable_solute`, `text`, required: false): This page is for providing details about the solute used in the experiment.
* **Volume Initial** (`volume_initial`, `number`, required: false): This page is for entering the initial volume of the solution.
* **Volume Final** (`volume_final`, `number`, required: false): This page is for entering the final volume of the solution.

### Reagent Information
* **Reagent Initial** (`reagent_initial`, `number`, required: false): This page is for entering the initial concentration of the reagent.
* **Reagent Final** (`reagent_final`, `number`, required: false): This page is for entering the final concentration of the reagent.

### Calculated Results
* **Titrated Solute** (`titrated_solute_final`, `text`, required: false): This page is for entering the titrated solute.
* **Calculated Result** (`calculated_result`, `text`, required: false): This page is for entering the calculated result.
* **Calculated Value** (`calculated_result_calculated_value`, `number`, required: true): This page is for entering the calculated value.
* **Titrated Molarity** (`calculated_result_titrated_molarity`, `number`, required: false): This page is for entering the titrated molarity.
* **Titrated Volume** (`calculated_result_titrated_volume`, `number`, required: false): This page is for entering the titrated volume.
* **Purity** (`calculated_result_purity`, `number`, required: false): This page is for entering the purity.
* **Titrated Concentration** (`calculated_result_titrated_concentration`, `number`, required: false): This page is for entering the titrated concentration.
* **Titrated Concentration Unit** (`calculated_result_titrated_concentration_unit`, `select_one`, required: false): This page is for selecting the unit of the titrated concentration.
* **Titrated Molecular Weight** (`calculated_result_titrated_mol_weight`, `number`, required: false): This page is for entering the titrated molecular weight.
* **Titrated Molecular Weight Unit** (`calculated_result_titrated_mol_weight_unit`, `select_one`, required: false): This page is for selecting the unit of the titrated molecular weight.
* **Titrated Concentration Factor** (`calculated_result_titrated_concentration_factor`, `number`, required: false): This page is for entering the titrated concentration factor.
* **Titrated Molarity** (`calculated_result_titrated_molarity`, `number`, required: false): This page is for entering the titrated molarity.
* **Titrated Volume Factor** (`calculated_result_titrated_volume_factor`, `number`, required: false): This page is for entering the titrated volume factor.

### User Information
* **User** (`user`, `text`, required: false): This page is for providing the user's name.
* **First Name** (`user_first_name`, `text`, required: false): This page is for providing the user's first name.
* **Email** (`user_email`, `email`, required: false): This page is for providing the user's email address.

### Notes
* **Notes** (`notes`, `note`, required: false): This page is for providing any additional notes about the experiment.

## Tips
* Please fill in all the required fields.
* You can leave optional fields blank if not required.
* Use the correct units for the calculated results.
* Make sure to double-check your entries for accuracy.
