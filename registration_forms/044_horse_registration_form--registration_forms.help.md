# horse-registration-form - Help Guide
## Purpose
The horse-registration-form is used to register horses in a database or system. It collects information about a horse, including its breed, age, color, registration date, and registration time.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the horse's info in the first field.
2. Provide the owner's info in the second field.
3. Select the horse's breed in the third field.
4. Enter the horse's age in the fourth field.
5. Select the horse's color in the fifth field.
6. Enter the registration date and time in the sixth and seventh fields, respectively.
7. Optionally, provide a comment in the eighth field if desired.

## Field-by-Field Explanation

* **Horse Info** (`horse_info`, text, required: false): Enter the horse's name, identification number, or any other unique identifier.
* **Owner Info** (`owner_info`, text, required: true): Enter the owner's name, address, and contact information.
* **Horse Breed** (`horse_breed`, select_one, required: true): Select the horse's breed from the available options (e.g., Quarter Horse, Arabian, Warmblood).
* **Horse Age** (`horse_age`, number, required: false): Enter the horse's age in years, if applicable.
* **Horse Color** (`horse_color`, select_multiple, required: true): Select the horse's color from the available options (e.g., Black, White, Brown).
* **Registration Date** (`registration_date`, date, required: true): Enter the date the horse was registered.
* **Registration Time** (`registration_time`, time, required: true): Enter the time the horse was registered.
* **Registration Comment** (`registration_comment`, note, required: false): Enter any additional comments or notes about the horse's registration.
