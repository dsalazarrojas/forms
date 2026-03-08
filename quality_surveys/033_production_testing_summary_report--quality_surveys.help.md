# Production Testing Summary Report - Help Guide
## Purpose
## How To Complete This Form
To complete this form, follow these steps:

1. Enter the Title of the production testing summary report. This is a required field that should briefly describe the purpose and scope of the testing activity.
2. Enter the Test Run ID, which is a unique identifier for this specific test run.
3. Enter the Batch ID, which relates to the production batch being tested.
4. Enter the Product ID, which identifies the specific product or product version being tested.
5. Select the Test Outcome from the options provided (Pass, Fail, or Other).
If the Test Outcome is Other, please provide further details in the Test Summary Other field.
6. Select the Shift during which the test run took place (Morning, Afternoon, Evening).
7. Enter the Start Time and End Time of the test run.
8. Enter the Test Duration, which is the length of time the test took to complete.
9. Enter the Test Date, which is the date on which the test was performed.
10. Enter any additional Production Test Summary Notes.
11. Enter a detailed Production Test Summary, including any important information about the test results.
12. If you selected Other as the Test Outcome, enter further details in the Test Summary Other field.
13. If you have any additional information that does not fit in the Production Test Summary field, enter it in the Test Summary Other Other field.

## Field-by-Field Explanation

* **Production Testing Summary Report Title** (`production_testing_summary_report_title`, text, required): Enter a brief title that describes the purpose and scope of the testing activity.
* **Test Run ID** (`test_run_id`, number, required): Enter the unique identifier for this specific test run.
* **Batch ID** (`batch_id`, text, required): Enter the Production Batch being tested.
* **Product ID** (`product_id`, text, required): Enter the specific product or product version being tested.
* **Test Outcome** (`test_outcome`, select_one, required): Select the outcome of the test run from the options provided (Pass, Fail, Other).
* **Test Outcome Other** (`test_outcome_other`, text, optional): If the Test Outcome is Other, enter further details about the test results.
* **Shift** (`shift`, select_one, required): Select the shift during which the test run took place (Morning, Afternoon, Evening).
* **Start Time** (`start_time`, time, optional): Enter the start time of the test run.
* **End Time** (`end_time`, time, optional): Enter the end time of the test run.
* **Test Duration** (`test_duration`, number, required): Enter the length of time the test took to complete.
* **Test Date** (`test_date`, date, optional): Enter the date on which the test was performed.
* **Production Test Summary** (`production_test_summary`, text, required): Enter a detailed summary of the test results.
* **Test Summary Other** (`test_summary_other`, text, optional): If you selected Other as the Test Outcome, enter further details.
* **Test Summary Other Other** (`test_summary_other_other`, text, optional): Enter any additional information that does not fit in the Production Test Summary field.
* **Production Test Summary Notes** (`production_test_summary_notes`, text, optional): Enter any additional information about the test results.
* **Production Test Summary Other Notes** (`test_summary_other_other_notes`, text, optional): Enter any additional information that does not fit in the Test Summary Other field.

Note: This form is meant to be completed by production team members to report on their testing activities.
