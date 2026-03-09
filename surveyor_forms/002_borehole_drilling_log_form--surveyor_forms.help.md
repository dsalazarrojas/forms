# Borehole Drilling Log Form - Help Guide
## Purpose
The Borehole Drilling Log Form is used to record and document borehole drilling activities. This form helps to gather essential information, such as date, driller's name, borehole identifier, start and end times, depth reached, drilling method, lithology observed, groundwater encountered, and any remarks or safety notes. This information is crucial for future reference, analysis, and reporting.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the date of the drilling activity in the **Log date** field.
2. Enter the name of the lead driller or supervisor in the **Driller name** field.
3. Enter the site-specific borehole reference in the **Borehole identifier** field.
4. Enter the time drilling commenced in the **Start time** field. (Optional)
5. Enter the time drilling ended in the **End time** field. (Optional)
6. Enter the measured depth in meters reached during the drilling in the **Depth reached meters** field.
7. Select the drilling technique used in the **Drilling method** field. (Choose from: Rotary, Percussion, Core, or Sonic)
8. Briefly describe any notable strata encountered in the **Lithology observed** field.
9. Check if groundwater was encountered during the drilling in the **Groundwater encountered** field. (Yes/No)
10. Enter any other relevant observations or safety notes in the **Remarks** field.

## Field-by-Field Explanation
- **Log date (log_date)**: The date of the drilling activity.
  - Type: date
  - Required: Yes
  - Hint: Date of drilling activity
- **Driller name (driller_name)**: The name of the lead driller or supervisor.
  - Type: text
  - Required: Yes
  - Hint: Lead driller or supervisor
- **Borehole identifier (borehole_id)**: Site-specific borehole reference.
  - Type: text
  - Required: Yes
  - Hint: Site-specific borehole reference
- **Start time (start_time)**: The time drilling commenced.
  - Type: time
  - Required: No
  - Hint: Time drilling commenced
- **End time (end_time)**: The time drilling ended.
  - Type: time
  - Required: No
  - Hint: Time drilling ended
- **Depth reached meters (depth_reached_m)**: Enter the measured depth in meters reached during the drilling.
  - Type: number
  - Required: Yes
  - Hint: Enter the measured depth in meters
- **Drilling method (drilling_method)**: Select the drilling technique used. (Choose from: Rotary, Percussion, Core, or Sonic)
  - Type: select_one
  - Required: Yes
  - Hint: Select the drilling technique used
- **Lithology observed (lithology_observed)**: Brief description of strata encountered.
  - Type: text
  - Required: No
  - Hint: Brief description of strata encountered
- **Groundwater encountered (groundwater_encountered)**: Note the presence and approximate level of groundwater.
  - Type: select_one
  - Required: No
  - Hint: Note presence and approximate level
- **Remarks (remarks)**: Enter any other observations or safety notes.
  - Type: text
  - Required: No
  - Hint: Any other observations or safety notes
