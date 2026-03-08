<thinking>
This form is for ordering concessions for events. It is used to collect order details, event information, and delivery preferences. To prevent duplication, this form should only be used when ordering concessions for a new event. 

The form collects the following information:
- Order date
- Event name
- Event date
- Venue location
- Customer details (name and contact information)
- Beverage supplies (number of cases)
- Delivery date and time
- Payment terms
- Estimated order total

The form should not be used for orders that are already placed or have been cancelled. 

Please note that the form is not designed to handle orders for multiple events or orders that need split payment terms. 

</thinking>

# Concession Supply Order Form - Help Guide
## Purpose
This form is used to place a new order for concessions for an event. It collects order information, event details, and delivery preferences. Please ensure that you have not already placed this order before using this form.

## How To Complete This Form
1. Select the event and date for which you are placing the order.
2. Provide the event name, date, and location.
3. Enter the name and contact information for the customer (e.g., name, email, phone number).
4. Specify the number of soft drinks, bottled water, coffee supplies, food supplies, popcorn supplies, hot dog supplies, candy and snacks, serving supplies, napkins, cups, plates, utensils, and any other concessions required.
5. Select the payment terms (e.g., pay on delivery, net 30 days, net 60 days, prepaid).
6. Provide an estimated total cost for the order.
7. Select the delivery date and time you prefer.
8. Enter any special delivery instructions.

## Field-by-Field Explanation
- **Order Date** (`order_date`, true): Date of order placement
- **Order Reference Number** (`order_reference`, false): Internal order ID
- **Event Name** (`event_name`, true): Event requiring concessions
- **Event Date** (`event_date`, true): When concessions are needed
- **Venue Location** (`venue_location`, true): Delivery location
- **Customer Details** (`customer_details`, false): Ordering party information
- **Company Name** (`company_name`, true): Organization name
- **Contact Name** (`contact_name`, true): Primary contact person
- **Contact Email** (`contact_email`, true): Email address
- **Contact Phone** (`contact_phone`, true): Phone number
- **Beverage Supplies** (`beverage_supplies`, false): Drink and beverage items
- **Soft Drinks Quantity** (`soft_drinks`, false): Number of cases
- **Bottled Water Quantity** (`bottled_water`, false): Number of cases
- **Coffee Supplies** (`coffee_supplies`, false): Coffee cups lids stirrers
- **Food Supplies** (`food_supplies`, false): Food service items
- **Popcorn Supplies** (`popcorn_supplies`, false): Bags and kernels
- **Hot Dog Supplies** (`hot_dog_supplies`, false): Buns and sausages
- **Candy and Snacks** (`candy_snacks`, false): Assorted confectionery
- **Serving Supplies** (`serving_supplies`, false): Disposables and serveware
- **Napkins** (`napkins`, false): Number of packs
- **Cups** (`cups`, false): Various sizes
- **Plates** (`plates`, false): Disposable plates
- **Utensils** (`utensils`, false): Forks knives spoons
- **Delivery Details** (`delivery_details`, false): When and where to deliver
- **Preferred Delivery Date** (`delivery_date`, true): When to deliver
- **Preferred Delivery Time** (`delivery_time`, false): Time window
- **Special Delivery Instructions** (`special_instructions`, false): Any specific requirements
- **Payment Terms** (`payment_terms`, true): Billing arrangement
- **Estimated Order Total** (`order_total`, false): Approximate cost
- **Payment Terms** (`payment_terms`, true): Prepaid, Net 30 Days, Net 60 Days, Pay on Delivery
