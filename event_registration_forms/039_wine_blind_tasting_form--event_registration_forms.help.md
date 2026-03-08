<thinking>
The form is intended to collect event registration data for a wine blind tasting event. This form is part of a larger event registration system, and the collected data will be used to track event details and participant information. To prevent duplication, ensure that each form submission is unique and corresponds to a specific event and participant. The form is designed to be used by event organizers and participants alike.
</thinking>

# Wine Blind Tasting Form - Help Guide
## Purpose
This form is used to register for a wine blind tasting event. It collects information about the event type, wine details, and participant contact information.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the type of event you are registering for.
2. Enter the name of the wine you are registering.
3. Specify the year of the wine.
4. Choose whether the wine is from the correct region (if applicable).
5. Select the date and time of the event you are registering for.
6. Enter any additional notes or comments about the event or wine.
7. Enter your email address (required).
8. (Optional) Enter your phone number.
9. Choose whether you are an assigned user (if applicable).

## Field-by-Field Explanation

* **Event Type** (`event_type`, select_multiple, required/optional): Select the type of event you are registering for. This field is optional but recommended for internal tracking.
* **wine_name** (`wine_name`, text, required): Enter the name of the wine you are registering.
* **wine_varietal** (`wine_varietal`, select_one, required): Specify whether the wine is from the correct region or not.
* **wine_year** (`wine_year`, number, required): Enter the year of the wine.
* **wine_region** (`wine_region`, select_multiple, optional): Choose whether the wine is from the correct region (if applicable).
* **event_date** (`event_date`, date, optional): Select the date of the event you are registering for.
* **time** (`time`, time, optional): Choose the time of the event you are registering for.
* **note** (`note`, note, optional): Enter any additional notes or comments about the event or wine.
* **email** (`email`, email, required): Enter your email address, which will be used for communication and event updates.
* **phone** (`phone`, text, optional): Enter your phone number for further contact (if applicable).
* **assigned_user** (`assigned_user`, select_one, required): Choose whether you are an assigned user or not.

## Tips
* Please ensure that your email address is up-to-date and accurate.
* If you are registering for an event, try to provide as much information as possible about the wine to help event organizers prepare for the event.
