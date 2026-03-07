<thinking>
This form is designed to collect data for a coal property evaluation, which is a crucial process in the coal industry. This evaluation assesses the feasibility of a coal property for mining, including geological, geotechnical, and environmental factors. The form is intended for surveyors, engineers, and other experts to input data on the property's characteristics, such as its location, geological features, coal quality, and potential reserves. This data will help stakeholders make informed decisions regarding the property's economic viability and potential for mining operations.

The form should only be completed by authorized personnel, and the inputted data should not be duplicated or misused. Each field is essential for the evaluation process, and missing or incorrect data can affect the overall assessment.

</thinking>

# Coal Property Evaluation Worksheet - Help Guide
## Purpose
The Coal Property Evaluation Worksheet is a tool for surveyors, engineers, and other experts to evaluate coal properties. This form helps assess the property's potential for mining operations by collecting data on its geological, geological, and environmental features.

## How To Complete This Form
1. Select the relevant sections for the coal property being evaluated.
2. Fill in the required fields with the correct information.
3. Ensure that all fields are completed accurately to avoid errors in the assessment.

## Field-by-Field Explanation

* **Property Name** (`property_name`, `text`, required/true): Enter the official name of the coal property.
* **Property Location** (`property_location`, `text`, required/true): Enter the city, state, or GPS coordinates of the property.
* **Evaluation Date** (`evaluation_date`, `date`, required/true): Enter the date of this assessment.
* **Evaluator Name** (`evaluator_name`, `text`, required/true): Enter the name of the person conducting the evaluation.
* **Evaluator Credentials** (`evaluator_credentials`, `text`, required/false): Enter the professional designation or expertise of the evaluator. (Note: This field is not always required, but it is recommended for credibility and accuracy.)
* **Total Acreage** (`total_acres`, `number`, required/true): Enter the total property size in acres.
* **Coal-Bearing Acres** (`coal_bearing_acres`, `number`, required/true): Enter the acres with coal deposits.
* **Property Boundaries Confirmed** (`property_boundaries`, `select_one`, required/true): Confirm if the property boundaries are known.
* **Coal Seam Depth - feet** (`coal_seam_depth`, `number`, required/true): Enter the approximate depth to coal seams.
* **Average Seam Thickness - feet** (`seam_thickness`, `number`, required/true): Enter the thickness of exploitable coal seams.
* **Coal Grade Quality** (`coal_grade`, `select_one`, required/true): Select the classification of coal quality. (Options: Lignite, Sub-bituminous, Bituminous, Anthracite, Mixed)
* **Sulfur Content - percent** (`sulfur_content`, `number`, required/false): Enter the estimated sulfur percentage. (Note: This field is not always required.)
* **Ash Content - percent** (`ash_content`, `number`, required/false): Enter the estimated ash percentage. (Note: This field is not always required.)
* **Estimated Coal Reserves - million tons** (`estimated_reserves`, `number`, required/true): Enter the total recoverable coal.
* **Confidence Level in Reserves** (`reserve_confidence`, `select_one`, required/true): Select the confidence level in reserves. (Options: 1 - Low, 2 - Moderate, 3 - High, 4 - Very High)
* **Recommended Mining Method** (`mining_method_suitable`, `select_one`, required/true): Select the recommended mining method. (Options: Surface Mining, Underground Mining, Mixed Method, Not Suitable)
* **Property Accessibility Rating** (`accessibility`, `select_one`, required/true): Select the ease of access for mining operations. (Options: 1 - Poor, 2 - Fair, 3 - Good, 4 - Excellent)
* **Environmental Considerations** (`environmental_considerations`, `text`, required/false): Enter key environmental factors.
* **Economic Viability Rating** (`economic_feasibility`, `select_one`, required/true): Select the economic feasibility. (Options: 1 - Not viable, 2 - Marginally viable, 3 - Viable, 4 - Highly viable)
* **Additional Evaluation Notes** (`evaluation_notes`, `text`, required/false): Enter a comprehensive assessment summary.
* **Recommended Mining Method (continued)**: Note that the recommended mining method and property accessibility rating can affect the economic viability of the property. If you select "Not Suitable" for the recommended mining method, the property might not be economically viable.
* **Recommended Economic Feasibility**: The economic viability of the property depends on several factors, including the coal reserves, seam depth, and recommended mining method. This assessment should be conducted in conjunction with other experts and stakeholders to ensure accurate and informed decision-making.
