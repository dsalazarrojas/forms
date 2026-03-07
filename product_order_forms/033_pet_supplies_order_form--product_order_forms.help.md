<thinking>
This form is meant to gather information from users about their pets and the supplies they need to order. The form is likely used in a pet store or veterinary clinic setting.
The form should not be filled out by users with no pets or who do not have a clear understanding of the supplies they are ordering for.
The form is likely used in conjunction with other forms or tools that manage pet and supply data.
</thinking>

# pet_supplies_order_form - Help Guide
## Purpose
This form is used to gather information about a user's pet and the supplies they need to order. It is designed to be completed by pet owners to provide accurate and efficient ordering information.

## How To Complete This Form
1. Select your pet type from the options provided. If you have a different type of pet, select "other" and fill in the corresponding information in the Supply Name field.
2. Enter your pet's name in the text field.
3. Select whether you need supplies for your pet by choosing "Yes" or "No" in the Supply Type field.
4. If you do not need supplies, but need to provide a special name for your pet's supply, fill in the Supply Name field.
5. Enter the quantity of supplies you need.
6. Review your selections to ensure they are accurate and complete.

## Field-by-Field Explanation
* **Pet Type** (`pet_type`, select_multiple, required): Select the type of pet you have (dog, cat, or other).
* **Pet Name** (`pet_name`, text, required): Enter the name of your pet.
* **Supply Type** (`supply_type`, select_one, required): Select whether you need supplies for your pet ("Yes" or "No").
* **Supply Name** (`supply_name`, text, optional): If you don't need standard supplies but need to order something else, fill in the corresponding name.
* **Quantity** (`quantity`, number, required): Enter the number of supplies you need.

## Tips
* Make sure to select the correct pet type and name to ensure accurate ordering information.
* If you select "other" as the pet type, fill in the Supply Name field with the corresponding information.
* Double-check your selections before submitting the form to ensure accuracy and efficiency.
