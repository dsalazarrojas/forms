# Seminar Details Form - Help Guide

## Purpose
This form is used to collect detailed information about a seminar, including its title, schedule, capacity, price, and status.

## How To Complete This Form

To complete this form, follow these steps:

1. Fill out the title of the seminar in the "Seminar Title" field.
2. Enter the start and end dates of the seminar in the "Seminar Start Date" and "Seminar End Date" fields, respectively.
3. Fill out the seminar's capacity, maximum capacity, and minimum capacity in the "Seminar Capacity", "Maximum Capacity", and "Minimum Capacity" fields, respectively.
4. Enter the maximum and minimum price of the seminar in the "Seminar Price Max" and "Seminar Price Min" fields.
5. Select the status of the seminar from the options provided (Open, Closed, Cancelled).
6. Enter the reason for the seminar status in the "Seminar Status Reason" field (if selected as Closed or Cancelled).
7. Fill out the start and end times of the seminar in the "Seminar Start Time" and "Seminar End Time" fields, respectively.
8. Enter the name and contact information of the seminar organizer in the "Seminar Organizer", "Seminar Organizer Email", and "Seminar Organizer Phone" fields.
9. List the participants of the seminar in the "Seminar Participants" field.
10. Enter any additional notes about the seminar in the "Seminar Notes" field.
11. Upload a file related to the seminar in the "Seminar File" field (if applicable).

## Field-by-Field Explanation

* **Seminar Title** (`title`, text, required/optional): Enter the title of the seminar.
* **Seminar Start Date** (`seminar_start_date`, date, required/true): Enter the start date of the seminar.
* **Seminar End Date** (`seminar_end_date`, date, required/true): Enter the end date of the seminar.
* **Seminar Location** (`seminar_location`, text, required/optional): Enter the location of the seminar.
* **Seminar Description** (`seminar_description`, text, required/optional): Enter a brief description of the seminar.
* **Seminar Capacity** (`seminar_capacity`, number, required/optional): Enter the capacity of the seminar.
* **Maximum Capacity** (`seminar_capacity_max`, number, required/true): Enter the maximum capacity of the seminar.
* **Minimum Capacity** (`seminar_capacity_min`, number, required/true): Enter the minimum capacity of the seminar.
* **Seminar Capacity Step** (`seminar_capacity_step`, number, required/optional): Enter the step increment for the seminar capacity.
* **Seminar Price** (`seminar_price`, number, required/optional): Enter the price of the seminar.
* **Maximum Price** (`seminar_price_max`, number, required/true): Enter the maximum price of the seminar.
* **Minimum Price** (`seminar_price_min`, number, required/true): Enter the minimum price of the seminar.
* **Seminar Price Step** (`seminar_price_step`, number, required/optional): Enter the step increment for the seminar price.
* **Seminar Status** (`seminar_status`, select_one, required/true): Select the status of the seminar (Open, Closed, Cancelled).
* **Seminar Status Reason** (`seminar_status_reason`, text, required/optional): Enter the reason for the seminar status (if selected as Closed or Cancelled).
* **Seminar Start Time** (`seminar_start_time`, time, required/true): Enter the start time of the seminar.
* **Seminar End Time** (`seminar_end_time`, time, required/true): Enter the end time of the seminar.
* **Seminar Organizer** (`seminar_organizer`, text, required/optional): Enter the name of the seminar organizer.
* **Seminar Organizer Email** (`seminar_organizer_email`, email, required/optional): Enter the email of the seminar organizer.
* **Seminar Organizer Phone** (`seminar_organizer_phone`, text, required/optional): Enter the phone number of the seminar organizer.
* **Seminar Participants** (`seminar_participants`, text, required/optional): List the participants of the seminar.
* **Seminar Notes** (`seminar_notes`, note, required/optional): Enter additional notes about the seminar.
* **Seminar File** (`seminar_file`, text, required/optional): Upload a file related to the seminar (if applicable).
