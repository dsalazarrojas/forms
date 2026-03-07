<thinking>
We need to ensure that this form is completed for each tour, and that the feedback is accurate and relevant to the tour experience. To prevent duplication, we should check if a user has already completed a form for the same tour. This will help us improve our services and provide better experiences for future visitors.
</thinking>

# Tour Feedback Form - Help Guide
## Purpose
The Tour Feedback Form is designed to gather information from customers about their experience with our tours. Your feedback is crucial in helping us improve our services and provide better experiences for future visitors.

## How To Complete This Form
To complete this form, follow these steps:

1. Answer the question "What do you think of our service?" in the "What do you think of our service?" field. This is your opportunity to share your thoughts and impressions about your tour experience.
2. Rate your tour experience in the "rating" field. Choose from the options "1" to "5" to indicate how satisfied you are with our tour.
3. Provide any comments or suggestions on how we can improve in the "How can we improve?" field.
4. Let us know if you would recommend our tour to others in the "Would you recommend our tour?" field. Choose from "Highly Likely", "Somewhat Likely", "Not Very Likely", or "Not at All".
5. If you have a preferred travel date, please enter it in the "Travel Date" field.
6. If you have a preferred travel time, please enter it in the "Travel Time" field.
7. If you would like to provide a location where you traveled, enter it in the "Travel Location" field.
8. Choose the name of the tour agent who served you in the "Tour Agent" field. This will help us identify who assisted you during your tour.
9. If you would like to be contacted for further communication, please enter your email address in the "Contact E-mail" field.
10. If you have any additional comments or suggestions, please enter them in the "Additional Comments" field.
11. Finally, click the "Submit" button to send your feedback to us.

## Field-by-Field Explanation
* **What do you think of our service?** (`tour_feedback`, text, optional): Share your honest thoughts and impressions about your tour experience.
* **rating** (`tour_rating`, number, optional): Rate your satisfaction with our tour from 1 to 5.
* **How can we improve?** (`tour_comment`, text, optional): Provide any comments or suggestions on how we can improve our services.
* **Would you recommend our tour?** (`would_recommended`, select_one, required): Choose from "Highly Likely", "Somewhat Likely", "Not Very Likely", or "Not at All" whether you would recommend our tour to others.
* **Travel Date** (`travel_date`, date, optional): If you have a preferred travel date, please enter it here.
* **Travel Time** (`travel_time`, time, optional): If you have a preferred travel time, please enter it here.
* **Travel Location** (`travel_location`, text, optional): If you would like to provide a location where you traveled, enter it here.
* **Tour Agent** (`tour_agent`, select_one, required): Choose the name of the tour agent who served you during your tour.
* **Contact E-mail** (`email`, email, optional): If you would like to be contacted for further communication, please enter your email address here.
* **Phone Number** (`phone`, text, optional): If you have any phone numbers you would like to share, please enter it here.
* **Additional Comments** (`note`, note, optional): Provide any additional comments or suggestions you have.
* **Submit** (`submit`, text, optional): Click this button to send your feedback to us.
