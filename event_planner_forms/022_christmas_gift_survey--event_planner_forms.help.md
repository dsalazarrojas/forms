# Christmas Gift Survey - Help Guide
## Purpose
The Christmas Gift Survey is a form designed to collect information from respondents about their holiday shopping habits, preferences, and experiences. This form aims to gather data to better understand consumer behavior and inform business decisions related to gift-giving and holiday shopping.

## How To Complete This Form
To complete the form, please follow these steps:

1. Fill in your personal information, including your First Name, Last Name, and Email Address.
2. Select your Age Group.
3. Answer questions about your shopping habits, such as how often you shop for Christmas gifts, your preferred shopping method, and your total Christmas gift budget.
4. Choose the types of gifts you think will be most popular this year.
5. Select all that apply for what influences your gift purchasing decisions and where you get gift ideas.
6. Choose what enhances your shopping experience.
7. Describe your biggest challenge during holiday shopping.

## Field-by-Field Explanation
* **-- Your Information -- (Page 1)**
  * **First Name** (`first_name`, `text`, required): This is your first name.
  * **Last Name** (`last_name`, `text`, required): This is your last name.
  * **Email Address** (`email`, `email`, required): This is your email address.
* **-- Shopping Habits -- (Page 2)**
  * **How often do you shop for Christmas gifts?** (`shopping_frequency`, `select_one`, required): Please select one of the options: Throughout the year, In November, In early December, Last minute (mid-December+).
  * **Preferred Shopping Method** (`shopping_method`, `select_one`, required): Please select one of the options: In-store shopping, Online shopping, Both equally, Phone/catalog order.
  * **Total Christmas Gift Budget** (`gift_budget`, `select_one`, required): Please select one of the options: Under $200, $200-$500, $500-$1,000, $1,000-$2,000, Over $2,000.
* **-- Gift Preferences -- (Page 3)**
  * **What types of gifts do you think will be most popular this year?** (`most_popular_gifts`, `select_multiple`, required): Please select all that apply from: Electronics, Fashion and accessories, Home goods, Experiences, Gift cards, Luxury items, Eco-friendly products, Subscription services.
  * **What gifts would you personally like to receive?** (`personal_gift_preference`, `text`, optional): This is a text field where you can describe the types of gifts you would like to receive.
* **-- Gift Preferences -- (Page 4)**
  * **What is your top priority when choosing gifts?** (`gift_giving_priority`, `select_one`, required): Please select one of the options: Quality, Personalization, Value for money, Uniqueness, Practicality, Brand reputation.
* **-- Shopping Influences -- (Page 5)**
  * **What influences your gift purchasing decisions?** (`decision_factors`, `select_multiple`, required): Please select all that apply from: Social media trends, Ads and marketing, Recommendations from friends, Magazine or blog features, In-store displays, Price promotions, Reviews and ratings.
  * **Where do you get gift ideas?** (`information_sources`, `select_multiple`, optional): Please select all that apply from: Social media, Retail websites, Gift guides, Friends and family, Magazines, Blogs and websites, Pinterest, Other.
* **-- Shopping Experience -- (Page 6)**
  * **What enhances your shopping experience?** (`retail_experience`, `select_multiple`, optional): Please select all that apply from: Free shipping, Easy returns, Personalization services, Fast checkout, Knowledgeable staff, Gift wrapping, Loyalty programs.
* **-- Additional Questions -- (Page 7)**
  * **What is your biggest challenge during holiday shopping?** (`seasonal_challenges`, `text`, optional): This is a text field where you can describe your biggest challenge during holiday shopping.
  * **Additional Comments or Suggestions** (`additional_comments`, `text`, optional): This is a text field where you can provide any additional comments or suggestions.
