# RV Site Reservation Form - Help Guide

## Purpose
This form is used to collect details about vehicle site reservations, including site selection, date and time, guest count, vehicle type, and reservation status. It helps staff to manage and monitor the status of vehicle site reservations.

## How To Complete This Form

1. Select the site for the reservation. If no sites are available, please contact the admin.
2. Choose the start and end dates of the reservation.
3. Select the start and end times of the reservation.
4. Choose the reservation status (active or inactive).
5. Enter the number of guests.
6. Select the type of vehicle (if applicable).
7. Enter any additional notes or comments about the reservation.
8. Provide any contact information for the reservation.

## Field-by-Field Explanation

* **Site** (`site_id`, select_multiple, required): Select one or multiple sites for the reservation.
* **Start Date** (`start_date`, date, required): Choose the start date of the reservation.
* **End Date** (`end_date`, date, required): Choose the end date of the reservation.
* **Start Time** (`start_time`, time, required): Select the start time of the reservation.
* **End Time** (`end_time`, time, required): Select the end time of the reservation.
* **Reservation Status** (`reservation_status`, select_one, required): Choose the status of the reservation (active or inactive).
* **Guest Count** (`guest_count`, number, required): Enter the number of guests.
* **Vehicle Type** (`vehicle_type`, select_multiple, required): Select the type of vehicle (if applicable).
* **Site Address** (`site_address`, text, required): Enter the address of the site.
* **Reservation Message** (`reservation_message`, text, required): Enter any additional notes or comments about the reservation.
* **Contact Info** (`contact_info`, text, required): Provide any contact information for the reservation.
