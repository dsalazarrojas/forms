# Budget Friendly Clothing Subscription Signup - Help Guide
## Purpose
The "Budget Friendly Clothing Subscription Signup" form is designed to help you provide your preferences for a clothing subscription service that offers affordable fashion options.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your personal details, including your full name, email address, phone number, date of birth, and gender.
2. Choose your preferred style and sizes from the options provided.
3. Select your preferred colors and clothing types.
4. Set your monthly budget and subscription frequency.
5. Enter your delivery address and zip code.
6. Choose your preferred payment method.
7. Review your selections and submit the form.

## Field-by-Field Explanation
### 1. **Full Name** (subscriber_name)
Full name is the name you'd like to be known by in our clothing subscription service.

* Type: `text`
* Required: `true`

### 2. **Email Address** (subscriber_email)
Please enter your valid email address to create an account with us.

* Type: `email`
* Required: `true`

### 3. **Phone Number** (subscriber_phone)
Your phone number will be used to contact you for any subscription updates.

* Type: `text`
* Required: `true`

### 4. **Date of Birth** (date_of_birth)
Enter your date of birth for age-related sizing recommendations.

* Type: `date`
* Required: `true`

### 5. **Gender** (gender)
Select your gender for better fit recommendations.

* Type: `select_one`
* Required: `true`
* Options: 
    + Male
    + Female
    + Non-binary
    + Prefer not to say

### 6. **Primary Size** (size)
Choose your usual clothing size for more accurate fit recommendations.

* Type: `select_one`
* Required: `true`
* Options: 
    + XS
    + S
    + M
    + L
    + XL
    + XXL

### 7. **Style Preferences** (style_preferences)
Select all the styles that appeal to you.

* Type: `select_multiple`
* Required: `true`
* Options: 
    + Casual
    + Formal
    + Athletic
    + Bohemian
    + Minimalist
    + Vintage
    + Trendy
    + Professional

### 8. **Preferred Colors** (color_preferences)
Choose all the colors you like.

* Type: `select_multiple`
* Required: `false`
* Options: 
    + Black
    + White
    + Blue
    + Red
    + Neutral Tones
    + Bright Colors
    + Pastels

### 9. **Monthly Budget** (budget_per_month)
Set your monthly budget to help us recommend within your price range.

* Type: `number`
* Required: `true`

### 10. **Delivery Frequency** (subscription_frequency)
Select how often you'd like to receive clothing shipments.

* Type: `select_one`
* Required: `true`
* Options: 
    + Monthly
    + Every 2 Months
    + Quarterly
    + As-Needed

### 11. **Types of Clothing Interested In** (clothing_types)
Select all the types of clothing you're interested in.

* Type: `select_multiple`
* Required: `true`
* Options: 
    + Tops
    + Bottoms
    + Dresses
    + Outerwear
    + Activewear
    + Accessories
    + Shoes

### 12. **Sustainable or Eco-Friendly Options** (sustainable_preference)
If you prefer eco-friendly options, select this.

* Type: `select_one`
* Required: `false`
* Options: 
    + Yes, prefer sustainable
    + Open to both
    + Neutral

### 13. **Fit Preferences** (fit_preferences)
Enter any fit preferences you have.

* Type: `text`
* Required: `false`

### 14. **Delivery Address** (delivery_address)
Enter your street address where you'd like to receive clothing.

* Type: `text`
* Required: `true`

### 15. **City** (delivery_city)
Enter the city where you'd like to receive clothing.

* Type: `text`
* Required: `true`

### 16. **Zip Code** (delivery_zip)
Enter your zip code for accurate delivery.

* Type: `text`
* Required: `true`

### 17. **Monthly Subscription Fee** (subscription_fee)
Set your monthly subscription fee.

* Type: `number`
* Required: `true`

### 18. **Payment Method** (payment_method)
Choose your preferred payment method.

* Type: `select_one`
* Required: `true`
* Options: 
    + Credit Card
    + Debit Card
    + PayPal
    + Bank Transfer
