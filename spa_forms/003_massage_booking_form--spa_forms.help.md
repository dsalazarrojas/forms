<thinking> 
This form is designed for clients to book massages with various therapists in different categories and durations. 
</thinking>

# Massage Booking Form - Help Guide
## Purpose
This form is intended for clients to book massages with our spa. Please provide the required information to schedule a massage appointment.

## How To Complete This Form
1. Select the category that best describes the type of massage you are interested in.
2. Enter your name and email address so we can contact you about your appointment.
3. Provide your phone number so we can reach you back to confirm your appointment.
4. Choose a date and time that works for you.
5. Select the time duration of your massage.
6. Choose the therapist that you would like to work with.
7. Select the type of massage you would like to receive.
8. Confirm the price of your appointment.
9. Enter the total price for your appointment.

## Field-by-Field Explanation
* **Category** (`Category`, select_one, required): Select the category that best describes the type of massage you are interested in. You can choose from Spa, Other, Health, Wellness, or Fitness.
* **Client Name** (`client_name`, text, required): Enter your name as it appears on your ID.
* **Client Email** (`email`, email, required): Enter your email address in the format `name@domain.com`.
* **Client Phone** (`phone`, text, required): Enter your phone number so we can reach you back to confirm your appointment.
* **Schedule** (`schedule`, date, required): Choose a date for your appointment.
* **Time** (`time`, time, required): Enter the time in 24-hour format, e.g., 14:30.
* **Therapist** (`therapist`, select_multiple, required): Choose the therapist that you would like to work with. You can select multiple therapists.
* **Massage Type** (`massage_type`, select_multiple, required): Choose the type of massage you would like to receive. You can select multiple types.
* **Massage Duration** (`massage_duration`, time, required): Enter the duration of your massage in the format HH:MM.
* **Price** (`price`, number, required): Confirm the price of your appointment.
* **Total Price** (`total_price`, number, required): Enter the total price of your appointment. 

Note: Please ensure that the total price is equal to the price of the massage multiplied by the duration of the massage. 
</thinking>
