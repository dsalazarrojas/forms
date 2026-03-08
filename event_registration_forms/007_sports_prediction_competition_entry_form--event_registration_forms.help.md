# sports_prediction_competition_entry_form - Help Guide
## Purpose
The sports prediction competition entry form is designed to collect data from users for a sports prediction competition. This form is used to gather information about the sports event, the sport name, the prediction type, and the participant's details.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the Sports Event page with the relevant information.
2. On the Sport Name page, enter the name of the sport you are predicting.
3. On the Prediction Type page, select the type of sport you are predicting (e.g., Basketball, Baseball, etc.).
4. On the Prediction Date page, select the date of the event.
5. On the Prediction Time page, select the time of the event.
6. On the Prediction Score page, enter the score of the event.
7. On the Prediction Team page, enter the team you are predicting (e.g., New York Yankees, etc.).
8. On the Prediction Outcome page, select the outcome of the event (e.g., Win, Loss, Tie).
9. On the Prediction Result page, select the result of your prediction (e.g., Correct, Incorrect).
10. On the Participant Details page, fill out the participant's information, including their name, email, phone number, and address.
11. Finally, add any additional notes about the participant on the Participant Note page.

## Field-by-Field Explanation

* **Sports Event** (`sports_event`, text, not required):
  * Enter the name of the sports event, such as "Super Bowl" or "World Cup".
* **Sport Name** (`sport_name`, text, not required):
  * Enter the name of the sport you are predicting, such as "Basketball" or "Hockey".
* **Prediction Type** (`prediction_type`, select_one, not required):
  * Select the type of sport you are predicting, such as "Basketball", "Baseball", "Football", or "Hockey".
* **Prediction Date** (`prediction_date`, date, not required):
  * Select the date of the event.
* **Prediction Time** (`prediction_time`, time, not required):
  * Select the time of the event.
* **Prediction Score** (`prediction_score`, number, not required):
  * Enter the predicted score of the event.
* **Prediction Team** (`prediction_team`, text, not required):
  * Enter the team you are predicting, such as "New York Yankees" or "Los Angeles Lakers".
* **Prediction Outcome** (`prediction_outcome`, select_multiple, not required):
  * Select the outcome of the event, such as "Win", "Loss", or "Tie".
* **Prediction Result** (`prediction_result`, select_one, not required):
  * Select the result of your prediction, such as "Correct" or "Incorrect".
* **Participant Name** (`participant_name`, text, not required):
  * Enter your name.
* **Participant Email** (`participant_email`, email, not required):
  * Enter your email address.
* **Participant Phone** (`participant_phone`, text, not required):
  * Enter your phone number.
* **Participant Address** (`participant_address`, text, not required):
  * Enter your address.
* **Participant Note** (`participant_note`, note, not required):
  * Add any additional notes about the participant.
