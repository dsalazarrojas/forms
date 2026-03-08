# Call Center Quality Monitoring Form - Help Guide
## Purpose
The Call Center Quality Monitoring Form is used to evaluate the quality of calls handled by call center agents, identify areas for improvement, and provide coaching recommendations for future development.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the Evaluation Date in the format MM/DD/YYYY.
2. Enter the Quality Monitor Name as the person who evaluated the call.
3. Enter the Call ID or Recording Number, if available.
4. Identify the Agent Name and Agent ID as per the provided information.
5. Identify the Team the agent belongs to.
6. Select the type of call (Inbound - Sales, Inbound - Support, Inbound - General, Outbound - Sales, or Outbound - Other).
7. Enter the Call Duration in minutes, if available.
8. Enter the Call Date and Time as per the provided information.
9. Assess the call under the categories:
   - Greeting and Professionalism
   - Communication Clarity
   - Product Knowledge and Accuracy
   - Customer Empathy
   - Problem Resolution
   - Call Closure and Follow-up
10. Select the corresponding quality rating for each category (Excellent, Good, Fair, Poor, or Needs Improvement).
11. Assess the agent's compliance with company policies.
12. Select the level of compliance (Fully compliant, Mostly compliant, Partially compliant, or Non-compliant).
13. Provide feedback for the agent, including:
   - Areas for Improvement
   - Coaching Recommendations

## Field-by-Field Explanation
* **Evaluation Date** (`evaluation_date`, date, required): Enter the date you evaluated the call in MM/DD/YYYY format.
* **Quality Monitor Name** (`monitor_name`, text, required): Enter the name of the person who evaluated the call.
* **Call ID or Recording Number** (`call_id`, text, optional): Enter the call ID or recording number, if available.
* **Agent Name** (`agent_name`, text, required): Enter the name of the agent who handled the call.
* **Agent ID** (`agent_id`, text, required): Enter the ID of the agent who handled the call.
* **Team** (`team`, text, optional): Enter the team the agent belongs to.
* **Call Type** (`call_type`, select_one, required): Select the type of call (Inbound - Sales, Inbound - Support, Inbound - General, Outbound - Sales, or Outbound - Other).
* **Call Duration** (`call_duration`, number, optional): Enter the duration of the call in minutes, if available.
* **Call Date and Time** (`call_date`, date, required): Enter the date and time of the call as per the provided information.
* **Greeting and Professionalism** (`greeting_professionalism`, select_one, required): Assess the greeting and professionalism of the agent (Excellent, Good, Fair, Poor, or Needs Improvement).
* **Communication Clarity** (`communication_clarity`, select_one, required): Assess the communication clarity of the agent (Excellent, Good, Fair, Poor, or Needs Improvement).
* **Product Knowledge and Accuracy** (`product_knowledge`, select_one, required): Assess the product knowledge and accuracy of the agent (Excellent, Good, Fair, Poor, or Needs Improvement).
* **Customer Empathy** (`customer_empathy`, select_one, required): Assess the customer empathy of the agent (Excellent, Good, Fair, Poor, or Needs Improvement).
* **Problem Resolution** (`problem_resolution`, select_one, required): Assess the problem resolution of the agent (Excellent, Good, Fair, Poor, or Needs Improvement).
* **Call Closure and Follow-up** (`call_closure`, select_one, required): Assess the call closure and follow-up of the agent (Excellent, Good, Fair, Poor, or Needs Improvement).
* **Compliance with Company Policies** (`compliance_adherence`, select_one, required): Assess the compliance of the agent with company policies (Fully compliant, Mostly compliant, Partially compliant, or Non-compliant).
* **Feedback** (`feedback`, note, optional): Provide feedback for the agent, including areas for improvement and coaching recommendations.
* **Strengths** (`strengths`, text, optional): Enter the strengths of the agent.
* **Areas for Improvement** (`improvement_areas`, text, optional): Enter areas for improvement for the agent.
* **Coaching Recommendations** (`coaching_recommendations`, text, optional): Enter coaching recommendations for the agent.

## Tips
* Be objective and unbiased when assessing the agent's performance.
* Use the provided guidelines to assess the quality of the call.
* Provide specific feedback and coaching recommendations for the agent.
* Ensure that you're using the correct format for dates (MM/DD/YYYY).
