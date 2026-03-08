<thinking>... internal reasoning: This form is intended to collect feedback and complaints from employees regarding their performance reviews. It's designed to allow users to easily submit issues they faced during the review process. To prevent duplicate submissions, the form should not be filled out by the same user more than once in a short period of time... </thinking>

# Performance Review Complaint Form - Help Guide
## Purpose
This form is intended to collect your feedback and complaints regarding your performance review. It helps us to identify areas of improvement and provide a more accurate review process. Please fill out the form carefully and truthfully, and do not submit it if you've already reported the same complaint.

## How To Complete This Form
To complete this form, simply follow these steps:

1.  Select the category of your complaint from the drop-down list. Choose "Complaint Forms" if your issue relates to a performance review.
2.  Provide a brief description of your complaint in the "Description" field.
3.  If applicable, select the tool you were using during the review that caused the issue.
4.  Specify the filename of the output file generated for your review, if you've already received one.
5.  If you know your unique form ID, you can provide it.
6.  Finally, choose the date when you first noticed the problem.

## Field-by-Field Explanation

* **Category** (`Category`, select_one, required=False): Select the category of your complaint from the list. This will help us direct your issue to the right department.
* **Description** (`Description`, text, required=False): Provide a brief description of the issue you're facing. Be as detailed as possible to help us understand your complaint better.
* **Assigned Tool** (`Assigned Tool`, select_multiple, required=False): If you were using a specific tool during the review, select it here. This will help us narrow down the cause of the issue.
* **Output File** (`Output File`, text, required=False): If you've already received an output file for your review, provide its filename here.
* **Form ID** (`Form ID`, number, required=False): If you know your unique form ID, please provide it.
* **Created At** (`Created At`, date, required=False): This field will automatically populate with the date of your submission. You don't need to fill this out.
* **Updated At** (`Updated At`, date, required=False): This field will automatically populate with the date of your last submission. You don't need to fill this out.
