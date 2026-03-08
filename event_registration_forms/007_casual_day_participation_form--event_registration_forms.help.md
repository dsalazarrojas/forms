# Casual Day Participation Form - Help Guide
## Purpose
This form is used to register and participate in Casual Days, a themed event that supports local charities and promotes team bonding.

## How To Complete This Form
To complete the form, follow these steps:
- Fill in the required fields (marked as "required" in the form).
- Select the preferred theme for future Casual Days.
- Choose a donation amount and payment method.
- Decide on lunch participation and select dietary requirements (if attending lunch).
- Confirm that you acknowledge the workplace safety and dress code guidelines.

## Field-by-Field Explanation
* **-- Casual Day Event Registration --** (`event_header`, `note`, required: `false`): This is a welcome note for the event.
* **Employee Name** (`full_name`, `text`, required: `true`): Enter your full name as it appears on your ID badge.
* **Employee ID** (`employee_id`, `text`, required: `true`): Enter your employee ID number.
* **Department** (`department`, `text`, required: `true`): Select your department name.
* **Email Address** (`contact_email`, `email`, required: `true`): Enter your work email address for confirmation and reminders.
* **Date of Casual Day** (`participation_date`, `date`, required: `true`): Select the Friday you plan to participate in the Casual Day event.
* **Preferred Theme for Future Casual Days** (`theme_selection`, `select_one`, required: `true`): Choose a theme for future Casual Days from the options: Tropical/Hawaiian, 80s/90s Retro, Favorite Sports Team, Superhero/Sci-Fi, Pajama Day, or Color Day.
* **-- Participation and Donation --** (`section_donations`, `note`, required: `false`): This section explains that many Casual Days support local charities and encourages participation and donation.
* **Recommended Donation Amount** (`donation_amount`, `select_one`, required: `true`): Choose a donation amount from the options: $2 - Standard, $5 - Supporter, $10 - Champion, or Other Amount.
* **How will you be paying** (`payment_method`, `select_one`, required: `true`): Select how you will be paying for the Casual Day event: Cash to HR on the day, Payroll Deduction, or Online Portal Payment.
* **Will you be joining for the community lunch** (`lunch_inclusion`, `select_one`, required: `true`): Choose Yes or No to indicate if you plan to join the community lunch.
* **Dietary Requirements** (`dietary_requirements`, `select_multiple`, required: `false`): If joining lunch, select your dietary requirements: Vegetarian, Vegan, Gluten Free, Dairy Free, Nut Allergy, or Halal.
* **I acknowledge the workplace safety and dress code guidelines** (`guidelines_acknowledgment`, `select_one`, required: `true`): Confirm that you acknowledge and agree to the workplace safety and dress code guidelines, even on Casual Days.
