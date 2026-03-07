<Thinking> This is a form to design a quiz that tests users on their knowledge of emojis. It's not a form to collect user feedback or demographic information, so it's likely not a good fit for a "teacher_forms" category. Let's review the fields to ensure we're not duplicating any existing forms. 

*   **quiz_title** field is a text field where users can enter a title for their quiz.
*   The **quiz_emojis** field is a select multiple field with two options: "Yes" and "No". It's likely used to ask whether the quiz includes emojis.
*   The **question** field is a text field where users can enter their quiz question.
*   The **correct_answer** field is also a text field where users can enter the correct answer to their quiz question.
*   The **question_emojis** field is another select multiple field with two options: "Yes" and "No", similar to the **quiz_emojis** field.
*   The "teacher_forms" category is typically used for forms designed for teachers, but this form seems to be more of a general quiz creator form. Let's proceed with the assumption that it's a form intended for general use.

</Thinking>

# Emoji Quiz Template - Help Guide
## Purpose
This form is used to create a quiz template that tests users on their knowledge of emojis. It helps you create a quiz with a title, questions, and options for multiple choice questions.

## How To Complete This Form
To complete this form, follow these steps:

1.  Enter a title for your quiz in the **Quiz Title** field.
2.  Determine whether your quiz will include emojis by selecting "Yes" or "No" in the **Quiz Emojis** field.
3.  Enter your quiz question in the **Question** field.
4.  Enter the correct answer to your quiz question in the **Correct Answer** field.
5.  Determine whether your question will include emojis by selecting "Yes" or "No" in the **Question Emojis** field.

## Field-by-Field Explanation

*   **Quiz Title** (`quiz_title`, text, required: false): Enter a title for your quiz.
*   **Quiz Emojis** (`quiz_emojis`, select_multiple, required: false): Determine whether your quiz includes emojis.
    *   Select "Yes" if your quiz will have emojis.
    *   Select "No" if your quiz will not have emojis.
*   **Question** (`question`, text, required: false): Enter your quiz question.
*   **Correct Answer** (`correct_answer`, text, required: false): Enter the correct answer to your quiz question.
*   **Question Emojis** (`question_emojis`, select_multiple, required: false): Determine whether your question includes emojis.
    *   Select "Yes" if your question will have emojis.
    *   Select "No" if your question will not have emojis.
