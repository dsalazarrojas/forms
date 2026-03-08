# relationship_quality_test_form_template - Help Guide
## Purpose
The purpose of this form is to collect information about a client's relationship, including its length, quality, and dynamics.

## How To Complete This Form
1. Complete each page of the form in order.
2. Enter the client's name on page 1.
3. Answer questions about the relationship's length, quality, and type on pages 2-6.
4. Respond to questions about relationship satisfaction, strengthening, and challenges on pages 7-10.
5. Add any additional comments or notes as needed.
6. Schedule follow-up sessions with the therapist.
7. Confirm the completion date and time of the form.

## Field-by-Field Explanation

* **First Name** (`first_name`, text, required): Enter the client's first name.
* **Email** (`email`, email, required): Enter the client's email address.
* **Phone Number** (`phone_number`, text, required): Enter the client's phone number.
* **Date Of Birth** (`date_of_birth`, date, required): Enter the client's date of birth.
* **Relationship Length** (`relationship_length`, number, required): Enter the length of the relationship.
* **Relationship Status** (`relationship_status`, select_one, required): Select the current relationship status.
	+ Choose one of the following options: single, in a relationship, engaged, married, divorced.
* **Relationship Type** (`relationship_type`, select_multiple, required): Select the type(s) of relationship.
	+ Choose one or more of the following options: romantic, friendship, family, co-worker.
* **Relationship Quality** (`relationship_quality`, note, required): Add any comments about the relationship's quality.
* **Relationship Satisfaction** (`relationship_satisfaction`, number, required): Rate the client's satisfaction with the relationship.
* **Relationship Strengthening** (`relationship_strengthening`, select_multiple, required): Indicate whether the relationship is strengthening or not.
	+ Choose one or more of the following options: yes, no.
* **Relationship Strain** (`relationship_strain`, select_multiple, required): Indicate the level of strain in the relationship.
	+ Choose one or more of the following options: yes, no.
* **Relationship Support** (`relationship_support`, select_multiple, required): Indicate the level of support in the relationship.
	+ Choose one or more of the following options: yes, no.
* **Relationship Conflict** (`relationship_conflict`, select_multiple, required): Indicate the level of conflict in the relationship.
	+ Choose one or more of the following options: yes, no.
* **Satisfaction With Partner** (`satisfaction_with_partner`, number, required): Rate the client's satisfaction with their partner.
* **Satisfaction With Relationship** (`satisfaction_with_relationship`, number, required): Rate the client's satisfaction with the relationship.
* **Note** (`note`, note, optional): Add any additional comments about the relationship.
* **Therapist Comments** (`therapist_comments`, note, optional): Add any comments from the therapist.
* **Next Steps** (`next_steps`, note, optional): Plan next steps for the relationship.
* **Follow Up Questions** (`follow_up_questions`, note, optional): Add any follow-up questions from the therapist.
* **Client Goals** (`client_goals`, note, required): Add the client's goals for the relationship.
* **Client Concerns** (`client_concerns`, note, required): Add the client's concerns about the relationship.
* **Therapist Goals** (`therapist_goals`, note, required): Add the therapist's goals for the relationship.
* **Follow Up** (`follow_up`, time, required): Schedule the next follow-up session.
* **Next Session** (`next_session`, date, required): Schedule the next session.
* **Completed On** (`completed_on`, date, required): Confirm the completion date and time of the form.
