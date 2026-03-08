# Production Testing Summary Report - Help Guide
## Purpose

This form is used to collect information about production testing, including production shift start time, test outcome, test duration, test start time, test result notes, production testers involved, product ID, test result summary, production shift, batch number, production shift start time, shift start time, and tester comments.

## How To Complete This Form

To complete this form, follow the steps outlined above.

## Field-by-Field Explanation

* **Production Testing Summary** (`production_testing_summary`, text, required): A brief summary of the production testing process.
* **Shift Start Time** (`shift_start`, time, optional): The time when the production shift started.
* **Production Run ID** (`production_run_id`, text, optional): An identifier for the production run.
* **Product Description** (`product_description`, text, optional): A description of the product being tested.
* **Test Outcome** (`test_outcome`, select_one, required): The result of the production testing. Choose from the dropdown menu.
* **Defect Description** (`defect_description`, text, optional): A description of any defects found during the testing process.
* **Test Duration** (`test_duration`, number, required): The duration of the test.
* **Test Start Time** (`test_start`, date, required): The start time of the test.
* **Test End Time** (`test_end_time`, time, optional): The end time of the test.
* **Test Result Notes** (`test_result_notes`, note, required): Any additional notes or comments about the test result.
* **Production Testers** (`production_testers`, select_multiple, optional): A list of production testers involved in the test.
* **Product ID** (`product_id`, text, optional): An identifier for the product being tested.
* **Test Result Summary** (`test_result_summary`, text, optional): A brief summary of the test result.
* **Production Shift** (`production_shift`, text, required): The production shift involved in the testing process.
* **Batch Number** (`batch_number`, text, optional): The batch number of the production run.
* **Production Shift Start Time** (`production_shift_start`, time, required): The start time of the production shift.
* **Shift Start** (`shift_start`, time, optional): The start time of the shift.
* **Production Tester Comments** (`production_tester_comments`, note, optional): Any comments or feedback from the production testers.
