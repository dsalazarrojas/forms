The purpose of this form is to gather information about client reservations and confirm their travel arrangements. It appears to be used in an internal setting, likely within a travel agency or travel management system. The form's fields suggest that it's meant to capture details about client travel reservations, including reservation IDs, client names, travel dates, travel types, agents responsible for the travel, client contacts, and confirmation statuses.

To avoid duplication, ensure that this form is only used when a new travel reservation needs to be confirmed or updated. If you're unsure about how to use this form, review the provided YAML field descriptions and follow the steps outlined below.

# Travel Confirmation Form - Help Guide

## Purpose
The Travel Confirmation Form is used to gather information about client reservations and confirm their travel arrangements.

## How To Complete This Form

1.  **Enter the Reservation ID**: Enter the unique identifier associated with the travel reservation.
2.  **Enter the Client Name**: Enter the name of the client associated with the reservation.
3.  **Enter the Travel Date**: Enter the date of the client's travel in "mm/dd/yyyy" format (e.g., 05/22/2023).
4.  **Select the Travel Type**: Choose the type of travel arrangement, such as Flight, Hotel, or Car Rental.
5.  **Enter the Travel Agent**: Enter the name of the travel agent responsible for the reservation.
6.  **Enter the Client Contact**: Enter the contact information for the client, such as their phone number or email.
7.  **Add Additional Comments**: If necessary, enter any additional comments or notes about the reservation.
8.  **Confirm the Status**: Choose the confirmation status of the reservation from the options: Pending, Confirmed, or Declined.

## Field-by-Field Explanation

*   **Reservation ID** (`reservation_id`, `number`, required): Enter the unique identifier associated with the travel reservation.
*   **Client Name** (`client_name`, `text`, required): Enter the name of the client associated with the reservation.
*   **Travel Date** (`travel_date`, `date`, required): Enter the date of the client's travel in "mm/dd/yyyy" format.
*   **Travel Type** (`travel_type`, `select_multiple`, required): Choose the type of travel arrangement, such as Flight, Hotel, or Car Rental.
*   **Travel Agent** (`travel_agent`, `text`, required): Enter the name of the travel agent responsible for the reservation.
*   **Client Contact** (`client_contact`, `text`, required): Enter the contact information for the client, such as their phone number or email.
*   **Additional Comments** (`additional_comments`, `note`, required): If necessary, enter any additional comments or notes about the reservation.
*   **Confirmation Status** (`confirmation_status`, `select_one`, required): Choose the confirmation status of the reservation from the options: Pending, Confirmed, or Declined.

## Tips
*   Always ensure that you have the necessary permissions or access rights to access and update travel reservations.
*   Double-check the information entered in each field to avoid errors or inaccuracies.
*   Use this form for new travel reservations only; do not reuse or duplicate the form.
*   Refer to the internal travel management system guidelines for more detailed procedures and requirements.
