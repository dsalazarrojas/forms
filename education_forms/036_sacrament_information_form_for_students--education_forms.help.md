<thinking>
The purpose of this form is to collect information about students related to their sacraments, which are sacred rites or ceremonies performed within the context of a religious tradition. This form is designed to gather details about the student's sacraments, including their first name, last name, date of birth, date of entry, address, and other relevant information. The form also allows for the selection of the type of sacrament the student has received and any additional notes or comments. The information collected through this form will be used to track and manage student records within the institution or organization.
</thinking>

# Sacrament Information Form For Students - Help Guide

## Purpose
This form is used to collect information about a student's sacraments, which are significant events or milestones in their spiritual journey. The collected data will help in maintaining accurate and up-to-date records for the student.

## How To Complete This Form

### Step 1: Enter Student Information

* Enter the student's first name in the "First Name" field.
* Enter the student's last name in the "Last Name" field.
* Enter the student's date of birth in the "Date of Birth" field.
* Enter the student's date of entry in the "Date of Entry" field.
* Enter the student's address in the "Address" field.

### Step 2: Select Sacrament Type

* Select the type of sacrament the student has received from the list of options:
	+ First Confession
	+ First Communion
	+ Confirmation
	+ Baptism
	+ Other

### Step 3: Enter Additional Details

* Enter any additional notes or comments about the student's sacrament in the "Notes" field.
* Enter the student's email address in the "Email" field.
* Enter the student's phone number in the "Phone" field.

### Step 4: Assign Responsibilities

* Select the person assigned to the student's sacrament from the list of options:
	+ chatjimmy
	+ johndoe
	+ janesmith
* Check if the student's sacrament was assigned by the current user:
	+ Yes
	+ No

### Step 5: Update Status

* Select the current status of the student's sacrament:
	+ Active
	+ Inactive

## Field-by-Field Explanation

* **First Name** (`student_first_name`, text, required: false): Enter the student's first name.
* **Last Name** (`student_last_name`, text, required: false): Enter the student's last name.
* **Date of Birth** (`student_date_of_birth`, date, required: false): Enter the student's date of birth.
* **Date of Entry** (`student_date_of_entry`, date, required: false): Enter the student's date of entry.
* **Address** (`student_address`, text, required: false): Enter the student's address.
* **First Sacrament Name** (`sacrament_first_name`, text, required: false): Enter the first sacrament name (e.g., "Baptism").
* **Last Sacrament Name** (`sacrament_last_name`, text, required: false): Enter the last sacrament name (e.g., "Confirmation").
* **Date of Sacrament** (`sacrament_date_of_sacrament`, date, required: false): Enter the date of the sacrament.
* **Sacrament Type** (`student_sacrament_type`, select_one, required: false):
	+ Select the type of sacrament the student has received.
* **Notes** (`notes`, note, required: false): Enter any additional notes or comments about the student's sacrament.
* **Email** (`email`, email, required: false): Enter the student's email address.
* **Phone** (`phone`, text, required: false): Enter the student's phone number.
* **Assigned To** (`assigned_to`, select_one, required: false):
	+ Select the person assigned to the student's sacrament.
* **Assigned By** (`assigned_by`, select_one, required: false):
	+ Check if the student's sacrament was assigned by the current user.
* **Status** (`status`, select_one, required: false):
	+ Select the current status of the student's sacrament:
		- Active
		- Inactive
