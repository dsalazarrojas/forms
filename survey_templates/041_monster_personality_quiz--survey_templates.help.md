# monser_personaliy_quiz - Help Guide
## Purpose
The "monser_personaliy_quiz" form is a personality quiz designed to help users understand their monster personality traits. It consists of multiple-choice questions that ask about various personality characteristics. After completing the quiz, users will be able to gain insights into their personality and have a conclusion page to review their results.

## How To Complete This Form
To complete this form, follow these steps:

1. Read through the first page titled "monster personality quiz" which provides background information on the personality traits.
2. Proceed to the second page, "question1" where you will be presented with a set of multiple-choice options. Select all the personality traits that best describe you.
3. Continue to the third page, "question2" where you will again be presented with multiple-choice options. Select all the personality traits that best describe you.
4. Review your results on the fourth page, "conclusion" which provides a summary of your personality traits.
5. Finally, enter any additional comments or information on the last page "submission" and submit the form.

## Field-by-Field Explanation

* **monster personality quiz** (`intro_page`, text, required: false): This is the first page of the form, providing background information on the personality traits you will be answering questions about.
* **monster personality traits** (`question1`, select_multiple, required: false):
	+ **Adventurous**: Do you often take risks and engage in activities that challenge you?
	+ **Carefree**: Do you tend to be laid-back and easy-going, without being careless?
	+ **Assertive**: Do you tend to be direct and forceful in your interactions with others?
* **monster personality traits** (`question2`, select_multiple, required: false):
	+ **Adventurous**: Do you often take the lead and initiate new experiences?
	+ **Carefree**: Do you tend to be open-minded and adaptable?
	+ **Assertive**: Do you tend to be confident and express your opinions clearly?
* **conclusion** (`conclusion_page`, note, required: false): This is a summary of your personality traits based on your answers.
* **submission** (`submission_page`, text, required: false): Enter any additional comments or information here and submit the form.
