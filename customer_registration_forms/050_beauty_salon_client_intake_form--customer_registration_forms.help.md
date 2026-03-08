# Beauty Salon Client Intake Form - Help Guide
## Purpose
This form is designed to gather essential personal and hair information from clients before their visit to our beauty salon. It will help us better understand your needs and preferences, ensuring a more personalized experience during your visit.

## How To Complete This Form

1. Please provide your personal details, including your first name, last name, date of birth, email address, and phone number.
2. Select the correct hair type, texture, and natural color.
3. Choose how you would prefer to be styled and your commitment level for maintenance visits.
4. Indicate your availability for styling time and any scalp or chemical sensitivities.
5. Provide any medical conditions or allergies that may impact your styling experience.
6. Describe your lifestyle and any relevant details about your daily routine.
7. Confirm your consent to our privacy and data handling terms.
8. Review and confirm that all provided information is accurate.

## Field-by-Field Explanation

### **Personal Information**

* **First Name** (`first_name`, `text`, **Required**): Enter your first name as it appears on your identification documents.
* **Last Name** (`last_name`, `text`, **Required**): Enter your last name as it appears on your identification documents.
* **Date of Birth** (`date_of_birth`, `date`, **Required**): Enter your date of birth in the format `mm/dd/yyyy`.
* **Email Address** (`email`, `email`, **Required**): Enter your email address where we can contact you.
* **Phone Number** (`phone`, `text`, **Required**): Enter your phone number where we can contact you.

### **Referral Information**

* **How Did You Hear About Us** (`referral_source`, `select_one`, **Required**): Select how you found out about our salon, e.g. Friend or Family, Internet Search, Social Media, etc.
* **Who Referred You (if applicable)** (`referred_by`, `text`, **Optional**): If someone referred you, enter their name.

### **Hair Information**

* **Hair Type** (`hair_type`, `select_one`, **Required**): Select the type of your hair, e.g. Straight, Wavy, Curly, Coily, or Textured.
* **Hair Texture** (`hair_texture`, `select_one`, **Required**): Select the texture of your hair, e.g. Fine, Medium, Thick, or Very Thick.
* **Hair Condition** (`hair_condition`, `select_one`, **Required**): Select the condition of your hair, e.g. Damaged, Weak, Fair, Good, or Excellent.
* **Natural Hair Color** (`hair_color_natural`, `text`, **Required**): Enter your natural hair color.
* **Current Hair Color** (`hair_color_current`, `text`, **Required**): Enter your current hair color.
* **Previous Color Treatments** (`color_treatments`, `select_one`, **Optional**): Select if you have previously had any color treatments.
* **Scalp Condition** (`scalp_condition`, `select_one`, **Required**): Select the condition of your scalp, e.g. Sensitive, Normal, Oily, Dry, or Combination.
* **Scalp Issues** (`scalp_issues`, `text`, **Optional**): Describe any scalp issues, e.g. dandruff, psoriasis, irritation, etc.

### **Consent and Agreement**

* **I Agree to Privacy and Data Handling Terms** (`privacy_agree`, `select_one`, **Required**): Confirm that you agree to our privacy and data handling terms.
* **All Information Provided Is Accurate** (`information_accurate`, `select_one`, **Required**): Confirm that all provided information is accurate.

### **Lifestyle and Preferences**

* **Style Preferences** (`style_preferences`, `text`, **Required**): Describe your style preferences.
* **Maintenance Commitment Level** (`maintenance_commitment`, `select_one`, **Required**): Select your commitment level for regular maintenance visits.
* **Lifestyle Description** (`lifestyle_description`, `text`, **Optional**): Describe your lifestyle and daily routine.
* **Time Available for Styling** (`styling_time_available`, `select_one`, **Required**): Select the amount of time you have available for styling, e.g. Minimal, Quick, Moderate, or Flexible.

### **Additional Information**

* **Is This Your First Visit?** (`first_visit`, `select_one`, **Required**): Confirm if this is your first visit.
* **Previous Salon Experience** (`previous_salon`, `text`, **Optional**): Describe any previous salon experience.
* **Product Allergies or Sensitivities** (`product_allergies`, `text`, **Optional**): Describe any product allergies or sensitivities.
* **Chemical Sensitivities** (`chemical_sensitivities`, `text`, **Optional**): Describe any chemical sensitivities, e.g. dyes, perms, relaxers, etc.
