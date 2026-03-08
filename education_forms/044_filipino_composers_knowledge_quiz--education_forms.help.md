# filipino_composers_knowledge_quiz - Help Guide

## Purpose
This form is designed for users to submit information about Filipino composers and their music. It gathers details about the composer, their musical compositions, and related class or workshop information.

## How To Complete This Form
To complete this form, simply select the century in which the composer worked and provide their name, a notable composition, the type of music composition, and any additional information required for the class or workshop such as teacher details, class date and time, location, and type. Select the options that best describe the class or workshop type (online/offline) and any other optional details like start and end times.

## Field-by-Field Explanation

* **What century did the composer work in?** (`composer_century`, select_one, required: false):
  Select the correct century in which the composer was active.
* **What is the name of the composer?** (`composer_name`, text, required: false):
  Enter the name of the composer.
* **What is a notable composition of the composer?** (`notable_composition`, text, required: false):
  Provide a significant or well-known musical work by the composer.
* **What is the type of musical composition?** (`musical_composition_type`, select_multiple, required: false):
  Select the type of music composition that best describes the composer's work (classical, folk, popular, experimental).
* **Who is the teacher of the class or workshop?** (`teacher_name`, text, required: false):
  Enter the name and contact information of the teacher or instructor.
* **How can the teacher be contacted?** (`teacher_info`, text, required: false):
  Provide the best way to contact the teacher for further information.
* **When is the class or workshop held?** (`class_date`, date, required: false):
  Select the date of the class or workshop.
* **Where is the class or workshop located?** (`class_location`, text, required: false):
  Enter the location of the class or workshop.
* **Can we have a list of all compositions of the composer?** (`class_description`, text, required: false):
  If applicable, provide a list of all significant musical compositions by the composer.
* **What type is the class or workshop?** (`class_type`, select_multiple, required: false):
  Choose the type of class or workshop (online/offline).
* **What is the class or workshop start time?** (`class_start_time`, time, required: false):
  Select the start time of the class or workshop (if applicable).
* **What is the class or workshop end time?** (`class_end_time`, time, required: false):
  Select the end time of the class or workshop (if applicable).
* **Class Notes** (`class_notes`, text, required: false):
  Leave any additional comments or notes about the class or workshop.
