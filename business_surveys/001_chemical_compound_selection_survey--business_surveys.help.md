# Chemical Compound Selection Survey - Help Guide
## Purpose
This form is used to collect information about a chemical compound selection for a research project. The form will help to ensure that the compound selected meets the project's requirements and is suitable for the intended use.

## How To Complete This Form
1. Review the project's requirements and specifications before filling out this form.
2. Enter the project title and other relevant information in the "Project Title" field.
3. Select the primary chemical classification of the compound in the "Compound Class" field.
4. Enter the chemical formula of the compound in the "Chemical Formula" field.
5. Specify the target purity percentage in the "Target Purity Percentage" field.
6. Enter the quantity of the compound required in milligrams in the "Quantity Required in Milligrams" field.
7. Select all applicable key property requirements in the "Key Property Requirements" field.
8. Enter the date by which the compound is required in the "Required By Date" field.
9. Provide any additional storage conditions in the "Specific Storage Conditions" field.
10. Enter the email address of the lead researcher in the "Lead Researcher Email" field.

## Field-by-Field Explanation
* **Project Title** (`project_title`, text, required): Enter the name of the research project.
* **Compound Class** (`compound_class`, select_one, required): Select the primary chemical classification of the compound (e.g., Organic, Inorganic, Organometallic, Polymer).
* **Chemical Formula** (`chemical_formula`, text, required): Enter the chemical formula of the compound (e.g., C6H12O6).
* **Target Purity Percentage** (`target_purity`, number, required): Specify the minimum acceptable purity level.
* **Quantity Required in Milligrams** (`quantity_required`, number, required): Enter the quantity of the compound required in milligrams.
* **Key Property Requirements** (`key_properties`, select_multiple, required): Select all applicable key property requirements (e.g., High Solubility, Thermal Stability, Low Reactivity, Optical Clarity).
* **Required By Date** (`required_date`, date, required): Enter the date by which the compound is required.
* **Lead Researcher Email** (`researcher_email`, email, required): Enter the email address of the lead researcher.
* **Specific Storage Conditions** (`storage_conditions`, text, required): Enter any specific storage conditions (e.g., Keep under Nitrogen, -20C).
