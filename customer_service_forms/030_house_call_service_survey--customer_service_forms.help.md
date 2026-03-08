# House Call Service Survey - Help Guide
## Purpose
This form is designed to collect feedback and information from customers after our service visit. Please take a few minutes to complete this survey and help us improve our service.

## How To Complete This Form
1. Please fill in your **First Name** and **Email** fields with your name and email address.
2. In the **What can we help you with today?** field, describe briefly the issue or problem you encountered during our visit.
3. In the **How may we assist you?** field, provide more detailed information about your needs and how we can improve our service to better meet those needs.
4. In the **How satisfied are you with our service?** field, choose one of the five options from Very Satisfied to Very Dissatisfied.
5. In the **Would you recommend our service?** field, select all the options that apply, either 'Yes' or 'No'.
6. In the **What can we improve on?** field, provide detailed feedback on how we can improve our service.
7. If applicable, in the **Service Provider** field, mention the name of the service provider who assisted you.
8. Fill in your **Phone**, **Address**, **City**, and **Zip** fields with your contact information.
9. Finally, fill in the **Comments** field with any additional comments or feedback you may have.

## Field-by-Field Explanation
*   **First Name** (`customer_service_survey`, text, required): Enter your first name.
*   **Email** (`customer_service_survey_email`, email, required): Enter your email address.
*   **What can we help you with today?** (`service_survey_question_1`, text, required): Briefly describe your issue or problem.
*   **How may we assist you?** (`service_survey_question_2`, text, optional): Provide more detailed information on how we can improve our service.
*   **How satisfied are you with our service?** (`house_call_survey_question_1`, select_one, required): Choose one of the five options from Very Satisfied to Very Dissatisfied.
*   **Would you recommend our service?** (`house_call_survey_question_2`, select_multiple, required): Select all the options that apply, either 'Yes' or 'No'.
*   **What can we improve on?** (`house_call_survey_question_3`, note, optional): Provide detailed feedback on how we can improve our service.
*   **Service Provider** (`customer_service_survey_service_provider`, text, optional): If applicable, mention the name of the service provider who assisted you.
*   **Phone** (`customer_service_survey_phone`, text, required): Enter your phone number.
*   **Address** (`customer_service_survey_address`, text, required): Enter your address.
*   **City** (`customer_service_survey_city`, text, required): Enter your city.
*   **State** (`customer_service_survey_state`, text, required): Enter your state.
*   **Zip** (`customer_service_survey_zip`, text, required): Enter your zip code.
*   **Comments** (`customer_service_survey_comments`, note, optional): Enter any additional comments or feedback.

Note: All fields are marked with their label name, type, and required/optional status for reference.
