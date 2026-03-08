<thinking>
This form is designed for users to place an order for a graphic tee, a type of T-shirt with a graphic design. The form allows users to upload a graphic tee image, select the color and size of the tee, specify the quantity, and choose a payment method. The form is divided into several sections, each with its own field and options. The fields are designed to collect essential information for processing the order.
</thinking>

# graphic_tee_order_form - Help Guide
## Purpose
The graphic tee order form is used to upload a graphic tee image, select the color and size of the tee, specify the quantity, and choose a payment method.

## How To Complete This Form
To complete this form, follow these steps:
1. Upload a graphic tee image.
2. Select the color of the tee.
3. Select the size of the tee.
4. Specify the quantity of t-shirts you would like to order.
5. Choose a payment method.

## Field-by-Field Explanation
* **Graphic Tee Image** (`graphic_tee_image`, text, optional): Upload a graphic tee image.
* **Color** (`color`, select_one, required): Choose the color of the graphic tee. Options are:
	+ Yes
	+ No
* **Size** (`size`, select_multiple, required): Choose the size of the graphic tee. Options are:
	+ Yes
	+ No
* **Quantity** (`quantity`, number, required): Specify the quantity of graphic tees you would like to order.
* **Price** (`price`, number, optional): Enter the price of the graphic tee (not required, but will be used to calculate the total).
* **Total** (`total`, number, optional): This field will display the total cost of the order, calculated automatically.
* **Payment Method** (`payment_method`, select_one, required): Choose how you would like to pay for your order. Options are:
	+ Credit Card
	+ PayPal
	+ Cash
	+ Other
* **Note** (`note`, text, optional): Enter any additional notes or comments about your order.
