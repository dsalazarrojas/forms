# Asbestos Inspection Report Form - Help Guide
## Purpose
The Asbestos Inspection Report Form is designed to document the findings and results of an asbestos inspection. This form should only be used for asbestos inspections performed in accordance with state regulations.

## How To Complete This Form

1.  Ensure that you are a licensed inspector with the necessary qualifications and expertise to perform asbestos inspections.
2.  Fill out the form completely and accurately.
3.  Use the form only for asbestos inspections performed in accordance with state regulations.

## Field-by-Field Explanation

*   **Licensed Inspector Name** (`inspector_name_full`, text, required):
    Enter your full name as a licensed asbestos inspector.
*   **Date of Inspection** (`inspection_date_val`, date, required):
    Enter the date of the inspection in the format mm/dd/yyyy.
*   **Inspected Property Address** (`property_address_asb`, text, required):
    Enter the address of the property that was inspected.
*   **Property Classification** (`property_category`, select_one, required):
    Select the type of property that was inspected from the options provided:
    *   Residential - Single Family
    *   Residential - Multi-unit
    *   Commercial/Office
    *   Industrial/Manufacturing
    *   Educational/Public Building
*   **Detailed List of Areas Inspected** (`areas_inspected_list`, text, required):
    List the areas that were inspected, e.g., basement, attic, HVAC ducting.
*   **Physical Samples Taken for Laboratory Analysis** (`samples_taken_status`, select_one, required):
    Select if physical samples were taken for laboratory analysis:
    *   Yes - Samples sent to lab
    *   No - Visual inspection only
*   **Sample IDs and Locations** (`sample_ids_collected`, text, optional):
    If applicable, list the IDs and locations of the physical samples taken.
*   **Condition of Suspected Asbestos Containing Materials** (`suspected_material_condition`, select_one, required):
    Select the condition of the suspected asbestos containing materials:
    *   Good - Intact
    *   Fair - Minor damage
    *   Poor - Friable/Deteriorating
*   **Immediate Recommendations** (`recommendation_asb`, select_one, required):
    Select the immediate recommendations for the property:
    *   No Action Required
    *   Ongoing Monitoring
    *   Encapsulation
    *   Full Abatement/Removal
*   **Overall Hazard Risk Assessment** (`risk_assessment_score`, number, required):
    Enter a score from 1 to 5 representing the overall hazard risk assessment.
*   **Certification** (`report_verification`, select_one, required):
    Select to certify that this inspection was performed in accordance with state regulations:
    *   I Certify
    *   Other
