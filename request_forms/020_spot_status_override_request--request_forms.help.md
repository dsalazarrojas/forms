# Spot Status Override Request - Help Guide

## Purpose
This form is used to request a manual override of a spot's status.

## How To Complete This Form
To complete this form, please follow these steps:
1. Enter the user ID of the user who is currently assigned to the spot.
2. Enter the facility ID of the facility where the spot is located.
3. Enter the spot ID of the spot you wish to override the status for.
4. Select the new status ID that you wish to apply to the spot.
5. Enter the reason for the status override, providing as much detail as possible.
6. Enter a justification for the status override, providing as much detail as possible.
7. Select the date and time at which the status override should take effect.
8. Select the user to whom the spot's status override request should be assigned to.
9. Click submit to submit the form.

## Field-by-Field Explanation
* **User Id** (`user_id`, number, required): Enter the user ID of the user who is currently assigned to the spot.
* **Facility Id** (`facility_id`, number, required): Enter the facility ID of the facility where the spot is located.
* **Spot Id** (`spot_id`, number, required): Enter the spot ID of the spot you wish to override the status for.
* **Status Id** (`status_id`, number, required): Select the new status ID that you wish to apply to the spot.
* **Reason** (`reason`, text, required): Enter the reason for the status override, providing as much detail as possible.
* **Justification** (`justification`, text, required): Enter a justification for the status override, providing as much detail as possible.
* **Date** (`date`, date, optional): Enter the date at which the status override should take effect. This field is optional and will default to the current date if left blank.
* **Time** (`time`, time, optional): Enter the time at which the status override should take effect. This field is optional and will default to the current time if left blank.
* **Assigned To** (`assigned_to`, select_one, optional): Select the user to whom the spot's status override request should be assigned to. This field is optional and will default to the current user if left blank.
