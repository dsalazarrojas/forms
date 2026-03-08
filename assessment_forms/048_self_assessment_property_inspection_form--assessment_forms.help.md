# Self Assessment Property Inspection Form - Help Guide
## Purpose
The Self Assessment Property Inspection Form is a document for property owners to self-assess their properties for inspections, maintenance, or other purposes.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the "Property Address" field with the address of the property being inspected.
2. Determine if the property is residential or commercial and select the corresponding option in the "Property Type" field.
3. Choose the correct "Property Type" (Residential or Commercial) and enter the specific details in the "Residential" or "Commercial" field, depending on the selected option.
4. Select the date of the inspection in the "Inspection Date" field.
5. Choose the time of the inspection in the "Inspection Time" field.
6. Enter any notes or comments about the property inspection in the "Property Inspection Notes" field.

## Field-by-Field Explanation

* **Property Address** (`assessment_property_form_property_address`, text, required): Enter the address of the property being inspected.
* **Property Type** (`assessment_property_form_property_type`, select_one, required: false): Select whether the property is 'Yes' or 'No' for a specific reason not specified.
*   **Residential or Commercial** (`assessment_property_form_property_type_options`, select_multiple, required: false): Select whether the property is Residential or Commercial.
*   **Residential** (`assessment_property_form_property_type_options_residential`, text, required: false): Enter the specific details about the residential property (not clear why this field is included as a separate field).
*   **Commercial** (`assessment_property_form_property_type_options_commercial`, text, required: false): Enter the specific details about the commercial property (not clear why this field is included as a separate field).
* **Inspection Date** (`assessment_property_form_property_inspection_date`, date, required: false): Select the date of the inspection.
*   **Inspection Time** (`assessment_property_form_property_inspection_time`, time, required: false): Select the time of the inspection.
*   **Property Inspection Notes** (`assessment_property_form_property_inspection_notes`, note, required: false): Enter any notes or comments about the property inspection.

Note: The "Property Type" field is unclear and requires further clarification. Assuming it is for selecting whether a property has a specific feature or characteristic, it might be better to rephrase it to something like "Has Parking" or "Has Pool". Similarly, the fields "Residential" and "Commercial" are separate fields with unclear intent. They might be better represented as radio buttons or select_one fields in the same way as "Property Type".
