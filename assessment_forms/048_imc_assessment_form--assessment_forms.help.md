<thinking>
This form is used for calculating a patient's Body Mass Index (BMI). It seems that the form is related to medical/health context. The purpose of this form is likely to calculate IMC (IMC stands for "Indice de Masso-Cadrau", not to be confused with BMI), which is a metric used in some medical assessments. To avoid duplicate or irrelevant assessments, please ensure that you have not recently submitted the IMC form or have not been directed to take this form by a healthcare professional.
</thinking>

# imc_assessment_form - Help Guide
## Purpose
The imc_assessment_form is a medical assessment form used to calculate a patient's IMC. This form is intended for patients or healthcare professionals to collect and analyze data related to a patient's height, weight, and age.

## How To Complete This Form
1. Ensure you have not recently submitted this form or been directed to take it by a healthcare professional.
1. If you are a healthcare professional, please have your patient complete this form to ensure accurate and up-to-date data.
1. Enter your height and weight in the corresponding input fields (fields 1 and 2).
1. Select how you would like to know your IMC (IMC) from the dropdown menu in field 4.
2. Enter your IMC value in field 5.
3. Submit the form once all fields have been completed.

## Field-by-Field Explanation

* **Height** (`height_input`, number, required): Enter your height in centimeters.
* **Weight** (`weight_input`, number, required): Enter your weight in kilograms.
* **Age** (`age_input`, number, required): Enter your age.
* **How do you want to know your IMC?** (`age_hint`, select_one, required): Select how you would like to know your IMC (IMC, BMI, or BFMI).
* **IMC** (`imc_input`, number, required): Enter your IMC value.
* **IMC Calculation Method** (`age_hint`, select_one, optional): This field is not actually used in the IMC calculation, and its options seem to be irrelevant to the form purpose.

Note: The IMC calculation method field is not required for the form to be submitted, and its options are not relevant. If you are a healthcare professional, please do not select an option here, as it is not part of the IMC calculation process.
