# Airtime Purchase Survey - Help Guide
## Purpose
The Airtime Purchase Survey is designed to gather information about your demographics, purchase habits, and preferences to help us improve the airtime purchase experience.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill out the User Demographics section with your age group and primary mobile network.
2. In the Airtime Purchase Habits section, select how often you purchase airtime and enter your typical purchase amount.
3. In the Satisfaction and Feedback section, rate your experience with the airtime purchase process and the reliability of service delivery.
4. Answer the questions in the Promotion Awareness and Influence section to help us understand how you're aware of and influenced by promotions.
5. Finally, provide any suggestions for improvement and let us know if you'd like to enter a prize draw.

## Field-by-Field Explanation
### Age Group
**Age Group** (`age_group`, `select_one`, required): Select your age group from the options: Under 18, 18-24, 25-34, 35-44, 45-54, 55+.

### Primary Mobile Network
**Primary Mobile Network** (`primary_network`, `select_one`, required): Choose your primary mobile network from the options: Network A, Network B, Network C, Network D, Other.

### How Often Do You Purchase Airtime?
**How Often Do You Purchase Airtime?** (`purchase_frequency`, `select_one`, required): Select how often you purchase airtime from the options: Daily, Weekly, Bi-Weekly, Monthly, Occasionally.

### Typical Purchase Amount
**Typical Purchase Amount** (`typical_purchase_amount`, `text`, required): Enter the typical amount you purchase airtime for.

### Preferred Purchase Channel
**Preferred Purchase Channel** (`preferred_purchase_channel`, `select_one`, required): Choose your preferred purchase channel from the options: Mobile App, USSD Code, Online Website, Physical Retail Store, ATM, Scratch Card.

### What Influences Your Choice of Purchase Channel?
**What Influences Your Choice of Purchase Channel?** (`factor_influencing_purchase`, `select_multiple`, required): Select all that apply from the options: Convenience, Speed, Bonus/Promotions, Ease of Use, Safety/Security.

### Ease of Airtime Purchase Process
**Ease of Airtime Purchase Process** (`purchase_ease_rating`, `number`, required): Rate your experience with the airtime purchase process from 1 (Difficult) to 5 (Very Easy).

### Reliability of Service Delivery
**Reliability of Service Delivery (Receipt of Airtime)** (`service_reliability`, `number`, required): Rate the reliability of service delivery from 1 (Unreliable) to 5 (Very Reliable).

### Are You Aware of Current Airtime Promotions?
**Are You Aware of Current Airtime Promotions?** (`promotion_awareness`, `select_one`, required): Choose from the options: True, False.

### How Do Promotions Influence Your Purchase?
**How Do Promotions Influence Your Purchase?** (`promotion_influence`, `select_one`, required): Choose how strongly promotions influence you from the options: Strongly Influence, Somewhat Influence, No Influence.

### How Can We Improve the Airtime Purchase Experience?
**How Can We Improve the Airtime Purchase Experience?** (`improvement_suggestion`, `text`, optional): Provide any suggestions you have for improving the airtime purchase experience.

### Would You Like to Enter a Prize Draw for Completing This Survey?
**Would You Like to Enter a Prize Draw for Completing This Survey?** (`contact_for_prizes`, `select_one`, required): Choose from the options: True, False.

### Email for Prize Entry (if Yes)
**Email for Prize Entry (if Yes)** (`user_email`, `email`, optional): Enter your email address if you'd like to enter a prize draw.
