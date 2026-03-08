<thinking>
We need to ensure that the "Nonprofit Donation Form" is a single-purpose form, focused on accepting one-time or recurring donations from individuals or organizations to support specific campaigns. This form must not be duplicated in other sections or forms, or used for other purposes such as membership applications. Its primary goal is to facilitate straightforward and efficient donation processes for the nonprofit. We need to guarantee that all fields are clear, concise, and well-communicated in the form to avoid user confusion and errors. 

The form should be easily navigable for users with disabilities, and the fields should be self-explanatory. The form should not be used for any other purpose other than donations. We will need to test the form for usability and accessibility.
</thinking>

# Nonprofit Donation Form - Help Guide
## Purpose
The Nonprofit Donation Form is designed to facilitate donations to support specific campaigns. You can use this form to make one-time or recurring donations to the campaigns that interest you.

## How To Complete This Form
To complete this form, follow these steps:

1.  Determine the donation amount and choose the frequency of your donation (one-time, monthly, or annually).
2.  Select the campaign you want to support from the options provided.
3.  Decide on the relationship between your donation amount and frequency.
4.  If you have a specific purpose for your gift, you can provide a brief description.
5.  Fill out the form with your donation details.

## Field-by-Field Explanation
* **Donation Amount** (`donation_amount`, number, not required): Enter the amount you want to donate.
* **Frequency of Donation** (`frequency`, select, required): Choose between one-time, monthly, and annually to determine how often you want to donate.
* **Which Campaign?** (`campaign`, select_multiple, required): Select the campaign you want to support from the options provided.
* **Amount and Frequency Relationship** (`amount_frequency_relationship`, select, required): Choose between one-time donations and recurring donations.
* **Gift Frequency** (`gift_frequency`, select_multiple, not required): If you selected recurring donations, choose how often you want to gift. (Optional)
* **Gift Purpose** (`gift_purpose`, text, not required): Provide a brief description of your donation's purpose, if desired.
* **Gift Frequency Description** (`gift_frequency_description`, text, not required): If you want to provide more information about your gift frequency, you can do so in this field. (Optional)
