<thinking>
The purpose of this form is to evaluate the effectiveness and productivity of committee meetings. The form captures the meeting details, such as the committee name, meeting date, and the role of the evaluator. It also assesses the meeting's preparation, content, and outcomes, including the adequacy of agenda topics coverage, active participation encouragement, and clear action items identification. The form also captures the relevance of discussions to the committee goals and the overall productivity of the meeting. Finally, it allows for suggestions and immediate follow-up actions to be documented.

To ensure the relevance and accuracy of evaluations, it is essential to fill out this form immediately after each meeting while the details are still fresh in mind. Please review the form carefully, and avoid duplicating evaluations if a meeting has been assessed before.

Please note that some of the fields are required, marked as 'true' in the form schema, to ensure that essential information is captured for the evaluation.

</thinking>

# Committee Meeting Evaluation Form - Help Guide
## Purpose
The Committee Meeting Evaluation Form is designed to assess the effectiveness and productivity of committee meetings. It helps to identify areas of improvement and ensure that meetings are well-organized and goal-oriented.

## How To Complete This Form
1. Fill out the form as soon as possible after the meeting while the details are still fresh in your mind.
2. Ensure that you have all the necessary information required for the evaluation, marked as 'true' in the form schema.
3. Use the provided options for select_one fields to choose the most accurate answer.
4. Rate the level of preparation, productivity, and other parameters using the provided rating scales.

## Field-by-Field Explanation
### Meeting Information
* **Committee Name** (`committee_name_eval`, text, required): Enter the name of the committee that had the meeting.
* **Date of Meeting** (`meeting_date_eval`, date, required): Enter the date of the meeting.

### Meeting Organization
* **Your Role in the Committee** (`evaluator_role`, select_one, required): Choose your role in the committee.
  * Chair: The person leading the committee.
  * Vice-Chair: The person assisting the Chair.
  * Secretary: The person responsible for note-taking and record-keeping.
  * Member: A regular member of the committee.
  * Guest: A person attending the meeting but not a regular member.

### Agenda and Preparation
* **Was the agenda received in advance?** (`agenda_received_advance`, select_one, required): Choose 'True' if the agenda was received before the meeting.
* **Did the meeting start and end on time?** (`meeting_started_ended_on_time`, select_one, required): Choose 'True' if the meeting started and ended as scheduled.
* **Rate the level of preparation for this meeting** (`rate_meeting_prep`, number, required): Rate the level of preparation on a scale of 1 (Poor) to 5 (Excellent).

### Content and Discussion
* **Were all agenda topics covered adequately?** (`agenda_topics_covered`, select_one, required): Choose 'True' if all the agenda topics were discussed.
* **Was active participation encouraged and respected?** (`participation_encouraged`, select_one, required): Choose your level of agreement on a scale of Strongly Disagree to Strongly Agree.
* **How relevant were the discussions to the committee goals?** (`discussion_relevance`, number, required): Rate the relevance on a scale of 1 (Not relevant) to 5 (Highly relevant).

### Meeting Outcomes
* **Were clear action items identified and assigned?** (`clear_action_items`, select_one, required): Choose 'True' if clear action items were identified and assigned.
* **Rate the overall productivity of this meeting** (`meeting_productivity`, number, required): Rate the overall productivity on a scale of 1 (Not productive) to 5 (Very productive).

### Additional Information
* **Suggestions for improving future meetings** (`improvement_suggestions`, text, optional): Suggest any improvements or changes that could be made for future meetings.
* **Is any immediate follow-up required from this evaluation?** (`follow_up_needed`, text, optional): If you think any immediate follow-up actions are required, document them here.
* **Date Submitted** (`date_submitted_eval`, date, required): Enter the date you are submitting this form.

Please fill out the form accurately and thoroughly to ensure that the committee can learn from past meetings and improve its future activities.
