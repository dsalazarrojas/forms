# Daily Drinking Questionnaire - Help Guide
## Purpose
This form is designed to collect information about an individual's drinking habits on a daily basis.

## How To Complete This Form
To complete this form, follow these steps:

* Enter your **User ID** (required: false) to uniquely identify the individual.
* Select the **Date** of the drinking occurrence.
* Answer the question **Drink Type** (select_one) by choosing between 'Yes' or 'No'.
* If the answer to **Drink Type** is 'Yes', enter the **Consumed** (number) value.
* Enter the amount of **Units Consumed** (number) if **Drink Type** is 'Yes'.
* If **Drink Type** is 'Yes', enter the time at which the consumption took place (in a valid time format) for **Time Consumed** (time).
* Enter a brief description of the **Location** where the consumption occurred (text).
* For each of **Drinker Status**, select the options Active or Inactive to indicate the drinking status on this day:
	+ **Drinker Status** (select_one)
	+ **Drinker Status 2** (select_multiple)
	+ **Drinker Status 3** (select_multiple)

## Field-by-Field Explanation

* **User ID**:
	+ Label: User ID
	+ Required: false
	+ Type: number
* **Date**:
	+ Label: Date
	+ Required: false
	+ Type: date
* **Drink Type**:
	+ Label: Drink Type
	+ Type: select_one
	+ Options: 'Yes', 'No'
* **Consumed**:
	+ Label: Consumed
	+ Type: number
* **Units Consumed**:
	+ Label: Units Consumed
	+ Type: number
* **Time Consumed**:
	+ Label: Time Consumed
	+ Type: time
* **Location**:
	+ Label: Location
	+ Type: text
* **Drinker Status**:
	+ Label: Drinker Status
	+ Type: select_one
	+ Options: Active, Inactive
* **Drinker Status 2**:
	+ Label: Drinker Status 2
	+ Type: select_multiple
	+ Options: Active, Inactive
* **Drinker Status 3**:
	+ Label: Drinker Status 3
	+ Type: select_multiple
	+ Options: Active, Inactive

## Tips
This form is intended for daily use, so please fill it out regularly to provide accurate and consistent data. If you have any questions or concerns, please contact the relevant authorities.
 
Please note that fields marked as required (true) are mandatory and must be filled out. Fields not marked as required can be left blank if not applicable.
