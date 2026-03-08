# E Signature Training Agreement - Help Guide
## Purpose
The E Signature Training Agreement form is used to collect essential information from trainees and trainers for administrative or HR purposes. It's a one-time agreement that confirms the understanding and commitment of both parties for a training session.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in the trainee's name and details in the **Trainee Name**, **Training Date**, and **Training Time** fields.
2. Select the training topics the trainee will be receiving in the **Training Topics** field.
3. Confirm your understanding and commitment to the training by selecting **Yes** in the **Training Agreement** field.
4. Sign and date your signature in the **Trainee Signature** field.
5. Sign and date your signature as the trainer in the **Trainer Signature** field.
6. Select the **Training Status** as either **Complete** or **Incomplete** after the training session.
7. Add any additional comments about the training session in the **Comments** field, if necessary.

## Field-by-Field Explanation
### Trainee Name
* **Trainee Name** (`trainee_name`, text, required): This field is for the trainee to provide their name.
### Trainer Name
* **Trainer Name** (`trainer_name`, text, required): This field is for the trainer to provide their name.
### Training Date
* **Training Date** (`training_date`, date, required): This field is for the trainee to enter the date of the training session.
### Training Time
* **Training Time** (`training_time`, time, required): This field is for the trainee to enter the time of the training session.
### Location
* **Location** (`location`, text, optional): This field is for the trainee to provide the location of the training session, but it's not required.
### Training Hours
* **Training Hours** (`training_hours`, number, required): This field is for the trainee to enter the number of hours trained during the session.
### Training Topics
* **Training Topics** (`training_topics`, select_multiple, required): This field is for the trainee to select the topics covered during the training session.
### Training Agreement
* **Training Agreement** (`training_agreement`, select_multiple, required): This field is for the trainee to confirm their understanding and commitment to the training session.
### Trainee Signature
* **Trainee Signature** (`trainee_signature`, date, required): This field is for the trainee to sign and date their agreement.
### Trainer Signature
* **Trainer Signature** (`trainer_signature`, date, required): This field is for the trainer to sign and date their agreement.
### Date Signed
* **Date Signed** (`date_signed`, date, required): This field is for the trainer to record the date they signed the agreement.
### Training Status
* **Training Status** (`training_status`, select_one, required): This field is for the trainer to select the status of the training session (Complete or Incomplete).
### Comments
* **Comments** (`comments`, note, optional): This field is for the trainee to add any additional comments about the training session, but it's not required.
