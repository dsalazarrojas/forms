<thinking>
This form is designed for users to report cases of microbial spoilage. It aims to collect data on the type of food involved, the level of spoilage, and other relevant details such as when the spoilage began and was detected, as well as any follow-up actions taken. This form does not require a username or password for completion. All users can access and submit the form without any login credentials. This form should only be used for cases where the user has been trained to identify microbial spoilage. Please only submit reports for confirmed cases, do not use the form as a general inquiry or complaint form.
</thinking>

# Microbial Spoilage Quiz - Help Guide
## Purpose
The Microbial Spoilage Quiz form is used to report cases of microbial spoilage. Please use this form to report confirmed cases of microbial spoilage.

## How To Complete This Form
To complete this form, follow these steps:
1. Choose the type of food that was involved in the spoilage.
2. Select the level of spoilage that occurred.
3. Enter the date when the spoilage began and was detected, in the YYYY-MM-dd format.
4. You can optionally select any follow-up actions taken.
5. Enter your email address or phone number for follow-up purposes.

## Field-by-Field Explanation
* **User Input** (`id: 1`, `type: number`, optional): This field is used to collect any additional information about the user that may be relevant for follow-up purposes.
* **Food Type** (`id: 2`, `type: select_one`, required): Select the type of food that was involved in the spoilage. The options are:
	+ Baked
	+ Cured
	+ Cooked
	+ Dried
	+ Pickled
	+ Smoked
	+ Sprouted
	+ Thawed
* **Spoilage Level** (`id: 3`, `type: select_one`, required): Select the level of spoilage that occurred. The options are:
	+ Low
	+ Moderate
	+ High
* **Time Spoilage Began** (`id: 4`, `type: date`, optional): Enter the date when the spoilage began, in the YYYY-MM-dd format.
* **Time Spoilage Detected** (`id: 5`, `type: date`, optional): Enter the date when the spoilage was detected, in the YYYY-MM-dd format.
* **Temperature** (`id: 6`, `type: number`, optional): Enter the temperature at which the spoilage occurred, if relevant.
* **Notes** (`id: 7`, `type: note`, optional): Enter any additional notes about the spoilage.
* **Email** (`id: 8`, `type: email`, optional): Enter your email address for follow-up purposes.
* **Phone** (`id: 9`, `type: text`, optional): Enter your phone number for follow-up purposes.
* **Follow Up** (`id: 10`, `type: select_multiple`, optional): Select whether there are any follow-up actions taken or planned. The options are:
	+ Yes
	+ No
	+ Other (please specify)
