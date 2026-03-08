# Story Evaluation Scorecard - Help Guide
## Purpose
The Story Evaluation Scorecard is a form used to evaluate and score stories based on a set of criteria. It is designed to track the evaluation process and provide a clear score for the overall quality and effectiveness of the story.

## How To Complete This Form
To complete this form, follow the steps outlined below:

1. Select the scores that best represent the quality and effectiveness of the story in the "Evaluations" field.
2. Add any additional comments or notes in the "Additional Evaluation Comments" field.
3. Input your email address in the "Evaluated By" field.
4. Input your email address in the "Created By" field.
5. Input the score for the overall quality and effectiveness of the story in the "Overall Score" field.
6. Input any comments or notes about your evaluation process in the "Evaluator Comments" field.
7. Input the date and time when you created and last updated the story in the "Created At" and "Updated At" fields, respectively.

## Field-by-Field Explanation
* **Story Evaluation Criteria** (`scorecard_criteria`, `text`, required: false`): This field allows you to enter the criteria used to evaluate the story.
* **Evaluations** (`evaluation_scores`, `select_multiple`, required: false`): Select the scores that best represent the quality and effectiveness of the story. Options: 1, 2, 3, 4, 5.
* **Comments** (`comments`, `note`, required: false`): Add any additional comments or notes about the story.
* **Overall Score** (`scorecard_score`, `number`, required: false`): Input a single score for the overall quality and effectiveness of the story.
* **Additional Evaluation Comments** (`evaluation_comments`, `text`, required: false`): Add any additional comments or notes about your evaluation process.
* **Evaluator Comments** (`evaluator_comments`, `note`, required: false`): Input any comments or notes about your evaluation process.
* **Evaluated By** (`evaluated_by`, `email`, required: false`): Input your email address, allowing the system to track who evaluated the story.
* **Created At** (`created_at`, `date`, required: false`): Input the date when the evaluation was created.
* **Updated At** (`updated_at`, `time`, required: false`): Input the time when the evaluation was last updated.
* **Created By** (`created_by`, `email`, required: false`): Input your email address, allowing the system to track who created the story.
* **Updated By** (`updated_by`, `email`, required: false`): Input the email address of the person who last updated the story.
