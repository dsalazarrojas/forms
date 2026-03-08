<thinking>...</thinking>

# Post Competition Performance Reservations - Help Guide

## Purpose
This form is used for making post-competition reservations, which are bookings or registrations for performances that have already occurred. The purpose of this form is to record and manage these reservations, typically for future reference or to follow up on past performances.

## How To Complete This Form
To complete this form, follow these steps:

1.  Choose whether the competition is a "Yes" or "No".
2.  Select the event to which this performance belongs.
3.  Choose whether the performance was successful ("Yes" or "No").
4.  Enter the date of the performance.
5.  Enter the time of the performance.
6.  Choose whether the performer was present ("Yes" or "No").
7.  Select the status of the reservation (Active or Inactive).
8.  Optionally, add a note about the reservation.
9.  Enter the email address of the person responsible for the reservation.
10.  Enter the phone number of the person responsible for the reservation.
11.  Select the user assigned to handle the reservation (if applicable).

## Field-by-Field Explanation

* **Competition** (competition_id, select_one, required): Choose whether the competition is a "Yes" or "No". This field indicates whether the competition has taken place.
* **Event** (event_id, select_one, required): Select the event to which this performance belongs.
* **Performance** (performance_id, select_one, required): Choose whether the performance was successful ("Yes" or "No").
* **Date** (date, date, required): Enter the date of the performance.
* **Time** (time, time, required): Enter the time of the performance.
* **Performer** (performer_id, select_one, required): Choose whether the performer was present ("Yes" or "No").
* **Status** (reservation_status, select_one, required): Select the status of the reservation (Active or Inactive).
* **Note** (reservation_note, note, optional): Optionally, add a note about the reservation.
* **Email** (email, email, optional): Enter the email address of the person responsible for the reservation.
* **Phone** (phone, text, optional): Enter the phone number of the person responsible for the reservation.
* **Assign User** (assigned_user, select_one, optional): Select the user assigned to handle the reservation (if applicable).
