# say_hello_to_the_city - Help Guide
## Purpose
This form is used to collect information about a city, including its name, description, and user's contact details for planning purposes. 

## How To Complete This Form
To complete this form, please follow these steps:
1. Enter the city's name in the "What is the city's name?" field.
2. In the "Describe the city's atmosphere?" field, provide a brief description of the city's character and ambiance.
3. In the "What is your contact name?" field, enter your name that will be used for communication.
4. Enter your email address in the "Email address" field.
5. Enter your phone number in the "Phone number" field (this is optional).
6. Select a preferred date for your visit in the "Preferred date of visit" field.
7. Select a preferred time for your visit in the "Preferred time of visit" field.
8. If you have any comments or notes, you can provide them in the "Comments or notes" field.
9. Optionally, you can confirm whether you want to visit or not by selecting an option in the "Select One" field.
10. If you want to provide additional contact information, you can enter it in the "Email address 2" and "Phone number 2" fields (both are optional).

## Field-by-Field Explanation

* **What is the city's name?** (`city_title`, text, required): This is the field where you enter the name of the city you are referring to.
* **Describe the city's atmosphere?** (`city_description`, text, required): Please provide a brief description of the city's character and ambiance.
* **What is your contact name?** (`contact_name`, text, required): Enter your name that will be used for communication purposes.
* **Email address** (`email`, email, required): Enter your email address that will be used for communication.
* **Phone number** (`phone`, text, optional): If you have a phone number, you can enter it here (this is optional).
* **Select One** (`select_one`, select_one, optional): Select "Yes" if you want to visit, "No" if you don't, or "Other" if you have other plans.
* **Preferred date of visit** (`visit_date`, date, required): Select the date you prefer to visit the city.
* **Preferred time of visit** (`visit_time`, time, required): Select the time you prefer to visit the city.
* **Comments or notes** (`note`, note, optional): If you have any comments or notes, you can provide them here.
* **Select Multiple** (`select_multiple`, select_multiple, optional): Select "Yes" if you want to visit multiple times, "No" if you don't, or "Other" if you have other plans.
* **Email address 2** (`email_2`, email, optional): If you want to provide a secondary email address, you can enter it here (this is optional).
* **Phone number 2** (`phone_2`, text, optional): If you want to provide a secondary phone number, you can enter it here (this is optional).
