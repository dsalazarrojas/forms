<thinking>
The form seems to be designed for registering a horse in a show event. The event ID is likely required to associate the registration with the specific event. The rider's information, such as name, age, and contact details, is probably needed for communication and organizational purposes. The horse's breed and characteristics, like height and weight, are necessary for categorizing and evaluating the horse in the competition. The select-one fields for rider gender and horse breed suggest that only one option can be selected. The email and phone number fields may be for contacting the rider, which could be optional but useful for communication. There are no obvious duplicates or inconsistencies in the fields provided.

</thinking>

# Horse Show Registration Form - Help Guide
## Purpose
The Horse Show Registration Form is designed for riders to register their horses in a show event. It collects information about the rider and their horse to categorize and evaluate them in the competition.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the fields with your information as a rider, such as name, age, email, and phone number.
2. Select the event ID for which you are registering your horse.
3. Enter your horse's name and breed.
4. Provide your horse's height and weight.

## Field-by-Field Explanation
* **Event ID** (`event_id`, number, required): Enter the ID of the event for which you are registering your horse.
* **Rider Name** (`rider_name`, text, required): Enter your name as a rider.
* **Rider Age** (`rider_age`, number, required): Enter your age as a rider.
* **Rider Gender** (`rider_gender`, select_one, optional): Select your gender (Female, Male, Other).
* **Rider Email** (`rider_email`, email, optional): Enter your email address for communication.
* **Rider Phone Number** (`rider_phone_number`, text, optional): Enter your phone number for communication.
* **Horse Name** (`horse_name`, text, required): Enter your horse's name.
* **Horse Breed** (`horse_breed`, select_one, optional): Select your horse's breed (Light Horse Breed 1, Light Horse Breed 2, Light Horse Breed 3, Light Horse Breed 4, Light Horse Breed 5, Other).
* **Horse Height** (`horse_height`, number, optional): Enter your horse's height.
* **Horse Weight** (`horse_weight`, number, optional): Enter your horse's weight.
