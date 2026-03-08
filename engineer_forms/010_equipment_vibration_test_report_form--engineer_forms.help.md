<thinking>As the form designer, I will create a user-facing help guide for the "Equipment Vibration Test Report Form" form, ensuring that end-users understand its purpose, how to complete it, and what each field means. I will base the explanation on the provided YAML fields.</thinking>

# Equipment Vibration Test Report Form - Help Guide
## Purpose
This form is used to document the results of equipment vibration tests. It captures essential information about the equipment's condition, test settings, and results, which is crucial for monitoring and maintaining the equipment's performance and lifespan.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the type of equipment being tested from the options listed under "Equipment type."
2. Describe the test conditions, including location and environment, in the "Test conditions" field.
3. Enter the duration of the test in hours.
4. Provide measured values, such as acceleration or vibration levels.
5. Offer any recommendations or results from the test.
6. Indicate the equipment's condition before and after the test.
7. Choose the test frequency (1-10) and resolution (High, Low, Medium).
8. Select the test location.
9. Specify the test level (High, Low).
10. Enter the test amplitude and speed.
11. Choose the test frequency range (High, Low, Yes, No).
12. Select the test environment (Yes, No).
13. Choose the test duration range (Yes, No).
14. Select the test level range (High, Low).
15. Indicate whether each test frequency range (1-4) was met.
16. Finally, select the person assigned to complete the test and enter the equipment's ID number.

## Field-by-Field Explanation
* **Equipment type** (`equipment_type`, `select_one`, required): Choose the type of equipment being tested from the options listed.
* **Test conditions** (`test_conditions`, `text`, required): Describe the test conditions, including location and environment.
* **Test duration** (`test_duration`, `number`, required): Enter the duration of the test in hours.
* **Measured values** (`measured_values`, `number`, required): Provide measured values, such as acceleration or vibration levels.
* **Recommendations** (`recommendations`, `text`, required): Offer any recommendations or results from the test.
* **Equipment Condition** (`equipment_condition`, `select_multiple`, required): Indicate the equipment's condition before and after the test.
* **Test frequency** (`test_frequency`, `select_one`, required): Choose the test frequency (1-10).
* **Test frequency resolution** (`test_frequency_resolution`, `select_one`, required): Choose the test frequency resolution (High, Low, Medium).
* **Test location** (`test_location`, `select_one`, required): Select the test location.
* **Test level** (`test_level`, `select_multiple`, required): Specify the test level (High, Low).
* **Test amplitude** (`test_amplitude`, `number`, required): Enter the test amplitude.
* **Test speed** (`test_speed`, `number`, required): Enter the test speed.
* **Test acceleration** (`test_acceleration`, `number`, required): Enter the test acceleration.
* **Assigned to** (`assigned_to`, `select_one`, required): Select the person assigned to complete the test.
* **Equipment ID** (`equipment_id`, `number`, required): Enter the equipment's ID number.
* **Date test completed** (`date_test_completed`, `date`, required): Enter the date the test was completed.
* **Test results** (`test_results`, `text`, required): Enter any test results.
* **Test frequency range 1** (`test_frequency_range`, `select_multiple`, required): Choose whether the test frequency range 1 was met (Yes, No).
* **Test frequency range 2** (`test_frequency_range_2`, `select_multiple`, required): Choose whether the test frequency range 2 was met (Yes, No).
* **Test frequency range 3** (`test_frequency_range_3`, `select_multiple`, required): Choose whether the test frequency range 3 was met (Yes, No).
* **Test frequency range 4** (`test_frequency_range_4`, `select_multiple`, required): Choose whether the test frequency range 4 was met (Yes, No).
* **Test environment** (`test_environment`, `select_multiple`, required): Indicate whether the test environment was met (Yes, No).
* **Test duration range** (`test_duration_range`, `select_multiple`, required): Choose whether the test duration range was met (Yes, No).
* **Test level range** (`test_level_range`, `select_multiple`, required): Choose whether the test level range was met (High, Low).
* **Notes** (`notes`, `text`, required): Enter any additional notes about the test.

## Tips
* Ensure that you enter accurate and complete information for each field.
* Review your answers carefully before submitting the form.
* If you have any questions or concerns, please contact the equipment maintenance team.
