<thinking>
We are creating a help guide for the "Enterprise Healthcare Client Insights Survey" form used to collect information from healthcare clients. This form is crucial in understanding client preferences, satisfaction, and referral intentions, which helps the healthcare organization to better serve their clients and improve their services. The form is designed to be completed by client-facing staff members who will be collecting information from clients and clients themselves. It's essential to ensure that the form is completed accurately and thoroughly to gather valuable insights.
</thinking>

# Enterprise Healthcare Client Insights Survey - Help Guide
## Purpose
The Enterprise Healthcare Client Insights Survey is a form used to collect information from clients about their experiences with the healthcare organization. This includes their satisfaction with services, potential referrals, and areas for improvement.

## How To Complete This Form
To complete this form, follow these steps:

1. Make sure you have the necessary information and permissions to collect from the client.
2. Fill in the client's ID, name, and organization name accurately.
3. Select the client's satisfaction level (if applicable) and list any improvement areas they have mentioned.
4. Record the client's referral intention and source (if applicable).
5. Take notes on any referral comments or concerns.
6. Rate the service quality and identify any next steps and improvement areas.
7. Record the date of completion, who completed the form, and how they plan to follow up with the client (if applicable).
8. Enter any additional comments or information about the client.
9. Confirm that the form has been completed accurately and thoroughly.

## Field-by-Field Explanation

* **Client ID** (`client_id`, `number`, required): The unique identifier for the client.
* **Client Name** (`client_name`, `text`, required): The full name of the client.
* **Client Organization** (`client_organization`, `text`, required): The name of the client's organization.
* **Client Satisfaction** (`client_satisfaction`, `select_multiple`, not required): The level of satisfaction the client has with the services. Select one or more of the following options: Very Satisfied, Somewhat Satisfied, Not Satisfied, Not at All Satisfied.
* **Client Improvement Ideas** (`client_improvement_ideas`, `text`, required): Any ideas or suggestions the client has for improvement.
* **Referral Intent** (`referral_intent`, `select_one`, not required): The likelihood of the client referring the healthcare organization to others. Select one of the following options: Very Likely, Somewhat Likely, Neutral, Somewhat Unlikely, Very Unlikely.
* **Referral Source** (`referral_source`, `select_multiple`, not required): The source of the client's referral. Select one or more of the following options: Social Media, Word of Mouth, Online Search, Print Ad, TV/Radio Ad, Email, Other.
* **Referral Comments** (`referral_comments`, `text`, not required): Any comments or concerns the client has about referring the healthcare organization.
* **Service Quality** (`service_quality`, `number`, required): A rating of the client's satisfaction with the service quality (e.g., 1-5).
* **Improvement Areas** (`improvement_areas`, `text`, required): Any areas the client feels need improvement.
* **Next Steps** (`next_steps`, `text`, required): A list of next actions or steps the client suggests or plans to take.
* **Follow-up Actions** (`follow_up_actions`, `text`, not required): Any follow-up actions or plans the staff member has for the client.
* **Date of Completion** (`date_of_completion`, `date`, required): The date the form was completed.
* **Completed By** (`completed_by`, `select_one`, not required): Who completed the form. Select one of the following options: Client, Client Manager, Account Manager, Other.
* **Additional Comments** (`additional_comments`, `text`, not required): Any additional information or comments about the client.
* **Contact Information** (`contact_information`, `text`, required): The client's contact information.
* **Follow-up Contacted** (`follow_up_contacted`, `select_one`, not required): Whether the staff member has followed up with the client. Select one of the following options: Yes, No.
* **Follow-up Date** (`follow_up_date`, `date`, not required): The date the staff member plans to follow up with the client.
* **Follow-up Method** (`follow_up_method`, `text`, not required): How the staff member plans to follow up with the client.
* **Follow-up Notes** (`follow_up_notes`, `text`, not required): Any notes about the follow-up plan.
* **Follow-up Status** (`follow_up_status`, `select_one`, not required): The status of the follow-up plan. Select one of the following options: In Progress, Completed, No Follow-up.
* **Next Steps Actions** (`next_steps_actions`, `text`, required): A list of next steps and actions to be taken.
* **Next Steps Date** (`next_steps_date`, `date`, not required): The date the next steps are to be taken.
* **Next Steps By** (`next_steps_by`, `select_one`, not required): Who will be taking the next steps. Select one of the following options: Client, Client Manager, Account Manager, Other.
