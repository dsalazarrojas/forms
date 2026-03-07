<thinking>

The purpose of this form is to gather feedback from users on their experience with the AI motion feedback survey, specifically regarding its ability to provide accurate and timely feedback on their physical movements. This feedback will help improve the AI's performance and user experience. Before proceeding, please confirm that you are completing this form as part of an internal trial or session to provide genuine feedback.

</thinking>

# AI Motion Feedback Survey - Help Guide
## Purpose
This form is designed to collect user feedback on the AI motion feedback survey, aimed at improving its performance and user experience.

## How To Complete This Form

1. Please answer all questions honestly, providing detailed and specific feedback about your experience.
2. For numerical questions, use the provided scale to rate your experience.
3. Select all applicable options for questions with multiple choices.
4. If you have any technical issues or concerns, report them in the "Technical Issues Encountered" field.
5. Finally, provide any additional comments or suggestions in the "Feature Wishlist" field.

## Field-by-Field Explanation

### Session and User Information
- **Session and User Information** (`session_details_header`, note, required: false): This section is intended to gather basic details about your session or trial.
- **Full Name** (`full_name`, text, required: false): Please enter your full name for identification purposes.
- **Session or Trial ID** (`session_id`, text, required: true): Enter the ID of your session or trial for tracking purposes.
- **Motion Category / Activity Type** (`motion_category`, select_one, required: true): Select the type of movement you were tracking (e.g., Sports & Fitness, Physical Rehabilitation / Therapy, etc.).
- **Hardware / Camera Setup Used** (`hardware_setup`, select_one, required: true): Choose the camera or sensor setup you used during the session (e.g., Standard Smartphone Camera, Laptop Webcam, etc.).

### Performance and Accuracy
- **Accuracy of Motion Capture** (`capture_accuracy_rating`, number, required: true): Rate the AI's accuracy in capturing your movements (1 = Poor, 5 = Excellent).
- **Real-time Feedback Latency** (`latency_assessment`, select_one, required: true): Assess the delay in the AI's feedback (Seamless, Acceptable, Poor).
- **Quality of Coaching / Corrections** (`coaching_feedback_quality`, select_one, required: true): Evaluate the helpfulness and timeliness of the AI's suggestions (Excellent, Good, Neutral, Poor).
- **Did you feel empowered to improve your form based on the AI feedback?** (`actionability_rating`, select_one, required: true): Rate how empowered you felt to improve your form (Yes, completely, Somewhat, Not at all).

### Experience and Usability
- **Interface Ease of Use** (`interface_ease_of_use`, number, required: true): Rate the ease of navigating the AI's interface (1 = Difficult, 5 = Very Intuitive).
- **Compared to a human coach, how valuable was this AI experience?** (`value_proposition`, select_one, required: true): Evaluate the AI's value compared to human coaching (More Valuable, Equal Value, Less Valuable, Different).
- **Did you encounter any technical issues?** (`technical_issues_encountered`, select_multiple, required: false): Select any technical issues you faced during the session.
- **What features are missing?** (`feature_wishlist`, text, required: false): Provide suggestions for improvement or missing features.
- **How likely are you to recommend this AI motion coaching to a friend or colleague?** (`nps_rating`, number, required: true): Rate your likelihood of recommending the AI (0 = Not at all likely, 10 = Extremely likely).
- **Data Consent for Research** (`video_share_consent`, select_one, required: true): Consent to sharing your anonymized motion data for algorithm improvement.
- **Date** (`feedback_date`, date, required: true): Record the date of completion for tracking purposes.
