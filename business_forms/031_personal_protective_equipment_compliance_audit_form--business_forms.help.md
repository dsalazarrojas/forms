# Personal Protective Equipment Compliance Audit Form - Help Guide
## Purpose
The Personal Protective Equipment Compliance Audit Form is a tool for tracking and monitoring the usage and inspection of personal protective equipment (PPE) in the workplace. This form helps ensure that employees are using the required PPE and that it is being inspected regularly to maintain workplace safety.
## How To Complete This Form
To complete this form, follow these steps:
1. Select the type of PPE being used (e.g., Hard hat, Safety glasses, Earplugs).
2. Indicate whether a safety helmet is used (True/False or Other).
3. (Optional) Enter any additional comments.
4. (Optional) Select the number of pairs of safety gloves used.
5. Indicate whether safety goggles or safety monitors are used (True/False or Other).
6. Indicate whether a safety monitor is used (True/False or Other).
7. (Optional) Enter the time of the last PPE inspection.
8. (Optional) Enter the date of the last PPE inspection.
9. (Optional) Enter the date of the next PPE inspection.
10. Select who completed the safety equipment inspection (Manager, Supervisor, Safety Officer, Employee, Other).
11. (Optional) Enter any additional comments about the form.

## Field-by-Field Explanation
* **Type of PPE** (id: 2, select_one, required): This field asks you to select the type of personal protective equipment being used. Choose from options such as Hard hat, Safety glasses, Earplugs, and Other.
* **Safety Helmet** (id: 3, select_multiple, required): In this field, indicate whether a safety helmet is being used. Choose from options True, False, and Other.
* **Safety Shoes** (id: 4, text, optional): This field is optional and allows you to enter any additional information about safety shoes, such as the number of pairs used or any other details.
* **Safety Gloves** (id: 5, number, optional): If applicable, enter the number of pairs of safety gloves used.
* **Safety Goggles** (id: 6, select_multiple, required): In this field, indicate whether safety goggles or monitors are being used. Choose from options True, False, and Other.
* **Safety Monitor** (id: 7, select_multiple, required): This field is similar to the Safety Goggles field, indicating whether a safety monitor is being used. Choose from options True, False, and Other.
* **Safety Lemon** (id: 8, time, optional): This field is optional and allows you to enter the time of the last PPE inspection. Please note that this field does not seem to be correctly defined in the form YAML and might not function as expected.
* **Safety Lemon 2** (id: 9, date, optional): This field is also optional and allows you to enter the date of the last PPE inspection. Please note that this field also does not seem to be correctly defined in the form YAML and might not function as expected.
* **Safety Lemon 1 and 2** fields are not relevant to this form and might be considered errors.
* **Comments** (id: 10, note, optional): This field is optional and allows you to add any additional comments about the form or the PPE inspection.
* **Safety Equipment Inspection Frequency** (id: 11, select_multiple, required): In this field, select how often safety equipment is inspected (Daily, Weekly, Monthly, Other).
* **Safety Equipment Inspection Last Date** (id: 12, date, required): Enter the date of the last safety equipment inspection.
* **Safety Equipment Inspection Next Date** (id: 13, date, required): Enter the date of the next scheduled safety equipment inspection.
* **Safety Equipment Inspection Completed By** (id: 14, select_multiple, required): In this field, select who completed the safety equipment inspection (Manager, Supervisor, Safety Officer, Employee, Other).
* **Review** (id: 15, note, optional): This field is optional and allows you to add any additional comments about the form.
