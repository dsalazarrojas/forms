# Bar Customer Feedback Form - Help Guide
## Purpose

This form is designed to collect feedback from customers on their experience at a bar.

## How To Complete This Form

1. Please fill out the form accurately and honestly to provide constructive feedback.
2. Select the required fields marked as **required**.
3. Answer all questions and provide any relevant information.
4. If you have any suggestions or comments, use the "Special Requests or Suggestions" field.

## Field-by-Field Explanation

* **Feedback Date** (`feedback_date`, `date`, required): Please select the date of your visit.
* **Your Name (Optional)** (`customer_name`, `text`, optional): Your full name.
* **Email Address (Optional)** (`customer_email`, `email`, optional): If you'd like us to contact you for follow-up.
* **Phone Number (Optional)** (`customer_phone`, `text`, optional): Your contact number.
* **Date of Visit** (`visit_date`, `date`, optional): When did you visit?
* **Approximate Time of Visit** (`visit_time`, `select_one`, optional): Select the approximate time of your visit.
* **How Often Do You Visit?** (`visit_frequency`, `select_one`, required): How often do you visit this bar?
* **Size of Your Party** (`visit_party_size`, `number`, optional): How many people were in your group.
* **Atmosphere and Ambiance** (`atmosphere_rating`, `select_one`, required): Rate the atmosphere.
* **Cleanliness and Maintenance** (`cleanliness_rating`, `select_one`, required): How clean was the bar?
* **Staff Courtesy and Friendliness** (`staff_courtesy_rating`, `select_one`, required): How friendly were the staff?
* **Staff Knowledge and Service** (`staff_knowledge_rating`, `select_one`, required): Did the staff know their drinks?
* **Wait Time for Service** (`wait_time_rating`, `select_one`, required): How long did you wait for service?
* **Quality of Beverages** (`drink_quality_rating`, `select_one`, required): How were your drinks?
* **Pricing and Value** (`drink_pricing_rating`, `select_one`, required): Were prices fair?
* **Food Quality (if applicable)** (`food_quality_rating`, `select_one`, optional): If you ordered food, how was it?
* **Overall Experience** (`overall_experience_rating`, `select_one`, required): How would you rate your overall experience?
* **Would You Recommend This Bar?** (`recommendation_likelihood`, `select_one`, required): Would you recommend this bar?
* **What Did You Like Most?** (`positive_aspects`, `text`, optional): What did you like most?
* **What Could Be Improved?** (`improvement_areas`, `text`, optional): What could we improve?
* **Special Requests or Suggestions** (`special_suggestions`, `text`, optional): Any suggestions?
* **May We Contact You About Your Feedback?** (`consent_contact`, `select_one`, optional): May we contact you for follow-up?
