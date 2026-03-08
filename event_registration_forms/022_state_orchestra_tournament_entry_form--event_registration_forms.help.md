<thinking>...</thinking>

# state_orchestra_tournament_entry_form - Help Guide
## Purpose
The state_orchestra_tournament_entry_form is used to collect information about a school's orchestra program for an event registration.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out all the required fields, marked with an asterisk (\*) in the field label.
2. If a field has a dropdown menu, select the desired option from the list.
3. Enter the student names in the Student Names field, separated by commas.
4. Enter the performance date and time in the Event Date and Event Time fields, in the format "mm/dd/yyyy" and "HH:MM AM/PM" respectively.
5. Select the school's state from the list in the School State field.
6. Make sure to review all the information before submitting the form.

## Field-by-Field Explanation

* **School Name** (`school_name`, text, required): Enter the name of the school.
* **Orchestra Name** (`orchestra_name`, text, required): Enter the name of the orchestra program.
* **Orchestra Director** (`school_orchestra_director`, text, required): Enter the name of the school's orchestra director.
* **School Address** (`school_address`, text, required): Enter the school's physical address.
* **City** (`city`, text, required): Enter the city where the school is located.
* **State** (`state`, text, required): Enter the state where the school is located.
* **Zip Code** (`zip`, number, required): Enter the school's zip code.
* **Phone** (`phone`, text, required): Enter the school's phone number.
* **Email** (`email`, email, required): Enter the school's email address.
* **Student Names** (`student_names`, text, required): Enter the names of the students participating in the orchestra program, separated by commas.
* **Instrument** (`instrument`, text, required): Enter the instrument(s) being played in the orchestra program.
* **Event Date** (`event_date`, date, required): Enter the date of the event in the format "mm/dd/yyyy".
* **Event Time** (`event_time`, time, required): Enter the time of the event in the format "HH:MM AM/PM".
* **Ensemble Name** (`school_ensemble_name`, text, required): Enter the name of the school's ensemble.
* **Director Title** (`school_director_title`, text, required): Enter the title of the school's director.
* **Number of Students** (`student_count`, number, required): Enter the number of students participating in the orchestra program.
* **Number of Teachers** (`teacher_count`, number, required): Enter the number of teachers in the orchestra program.
* **School Level** (`school_level`, select_one, required): Select the level of the school (High School, Community, Middle School).
* **Event Venue** (`event_venue`, select_multiple, required): Select one or more event venue options (School Auditorium, School Gym, Community Hall, Community Center, Local Theater, Local Park).
* **Student Ages** (`student_ages`, select_multiple, required): Select one or more student age groups (8-12, 13-15, 16-18).
* **School Division** (`school_division`, select_one, required): Select the school's division (Division 1, Division 2, Division 3, Division 4, Division 5, Division 6, Division 7, Division 8).
* **Performance Date** (`performance_date`, date, required): Enter the date of the performance in the format "mm/dd/yyyy".
* **Performance Time** (`performance_time`, time, required): Enter the time of the performance in the format "HH:MM AM/PM".
* **School State** (`school_state`, select_multiple, required): Select the state where the school is located (Arizona, California, Florida, Illinois, Indiana, Michigan, Ohio, Pennsylvania, Texas).
* **School Zip** (`school_zip`, number, required): Enter the school's zip code.

Note: All fields with a required asterisk (\*) are required fields.
