# ice_cream_business_survey - Help Guide
## Purpose
This is a survey about your opinions on ice cream. It aims to understand your thoughts about ice cream and gather some contact information for follow-up.

## How To Complete This Form
1. **What do you think about our ice cream?** - This is a text field where you can type your thoughts or feelings about ice cream. You can answer as much or as little as you'd like.
2. **How would you rate** - This is a numerical field where you can provide a rating, but without more context, it's unclear what exactly you're rating. If you're unsure, feel free to describe in the text field above.
3. (Optional) **What is the best flavor of ice cream?** - You can choose one of the available flavors (Vanilla, Chocolate, or Strawberry) that you enjoy the most.
4. **Email** - If you'd like to be contacted for further discussion or for follow-ups, please provide your email address. This information is optional.
5. **Phone** - This field is also optional for you to provide your contact number if you'd like.

## Field-by-Field Explanation
- **What do you think about our ice cream? (Required)** 
  - `text`
  - `id: 1` - A free-text field for expressing your thoughts or feelings about ice cream.
- **How would you rate (Optional)** 
  - `number`
  - `id: 2` - A field for a numerical rating, though the exact context is unclear without more information.
- **What is the best flavor of ice cream? (Required)** 
  - `select_one`
  - `id: 4` - A select-one field asking for your preferred flavor.
- **Email (Optional)** 
  - `email`
  - `id: 5` - A field for entering your email address if you'd like to be contacted.
- **Phone (Optional)** 
  - `text`
  - `id: 6` - Another field for entering your phone number, also optional.

## Tips
- If you're unsure about the rating in question 2, please feel free to describe it in the free-text field above.
- Please provide a valid email address if you want to be contacted about this feedback.
