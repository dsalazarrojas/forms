# Fitness Gym Registration Form - Help Guide
## Purpose
This form is for users to register at a fitness gym.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in your User Information (page 1).
2. Select your preferred Membership Plan (page 2).
3. Choose your Payment Method (page 3).
4. Enter your Email Address (page 4).
5. Enter your Phone Number (page 5).
6. Enter your Birthdate (page 6).
7. Select your Preferred Time for Workouts (page 7).
8. Enter any additional Notes (page 8).

## Field-by-Field Explanation

### 1. User Information (Page 1)
**User Information** (`user_info`, text, required: false)
This is the page where you will enter your personal details such as your name and other identifying information.

### 2. Membership Plan (Page 2)
**Membership Plan** (`membership_plan`, select_multiple, required: false)
Select the frequency of your membership plan, such as Monthly, Quarterly, or Yearly.

### 3. Payment Method (Page 3)
**Payment Method** (`payment_method`, select_one, required: false)
Choose how you would like to pay for your membership, such as Card number, Bank transfer, or PayPal.

### 4. Email (Page 4)
**Email** (`email`, email, required: false)
Enter your valid email address.

### 5. Phone (Page 5)
**Phone** (`phone`, text, required: false)
Enter your phone number.

### 6. Birthdate (Page 6)
**Birthdate** (`birthdate`, date, required: false)
Enter your birthdate in the correct format (YYYY-MM-DD).

### 7. Preferred Time (Page 7)
**Preferred Time** (`time_preferred`, time, required: false)
Select your preferred time for workouts.

### 8. Note (Page 8)
**Note** (`note`, note, required: false)
Enter any additional notes about your membership.
