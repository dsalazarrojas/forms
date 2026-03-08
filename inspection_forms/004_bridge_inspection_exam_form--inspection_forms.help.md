# Bridge Inspection Exam Form - Help Guide
## Purpose
This form is designed to guide inspectors and engineers in conducting thorough and systematic inspections of bridges, recording and reporting on the condition of a bridge, its components, and the findings of the inspection.

## How To Complete This Form
1. Fill out the general information section with the bridge's official name or identification number, its location, and the date of the inspection.
2. Move on to the bridge details section and select the type of bridge structure.
3. Enter the year the bridge was constructed, its total length, and the number of spans.
4. In the condition assessment section, rate the condition of the bridge's deck, superstructure, and substructure using the provided scale.
5. In the deficiencies and findings section, select all observed deficiencies and provide a detailed description of each.
6. In the recommendations section, select the overall condition rating and describe recommended actions for repair or maintenance.
7. Finally, indicate if a follow-up inspection is needed and enter any additional comments or observations.

## Field-by-Field Explanation

* **Bridge Name or ID** (`bridge_name`, `text`, required): Enter the official name or identification number of the bridge.
* **Bridge Location** (`bridge_location`, `text`, required): Enter the location or address of the bridge.
* **Inspection Date** (`inspection_date`, `date`, required): Select the date of inspection.
* **Inspector Name** (`inspector_name`, `text`, required): Enter the name of the lead inspector.
* **Inspector Certification Number** (`inspector_certification`, `text`, required): Enter the certification number of the inspector.
* **Inspection Type** (`inspection_type`, `select_one`, required): Select the type of inspection being conducted (e.g., Routine, In-Depth, Damage, Initial, Fracture Critical).
* **Bridge Type** (`bridge_type`, `select_one`, required): Select the type of bridge structure (e.g., Concrete, Steel, Timber, Masonry, Composite).
* **Year Built** (`year_built`, `number`, required): Enter the year the bridge was constructed.
* **Bridge Length (feet)** (`bridge_length`, `number`, required): Enter the total length of the bridge in feet.
* **Number of Spans** (`number_of_spans`, `number`, required): Enter the number of spans.
* **Deck Condition Rating** (`deck_condition`, `select_one`, required): Rate the condition of the bridge deck using the provided scale (Excellent, Very Good, Good, Satisfactory, Fair, Poor, Serious, Critical, Imminent Failure).
* **Superstructure Condition Rating** (`superstructure_condition`, `select_one`, required): Rate the condition of the bridge's superstructure using the provided scale (Excellent, Very Good, Good, Satisfactory, Fair, Poor, Serious, Critical, Imminent Failure).
* **Substructure Condition Rating** (`substructure_condition`, `select_one`, required): Rate the condition of the bridge's substructure using the provided scale (Excellent, Very Good, Good, Satisfactory, Fair, Poor, Serious, Critical, Imminent Failure).
* **Deficiencies Observed** (`deficiencies_observed`, `select_multiple`, optional): Select all observed deficiencies (e.g., Cracking, Corrosion, Spalling, Section Loss, Settlement, Scour, Bearing Damage, Joint Failure).
* **Detailed Deficiency Description** (`deficiency_description`, `text`, optional): Provide a detailed description of observed deficiencies.
* **Overall Bridge Rating** (`overall_rating`, `select_one`, required): Select the overall condition rating (Not Deficient, Functionally Obsolete, Structurally Deficient).
* **Recommended Actions** (`recommended_actions`, `text`, required): Describe recommended actions for repair or maintenance.
* **Follow-up Inspection Required** (`follow_up_required`, `select_one`, required): Indicate if a follow-up inspection is needed (Yes - Within 30 days, Yes - Within 6 months, Yes - Within 1 year, False).
* **Additional Comments** (`additional_comments`, `text`, optional): Enter any additional observations or notes.
