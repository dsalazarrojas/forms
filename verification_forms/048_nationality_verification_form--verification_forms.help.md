# Nationality Verification Form - Help Guide

## Purpose
The Nationality Verification Form is designed to gather information about an individual's nationality, including their first name, surname, birth date, nationality status, passport number, country of birth, and status of their passport.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your first name in the field labeled "first_name".
2. Enter your surname in the field labeled "surname".
3. Enter your birth date in the format "YYYY-MM-DD" in the field labeled "birth_date".
4. Select "Yes" or "No" in the field labeled "nationality" to indicate whether you are a citizen of the country of your passport.
5. Enter your passport number in the field labeled "passport_number".
6. Select "Yes" or "No" in the field labeled "country_of_birth" to indicate whether you were born in the country of your passport.
7. Select "Yes" or "No" in the field labeled "passport_is_lost" to indicate whether your passport is currently lost or missing.
8. Select "Yes" or "No" in the field labeled "passport_is_stolen" to indicate whether your passport has been stolen.

## Field-by-Field Explanation

* **First Name** (`first_name`, text, required/optional): Enter your first name as it appears on your passport.
* **Surname** (`surname`, text, required/true): Enter your surname as it appears on your passport.
* **Birth Date** (`birth_date`, date, required/true): Enter your birth date in the format "YYYY-MM-DD".
* **Nationality** (`nationality`, select_one, required/true): Select "Yes" to indicate that you are a citizen of the country of your passport.
* **Passport Number** (`passport_number`, number, required/true): Enter your passport number as it appears on your passport.
* **Country of Birth** (`country_of_birth`, select_one, required/true): Select "Yes" to indicate that you were born in the country of your passport.
* **Passport Is Lost** (`passport_is_lost`, select_one, required/true): Select "Yes" to indicate that your passport is currently lost or missing.
* **Passport Is Stolen** (`passport_is_stolen`, select_one, required/true): Select "Yes" to indicate that your passport has been stolen.
