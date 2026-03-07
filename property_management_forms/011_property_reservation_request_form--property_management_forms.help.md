<thinking>...</thinking>

Property management systems often rely on clear communication to ensure efficient and effective property management. To minimize misunderstandings and errors, we need to ensure all parties understand the reservation request form's purpose and requirements. This form will prevent duplication by checking if there's a similar reservation request already submitted within the system. The form's purpose is to request a specific property to be reserved within a given time frame by a contact person. If a similar request is submitted, the system will alert the user, and in such cases, the user should re-check the existing request to ensure accuracy before resubmitting.

<dl class="row">
  <dt>## Property Reservation Request Form - Help Guide</dt>
  <dd>This form is designed to request a property reservation for a specific period. Please follow the steps below to fill it out correctly.</dd>
</dl>

## How To Complete This Form
To complete this form, please follow these steps:

1. Choose a property type (Apartment, House, Condo) from the options provided.
2. Select a start and end date for your reservation.
3. Specify the reservation duration in days.
4. Enter the expected guest count.
5. Type a reservation message for any specific requests or details.
6. Enter your contact name.
7. Enter your contact email.
8. Enter your contact phone number.

## Field-by-Field Explanation
### Reservation request (<id: 1>)
* Reservation request (`reservation_request`, date, optional): Enter the date you would like the property to be reserved.

### Property type (<id: 2>)
* Property type (`property_type`, select, required): Choose the type of property you're interested in (Apartment, House, Condo).

### Start date (<id: 3>)
* Start date (`start_date`, date, optional): Enter the start date of your reservation.

### End date (<id: 4>)
* End date (`end_date`, date, optional): Enter the end date of your reservation.

### Reservation duration (<id: 5>)
* Reservation duration (`reservation_duration`, number, optional): Enter the number of days you would like the reservation to be.

### Guest count (<id: 6>)
* Guest count (`guest_count`, number, optional): Enter the number of guests expected.

### Reservation message (<id: 7>)
* Reservation message (`reservation_message`, text, optional): Enter any specific requests or details you have for your reservation.

### Contact name (<id: 8>)
* Contact name (`contact_name`, text, optional): Enter your name.

### Contact email (<id: 9>)
* Contact email (`contact_email`, email, optional): Enter your email address.

### Contact phone (<id: 10>)
* Contact phone (`contact_phone`, text, optional): Enter your phone number.

### Property manager message (<id: 11>)
* Property manager message (`property_manager_message`, text, optional): Enter any additional comments or requests for the property manager.
