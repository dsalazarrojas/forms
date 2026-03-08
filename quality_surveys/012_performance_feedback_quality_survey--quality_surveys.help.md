# performance_feedback_quality_survey - Help Guide
## Purpose
The performance Feedback Quality Survey is designed to gather feedback from employees about their colleagues' performance, focusing on overall quality, communication, collaboration, time management, and leadership skills.

## How To Complete This Form
1. Fill in the employee's rating with a number between 1 and 5, where 1 means "Below average" and 5 means "Excellent".
2. For the project name, type a brief description or title of the project or task you're providing feedback on.
3. In the comments section, type specific and detailed feedback about the colleague's performance.
4. Choose the level of overall performance using the rating scale provided.
5. For categories 1-4, select the options that best describe the colleague's skills in each area.
	* Category 1: Communication
	* Category 2: Collaboration
	* Category 3: Time Management
	* Category 4: Leadership
6. Submit your feedback, providing as much detail as possible to support your ratings and selections.

## Field-by-Field Explanation

### Employee rating
* **Employee rating** (`employee_rating`, number, required/optional): Rate the colleague's performance on a scale of 1-5, where 1 means "Below average" and 5 means "Excellent".

### Project name
* **Project name** (`project_name`, text, required/optional): Type a brief description or title of the project or task you're providing feedback on.

### Comments
* **Comments** (`feedback_comments`, note, required/optional): Provide specific and detailed feedback about the colleague's performance.

### Overall rating scale
* **Overall rating scale** (`rating_scale`, select_one, required/optional): Choose the level of overall performance using the rating scale: Excellent, Very good, Average, Below average, Poor.

### Category 1: Communication
* **Communication** (`category_1`, select_multiple, required/optional): Select the options that best describe the colleague's skills in communication:
	+ Very Effective
	+ Somewhat Effective
	+ Not very effective
	+ Not at all effective

### Category 2: Collaboration
* **Collaboration** (`category_2`, select_multiple, required/optional): Select the options that best describe the colleague's skills in collaboration:
	+ Very Effective
	+ Somewhat Effective
	+ Not very effective
	+ Not at all effective

### Category 3: Time Management
* **Time Management** (`category_3`, select_multiple, required/optional): Select the options that best describe the colleague's skills in time management:
	+ Very Effective
	+ Somewhat Effective
	+ Not very effective
	+ Not at all effective

### Category 4: Leadership
* **Leadership** (`category_4`, select_multiple, required/optional): Select the options that best describe the colleague's skills in leadership:
	+ Very Effective
	+ Somewhat Effective
	+ Not very effective
	+ Not at all effective

### Tips

* Be specific and objective when providing feedback.
* Focus on the colleague's performance, not their personality or personal traits.
* If you're unsure about a particular category, use the "Not very effective" or "Not at all effective" option to indicate that you need more information.
* Provide concrete examples or anecdotes to support your ratings and selections.
