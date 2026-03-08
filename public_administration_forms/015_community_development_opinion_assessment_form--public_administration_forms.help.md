# Community Development Opinion Assessment Form - Help Guide
## Purpose
The purpose of this form is to gather opinions and feedback from residents about the development of their community. Your input will help us understand your needs, concerns, and suggestions for improvement. Please take a few minutes to complete this form and provide us with your honest opinions.

## How To Complete This Form
To complete this form, follow these steps:

1.  Fill out your information: 
    - If you wish to remain anonymous, please provide your name (if not, you can leave it blank).
    - Enter your email address so we can follow up with you about your feedback (if you wish).
2.  Identify your residency: 
    - Select the type of residency you have.
    - Indicate how long you have lived in your neighborhood or district.
3.  Rate your opinions: 
    - Answer the questions about how satisfied you are with current development and how important you think different aspects of development are (e.g., housing, commercial, infrastructure, etc.). 
    - Be honest in your answers, as they will help us understand your needs.
4.  Share your thoughts: 
    - If you have specific concerns or issues, please describe them.
    - If you have ideas for improvement, please share them.
5.  Show your interest in planning meetings: 
    - Let us know if you're interested in participating in planning meetings.

## Field-by-Field Explanation

* **Name (Optional)** (`resident_name`, `text`, required: false): 
    This is your opportunity to share your name with us if you wish. If you're not comfortable sharing your name, that's okay too. Please feel free to leave it blank.

* **Email Address** (`email_address`, `email`, required: false): 
    If you provide an email address, we may reach out to you for follow-up communications about your feedback.

* **Neighborhood or District** (`neighborhood`, `text`, required: true): 
    Where do you live? Please enter the name of your neighborhood or district.

* **Residency Type** (`residency_type`, `select_one`, required: true): 
    What type of residency do you have? Choose between Homeowner, Renter, Living with Family, or Other.

* **Years as Resident** (`years_resident`, `select_one`, required: true): 
    How long have you lived in your neighborhood or district? Choose from Less than 1 year, 1-3 years, 3-5 years, 5-10 years, or More than 10 years.

* **Satisfaction with Current Development** (`development_satisfaction`, `select_one`, required: true): 
    How satisfied are you with the current development in your neighborhood or district? Choose between Very Satisfied, Satisfied, Neutral, Dissatisfied, and Very Dissatisfied.

* **Housing Needs Priority** (`housing_needs`, `select_one`, required: true): 
    Rate the importance of housing needs for you. Choose between Critical, High, Medium, Low, and Not a Priority.

* **Commercial Development Priority** (`commercial_development`, `select_one`, required: true): 
    Rate the importance of commercial development for you. Choose between Critical, High, Medium, Low, and Not a Priority.

* **Infrastructure Improvements Priority** (`infrastructure_improvements`, `select_one`, required: true): 
    Rate the importance of infrastructure improvements for you. Choose between Critical, High, Medium, Low, and Not a Priority.

* **Parks and Green Spaces Priority** (`green_spaces`, `select_one`, required: true): 
    Rate the importance of parks and green spaces for you. Choose between Critical, High, Medium, Low, and Not a Priority.

* **Traffic and Transportation Priority** (`traffic_concerns`, `select_one`, required: true): 
    Rate the importance of traffic and transportation for you. Choose between Critical, High, Medium, Low, and Not a Priority.

* **Current Development Pace** (`development_pace`, `select_one`, required: true): 
    Do you think development is happening too fast, about right, or too slow? 

* **Is Community Character Being Preserved?** (`community_character`, `select_one`, required: true): 
    Do you think your community's character is being preserved?

* **Specific Concerns or Issues** (`specific_concerns`, `text`, required: false): 
    If you have specific concerns or issues that aren't listed here, please describe them.

* **Suggestions for Improvement** (`improvement_suggestions`, `text`, required: false): 
    If you have ideas for improving your community, please share them.

* **Would You Attend Planning Meetings?** (`attend_meetings`, `select_one`, required: true): 
    Are you interested in attending planning meetings for your community's development?
