# Oral Ulcer Assessment Survey - Help Guide
## Purpose
This survey is designed to assess the severity and treatment status of oral ulcers in patients.

## How To Complete This Form
To complete this form, simply follow these steps:

* Ensure you have all necessary information readily available.
* Fill in the patient's information (Patient Info) on page 1.
* Provide the patient's ID number (Patient ID) on page 1.
* Answer the following questions on page 2:
	+ Where is the ulcer located (Ulcer Location)?
	+ How long has the patient had the ulcer (Duration)?
	+ What is the size of the ulcer (Size)?
	+ What is the level of pain (Pain Level)?
	+ Has the patient received any treatment (Treatment Status)?
	+ What is the next follow-up appointment date (Follow-Up)?
	+ What symptoms has the patient reported (Symptoms)?
* Answer the remaining questions (Test1 to Test13) on page 3, providing the necessary information for each.

## Field-by-Field Explanation

* **Patient Info** (`patient_info`, text, required): This is where you can enter the patient's name, date of birth, and any other relevant information.
* **Patient ID** (`patient_id`, number, required): This is where you enter the patient's ID number, which can be a unique identifier for the patient.
* **Ulcer Location** (`ulcer_location`, select_one, required): Choose the location where the ulcer is present from the options: Upper, Lower, or Both.
* **Duration** (`duration`, number, required): Enter the length of time the patient has had the ulcer.
* **Size** (`size`, select_one, required): Choose the size of the ulcer from the options: Small, Medium, or Large.
* **Pain Level** (`pain_level`, select_multiple, required): Select all the symptoms that apply to the patient's pain level, such as None, Mild, Moderate, or Severe.
* **Treatment Status** (`treatment_status`, select_one, required): Choose whether the patient has received treatment or not.
* **Follow-Up** (`follow_up`, date, required): Enter the date of the next follow-up appointment.
* **Symptoms** (`symptoms`, select_multiple, required): Select all the symptoms the patient is experiencing, such as Dry mouth, Pain, or Bleeding.
* **Test1** (`test1`, note, required): Provide a note for this test.
* **Test2** (`test2`, number, optional): Enter a numerical value.
* **Test3** (`test3`, select_one, required): Choose an option from Test3.
* **Test4** (`test4`, select_multiple, required): Select all the options for Test4.
* **Test5** (`test5`, number, required): Enter a numerical value.
* **Test6** (`test6`, select_one, required): Choose an option from Test6.
* **Test7** (`test7`, select_multiple, required): Select all the options for Test7.
* **Test8** (`test8`, select_multiple, required): Select all the options for Test8.
* **Test9** (`test9`, select_one, required): Choose an option from Test9.
* **Test10** (`test10`, number, required): Enter a numerical value.
* **Test11** (`test11`, select_multiple, required): Select all the options for Test11.
* **Test12** (`test12`, select_multiple, required): Select all the options for Test12.
* **Test13** (`test13`, select_multiple, required): Select all the options for Test13.
