# emergency_drill_report_form - Help Guide
## Purpose
This form is used to document information about emergency drills conducted at a location.

## How To Complete This Form
To complete this form, follow the steps below:

1. Fill in the **Drill Location** field with the location where the drill took place.
2. Check the **Is Safety Equipment Available** field if the required safety equipment is available.
3. Select whether a **Drill Was Conducted** by choosing 'True' or 'False'.
4. Choose how often **Drills Occur** at this location, from the options Daily, Weekly, Monthly, Quarterly, or Rarely.
5. Enter the **Drill Duration** in minutes.
6. Enter the **Number of Participants** and **Number of Supervisors**.
7. Enter the **Number of Observers**.

## Field-by-Field Explanation
* **Form Header** (`form_header`, text, required: false): This field is the title of the form.
* **Drill Location** (`drill_location`, text, required: false): Fill in the location where the drill took place.
  * Example: 123 Main St, Floor 2
* **Is Safety Equipment Available** (`safety_equipment_checked`, select_one, required: false): Check this only if the required safety equipment is available.
  * Choose 'True' if safety equipment is available, 'False' otherwise.
* **Was A Drill Conducted** (`drill_conducted`, select_one, required: false): Select whether a drill was conducted.
  * Choose 'True' if a drill was conducted, 'False' otherwise.
* **How Often** (`drill_frequency`, select_one, required: false): Choose how often drills occur at this location.
  * Choose from Daily, Weekly, Monthly, Quarterly, or Rarely.
* **Drill Duration** (`drill_duration`, number, required: false): Enter the duration of the drill in minutes.
  * Example: 30
* **Number of Participants** (`drill_participants`, number, required: false): Enter the number of participants in the drill.
  * Example: 10
* **Number of Supervisors** (`drill_supervisors`, number, required: false): Enter the number of supervisors in the drill.
  * Example: 2
* **Number of Observers** (`drill_observers`, number, required: false): Enter the number of observers in the drill.
  * Example: 1

## Tips
* Be accurate and factual when filling in the form.
* Make sure to check the required fields if they are applicable to the drill.
* If you are unsure about any field, please ask for clarification.
