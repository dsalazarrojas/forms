# Lawn Mower Safety Assessment - Help Guide
## Purpose
This form is designed to assess the safety and maintenance status of lawn mowers and other outdoor power equipment. Please fill out this form carefully and accurately to ensure the correct assessment of your equipment's condition.

## How To Complete This Form
- Begin by entering your name and title, which will allow us to track who completed this form and their level of authority.
- Choose the type of equipment you are assessing (e.g., Lawn Mower, Trimmer, etc.).
- Select the current status of the blade (Severely Worn, Moderately Worn, or Slightly Worn).
- Choose how much tension is on the blade (a number between 1 and 100).
- Select the type of cutting system used on the equipment (Fixed Blade, Rotating Blade, or Other).
- Answer how often the blade has been cleaned (Weekly, Biweekly, Monthly, or Other).
- If applicable, report when the oil was last filled.
- Enter any necessary safety precautions or comments.
- Finally, submit this form for review.

## Field-by-Field Explanation
- **Operator Name** (`operator_name`): Please enter your name and title, such that we can accurately track and report on who filled this form.
  - **Type**: text
  - **Required**: Required
- **Equipment Type** (`equipment_type`): Choose the type of equipment being assessed (e.g., Lawn Mower, Trimmer, etc.).
  - **Type**: select_one
  - **Required**: Required
- **Blade Wear** (`blade_wear`): Choose how much the blade is worn (Severely Worn, Moderately Worn, or Slightly Worn).
  - **Type**: select_multiple
  - **Required**: Required
- **Blade Tension** (`blade_tension`): Enter a number between 1 and 100 to represent the current tension on the blade.
  - **Type**: number
  - **Required**: Required
- **Cutting System** (`cutting_system`): Select the type of cutting system used on the equipment (Fixed Blade, Rotating Blade, or Other).
  - **Type**: select_one
  - **Required**: Required
- **Blade Cleaning Frequency** (`blade_cleaning_frequency`): Choose how often the blade is cleaned (Weekly, Biweekly, Monthly, or Other).
  - **Type**: select_multiple
  - **Required**: Not Required
- **Oil Filling Date** (`oil_filling_date`): If applicable, report when the oil was last filled.
  - **Type**: time
  - **Required**: Required
- **Safety Precautions** (`safety_precautions`): Enter any necessary safety precautions or comments.
  - **Type**: text
  - **Required**: Not Required
- **Comments** (`comments`): Add any additional comments or notes about the equipment's condition.
  - **Type**: text
  - **Required**: Not Required
  - **Label**: This field is optional and used for general remarks.
- **Submit** (`submit`): Complete this form when finished.
  - **Type**: text
  - **Required**: Not Required
