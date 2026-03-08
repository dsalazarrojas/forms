<thinking>
This form is used to collect data on blades, which are essential for the proper functioning of various machines and equipment. It is essential to fill out this form accurately and thoroughly to ensure that the data collected is reliable and useful for future reference. To prevent duplicate entries, please check the 'Blade identifier' field for unique blade serial or tag numbers. If you have previously submitted data for this blade, please do not submit again.
</thinking>

# Blade Data Collection Form - Help Guide
## Purpose
The Blade Data Collection Form is a tool used to collect and store data on blades, ensuring accurate and reliable information for future reference and proper maintenance of machines and equipment.

## How To Complete This Form
To complete this form, follow these steps:

1. Please provide your name and title to identify the person collecting the data.
2. Enter the date when the measurements were taken.
3. Enter a unique blade serial or tag number.
4. Provide measurements for each of the blade's measurements (one and two millimeters) if required.
5. Add any observations or condition notes about the blade.
6. If follow-up actions are needed, select 'True' and describe the actions in the text box.
7. If no follow-up actions are needed, select 'False'.

## Field-by-Field Explanation

* **Collector name** (`collector_name`, text, required): Enter your name as the person completing this form.
* **Date collected** (`date_collected`, date, required): Enter the date when the measurements were taken.
* **Blade identifier** (`blade_id`, text, required): Enter a unique blade serial or tag number. Please check the database for duplicate entries.
* **Measurement one millimeters** (`measurement_1`, number, required): Enter the measurement of the first dimension in millimeters.
* **Measurement two millimeters** (`measurement_2`, number, optional): Enter the measurement of the second dimension in millimeters, if required.
* **Condition notes** (`condition_notes`, text, optional): Add any observations or notes about the blade's condition.
* **Follow up required** (`follow_up_required`, select_one, required): Select 'True' if follow-up actions are needed.
* **Follow up actions** (`follow_up_actions`, text, optional): Describe the recommended follow-up actions if 'True' is selected. 

Note: Please ensure that all fields with 'True' as 'required' are filled out. The fields with 'False' as 'required' are optional.
