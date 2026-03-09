# Air Travel Compensation Survey - Help Guide
## Purpose
The purpose of this survey is to gather feedback from passengers about their travel experiences with the airline, with a focus on how the airline handled disruptions and their overall satisfaction with the service.

## How To Complete This Form
To complete this form, simply fill out each section as it becomes available, and follow these steps:

* Please fill out the flight information section (fields 3-5) with your travel details.
* Choose the type of disruption you experienced from the options provided (field 7).
* If applicable, report the duration of the delay (field 8).
* Describe the compensation you received from the airline (field 9).
* Choose how you feel about the airline's handling of your issue (fields 11-12).
* Lastly, let us know if you would fly with us again and provide any additional comments you may have (fields 13-14).

## Field-by-Field Explanation

* **Passenger Name** (`passenger_name`, text, optional): Please enter your name as you would like it to be displayed in our records.
* **Airline** (`airline`, text, required): Enter the name of the airline you traveled with.
* **Flight Number** (`flight_number`, text, required): Enter the flight number as displayed on your ticket or boarding pass.
* **Date of Travel** (`travel_date`, date, required): Enter the date of your travel in the format YYYY-MM-DD.
* **-- Disruption Details --** (`disruption_details_header`, note, optional): This is a placeholder section for any additional information you may want to share about your experience.
* **Type of Disruption** (`disruption_type`, select_one, required): Choose the type of disruption you experienced from the options provided.
* **Delay Duration (Hours)** (`delay_duration`, number, optional): If applicable, report the duration of the delay.
* **Compensation Offered** (`compensation_offered`, select_multiple, required): Choose all the types of compensation you received from the airline.
* **-- Experience Rating --** (`satisfaction_header`, note, optional): This is a placeholder section for any additional comments.
* **Satisfaction with Handling** (`handling_satisfaction`, select_one, required): Choose how you feel about the handling of your issue from the options provided.
* **Ease of Claim Process** (`claim_ease`, select_one, required): Choose how easy it was to claim your compensation.
* **Would you fly with us again?** (`fly_again`, select_one, required): Let us know if you would fly with us again.
* **Additional Comments** (`comments`, text, optional): Share any additional comments about your experience.
