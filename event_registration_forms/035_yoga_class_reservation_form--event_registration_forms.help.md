<thinking>As a form expert, I've reviewed the provided YAML fields for the "Yoga Class Reservation Form" and ensured that it's relevant to the yoga class reservation process. The form doesn't seem to duplicate any existing form templates, and it's designed to collect useful information from users. I've also considered the provided options for each field, which appear to be well-suited for the purpose of the form. I've checked for clarity and consistency in field labels, which should help guide users through the submission process.</thinking>

# Yoga Class Reservation Form - Help Guide
## Purpose
This form is designed to help users reserve a spot in a yoga class. It collects information about the user, their preferred class details, and any special requests they may have. By providing accurate and complete information, users can ensure a smooth and enjoyable experience in the class.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out your full name in the "Full Name" field.
2. Enter your email address in the "Email" field. This will help the instructor contact you for any updates or reminders.
3. Choose a start date for the class in the "Start Date" field.
4. Select a start time for the class in the "Start Time" field.
5. Choose an end date for the class in the "End Date" field.
6. Select an end time for the class in the "End Time" field.
7. Select your preferred yoga style from the "Yoga Style" options.
8. Choose the class size you prefer (Small, Medium, or Large) in the "Class Size" field.
9. Indicate your current class level (Beginner, Intermediate, or Advanced) in the "Class Level" field.
10. If you have any special instructions or requests for the instructor, type them in the "Special Instructions" field.
11. Let the instructor know if the class is reserved for you or not by selecting "Yes" or "No" in the "Reserved" field.
12. Add any additional notes or comments in the "Notes" field.
13. Finally, confirm that you're the one submitting the form by entering your name in the "Reserved by" field.

## Field-by-Field Explanation
* **Full Name** (`user_name`, text, required/optional): Enter your full name as you would like it to be displayed in class communications.
* **Email** (`email`, email, required/optional): A valid email address where the instructor can contact you.
* **Start Date** (`start_date`, date, required/optional): Choose the date you'd like to attend the class.
* **Start Time** (`start_time`, time, required/optional): Select the start time for the class.
* **End Date** (`end_date`, date, required/optional): Choose the end date for the class.
* **End Time** (`end_time`, time, required/optional): Select the end time for the class.
* **Yoga Style** (`yoga_style`, select_one, required/optional): Choose the yoga style you're interested in practicing (Ashtanga, Hatha, Iyengar, Kundalini, Power, Vinyasa, Yin, or Other).
* **Instructor** (`instructor`, text, required/optional): Enter the name of the instructor or the style's instructor you're interested in.
* **Class Size** (`class_size`, select_one, required/optional): Choose the class size you prefer (Small, Medium, or Large).
* **Class Level** (`class_level`, select_one, required/optional): Select your current class level (Beginner, Intermediate, or Advanced).
* **Special Instructions** (`special_instructions`, text, required/optional): If you have any special requests or instructions for the instructor, type them here.
* **Reserved** (`reserved`, select_one, required/optional): Let the instructor know if the class is reserved for you or not.
* **Notes** (`notes`, text, required/optional): Add any additional notes or comments about your registration.
* **Reserved by** (`reserved_by`, text, required/optional): Confirm that you're the one submitting the form.
