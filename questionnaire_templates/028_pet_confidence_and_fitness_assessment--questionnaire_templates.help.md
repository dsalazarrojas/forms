<thinking>
This is a form for evaluating the confidence and fitness level of a pet, including their health status and training experience. The form aims to collect data from pet owners or trainers to assess the pet's current state and provide insights for further guidance. 
</thinking>

# Pet Confidence And Fitness Assessment - Help Guide
## Purpose
This form is designed to gather information about your pet's confidence and fitness level. It will help us understand their current status and provide you with tailored advice to improve their well-being.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your pet's confidence level in the text field "pet_confidence".
2. If applicable, select the fitness level of your pet from the dropdown menu "pet_fitness".
3. Enter the number of years of experience you or your pet have with training in the "trainer_experience" field.
4. If you have a veterinary experience, enter it as a text in the "vet_experience" field.
5. Assess your pet's health status by selecting the corresponding option in the "pet_health" field.
6. Choose the training level of your pet from the dropdown menu "training_level".
7. Enter the frequency of training for your pet in the "training_frequency" field. Please use a date format (e.g., "Monday, 10:00 am").
8. Select the duration of each training session for your pet in the "training_time" field. Please use the "hh:mm:ss" time format (e.g., "02:30:00").
9. If you have a contact method for your pet owner, please enter their email address in the "email" field. If not, you can leave this field blank.
10. Lastly, if you have a contact phone number for the pet owner, enter it in the "phone" field. If not, you can leave this field blank.

## Field-by-Field Explanation

* **Pet Confidence** (`pet_confidence`, `text`, required): Enter a short description of your pet's confidence level.
* **Pet Fitness** (`pet_fitness`, `select_one`, required): Select how active your pet is, using the following options:
	+ Pet is not active at all
	+ Pet is a little active
	+ Pet is moderately active
	+ Pet is very active
* **Trainer Experience** (`trainer_experience`, `number`, required): Enter the number of years of experience you or your pet have with training.
* **Veterinary Experience** (`vet_experience`, `text`, optional): Enter any veterinary experience you or your pet have.
* **Pet Health** (`pet_health`, `select_multiple`, optional): Select the health status of your pet, using the following options:
	+ Healthy
	+ Unhealthy
	+ Seriously unhealthy
* **Training Level** (`training_level`, `select_one`, optional): Select the training level of your pet, using the following options:
	+ None
	+ Basic
	+ Intermediate
	+ Advanced
* **Training Frequency** (`training_frequency`, `date`, required): Enter the frequency of training for your pet in a date format (e.g., "Monday, 10:00 am").
* **Training Time** (`training_time`, `time`, required): Enter the duration of each training session for your pet in the "hh:mm:ss" time format (e.g., "02:30:00").
* **Email** (`email`, `email`, optional): Enter the email address of your pet owner, if available.
* **Phone** (`phone`, `text`, optional): Enter the phone number of your pet owner, if available.
