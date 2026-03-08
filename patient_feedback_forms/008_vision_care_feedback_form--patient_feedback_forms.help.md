<thinking>
We are creating a help guide for the "Vision Care Feedback Form" to ensure end-users understand its purpose, how to complete it, and the meaning of each field. This guide will provide a clear and concise explanation of the form's requirements and functionality. The form's purpose is to gather feedback from patients about their experience at the vision care facility, including ratings of various aspects such as doctor, staff, and facilities, as well as a message to provide additional feedback.
</thinking>

# Vision Care Feedback Form - Help Guide
## Purpose
The Vision Care Feedback Form is designed to collect feedback from patients about their experience at the vision care facility. This form helps us understand what we do well and where we can improve to provide better care for our patients.
## How To Complete This Form
1. Fill in the required fields: Patient Name, Date of Visit, Time of Visit, Will Revisit, and Follow Up.
2. Provide your email address and phone number (if available).
3. Rate your overall experience with the doctor, staff, and facilities using the rating scale (e.g., 1-5).
4. Choose whether or not you would like to schedule a follow-up visit.
5. Provide any additional feedback or comments in the Feedback Message field.
## Field-by-Field Explanation

* **Patient Name** (`patient_name`, text, required): Please enter your name as you want to be addressed.
* **Email** (`email`, email, optional): If you have an email address, please enter it so we can reach out to you if needed.
* **Phone** (`phone`, text, optional): If you have a phone number, please enter it so we can contact you if needed.
* **Date of Visit** (`date_of_visit`, date, required): Enter the date of your visit to the vision care facility.
* **Time of Visit** (`time_of_visit`, time, required): Enter the time of your visit to the vision care facility.
* **Rating** (`rating`, number, optional): Rate your overall experience with the doctor on a scale of 1-5.
* **Feedback** (`feedback`, text, optional): Provide any additional feedback or comments about your experience.
* **Doctor Name** (`doctor_name`, text, optional): If you want to provide feedback about a specific doctor, enter their name here.
* **Staff Rating** (`staff_rating`, number, optional): Rate the staff's helpfulness and courtesy on a scale of 1-5.
* **Facilities Rating** (`facilities_rating`, number, optional): Rate the cleanliness and condition of the facilities on a scale of 1-5.
* **Overall Experience** (`overall_experience`, number, optional): Rate your overall experience with the vision care facility on a scale of 1-5.
* **Will Revisit** (`will_revisit`, select_one, required): Choose if you would like to schedule a follow-up visit.
* **Feedback Message** (`feedback_message`, text, optional): Provide any additional feedback or comments about your experience.
* **Follow Up** (`follow_up`, select_multiple, required): Choose if you would like us to contact you for a follow-up visit.
