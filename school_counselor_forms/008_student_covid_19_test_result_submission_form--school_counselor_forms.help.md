# Student COVID 19 Test Result Submission Form - Help Guide

## Purpose

The Student COVID 19 Test Result Submission Form is used to collect and document the results of COVID-19 tests conducted on students. This form helps schools and administrators track and report student test results, enabling better management of student health and attendance.

## How To Complete This Form

1.  Start by entering the student's name in the `Student Name` field.
2.  Enter the student's ID number in the `Student ID` field.
3.  Select the test result from the dropdown options in the `Test Result` field. Please choose from Normal, Positive, or Negative.
4.  Enter the date the test was taken in the `Date Taken` field using the date format (YYYY-MM-DD).
5.  Select the type of test conducted from the dropdown options in the `Test Type` field. Please choose from PCR, Rapid, or Rapid PCR.
6.  Indicate if the student is in school attendance by selecting `True` or `False` in the `School Attendance` field.
7.  Indicate if the student is in classroom attendance by selecting `True` or `False` in the `Classroom Attendance` field.
8.  Select the student's health status from the dropdown options in the `Student Health Status` field. Please choose from Normal, Positive, or Negative.
9.  Select the school's health status from the dropdown options in the `School Health Status` field. Please choose from Normal, Positive, or Negative.
10.  Enter the name of the person submitting the form in the `Submitter Name` field.
11.  Enter the email address of the person submitting the form in the `Submitter Email` field.
12.  Enter the phone number of the person submitting the form in the `Submitter Phone` field.
13.  Enter the position of the person submitting the form in the `Submitter Position` field.
14.  Click the `Submit` button to complete and submit the form.

## Field-by-Field Explanation

*   **Submit Form**: 
    *   (`submit_form`, `text`, required): This is the form submission button, use this to submit the form after filling out all required fields.
*   **Student Name** 
    *   (`student_name`, `text`, required): Enter the student's name.
*   **Student ID** 
    *   (`student_id`, `text`, required): Enter the student's ID number.
*   **Test Result** 
    *   (`test_result`, `select_one`, required): Select the test result from Normal, Positive, or Negative.
*   **Date Taken** 
    *   (`date_taken`, `date`, required): Enter the date the test was taken in the date format (YYYY-MM-DD).
*   **Test Type** 
    *   (`test_type`, `select_one`, required): Select the type of test from PCR, Rapid, or Rapid PCR.
*   **School Attendance** 
    *   (`school_attendance`, `select_one`, required): Select if the student is in school attendance from `True` or `False`.
*   **Classroom Attendance** 
    *   (`classroom_attendance`, `select_one`, required): Select if the student is in classroom attendance from `True` or `False`.
*   **Student Health Status** 
    *   (`student_health_status`, `select_one`, required): Select the student's health status from Normal, Positive, or Negative.
*   **School Health Status** 
    *   (`school_health_status`, `select_one`, required): Select the school's health status from Normal, Positive, or Negative.
*   **Submitter Name** 
    *   (`submitter_name`, `text`, required): Enter the name of the person submitting the form.
*   **Submitter Email** 
    *   (`submitter_email`, `email`, required): Enter the email address of the person submitting the form.
*   **Submitter Phone** 
    *   (`submitter_phone`, `text`, required): Enter the phone number of the person submitting the form.
*   **Submitter Position** 
    *   (`submitter_position`, `text`, required): Enter the position of the person submitting the form.

## Tips

*   Please ensure all required fields are filled out before submitting the form.
*   Use correct date and test type formats as specified.
