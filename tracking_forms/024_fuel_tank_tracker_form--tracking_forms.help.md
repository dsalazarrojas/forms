<thinking>
The purpose of this form is to track fuel tank information, which is used to monitor and manage fuel levels, last updated times, and associated personnel information. This form is likely used in the context of fuel management, possibly in industries such as aviation, marine, or energy production. The form should be filled out for each fuel tank, providing a unique tank ID, tank name, current fuel level, last updated date, who last updated the information, and any additional notes. This form should not be used for other purposes, such as creating new fuel tanks.
</thinking>

# fuel_tank_tracker_form - Help Guide
## Purpose
This form is used to track fuel tank information, including tank ID, name, fuel level, last updated date, last updated by, and any additional notes.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the required fields: tank ID, tank name, and select the current fuel level.
2. Enter the last updated date using the calendar or date picker provided.
3. Select who last updated the information from the list of available options.
4. Enter any additional notes, if needed.
5. Click the submit button to save your changes.

## Field-by-Field Explanation

* **Tank Id** (`tank_id`, text, required): Enter a unique identifier for the fuel tank.
* **Tank Name** (`tank_name`, text, required): Enter the name of the fuel tank.
* **Fuel Level** (`fuel_level`, number, required): Enter the current fuel level in a numerical value.
* **Last Updated** (`last_updated`, date, required): Enter the date when the fuel level was last updated.
* **Last Updated By** (`updated_by`, select_one, required): Select the user who last updated the information.
* **Notes** (`notes`, note, optional): Enter any additional comments or notes about the tank.
* **Created By** (`created_by`, select_multiple, optional): Select the users who created the form.
* **Created By** field is not required as it's not relevant to the form purpose. 

## Tips
* Make sure to enter accurate information to ensure reliable tracking of fuel tank levels.
* If the tank is not being actively managed, consider selecting "None" from the Last Updated By field.
* Use the "Notes" field to store any relevant comments or historical information.
