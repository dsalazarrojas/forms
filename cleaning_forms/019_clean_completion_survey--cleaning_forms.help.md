<thinking>
This form is designed for customers to provide feedback on the quality of our cleaning services after the job is completed. We ask questions about their satisfaction with the service, the areas of the house that were cleaned, and any issues that arose during the process. We also collect feedback on the professionalism and timeliness of our crew and any areas for improvement. This form should only be filled out by customers who have received our cleaning services and should not be filled out by staff members.
</thinking>

# Clean Completion Survey - Help Guide
## Purpose
This form is intended to gather feedback from customers about their experience with our cleaning services. It helps us identify areas where we excel and areas where we need to improve.

## How To Complete This Form
1. Answer each question truthfully and thoroughly.
2. Select the best option that describes your experience for each question.
3. If you have any issues or concerns, please describe them in the "Issues Description" field.
4. If you have any positive feedback or suggestions for improvement, please share them in the "Positive Feedback" and "Improvement Suggestions" fields.

## Field-by-Field Explanation

* **Customer Name** (`customer_name`, text, required): Please enter the name of the customer who received our cleaning services.
* **Customer Email** (`customer_email`, email, required): Please enter the email address of the customer who received our cleaning services.
* **Customer Phone** (`customer_phone`, text, optional): This is the contact phone number of the customer who received our cleaning services.
* **Service Location/Address** (`job_address`, text, required): Please enter the address where the cleaning was performed.
* **Service Type** (`service_type`, select_one, required): Please select the type of cleaning service that was provided (e.g. Residential Home Cleaning, Office/Commercial Cleaning, etc.).
* **Service Completion Date** (`service_date`, date, required): Please select the date the service was completed.
* **Crew Lead Name** (`cleaning_crew_lead`, text, optional): This is the name of the supervisor or crew leader who performed the service.
* **Areas Cleaned** (`areas_cleaned`, select_multiple, required): Please select all the areas of the house that were cleaned.
* **Additional Services Performed** (`additional_services`, text, optional): If any extra services beyond standard cleaning were performed, please describe them here.
* **Overall Satisfaction** (`overall_satisfaction`, select_one, required): Please select your overall satisfaction with the service (Very Satisfied, Satisfied, Neutral, Dissatisfied, Very Dissatisfied).
* **Quality of Cleaning** (`cleanliness_quality`, select_one, required): Please select the quality of the cleaning performed (Excellent, Very Good, Good, Fair, Poor).
* **Professionalism of Crew** (`professionalism`, select_one, required): Please select the professionalism of the cleaning crew (Excellent, Very Good, Good, Fair, Poor).
* **Timeliness of Service** (`timeliness`, select_one, required): Please select the timeliness of the service (Excellent, Very Good, Good, Fair, Poor).
* **Attention to Detail** (`attention_detail`, select_one, required): Please select the attention to detail of the cleaning crew (Excellent, Very Good, Good, Fair, Poor).
* **Quality of Cleaning Products Used** (`product_quality`, select_one, optional): Please select the quality of cleaning products used (Excellent, Very Good, Good, Fair, Poor).
* **Any Issues** (`any_issues`, select_one, required): Please select if any issues or concerns arose during the service (True or False).
* **Issues Description** (`issues_description`, text, optional): If any issues arose, please describe them in detail.
* **Positive Feedback** (`positive_feedback`, text, optional): Share any positive feedback or compliments you have for our service.
* **Improvement Suggestions** (`improvement_suggestions`, text, optional): Please share any suggestions you have for how we can improve our service.
* **Recommend Service** (`recommend_service`, select_one, required): Please select if you would recommend our service to others (Yes, Probably, Not Sure, Probably Not, False).
* **Future Bookings** (`future_bookings`, select_one, required): Please select if you will book our service again (True, False, Maybe).
