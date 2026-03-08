# mental_health_service_assessment_form - Help Guide
## Purpose
This form is used to collect information about a client's mental health service assessment. It gathers details about the client's mental status, service history, and service coordinator's notes and plans.

## How To Complete This Form
To complete this form, follow the steps below:

1. Select the mental health service that was provided to the client.
2. Provide the client's current mental status.
3. Enter a brief description of the service provided and any relevant history.
4. Enter the date of the last contact with the client.
5. Select the type of contact the client last had with the service coordinator.
6. Select the frequency of the next contact with the client.
7. Enter the method of the next contact with the client.
8. Select the service coordinator who will be responsible for the next contact.
9. Enter any additional mental health service assessment details.
10. Enter any mental health service plan for the client.
11. Describe the client's relationship with their caregiver.
12. Enter any service coordinator notes.
13. Enter any mental health service notes.
14. Describe the client's support plan.

## Field-by-Field Explanation

* **Client Information** (`client_info`, text, optional): Enter the client's name, contact information, and any other relevant details.
* **Mental Status** (`mental_status`, text, optional): Describe the client's current mental health status.
* **Service History** (`service_history`, text, optional): Enter a brief description of the services provided to the client.
* **Social Worker Notes** (`social_worker_notes`, text, optional): Enter any notes from the social worker about the client's service.
* **Treatment Plan** (`treatment_plan`, text, optional): Enter any mental health treatment plans for the client.
* **Client Goals** (`client_goals`, text, optional): Describe the client's goals for their mental health.
* **Mental Health Service** (`mental_health_service`, select_multiple, optional): Select the mental health services that were provided to the client.
* **Assessment Completed** (`assessment_completed`, time, optional): Enter the date and time the mental health assessment was completed.
* **Date Last Contact** (`date_last_contact`, date, optional): Enter the date of the last contact with the client.
* **Time Last Contact** (`time_last_contact`, time, optional): Enter the time of the last contact with the client.
* **Number Days Until Next Contact** (`number_days_until_next_contact`, number, optional): Enter the number of days until the next contact with the client.
* **Last Contact Type** (`last_contact_type`, select_one, optional): Select the type of contact the client last had with the service coordinator (e.g. Home Visit, Phone Call, Email, etc.).
* **Next Contact Frequency** (`next_contact_frequency`, select_one, optional): Select the frequency of the next contact with the client (e.g. Weekly, Bi-Weekly, Monthly, etc.).
* **Next Contact Method** (`next_contact_method`, select_one, optional): Select the method of the next contact with the client (e.g. Phone Call, Video Call, Email, etc.).
* **Service Coordinator** (`service_coordinator`, select_one, optional): Select the service coordinator who will be responsible for the next contact with the client.
* **Mental Health Service Assessment** (`mental_health_service_assessment`, text, optional): Enter any additional mental health service assessment details.
* **Mental Health Service Plan** (`mental_health_service_plan`, text, optional): Enter any mental health service plan for the client.
* **Client Caregiver Relationship** (`client_caregiver_relationship`, text, optional): Describe the client's relationship with their caregiver.
* **Service Coordinator Notes** (`service_coordinator_notes`, text, optional): Enter any service coordinator notes.
* **Mental Health Service Notes** (`mental_health_service_notes`, text, optional): Enter any mental health service notes.
* **Client Support Plan** (`client_support_plan`, text, optional): Describe the client's support plan.
