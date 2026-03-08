# Chilled Water System Inspection Checklist - Help Guide
## Purpose
The Chilled Water System Inspection Checklist is used to inspect the chilled water system in a building and identify any issues, damage, or needed maintenance tasks.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter your name as the inspector performing the inspection.
2. Enter the date of the inspection.
3. Enter the unique identifier for the building or system being inspected.
4. Observe the equipment and report any visible damage or corrosion.
5. If available, enter typical pressure readings for the system.
6. If available, enter typical temperature readings for the system.
7. Check if any leaks were found during the inspection.
8. Enter any recommended actions or maintenance tasks for the system.
9. Indicate if further follow-up is required.

## Field-by-Field Explanation
### 1. **Inspector Name** (`inspector_name`, text, **Required**)
This field is for your name, the person performing the inspection. Please enter your full name as it will be displayed on the report.

### 2. **Inspection Date** (`inspection_date`, date, **Required**)
This field is for the date on which the inspection was performed. Please enter the date in the format `YYYY-MM-DD`.

### 3. **System Identifier** (`system_id`, text, **Required**)
This field is for a unique identifier for the building or system being inspected. This can be a building tag or any other identifier that you use to track the system.

### 4. **Visual Condition of Equipment** (`visual_condition`, select_one, **Required**)
Report any visible damage or corrosion you observe on the equipment. Choose one of the following options:
*   Good: No visible damage or corrosion.
*   Acceptable: Minor issues, but no critical damage or corrosion.
*   Needs Attention: Visible damage or corrosion that requires attention.
*   Critical: Severe damage or corrosion that requires immediate action.

### 5. **Typical Pressure Readings** (`pressure_readings`, text, **Optional**)
If available, enter typical measured pressure readings for the system. This can be helpful for comparison with other readings.

### 6. **Typical Temperature Readings** (`temperature_readings`, text, **Optional**)
If available, enter typical measured temperature readings for the system, including both inlet and outlet temperatures.

### 7. **Leaks Found** (`leaks_found`, select_one, **Required**)
Check if any leaks were found during the inspection. Choose one of the following options:
*   None: No leaks were found.
*   Minor: Leaks that are not critical.
*   Major: Critical or major leaks that require immediate attention.

### 8. **Recommended Actions** (`recommended_actions`, text, **Required**)
Enter any suggested repairs or maintenance tasks for the system.

### 9. **Follow Up Required** (`follow_up_required`, select_one, **Required**)
Check if any follow-up is required after this inspection. Choose one of the following options:
*   True: Follow-up is necessary.
*   False: No follow-up is needed.
