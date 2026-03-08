# Community Park Feedback Form - Help Guide
## Purpose
This form is designed to collect feedback from park visitors, helping us understand their experiences and identify areas for improvement. Your input will help us make the park a more enjoyable and safe place for everyone.

## How To Complete This Form
To complete this form, follow these steps:

1. Please fill in your Visitor Information section if you wish to be contacted for follow-up.
2. Select the park you visited.
3. Choose the date and time of your visit.
4. Indicate how long you stayed in the park.
5. Select all the reasons why you visited the park (e.g., walking, picnic, sports).
6. Rate the park's cleanliness, safety, maintenance, and amenities.
7. Select all the amenities you used during your visit.
8. Describe any issues you encountered.
9. Suggest improvements.
10. Indicate how often you visit the park.
11. Tell us if you would recommend the park to others.
12. Add any additional comments or suggestions.

## Field-by-Field Explanation
* **Visitor Information** (`visitor_info`, note, optional): Optional details about you, such as your name and contact information.
* **First Name** (`first_name`, text, optional): Your first name for identification purposes.
* **Last Name** (`last_name`, text, optional): Your last name for identification purposes.
* **Email Address** (`email`, email, optional): Your email address for follow-up if needed.
* **ZIP Code** (`zip_code`, text, optional): The zip code where you live.
* **Visit Information** (`visit_info`, note, optional): Additional information about your visit.
* **Which Park Did You Visit** (`park_name`, select_one, true): Select the park you visited from the list.
* **Date of Visit** (`visit_date`, date, true): Enter the date you visited the park.
* **Time of Visit** (`visit_time`, time, false): Optional time of your visit.
* **How Long Did You Stay** (`visit_duration`, select_one, true): Indicate the length of your visit.
* **Purpose of Visit** (`visit_purpose`, select_multiple, true): Select all the reasons why you visited the park.
* **Park Ratings** (`ratings`, note, false): Rate the park's cleanliness, safety, maintenance, and amenities.
* **Overall Satisfaction** (`overall_satisfaction`, select_one, true): Rate your overall satisfaction with the park.
* **Cleanliness Rating** (`cleanliness`, select_one, true): Rate the park's cleanliness.
* **Safety Rating** (`safety`, select_one, true): Rate the park's safety.
* **Maintenance Rating** (`maintenance`, select_one, true): Rate the park's maintenance.
* **Amenities Rating** (`amenities`, select_one, true): Rate the park's amenities.
* **Amenities Used** (`amenities_used`, select_multiple, false): Select all the amenities you used during your visit.
* **Did You Encounter Any Issues** (`issues_encountered`, select_one, true): Tell us if you encountered any issues.
* **Describe the Issues** (`issues_description`, text, false): Provide details about the issues you encountered.
* **Improvements** (`improvements`, text, false): Suggest ways to improve the park.
* **How Often Do You Visit This Park** (`visit_frequency`, select_one, true): Indicate how often you visit the park.
* **Would You Recommend This Park** (`recommend`, select_one, true): Tell us if you would recommend the park to others.
* **Additional Comments** (`additional_comments`, text, false): Share any additional thoughts or suggestions.
