
const info = {
	lang: 'en',
	locale: 'US',
	is_default: true
}

const data = {
  "general": {
	 "accessibility": {
		"skip_to_content": "Skip to content"
	 },
	 "meta": {
		"tags": "Tagged \"{{ tags }}\"",
		"page": "Page {{ page }}"
	 },
	 "404": {
		"title": "404 Page Not Found",
		"subtext_html": "The page you requested does not exist. Click <a href=\"/collections/all\">here</a> to continue shopping."
	 },
	 "password_page": {
		"opening_soon": "Opening Soon",
		"spread_the_word": "Spread the word",
		"login_form_heading": "Enter store using password",
		"login_form_password_label": "Password",
		"login_form_password_placeholder": "Your password",
		"login_form_submit": "Enter",
		"signup_form_heading": "Find out when we open",
		"signup_form_email_label": "Email",
		"signup_form_email_placeholder": "Your email",
		"signup_form_submit": "Submit",
		"signup_form_success": "We will send you an email right before we open!",
		"admin_link_html": "Are you the store owner? <a href=\"/admin\">Log in here</a>",
		"password_link": "Enter using password",
		"powered_by_shopify_html": "This shop will be powered by {{ shopify }}"
	 },
	 "social": {
		"share_on_facebook": "Share",
		"share_on_twitter": "Tweet",
		"share_on_pinterest": "Pin it",
		"alt_text": {
		  "share_on_facebook": "Share on Facebook",
		  "share_on_twitter": "Tweet on Twitter",
		  "share_on_pinterest": "Pin on Pinterest"
		}
	 },
	 "search": {
		"no_results_html": "Your search for \"{{ terms }}\" did not yield any results.",
		"results_for_html": "Your search for \"{{ terms }}\" revealed the following:",
		"title": "Search for products on our site",
		"placeholder": "Search our store",
		"submit": "Search"
	 }
  },
  "blogs": {
	 "article": {
		"author_on_date_html": "Posted by {{ author }} on {{ date }}",
		"comment_meta_html": "{{ author }} on {{ date }}",
		"read_more": "Read more"
	 },
	 "comments": {
		"title": "Leave a comment",
		"name": "Name",
		"email": "Email",
		"message": "Message",
		"post": "Post comment",
		"moderated": "Please note, comments must be approved before they are published",
		"success_moderated": "Your comment was posted successfully. We will publish it in a little while, as our blog is moderated.",
		"success": "Your comment was posted successfully! Thank you!",
		"with_count": {
		  "one": "{{ count }} comment",
		  "other": "{{ count }} comments"
		}
	 },
	 "general": {
		"categories": "Categories"
	 }
  },
  "cart": {
	 "general": {
		"title": "Shopping Cart",
		"remove": "Remove",
		"note": "Special instructions for seller",
		"subtotal": "Subtotal",
		"shipping_at_checkout": "Shipping & taxes calculated at checkout",
		"update": "Update Cart",
		"checkout": "Check Out",
		"empty": "Your cart is currently empty.",
		"cookies_required": "Enable cookies to use the shopping cart",
		"continue_browsing_html": "Continue browsing <a href=\"/collections/all\">here</a>.",
		"item_quantity": "Item quantity",
		"savings": "You're saving"
	 },
	 "label": {
		"product": "Product",
		"price": "Price",
		"quantity": "Quantity",
		"total": "Total",
		"discounted_price": "Discounted price",
		"original_price": "Original price"
	 }
  },
  "collections": {
	 "general": {
		"no_matches": "Sorry, there are no products in this collection",
		"link_title": "Browse our {{ title }} collection"
	 }
  },
  "contact": {
	 "form": {
		"name": "Name",
		"email": "Email",
		"phone": "Phone Number",
		"message": "Message",
		"send": "Send",
		"post_success": "Thanks for contacting us. We'll get back to you as soon as possible."
	 }
  },
  "customer": {
	 "account": {
		"title": "My Account",
		"details": "Account Details",
		"view_addresses": "View Addresses",
		"return": "Return to Account Details"
	 },
	 "activate_account": {
		"title": "Activate Account",
		"subtext": "Create your password to activate your account.",
		"password": "Password",
		"password_confirm": "Confirm Password",
		"submit": "Activate Account",
		"cancel": "Decline Invitation"
	 },
	 "addresses": {
		"title": "Your Addresses",
		"default": "Default",
		"add_new": "Add a New Address",
		"edit_address": "Edit address",
		"first_name": "First Name",
		"last_name": "Last Name",
		"company": "Company",
		"address1": "Address1",
		"address2": "Address2",
		"city": "City",
		"country": "Country",
		"province": "Province",
		"zip": "Postal/Zip Code",
		"phone": "Phone",
		"set_default": "Set as default address",
		"add": "Add Address",
		"update": "Update Address",
		"cancel": "Cancel",
		"edit": "Edit",
		"delete": "Delete",
		"delete_confirm": "Are you sure you wish to delete this address?"
	 },
	 "login": {
		"title": "Login",
		"email": "Email",
		"password": "Password",
		"forgot_password": "Forgot your password?",
		"sign_in": "Sign In",
		"cancel": "Return to Store",
		"guest_title": "Continue as a guest",
		"guest_continue": "Continue"
	 },
	 "orders": {
		"title": "Order History",
		"order_number": "Order",
		"date": "Date",
		"payment_status": "Payment Status",
		"fulfillment_status": "Fulfillment Status",
		"total": "Total",
		"none": "You haven't placed any orders yet."
	 },
	 "order": {
		"title": "Order {{ name }}",
		"date": "Placed on {{ date }}",
		"cancelled": "Order Cancelled on {{ date }}",
		"cancelled_reason": "Reason: {{ reason }}",
		"billing_address": "Billing Address",
		"payment_status": "Payment Status",
		"shipping_address": "Shipping Address",
		"fulfillment_status": "Fulfillment Status",
		"discount": "Discount",
		"shipping": "Shipping",
		"tax": "Tax",
		"product": "Product",
		"sku": "SKU",
		"price": "Price",
		"quantity": "Quantity",
		"total": "Total",
		"fulfilled_at": "Fulfilled {{ date }}",
		"subtotal": "Subtotal"
	 },
	 "recover_password": {
		"title": "Reset your password",
		"email": "Email",
		"submit": "Submit",
		"cancel": "Cancel",
		"subtext": "We will send you an email to reset your password.",
		"success": "We've sent you an email with a link to update your password."
	 },
	 "reset_password": {
		"title": "Reset account password",
		"subtext": "Enter a new password for {{ email }}",
		"password": "Password",
		"password_confirm": "Confirm Password",
		"submit": "Reset Password"
	 },
	 "register": {
		"title": "Create Account",
		"first_name": "First Name",
		"last_name": "Last Name",
		"email": "Email",
		"password": "Password",
		"submit": "Create",
		"cancel": "Return to Store"
	 }
  },
  "homepage": {
	 "onboarding": {
		"product_title": "Example Product Title",
		"collection_title": "Example Collection Title",
		"no_content": "This section doesn’t currently include any content. Add content to this section using the sidebar."
	 }
  },
  "layout": {
	 "cart": {
		"title": "Cart",
		"items_count": {
		  "one": "item",
		  "other": "items"
		}
	 },
	 "customer": {
		"account": "Account",
		"logged_in_as_html": "Logged in as {{ first_name }}",
		"log_out": "Log out",
		"log_in": "Log in",
		"create_account": "Create account"
	 },
	 "footer": {
		"social_platform": "{{ name }} on {{ platform }}",
		"copyright": "Copyright"
	 }
  },
  "products": {
	 "product": {
		"regular_price": "Regular price",
		"sold_out": "Sold Out",
		"unavailable": "Unavailable",
		"on_sale": "On Sale",
		"on_sale_from_html": "On Sale from {{ price }}",
		"from_text_html": "From {{ price }}",
		"quantity": "Quantity",
		"add_to_cart": "Add to Cart"
	 }
  },
  "gift_cards": {
	 "issued": {
		"title": "Here's your {{ value }} gift card for {{ shop }}!",
		"subtext": "Here's your gift card!",
		"disabled": "Disabled",
		"expired": "Expired on {{ expiry }}",
		"active": "Expires on {{ expiry }}",
		"redeem": "Use this code at checkout to redeem your gift card",
		"shop_link": "Start shopping",
		"print": "Print",
		"remaining_html": "{{ balance }} left",
		"add_to_apple_wallet": "Add to Apple Wallet"
	 }
  },
  "date_formats":{
	 "month_day_year": "%B %d, %Y"
  }
}

export default { info, data }
