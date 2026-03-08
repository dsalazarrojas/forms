# nxt_gen_registration_form - Help Guide
## Purpose
The purpose of this form is to collect information from participants in an NXT gen program. It is used to gather details about the participant's school information, interests, and program details.

## How To Complete This Form
To complete this form, please follow the steps below:

1. Enter your school information, including the school name.
2. Provide your participant details, including email address and phone number.
3. Select the participant's interests and program type.
4. Enter the program start and end dates.
5. Choose the timezone and location of the program.
6. Confirm your consent and agreement.

## Field-by-Field Explanation
### School Information
* **School Name** (`school_name`, `text`, required): Please enter the name of your school.
* **Program Name** (`program_name`, `text`, required): Please enter the name of the program you are registering for.
* **Program Type** (`program_type`, `select_one`, required): Please select the type of program you are registering for (School Program, Youth Program, or Innovation Initiative).

### Participant Details
* **Email Address** (`email`, `email`, required): Please enter your email address.
* **Phone Number** (`phone_number`, `text`, optional): Please enter your phone number, if you would like to be contacted.
* **School Information** (`school_info`, `text`, optional): You may enter any additional school information.

### Interests
* **Interest Areas** (`interest_areas`, `select_multiple`, optional): Please select your interest areas (Artificial Intelligence, Data Science, Machine Learning, etc.).
* **Participant Interests** (`participant_interests`, `select_multiple`, optional): Please select your participant interests (Arts and Design, Music and Arts, etc.).

### Program Details
* **Start Date** (`start_date`, `date`, required): Please enter the start date of the program.
* **End Date** (`end_date`, `date`, optional): Please enter the end date of the program, if known.
* **Start Time** (`start_time`, `time`, optional): Please enter the start time of the program, if known.
* **End Time** (`end_time`, `time`, optional): Please enter the end time of the program, if known.
* **Time Zone** (`timezone`, `select_one`, optional): Please select the timezone of the program.

### Additional Information
* **Consent** (`agreement`, `select_one`, required): Please confirm that you have read and agree to the terms and conditions.
* **Agreement** (`agreement`, `select_one`, required): Please confirm that you have read and agree to the terms and conditions. 
* **Additional Information** (`note`, `note`, optional): Please enter any additional information you would like to provide.
