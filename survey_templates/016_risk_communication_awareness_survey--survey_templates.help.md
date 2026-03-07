<thinking>
We are considering the creation of a user-facing help guide for a risk communication awareness survey form. This form is used to understand the awareness and agreement levels of individuals about risk communication strategies. The form's purpose is to gather insights on how well participants understand risk communication strategies, how they perceive their implementation, and their agreement or disagreement with them. The form's completion is not strictly required, as it's an optional step for users to provide their feedback. The fields on this form are mostly text and numeric, with some select options for categorization and agreement level. The survey form is part of a broader set of survey templates, which might be used for different purposes, such as assessments and other evaluations. This guide will walk users through the form's purpose, how to fill it out, and what each field means, with the aim of making the process clear and user-friendly.
</thinking>

# Risk Communication Awareness Survey - Help Guide
## Purpose
This form is designed to assess the awareness and agreement levels of individuals about risk communication strategies. It helps to identify areas of improvement and understanding of risk communication among participants.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the **Risk Communication** field with a brief description of your understanding of the risk communication strategy.
2. Select the **Category** of the survey template you are using (e.g., Survey Templates, Assessment Forms).
3. In the **description** field, provide a brief description of the survey.
4. For each of the remaining fields, select or fill in the required information:
	* **participants_understand**: Choose the number that best represents how well you understand the risk communication strategy.
	* **organizations_implement**: Select the number that best represents how well organizations understand the risk communication strategy.
	* **participants_agree**: Choose how you agree or disagree with the risk communication strategy, selecting one or more options.
	* **comments**: Provide any additional comments about the risk communication strategy.
	* **email**: Enter your email address (if you want to receive the survey results).
	* **phone**: Enter your phone number (if you want to receive follow-up questions).
	* **submitted**: Leave blank, as the survey submission date and time will be automatically recorded.

## Field-by-Field Explanation
* **Risk Communication** (`id: 1`):
	+ Label: Risk Communication
	+ Type: text
	+ Description: A brief description of your understanding of the risk communication strategy.
* **Category** (`id: 2`):
	+ Label: Category
	+ Type: select_one
	+ Description: Select the category of the survey template you are using (e.g., Survey Templates, Assessment Forms).
* **description** (`id: 3`):
	+ Label: description
	+ Type: text
	+ Description: A brief description of the survey.
* **participants_understand** (`id: 4`):
	+ Label: participants_understand
	+ Type: number
	+ Description: Choose the number that best represents how well you understand the risk communication strategy.
* **organizations_implement** (`id: 5`):
	+ Label: organizations_implement
	+ Type: number
	+ Description: Select the number that best represents how well organizations understand the risk communication strategy.
* **participants_agree** (`id: 7`):
	+ Label: participants_agree
	+ Type: select_multiple
	+ Description: Choose how you agree or disagree with the risk communication strategy.
* **comments** (`id: 8`):
	+ Label: comments
	+ Type: note
	+ Description: Provide any additional comments about the risk communication strategy.
* **email** (`id: 9`):
	+ Label: email
	+ Type: email
	+ Description: Enter your email address (if you want to receive the survey results).
* **phone** (`id: 10`):
	+ Label: phone
	+ Type: text
	+ Description: Enter your phone number (if you want to receive follow-up questions).
* **submitted** (`id: 11`):
	+ Label: submitted
	+ Type: date
	+ Description: Leave blank, as the survey submission date and time will be automatically recorded.
