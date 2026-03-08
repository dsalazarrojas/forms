# Heat Stress Awareness Quiz - Help Guide
## Purpose
This form is used to track and record employee responses to a heat stress awareness quiz, which assesses their knowledge of heat stress awareness and related practices.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the required fields: 
   * Trainer
   * ID
   * Training Date

2. Select the category for your response. If this is a new employee, select "Yes" to indicate they have been introduced to the quiz. If you are updating an existing employee, select "No" to indicate this quiz was previously completed.

3. Enter any additional comments about the employee's response or training status.

## Field-by-Field Explanation
* **Trainer** (`trainer_name`, text, required): The name of the employee who administered the quiz.
* **ID** (`staff_id`, number, required): The unique ID number of the employee taking the quiz.
* **Training Date** (`training_date`, date, required): The date the quiz was taken.
* **Category** (`category`, select_one, optional): The category indicating whether the employee has been introduced to the quiz.
* **Description** (`description`, text, optional): Additional comments about the employee's response or training status.
* **Comments** (`comments`, note, optional): Any further comments or notes about the employee's response or training status.
* **Participation** (`training_participation`, select_one, optional): The status of the training, indicating whether the employee received or did not receive the training.
