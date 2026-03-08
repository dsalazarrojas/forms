<thinking>
The purpose of this form is to collect information on the progress of a user's skills, particularly those that require self-help, such as personal development, self-improvement, or self-care skills. The form helps in tracking the improvement or decline of a specific skill over time, allowing for regular assessments and monitoring of progress. This information can be useful for individuals, healthcare professionals, or organizations looking to track and improve their skills in areas such as mental health, wellness, or personal growth.

To ensure relevance, the form has been carefully crafted with input schema that aligns with the specified category and title. The form is designed to be a self-help skills progress report, and its structure and field labels reflect this purpose. By using this form, users can effectively track their progress and gain insights into their personal development.

Non-duplication is also considered in the form's design. The form's fields are unique and do not overlap with other forms in the same category, ensuring that users can collect relevant and consistent data without redundancy.

</thinking>
# Self Help Skills Progress Report - Help Guide
## Purpose
This form is designed to collect information on the progress of a user's skills, particularly those that require self-help, such as personal development, self-improvement, or self-care skills.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the **Skill Title** in the corresponding field. This is the name of the skill you want to report on, such as "Meditation" or "Exercise".
2. Enter the **Date** when you completed the assessment. This is the date you are reporting on, and it should be in the correct format (YYYY-MM-DD).
3. If relevant, enter the name of the person who observed you or your progress in the **Observer** field. This can be a mental health professional, a coach, or a friend who has observed your progress.
4. In the **Observations** field, provide a brief description of what you have observed about your progress. This can be a few sentences or paragraphs summarizing your experiences.
5. For the **Skills Progress** field, select the option that best describes your progress:
	* Significant Improvement: You have made notable progress in this skill.
	* Some Improvement: You have made some progress, but it's not as noticeable as you'd like.
	* No Change: Your progress is neutral, and you haven't noticed a significant change.
	* Worsening: You have regressed or made less progress in this skill.
	* Not Applicable: This skill is not relevant to your progress.
6. Answer **Goal Identified** with the corresponding options:
	* True: You have identified a goal related to this skill.
	* False: You have not identified a goal related to this skill.
	* Not Applicable: This skill is not related to any goal.
7. In the **Skill Goal** field, enter any specific goals or objectives related to this skill.
8. If desired, add any additional notes or comments in the **Notes** field.
9. Finally, enter the **Review Date** when you will review and assess this skill again. This can be in the future to track progress over time.

## Field-by-Field Explanation

* **Skill Title** (`user_input_skill_title`, text, required): The name of the skill you are reporting on.
* **Date** (`user_input_date`, date, optional): The date of the assessment or progress report.
* **Observer** (`user_input_observer`, text, optional): The name of the person who observed your progress.
* **Observations** (`user_input_observations`, text, optional): A description of what you have observed about your progress.
* **Skills Progress** (`user_input_skills_progress`, select_one, optional): Select the option that best describes your progress:
	+ Significant Improvement: Notable progress.
	+ Some Improvement: Some progress.
	+ No Change: Neutral progress.
	+ Worsening: Regression.
	+ Not Applicable: Not relevant.
* **Goal Identified** (`user_input_goal_identified`, select_multiple, optional): Answer with the corresponding options:
	+ True: Goal identified.
	+ False: No goal identified.
	+ Not Applicable: Not related.
* **Skill Goal** (`user_input_skill_goal`, text, optional): Enter any specific goals or objectives related to this skill.
* **Notes** (`user_input_notes`, note, optional): Add any additional notes or comments.
* **Review Date** (`user_input_review_date`, date, optional): The date to review and assess this skill again.
