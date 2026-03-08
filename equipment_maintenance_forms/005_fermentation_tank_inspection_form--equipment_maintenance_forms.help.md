# Fermentation Tank Inspection Form - Help Guide
## Purpose
The Fermentation Tank Inspection Form is used to record the condition and status of fermentation tanks. It helps in maintaining accurate records and ensuring the tanks are properly inspected and maintained.

## How To Complete This Form
To complete this form, please follow these steps:

1.  Ensure you're filling this form for the correct tank by entering the `tank id` number.
2.  Select the `tank status` as either `Inspected` or `Not Inspected`.
3.  Record any notable issues or observations about the tank's condition and status in the `notes` field.
4.  Select the person or team member responsible for the tank from the `assigned to` dropdown list.
5.  Record the tank's current temperature reading from the temperature gauge.
6.  Check the tank level using the level indicator and record the reading.
7.  Record the tank pressure using the pressure gauge.
8.  Enter the date and time of the inspection.
9.  Evaluate the tank condition using the `tank condition` dropdown list (Good, Fair, Poor).
10.  Add any additional comments regarding the tank's condition.
11.  Record the tank's size and material.
12.  Specify the tank's position (Above, Below).
13.  Choose the tank type from the available options (Fermenter, Storage).

## Field-by-Field Explanation
*   **tank id** (`1`, `number`, required/optional): Enter the unique identifier of the tank being inspected.
*   **tank status** (`2`, `select_one`, required/optional): Indicate whether the tank has been inspected or not.
*   **tank capacity** (`3`, `number`, required/optional): Record the tank's capacity, although this field seems redundant with the `tank size` field.
*   **notes** (`4`, `note`, required/optional): Add any additional comments or notes about the tank's condition.
*   **assigned to** (`5`, `select_one`, required/optional): Choose the person or team responsible for the tank.
*   **tank temperature** (`6`, `number`, required/optional): Enter the tank's current temperature reading.
*   **tank level** (`7`, `number`, required/optional): Check and record the tank level using the level indicator.
*   **tank pressure** (`8`, `number`, required/optional): Record the tank pressure using the gauge.
*   **inspection date** (`9`, `date`, required/optional): Enter the date of the inspection.
*   **inspection time** (`10`, `time`, required/optional): Record the time of the inspection.
*   **tank condition** (`11`, `select_multiple`, required/optional): Evaluate the tank's condition as Good, Fair, or Poor.
*   **comments** (`12`, `note`, required/optional): Add any additional comments about the tank's condition.
*   **tank size** (`13`, `number`, required/optional): Record the tank's size.
*   **tank material** (`14`, `select_one`, required/optional): Choose the tank material (Stainless Steel, Carbon Steel, Glass).
*   **tank position** (`15`, `select_one`, required/optional): Indicate whether the tank is positioned above or below.
*   **tank type** (`16`, `select_one`, required/optional): Select the type of tank (Fermenter, Storage).
