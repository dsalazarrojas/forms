<thinking>
This form is designed to allow users to provide information about their hourly rates and related settings. The form is likely used in a business or financial context, where users need to specify their rates and settings for hourly work. The fields provided are likely for users who need to set rates for various categories or organizations. This form is probably used for internal management or accounting purposes.

The form should not be duplicated or filled out multiple times with varying information. 

The purpose of this form is to collect data related to user's hourly rates. The form has sections for form title, category, description, hourly rate, rate interval, weekly hours, weekly rate, weekly rate currency, and other fields that provide options for rate rounding and additional notes.

Please note that the form requires the user to specify their category (e.g., Educators, Freelancers, etc.) which is a mandatory field. The user can also select the interval and currency for their weekly rate. The form allows for users to enter a description of their services and notes about their hourly rate.
</thinking>

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
