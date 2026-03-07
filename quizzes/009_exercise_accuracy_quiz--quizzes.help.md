<thinking>
The form "exercise_accuracy_quiz" is designed to collect information about a quiz, allowing users to input details such as title, category, description, output file, assigned tool, and form ID. The form is likely used by administrators to create and manage quizzes for training purposes.

To confirm, I will use the fields as follows:

- Category: The "Category" field is used to select the type of quiz, which can be "Quizzes" or "Training".
- Description: The "Description" field is an optional field that allows users to input additional information about the quiz.
- Quiz Description: The "Quiz Description" field is used to input a detailed description of the quiz.
- Output File: The "Output File" field is used to select the output file associated with the quiz.
- Assigned Tool: The "Assigned Tool" field is used to select the tool assigned to the quiz, which can be "chatjimmy" or "other".
- Form ID: The "Form ID" field is used to input a unique ID for the quiz.

Please let me know if this is correct before I proceed with the actual help guide.
</thinking>

# exercise_accuracy_quiz - Help Guide
## Purpose
The exercise_accuracy_quiz form is used to collect information about a quiz, allowing users to input details such as title, category, description, output file, assigned tool, and form ID.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the `Quiz Title` field with a brief title for the quiz.
2. Select a category for the quiz from the `Category` field. You can choose between "Quizzes" or "Training".
3. (Optional) Input a description for the quiz in the `Description` field.
4. Input a detailed description of the quiz in the `Quiz Description` field.
5. Select the output file associated with the quiz from the `Output File` field.
6. Select the tool assigned to the quiz from the `Assigned Tool` field. You can choose between "chatjimmy" or "other".
7. Finally, input a unique ID for the quiz in the `Form ID` field.

## Field-by-Field Explanation
* **Exercise Title** (`quiz_title`, text, optional): Fill in a brief title for the quiz.
* **Category** (`category_id`, select_one, optional): Select the type of quiz, which can be "Quizzes" or "Training".
* **Description** (`description`, note, optional): Input additional information about the quiz.
* **Quiz Description** (`quiz_description`, text, optional): Input a detailed description of the quiz.
* **Output File** (`output_file`, text, optional): Select the output file associated with the quiz.
* **Assigned Tool** (`assigned_tool`, select_one, optional): Select the tool assigned to the quiz, which can be "chatjimmy" or "other".
* **Form ID** (`form_id`, number, optional): Input a unique ID for the quiz.

## Tips
- Make sure to fill in all the required fields to ensure that the quiz can be saved and used correctly.
- If you are unsure about any field, refer back to this help guide for clarification.
