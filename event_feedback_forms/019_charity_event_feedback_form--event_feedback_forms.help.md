<thinking>

This form is designed to gather feedback from attendees on charity events. It is intended for charity event organizers, planners, and attendees to evaluate their experience. The form is meant to be used by event participants to rate their satisfaction with the event, provide constructive criticism, and express their willingness to attend future charity events.

To complete this form, attendees will have to provide some personal information (Your Name and Email Address) and details about their attendance experience (Event Name, Event Date, Attendance Type, Overall Satisfaction, Venue Rating, Content Quality, Event Organization, Value for Money). They will also have the option to provide their feedback on specific areas of improvement, mention the highlight of the event, and provide any additional comments.

The form is split into two main sections: the first one collects basic information about the attendee, such as their name and email address. The second part focuses on evaluating the event, rating its organization, content, and overall experience. 

</thinking>

# Charity Event Feedback Form - Help Guide
## Purpose
This form is designed to collect feedback from charity event attendees, helping organizers understand their experience and identify areas for improvement.

## How To Complete This Form
To complete this form, follow these steps:

1. **Your Name**: Enter your name as you would like it to be displayed in our feedback records.
2. **Email Address**: If you'd like to receive follow-up emails or be contacted for further discussion, please provide your email address.
3. **Event Name**: Type the name of the event you attended.
4. **Event Date**: Enter the date you attended the event.
5. **How did you attend**: Select how you attended the event (in person, virtual, or hybrid).
6. **Overall Satisfaction**: Rate your overall experience at the event. 
    - Choose one of the options:
        - Very satisfied
        - Satisfied
        - Neutral
        - Dissatisfied
        - Very dissatisfied
7. **Venue Rating**: Rate the venue (if applicable). 
    - Choose one of the options:
        - Excellent
        - Good
        - Average
        - Poor
        - Not applicable
8. **Content Quality**: Rate the program quality. 
    - Choose one of the options:
        - Excellent
        - Good
        - Average
        - Poor
        - Very poor
9. **Event Organization**: Rate how well the event was organized. 
    - Choose one of the options:
        - Excellent
        - Good
        - Average
        - Poor
        - Very poor
10. **Value for Money**: Rate if you felt the event was worth the cost. 
    - Choose one of the options:
        - Excellent value
        - Good value
        - Fair value
        - Poor value
        - Not applicable
11. (Optional) **What was the highlight**: Mention the best part of the event.
12. (Optional) **What could be improved**: Suggest areas that the event organizers could improve upon.
13. **Would you attend future events**: Indicate if you would attend future charity events.
    - Choose one of the options:
        - Definitely yes
        - Probably yes
        - Not sure
        - Probably no
        - Definitely no
14. **Would you recommend the event**: Indicate if you would recommend the event to others.
    - Choose one of the options:
        - Definitely yes
        - Probably yes
        - Not sure
        - Probably no
        - Definitely no

## Field-by-Field Explanation
* **Your Name** (`attendee_name`, text, Optional): Enter your name as you would like it to be displayed in our feedback records.
* **Email Address** (`attendee_email`, email, For follow-up): If you'd like to receive follow-up emails or be contacted for further discussion, please provide your email address.
* **Event Name** (`event_name`, text, Required): Type the name of the event you attended.
* **Event Date** (`event_date`, date, Required): Enter the date you attended the event.
* **How did you attend** (`attendance_type`, select_one, Required): Select how you attended the event (in person, virtual, or hybrid).
* **Overall Satisfaction** (`overall_satisfaction`, select_one, Required): Rate your overall experience at the event. 
* **Venue Rating** (`venue_rating`, select_one, True if applicable): Rate the venue (if applicable).
* **Content Quality** (`content_quality`, select_one, True): Rate the program quality.
* **Event Organization** (`organization_rating`, select_one, True): Rate how well the event was organized.
* **Value for Money** (`value_for_money`, select_one, True): Rate if you felt the event was worth the cost.
* **What was the highlight** (`highlight_event`, text, Optional): Mention the best part of the event.
* **What could be improved** (`improvement_areas`, select_multiple, Optional): Suggest areas that the event organizers could improve upon.
* **Would you attend future events** (`attend_future`, select_one, True): Indicate if you would attend future charity events.
* **Would you recommend the event** (`recommend_event`, select_one, True): Indicate if you would recommend the event to others.
* **Additional Comments** (`additional_feedback`, text, Optional): Any other thoughts or comments you would like to share.

## Tips
* Please be honest and provide constructive feedback to help us improve future events.
* Your input is greatly appreciated and will help us create better experiences for all attendees.
