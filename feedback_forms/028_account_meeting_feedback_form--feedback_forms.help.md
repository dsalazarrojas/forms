# Account Meeting Feedback Form - Help Guide
## Purpose
The purpose of this form is to gather feedback from clients after a meeting with their account manager. This information will help us improve the quality of our services and better serve you and your business.

## How To Complete This Form
1. Select the "Meeting Type" that best describes the meeting you attended.
2. Enter your name and email address in the "Client Name" and "Client Email" fields, respectively.
3. Enter the "Meeting Date" in the format `YYYY-MM-DD`.
4. Choose your rating for the "Overall Satisfaction with the Meeting" and answer the "Was the Account Manager Well-Prepared" question.
5. Indicate how well the "All Agenda Items Were Covered" and "Were Action Items and Next Steps Clearly Defined" were discussed during the meeting.
6. Rate how "Clear" the communication was.
7. Rate the "Meeting Type" was "Very Satisfying" or not.
8. Optionally, enter any additional "Additional Feedback or Suggestions".
9. If you have any "Additional Topics to Discuss", please mention them here.
10. Finally, decide if you would "Recommend Your Account Manager" to a colleague.

## Field-by-Field Explanation

* **Client Name** (`client_name`, text, **required**): Enter the name of the client that attended the meeting.
* **Client Company** (`client_company`, text, **required**): Enter the name of the client's company.
* **Client Email** (`client_email`, email, **required**): Enter the email address of the client.
* **Meeting Date** (`meeting_date`, date, **required**): Enter the date of the meeting in the format `YYYY-MM-DD`.
* **Meeting Type** (`meeting_type`, select_one, **required**): Select the type of meeting you attended:
	+ Initial consultation
	+ Quarterly business review
	+ Project update
	+ Strategy session
	+ Issue resolution
	+ Contract renewal
	+ Other
* **Account Manager Name** (`account_manager_name`, text, **required**): Enter the name of the account manager that led the meeting.
* **Overall Satisfaction with the Meeting** (`overall_satisfaction`, select_one, **required**): Rate your overall satisfaction with the meeting:
	+ Very Satisfied
	+ Satisfied
	+ Neutral
	+ Dissatisfied
	+ Very Dissatisfied
* **Was the Account Manager Well-Prepared** (`meeting_preparedness`, select_one, **required**): Rate how prepared the account manager was:
	+ Excellent preparation
	+ Good preparation
	+ Adequate
	+ Poorly prepared
* **Were All Agenda Items Covered** (`agenda_covered`, select_one, **required**): Indicate how well the agenda items were discussed:
	+ Yes, completely
	+ Mostly
	+ Partially
	+ No
* **How Clear Was the Communication** (`communication_clarity`, select_one, **required**): Rate how clear the communication was:
	+ Very clear
	+ Clear
	+ Somewhat clear
	+ Unclear
* **Were Action Items and Next Steps Clearly Defined** (`action_items_clear`, select_one, **required**): Indicate how clear the action items and next steps were:
	+ Yes, very clear
	+ Somewhat clear
	+ No, unclear
* **Most Valuable Topic of the Meeting** (`most_valuable_topic`, text, **optional**): Describe the most valuable topic discussed during the meeting.
* **Topics That Were Not Covered** (`topics_missing`, text, **optional**): Mention any topics that were not discussed during the meeting.
* **Would You Recommend Your Account Manager to a Colleague?** (`recommend_account_manager`, select_one, **required**): Decide if you would recommend your account manager to a colleague:
	+ Definitely yes
	+ Probably yes
	+ Not sure
	+ Probably not
	+ Definitely not
* **Additional Feedback or Suggestions** (`additional_feedback`, text, **optional**): Provide any additional feedback or suggestions you may have.
