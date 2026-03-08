# Client Satisfaction Form - Help Guide
## Purpose
The Client Satisfaction Form is designed to collect feedback from clients after a customer service interaction. This feedback is used by the customer service department to assess the quality of the interaction and make improvements where needed.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in your contact information: Enter your name and email address to enable us to contact you for any further communication.
2. Choose how you would like to be contacted: Select the preferred method of contact for future interactions.
3. Provide details about your recent interaction: Choose the date and type of your most recent interaction with us.
4. Rate your experience: Answer the rating questions truthfully to help us understand how we did.
5. Provide any improvement suggestions: If there's anything we can do differently, please let us know!
6. Rate the agent's performance: Answer questions about the agent's helpfulness, issue resolution, and other aspects of their service.
7. Give feedback: If you have any positive or negative comments about your experience, please share them with us.
8. Rate your likelihood to recommend: Let us know how likely you are to recommend our service to a friend or colleague.

## Field-by-Field Explanation

* **Your Name** (`customer_name`, text, required): Enter your name as it appears on your identification documents.
* **Email Address** (`customer_email`, email, required): Enter your email address so we can contact you for further communication.
* **Preferred contact method** (`contact_method_preference`, select one, optional): Choose how you would like to be contacted for future interactions (Email, Phone, SMS, No contact needed).
* **Date of your recent interaction** (`interaction_date`, date, required): Enter the date of your most recent interaction with us.
* **Type of interaction** (`interaction_type`, select one, required): Choose the type of your most recent interaction (Phone call, Email, Chat, In-person, Other).
* **Name of service agent (if known)** (`service_agent`, text, optional): If you know the agent's name, please enter it here.
* **Overall satisfaction** (`overall_satisfaction`, select one, required): Rate your overall satisfaction with the interaction (Very Dissatisfied, Dissatisfied, Neutral, Satisfied, Very Satisfied).
* **Agent was helpful in resolving your issue** (`agent_helpfulness`, select one, required): Rate how helpful the agent was in resolving your issue (Strongly Disagree, Disagree, Neutral, Agree, Strongly Agree).
* **Your issue was resolved satisfactorily** (`issue_resolution`, select one, required): Rate how well your issue was resolved (Strongly Disagree, Disagree, Neutral, Agree, Strongly Agree).
* **Wait time was acceptable** (`wait_time`, select one, required): Rate the wait time for your interaction (Strongly Disagree, Disagree, Neutral, Agree, Strongly Agree).
* **Agent demonstrated product knowledge** (`knowledge_rating`, select one, required): Rate how well the agent demonstrated product knowledge (Poor, Fair, Good, Very Good, Excellent).
* **Agent was courteous and professional** (`courtesy_rating`, select one, required): Rate how courteous and professional the agent was (Strongly Disagree, Disagree, Neutral, Agree, Strongly Agree).
* **How likely are you to recommend** (`recommendation`, number, required): Rate how likely you are to recommend us to a friend or colleague (0 to 10).
* **What could we do better?** (`improvement_suggestions`, text, optional): Provide us with any improvement suggestions.
* **What did we do well?** (`positive_feedback`, text, optional): Share any positive comments about your experience.
