# Gadget Craze

Gadget Craze is an e-commerce website built using React and Vite, showcasing my skills in web development. This application includes a variety of features, such as product listings, user authentication, and an admin panel, all styled using Tailwind CSS.

## Features

- **Home Page**: 
  - Landing page with links to the main shop.
  - Sections for most viewed items, trending items, and Samsung items.
  - Links to the About and Contact Us pages.

- **Main Shop**: 
  - Data is fetched from a local API using Axios.
  - In case of issues with Rapid API (403 error), data is sourced from FakeAPI to demonstrate Redux Toolkit for state management.

- **Most Viewed Items**: 
  - Displays products marked as most viewed by using a unique key (`isMostViewed: true`).

- **Cart Page**: 
  - Displays selected items from the shop and allows users to proceed to payment.

- **User Authentication**: 
  - Signup and login pages implemented with Formik for form handling.

- **Admin Panel**: 
  - Accessible only for users with the email `mansoor72373@gmail.com` and name `Mansoor Ahmad`.
  - CRUD operations on product data and a user data panel to view user information.

## Technologies Used

- React
- Vite
- Redux Toolkit
- Axios
- Formik
- Tailwind CSS (for styling)

## Installation

To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/gadget-craze.git
