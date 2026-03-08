# tracking_pixel_setup_survey - Help Guide
## Purpose
This form is used to collect information for tracking pixel setup, including status and error messages.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the **tracking_pixel_survey_id**, which is a unique identifier for the tracking pixel survey.
2. Provide the **company_name** and **website_domain** associated with the tracking pixel setup.
3. Indicate the **implementation_status** of the tracking pixel setup, which can be Not Started, In Progress, or Implemented.
4. Enter the **google_pixel_id**, **facebook_pixel_id**, and **google_tag_id** to specify the tracking pixel IDs for Google and Facebook.
5. Select the **google_pixel_tracking_status** and **facebook_pixel_tracking_status** to indicate whether the tracking pixels are Enabled, Disabled, or Not Required.
6. Enter any **google_pixel_tracking_error_messages** and **facebook_pixel_tracking_error_messages** that have occurred during setup.
7. Specify the **tracking_report_frequency** to determine how often the tracking report should be generated.
8. Add any **contact_information**, including **contact_phone** and **contact_email**, for further follow-up.
9. Select the report generation frequency using **tracking_pixel_setup_report_frequency** and the timezone for the report using **tracking_pixel_setup_report_timezone**.
10. Optionally, provide a **tracking_pixel_setup_comments** for any further information.

## Field-by-Field Explanation
* **1. tracking_pixel_survey_id** (`tracking_pixel_survey_id`, Number, Optional): A unique identifier for the tracking pixel survey.
* **2. company_name** (`company_name`, Text, Optional): The name of the company associated with the tracking pixel setup.
* **3. website_domain** (`website_domain`, Text, Optional): The domain name of the website associated with the tracking pixel setup.
* **4. implementation_status** (`implementation_status`, Select One, Optional): The status of the tracking pixel implementation, which can be Not Started, In Progress, or Implemented.
* **5. google_pixel_id** (`google_pixel_id`, Text, Optional): The ID for the Google tracking pixel.
* **6. facebook_pixel_id** (`facebook_pixel_id`, Text, Optional): The ID for the Facebook tracking pixel.
* **7. google_tag_id** (`google_tag_id`, Text, Optional): The ID for the Google tag.
* **8. google_pixel_tracking_status** (`google_pixel_tracking_status`, Select One, Optional): The status of the Google tracking pixel, which can be Enabled, Disabled, or Not Required.
* **9. facebook_pixel_tracking_status** (`facebook_pixel_tracking_status`, Select One, Optional): The status of the Facebook tracking pixel, which can be Enabled, Disabled, or Not Required.
* **10. google_pixel_tracking_error_messages** (`google_pixel_tracking_error_messages`, Text, Optional): Any error messages encountered during Google tracking pixel setup.
* **11. facebook_pixel_tracking_error_messages** (`facebook_pixel_tracking_error_messages`, Text, Optional): Any error messages encountered during Facebook tracking pixel setup.
* **12. tracking_report_frequency** (`tracking_report_frequency`, Text, Optional): The frequency at which the tracking report should be generated.
* **13. tracking_pixel_setup_comments** (`tracking_pixel_setup_comments`, Note, Optional): Any comments or additional information for the tracking pixel setup.
* **14. contact_information** (`contact_information`, Email, Optional): Contact information for further follow-up.
* **15. contact_phone** (`contact_phone`, Text, Optional): Phone number for contact.
* **16. contact_email** (`contact_email`, Email, Optional): Email address for contact.
* **17. website_url** (`website_url`, Text, Optional): The URL of the website associated with the tracking pixel setup.
* **18. tracking_pixel_setup_report_frequency** (`tracking_pixel_setup_report_frequency`, Select Multiple, Optional): The frequency at which the tracking report should be generated.
* **19. tracking_pixel_setup_report_timezone** (`tracking_pixel_setup_report_timezone`, Select One, Optional): The timezone for the tracking report.
* **20. tracking_pixel_setup_report_start_time** (`tracking_pixel_setup_report_start_time`, Time, Optional): The start time for the tracking report.
* **21. tracking_pixel_setup_report_time** (`tracking_pixel_setup_report_time`, Time, Optional): The end time for the tracking report.
* **22. tracking_pixel_setup_report_end_time** (`tracking_pixel_setup_report_end_time`, Time, Optional): The end time for the tracking report.
* **23. tracking_pixel_setup_report_timezone** (`tracking_pixel_setup_report_timezone`, Select One, Optional): The timezone for the tracking report.
* **24. tracking_pixel_setup_report_timezone_offset** (`tracking_pixel_setup_report_timezone_offset`, Number, Optional): The offset for the tracking report timezone.
* **25. tracking_pixel_setup_report_timezone_offset_unit** (`tracking_pixel_setup_report_timezone_offset_unit`, Select One, Optional): The unit for the tracking report timezone offset.
