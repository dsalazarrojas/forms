<thinking> 
This guide is for the "Home Pregnancy Test Survey" form, used to collect information about a home pregnancy test. This form is likely used for healthcare professionals to monitor and analyze data about home pregnancy tests, but more context would be needed to confirm its exact use. It is possible that this form is used for quality control, research, or other related purposes. Please ensure that you have the necessary permissions and authorization to complete this form, as it may contain personal health information.

To confirm that this form is completed correctly, ensure that you have answered all required and optional questions accurately. If you are unsure about any field, refer to the field-by-field explanation below.</thinking>

# Home Pregnancy Test Survey - Help Guide
## Purpose
This form is used to collect information about home pregnancy tests. Please ensure that you have completed the form accurately and truthfully.

## How To Complete This Form
- Read through the form carefully before starting.
- Answer all required fields (those marked as "required: true").
- Fill out the form completely before submitting.
- If you are unsure about any field, refer to the field-by-field explanation below.

## Field-by-Field Explanation

* **Test Brand** (`test_brand`, select_one, required: false): Select the brand of the home pregnancy test you used.
*   *None*: No particular brand was used.
*   *Other*: Other (please specify in the "Other" field).
* **Test Timing** (`test_timing`, select_one, required: false): Select when you used the test.
*   *None*: Not applicable.
*   *Other*: Other (please specify in the "When Did Test" field).
* **Test Results** (`test_results`, select_one, required: false): Select the result of the test.
*   *None*: The test was inconclusive or not applicable.
*   *Other*: Other (please specify in the "Result Of Test" field).
* **User Confidence** (`user_confidence`, select_one, required: false): Select your confidence level in the accuracy of the test.
*   *None*: Not applicable.
*   *Low*: You are not confident in the accuracy of the test.
*   *High*: You are confident in the accuracy of the test.
* **Other**: Other (please specify in the "Confidence Other" field).
* **Test Type** (`test_type`, select_one, required: false): Select the type of test used.
*   *None*: Not applicable.
*   *Other*: Other (please specify in the "Test Uses" field).
* **Test Uses** (`test_uses`, select_one, required: false): Select how the test was used.
*   *None*: Not applicable.
*   *Other*: Other (please specify in the "Other Phone" field).
* **Other Phone** (`other_phone`, text, required: false): If "Other" was selected for "Test Uses", specify the phone number here.
* **Timing Of Test** (`timing_of_test`, select_multiple, required: false): Select when the test was done.
*   *Yes*: The test was done during the specified time period.
*   *No*: The test was not done during the specified time period.
* **When Did Test** (`when_did_test`, date, required: false): If "Other" was selected for "Test Timing", specify the date and time the test was done.
* **Result Of Test** (`result_of_test`, select_one, required: false): Select the result of the test.
*   *Yes*: The test showed a positive result.
*   *No*: The test showed a negative result.
* **Confidence Level** (`confidence_level`, select_one, required: false): Select your confidence level in the result.
*   *High*: High confidence in the accuracy of the result.
*   *Low*: Low confidence in the accuracy of the result.
* **Confidence Other** (`confidence_other`, text, required: false): If "Other" was selected for "Confidence Level", specify your confidence level here.
* **Comments** (`comments`, text, required: false): Any additional comments about the test.
* **Phone** (`phone`, text, required: false): Your contact phone number.
* **Email** (`email`, email, required: false): Your contact email address.
* **Other Phone** (`other_phone`, text, required: false): If "Other" was selected for "Test Uses", specify the other phone number here.
* **Other Email** (`other_email`, text, required: false): If "Other" was selected for "Test Uses", specify the other email address here.
* **Assigned Tool** (`assigned_tool`, text, required: false): Any additional information about the tool used.
