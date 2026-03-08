# Catering Order Form - Help Guide
## Purpose
The Catering Order Form is used to collect information for catering orders from clients. This includes client contact details, event specifics, and order requirements for food and services.

## How To Complete This Form
1. Fill out the required fields with accurate information.
2. Select the correct options for event type, delivery method, menu package, main course, and payment method.
3. Choose additional services as needed (e.g., appetizers, desserts, beverages).
4. Include any special requests or dietary requirements.
5. Provide the order date and additional comments if necessary.
6. Review the form for accuracy and completeness before submission.

## Field-by-Field Explanation
- **Customer Name** (`customer_name`, text, required): Enter your full name.
- **Email Address** (`email`, email, required): Enter your email address.
- **Phone Number** (`phone`, text, required): Enter your contact phone number.
- **Company Name** (`company_name`, text, optional): Enter your company name if applicable.
- **Event Name** (`event_name`, text, required): Enter the name of your event.
- **Event Type** (`event_type`, select_one, required): Select the type of event (e.g., Wedding, Corporate Event).
- **Event Date** (`event_date`, date, required): Enter the date of your event.
- **Event Time** (`event_time`, time, required): Enter the start time of your event.
- **Guest Count** (`guest_count`, number, required): Enter the expected guest count.
- **Venue Name** (`venue_name`, text, required): Enter the complete venue address.
- **Venue Address** (`venue_address`, text, required): Enter the complete venue address.
- **Delivery Method** (`delivery_method`, select_one, required): Choose how you want to receive your order (e.g., Delivery with Setup, Pickup).
- **Menu Package** (`menu_package`, select_one, required): Select the menu package you want.
- **Main Course Selection** (`main_course`, select_one, required): Choose your main course (e.g., Chicken, Fish).
- **Appetizers** (`appetizers`, select_multiple, optional): Select appetizers as needed.
- **Desserts** (`desserts`, select_multiple, optional): Select desserts as needed.
- **Beverages** (`beverages`, select_multiple, optional): Select beverages as needed.
- **Dietary Requirements** (`dietary_requirements`, text, optional): Enter any dietary restrictions.
- **Special Requests** (`special_requests`, text, optional): Enter any special requests.
- **Rental Items Needed** (`rental_items`, text, optional): List any rental items required.
- **Order Total** (`order_total`, number, optional): Enter the total order cost.
- **Deposit Required** (`deposit_required`, number, optional): Enter the deposit amount.
- **Payment Method** (`payment_method`, select_one, required): Choose your payment method (e.g., Credit Card, Check).
- **Order Date** (`order_date`, date, required): Enter the date of this order.
- **Additional Comments** (`additional_comments`, text, optional): Enter any other information.

This guide should help users complete the form accurately and ensure that all required fields are filled out, avoiding submission errors.
