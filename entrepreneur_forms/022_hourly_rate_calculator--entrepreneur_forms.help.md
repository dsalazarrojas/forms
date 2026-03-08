# hourly_rate_calculator - Help Guide
## Purpose
This form is used to collect data related to user's hourly rates for various categories or organizations.

## How To Complete This Form
- To complete this form, start by filling out the form title and selecting the category that best describes your work or organization.
- Next, enter a short description of your services.
- Select the interval at which you want your rate to be applied (e.g., Month, Quarterly, etc.).
- Enter the number of hours you work per week.
- Enter the rate you charge per hour.
- Select the currency for your weekly rate.
- Choose how you want your weekly rate to be rounded (e.g., Up, Down, Nearest).
- Enter any additional notes about your hourly rate.

## Field-by-Field Explanation
- **Form Title** (`form_title`, `text`, required/optional): Enter a title for this form entry.
- **Category** (`category`, `select_one`, required/optional): Select the category that best describes your work or organization. This field is required.
- **Description** (`description`, `text`, optional): Enter a short description of your services.
- **Hourly Rate** (`hourly_rate`, `number`, optional): Enter the rate you charge per hour.
- **Rate Interval** (`rate_interval`, `select_one`, optional): Select the interval at which you want your rate to be applied (e.g., Month, Quarterly, etc.).
- **Weekly Hours** (`weekly_hours`, `number`, required): Enter the number of hours you work per week.
- **Weekly Rate** (`weekly_rate`, `number`, required): Enter the rate you charge per week.
- **Weekly Rate Currency** (`weekly_rate_currency`, `select_one`, optional): Select the currency for your weekly rate.
- **Weekly Rate Rounding** (`weekly_rate_rounding`, `select_one`, required): Select how you want your weekly rate to be rounded (e.g., Up, Down, Nearest).
- **Notes** (`hourly_rate_notes`, `note`, optional): Enter any additional notes about your hourly rate.
- **Description** (`form_description`, `text`, optional): This field is not used in this form and can be ignored.
- **Other** (`category_other`, `text`, optional): Enter any other category that is not listed in the category dropdown.
- **Non-profit Org** (`category_non_profit_org`, `text`, optional): Enter if you are a non-profit organization.
