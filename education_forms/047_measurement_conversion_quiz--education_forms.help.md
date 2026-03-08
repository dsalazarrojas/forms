<thinking>
This form is used to help users understand the process of converting between different units of measurement. The form asks users to select a conversion question, the unit to convert from, the original value in that unit, and the unit to convert to. Users are then asked to enter the converted value and the result is displayed for them to review.
</thinking>

# Measurement Conversion Quiz - Help Guide

## Purpose
The Measurement Conversion Quiz form is designed to assist users in converting between different units of measurement. This form guides users through a series of steps to accurately convert a given value from one unit to another.

## How To Complete This Form
To complete this form, follow the steps below:

1. Select the type of unit conversion question you are attempting to solve.
2. Choose the unit that the original value is in (from_unit).
3. Enter the original value (from_value).
4. Select the unit to which you would like to convert the value (to_unit).
5. Enter the converted value (to_value).

## Field-by-Field Explanation

* **unit_conversion_question** (select_multiple, required): This is where you select the type of conversion question you are attempting to answer. You can choose one or more of the options: meter, kilometer, centimeter, millimeter, inch, foot, yard, mile.
* **from_unit** (select_one, required): Select the unit in which the original value is measured. This will affect the type of value you need to enter in the next field.
* **from_value** (number, required): Enter the original value to be converted. Please use this value as it is, without any units (e.g. 10, not 10m).
* **to_unit** (select_one, required): Choose the unit to which you would like to convert the value. This will affect the type of value you need to enter in the next field.
* **to_value** (number, required): Enter the converted value in the selected unit. For example, if you selected "yard" as the from_unit and "kilometer" as the to_unit, enter the equivalent value in kilometers.
* **conversion_result** (number, optional): This field is automatically populated with the calculated conversion result for your review.
