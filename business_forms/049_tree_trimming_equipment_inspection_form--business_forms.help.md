# tree_trimming_equipment_inspection_form - Help Guide
## Purpose
This form is designed to help inspect and track the condition of tree trimming equipment. It collects information about the equipment, its status, and the results of the inspection. This form is intended to be completed by the user who performs the inspection.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter your user information in the "User Information" page.
2. Select the type of equipment that is being inspected.
3. Indicate the current status of the equipment (Active or Inactive).
4. Select the condition of the equipment (Yes or No).
5. Enter the serial number of the equipment, if applicable.
6. Enter the date of the last inspection, if applicable.
7. Enter the date of the next scheduled inspection, if applicable.
8. Add any comments or notes about the inspection.
9. Indicate if an inspector was assigned (Yes or No).
10. Select the result of the inspection (Yes or No).
11. Enter the date you signed the form.
12. Sign your name to confirm that you have completed the inspection.
13. Add any comments or notes about the inspection.

## Field-by-Field Explanation
### User Information
* **User Information** (`user_information`, `text`, not required): Enter your name and contact information so that we can reach you for any further questions or follow-up actions.

### Name
* **Name** (`name`, `text`, not required): Enter the name of the equipment being inspected.

### Equipment Type
* **Equipment Type** (`equipment_type`, `select_one`, not required): Select the type of equipment being inspected from the options provided.

### Equipment Status
* **Equipment Status** (`equipment_status`, `select_multiple`, not required): Indicate the current status of the equipment. You can select both Active and Inactive if the equipment is both.

### Equipment Condition
* **Equipment Condition** (`equipment_condition`, `select_multiple`, not required): Select the condition of the equipment. You can select both Yes and No if the equipment is in both conditions.

### Serial Number
* **Serial Number** (`serial_number`, `text`, not required): Enter the serial number of the equipment, if applicable.

### Last Inspection Date
* **Last Inspection Date** (`last_inspection_date`, `date`, not required): Enter the date of the last inspection, if applicable.

### Next Inspection Date
* **Next Inspection Date** (`next_inspection_date`, `date`, not required): Enter the date of the next scheduled inspection, if applicable.

### Notes
* **Notes** (`notes`, `note`, not required): Add any comments or notes about the inspection.

### Assigned Inspector
* **Assigned Inspector** (`assigned_inspector`, `select_one`, not required): Indicate if an inspector was assigned to perform the inspection (Yes or No).

### Inspection Result
* **Inspection Result** (`inspection_result`, `select_one`, not required): Select the result of the inspection (Yes or No).

### Signature Date
* **Signature Date** (`signature_date`, `date`, not required): Enter the date you signed the form.

### Signature
* **Signature** (`signature`, `select_multiple`, not required): Sign your name to confirm that you have completed the inspection.

### Comments
* **Comments** (`comments`, `text`, not required): Add any additional comments or notes about the inspection.

### Certification Date
* **Certification Date** (`certification_date`, `date`, not required): Enter the date of certification, if applicable.
