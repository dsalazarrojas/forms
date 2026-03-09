# Wedding Planner Form - Help Guide
## Purpose
This form is designed to collect essential information for a wedding event, allowing wedding planners or coordinators to record details such as date, time, location, theme, professionals involved, services required, number of guests, budget, and quote from wedding professionals.

## How To Complete This Form
To complete this form, follow these steps:

1.  Fill in the date of the wedding.
2.  Enter the time of the wedding.
3.  Provide the location where the wedding will take place.
4.  Select the theme of the wedding.
5.  Choose the professionals involved in the wedding, such as Wedding Planner, Wedding Decor, Wedding Cake, and Wedding Dress.
6.  Select the services required for the wedding, such as Wedding Dress, Photography, Music, and Catering.
7.  Enter the number of guests expected.
8.  Enter the budget for the wedding.
9.  Enter the description of the services required.
10.  Enter the quote from the wedding professionals, which is a required field.


## Field-by-Field Explanation

*   *Wedding Date* (`wedding_date`, `date`, required: false): The date of the wedding. Enter the date in the format "YYYY-MM-DD" (e.g., 2024-02-14).
*   *Wedding Time* (`wedding_time`, `time`, required: false): The time of the wedding. Enter the time in the format "HH:MM" (e.g., 14:00).
*   *Wedding Location* (`wedding_location`, `text`, required: false): The location where the wedding will take place. Enter the full address or name of the venue.
*   *Wedding Theme* (`wedding_theme`, `text`, required: false): The theme of the wedding. Enter a brief description of the wedding theme, such as "Garden wedding" or "Beach wedding".
*   *Wedding Professionals* (`wedding_professionals`, `select_multiple`, required: false): The professionals involved in the wedding, such as Wedding Planner, Wedding Decor, Wedding Cake, and Wedding Dress.
*   *Wedding Services* (`wedding_services`, `select_one`, required: false): The services required for the wedding, such as Wedding Dress, Photography, Music, and Catering.
*   *Number of Guests* (`wedding_guests`, `number`, required: false): The expected number of guests.
*   *Wedding Budget* (`wedding_budget`, `number`, required: false): The budget for the wedding.
*   *Wedding Services Description* (`wedding_services_description`, `note`, required: false): A description of the services required for the wedding.
*   *Wedding Professionals Quote* (`wedding_professionals_quote`, `number`, required: true): A quote from the wedding professionals, which is a required field. This field is used to record a quote or estimate from the professionals involved in the wedding.
