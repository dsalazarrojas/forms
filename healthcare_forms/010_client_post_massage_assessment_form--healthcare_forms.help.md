<thinking>
To determine if this form is relevant, I'll analyze its content. The form, "Client Post Massage Assessment Form", appears to be designed for clients to provide feedback on their massage experiences. It asks for various details such as client name, session date, type of massage, pressure applied, pain levels, areas of focus, and overall experience. The form also seeks feedback on therapist technique, communication, room temperature, music preference, comfort level, and additional comments.

Upon reviewing the form fields, I notice that the following appear to be essential for data analysis and improvement:

- Client Name
- Session Date
- Therapist Name
- Type of Massage Received
- Session Duration
- How Was the Pressure Applied
- Pain Level Before/After
- Areas of Focus
- How Relaxed Do You Feel Now
- Therapist Technique
- Therapist Communication
- Overall How Would You Rate Your Experience
- How Likely Are You to Book Another Session
- How Likely Are You to Recommend Us to Others

These fields are marked as "required" in the YAML file, indicating their importance for data collection and analysis. I will focus on providing guidance for these essential fields first.

</thinking>

# Client Post Massage Assessment Form - Help Guide
## Purpose
This form is designed to gather feedback from clients after their massage sessions. Please provide detailed and honest feedback to help us improve our services and tailor our massages to your specific needs.

## How To Complete This Form
1. Please provide your name as the client who received the massage.
2. Enter the date of your massage session.
3. Identify the type of massage you received (e.g., Swedish, Deep Tissue, etc.).
4. Answer the following questions about the pressure applied:
	* How Was the Pressure Applied?
	* How Much Tension Relief Did You Experience?
5. Indicate your pain levels before and after the massage (on a scale of 1-10).
6. Select all areas that were focused on during the massage.
7. Rate how comfortable you felt during the session.
8. Rate how likely you are to book another session and how likely you are to recommend us to others.

## Field-by-Field Explanation

* **Client Name** (`client_name`, text, required): Please enter your name as the client who received the massage.
* **Session Date** (`session_date`, date, required): Enter the date of your massage session.
* **Therapist Name** (`therapist_name`, text, required): Enter the name of the massage therapist who provided the service.
* **Type of Massage Received** (`massage_type`, select_one, required): Select the type of massage you received (e.g., Swedish, Deep Tissue, etc.).
* **Session Duration** (`session_duration`, select_one, required): Select the duration of your massage session.
* **How Was the Pressure Applied?** (`pressure_rating`, select_one, required): Rate the pressure applied during the massage (Too Light, Slightly Light, Just Right, Slightly Firm, Too Firm).
* **Pain Level Before/After** (`pain_level_before`, `pain_level_after`, number, required): Rate your pain levels before and after the massage (on a scale of 1-10).
* **Areas of Focus** (`areas_of_focus`, select_multiple, required): Select all areas that were focused on during the massage (e.g., Neck, Shoulders, Upper Back, etc.).
* **How Relaxed Do You Feel Now?** (`relaxation_level`, select_one, required): Rate how relaxed you feel now.
* **Therapist Technique** (`therapist_technique`, select_one, required): Rate the therapist's technique (Excellent, Very Good, Good, Fair, Poor).
* **Therapist Communication** (`therapist_communication`, select_one, required): Rate the therapist's communication (Excellent, Very Good, Good, Fair, Poor).
* **Overall How Would You Rate Your Experience?** (`overall_experience`, select_one, required): Rate your overall experience (Excellent, Very Good, Good, Fair, Poor).
* **How Likely Are You to Book Another Session?** (`likelihood_to_return`, select_one, required): Rate how likely you are to book another session (Very Likely, Likely, Neutral, Unlikely, Very Unlikely).
* **How Likely Are You to Recommend Us to Others?** (`likelihood_to_refer`, select_one, required): Rate how likely you are to recommend us to others (Very Likely, Likely, Neutral, Unlikely, Very Unlikely).
* **When Would You Like to Book Your Next Session?** (`next_appointment_timeframe`, select_one, optional): Select when you would like to book your next session.
* **Any Post-Massage Symptoms?** (`post_massage_symptoms`, select_multiple, optional): Select any post-massage symptoms you experienced (e.g., Slight Soreness, Headache, etc.).
* **Was the Hydration Reminder Helpful?** (`hydration_reminder_helpful`, select_one, optional): Rate the helpfulness of the hydration reminder (Yes Very, Yes Somewhat, No, Did Not Receive Reminder).
* **Additional Comments or Feedback** (`additional_feedback`, text, optional): Provide any additional comments or feedback you have about your experience.
* **May We Use Your Feedback for Quality Improvement?** (`permission_to_use_feedback`, select_one, required): Grant permission for us to use your feedback for quality improvement (True, False).

## Tips
- Please be honest in your feedback, as it will help us improve our services.
- Select all that apply when answering multiple-choice questions.
- You may choose "Not Sure" if you are not certain about your answers.
- Thank you for taking the time to complete this form; your feedback is valuable to us!
