<thinking>...</thinking>

# Yoga Studio Client Check In Form - Help Guide

## Purpose
The purpose of this form is to collect information from clients who are checking into the yoga studio. This form will help the staff to quickly and efficiently process client check-ins, ensuring that all necessary details are captured accurately. 

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter your Client ID number if you have been assigned one by the studio.
2. Provide your Client Name and any other relevant details in the Client Details section.
3. Indicate your current class status by selecting 'Yes' or 'No' in the Check-in Status field.
4. Select whether you will be attending or not by choosing 'Yes' or 'No' for the Attendance field.
5. Optionally, leave any comments or notes about your visit in the Comments field.
6. If you need to contact the studio, you can provide your phone number in the Client Phone field.
7. If you would like to be contacted by the studio, please enter your email address in the Client Email field.
8. If you have any additional notes or comments about your visit, please enter them in the Client Note field.

## Field-by-Field Explanation

* **Client Details** (`client_details`, text, required: false): Enter your name and any other relevant details about yourself.
* **Class Details** (`class_details`, text, required: true): Please describe the class you are attending.
* **Check-in Status** (`checkin_status`, select_one, required: true): Select 'Yes' if you are currently checked in, 'No' otherwise.
* **Attendance** (`attendance`, select_multiple, required: true): Select 'Yes' if you will be attending the class, 'No' otherwise.
* **Comments** (`comments`, text, required: false): Leave any comments or notes about your visit.
* **Client Phone** (`client_phone`, text, required: false): If you need to be contacted by the studio, please enter your phone number here.
* **Client Email** (`client_email`, email, required: false): If you would like to be contacted by the studio, please enter your email address here.
* **Client Note** (`client_note`, note, required: false): If you have any additional notes or comments about your visit, please enter them here.
