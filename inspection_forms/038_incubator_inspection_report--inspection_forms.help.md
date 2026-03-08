<thinking>
To confirm, this is a form for documenting the results of an inspection of an incubator. The form will be used by inspectors to report on any issues they have encountered and take corrective actions. This form is likely used by facilities management or maintenance teams within the organization to track and address potential issues with incubators. I will now create a help guide for the form.
</thinking>

# Incubator Inspection Report - Help Guide
## Purpose
This form is used to record the results of an inspection of an incubator. Inspectors will use this form to report any issues or problems that they have found during the inspection, which can help facilities management or maintenance teams to take corrective actions.

## How To Complete This Form
- Start by filling out the incubator ID field. This will help the system to identify which incubator was being inspected.
- Enter the date of the inspection. This is the date when the inspection took place.
- Provide the name of the facility that was inspected.
- Enter your name and title (if applicable) as the inspector.
- If you encountered any issues during the inspection, select all applicable issues from the dropdown list. If no issues were encountered, you can select "No issues encountered during inspection".
- If you discovered any issues, provide a detailed description of the issues in the issue comments field.
- For each issue encountered, check the "Corrective actions taken" field to indicate if any corrective actions were taken.
- Finally, enter any additional notes you have regarding the inspection.

## Field-by-Field Explanation
### **incubator_id** (`incubator_id`, text, required: false)
Enter the unique identifier of the incubator that was inspected.

### **date_inspected** (`date_inspected`, date, required: false)
Enter the date of the inspection.

### **facility_name** (`facility_name`, text, required: false)
Provide the name of the facility where the inspection took place.

### **inspector_name** (`inspector_name`, text, required: false)
Enter your name as the inspector, and if applicable, your title or position.

### **issues_encountered** (issues_encountered, select multiple, required: false)
Select all the issues that you encountered during the inspection from the dropdown list. If no issues were encountered, select "No issues encountered during inspection".

### **issue_comments** (issue_comments, text, required: false)
If you selected any issues in the "issues_encountered" field, provide a detailed description of the issues you encountered in this field.

### **corrective_actions_taken** (corrective_actions_taken, select one, required: false)
For each issue encountered, check this field to indicate if any corrective actions were taken.

### **notes** (notes, note, required: false)
Enter any additional notes or comments regarding the inspection.
