# Natours

A Beautiful tour booking e-commerce website built using [Node.js ](https://nodejs.org/en)

# Key Features
Authentication and Authorization
⋅⋅* Login and logout
Tour
⋅⋅* Manage booking, check tours map, check users' reviews and rating
User profile
⋅⋅* Update username, photo, email, and password
Credit card Payment

# Build With
[NodeJS](https://nodejs.org/en) - JS runtime environment
[Express](https://expressjs.com) - The web framework used
[Mongoose](https://mongoosejs.com/) - Object Data Modelling (ODM) library
[MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Cloud database service
[PugJS](https://pugjs.org/api/getting-started.html) - High performance template engine
[JSON Web Token](https://jwt.io/) - Security token
[ParcelJS](https://parceljs.org/) - Blazing fast, zero configuration web application bundler
[Stripe](https://stripe.com/en-in) - Online payment API
[Postman](https://www.postman.com/) - API testing
[Mailtrap](https://mailtrap.io/) & [Sendgrid](https://sendgrid.com/) - Email delivery platform

# Demonstration

Home Page : 

![1 Home page](https://github.com/karthik1172/Web-scraping---ESPN/assets/70255695/bdf6dd8e-add9-4ec9-b1f2-8fdb620c2b14)

Tour Details :

![2 Tour Details -](https://github.com/karthik1172/Web-scraping---ESPN/assets/70255695/d8c76fcc-b04d-4b53-a111-79ef03173ca4)

Payment Process :

![3 Payment Process ](https://github.com/karthik1172/Web-scraping---ESPN/assets/70255695/38ecacc7-33d9-47ce-a4e4-76a2597b5e9d)

Booked Tours :

![4 Booked Tours ](https://github.com/karthik1172/Web-scraping---ESPN/assets/70255695/87a4a513-8cda-4d83-b37a-d9bb3039e4bc)

User Profile :

![5 User Profile ](https://github.com/karthik1172/Web-scraping---ESPN/assets/70255695/0b3fb36b-faa9-48dd-89b7-24d01a7828f5)

Admin Profile :

![6 Admin Profile](https://github.com/karthik1172/Web-scraping---ESPN/assets/70255695/3abd256d-d55c-4ed3-a134-97b58bac28c2)

# How To Use
* Login to the site
* Search for tours that you want to book
* Book a tour
* Proceed to the payment checkout page
* Enter the card details (Test Mood):

```
- Card No. : 4242 4242 4242 4242
- Expiry date: 02 / 22
- CVV: 222
```
# Manage your booking
* Check the tour you have booked in "Manage Booking" page in your user settings. You'll be automatically redirected to this page after you have completed the booking.

#Update your profile
* You can update your own username, profile photo, email and password.

# API Usage
Before using the API, you need to set the variables in Postman depending on your environment (development or production). Simply add:
```
- {{URL}} with your hostname as value (Eg. http://127.0.0.1:3000 or http://www.example.com)
- {{password}} with your user password as value.
```
Check [Natours API documentation](https://documenter.getpostman.com/view/8689170/SVmzvwpY?version=latest#a1af0c9a-3f32-45f7-82db-a6693bf9f04c)for more info.

# Installation
You can fork the app or you can git-clone the app into your local machine. Once done that, please install all the dependencies by running
```
$ npm i
set your env variables
$ npm run watch:js
$ npm run build:js
$ npm run dev (for development)
$ npm run start:prod (for production)
$ npm run debug (for debug)
$ npm start
Setting up ESLint and Prettier in VS Code 👇
$ npm i eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-config-airbnb eslint-plugin-node
eslint-plugin-import eslint-plugin-jsx-a11y  eslint-plugin-react --save-dev
```

# To-do
* Review and rating
  
  Allow user to add a review directly at the website after they have taken a tour
* Booking
  
  Prevent duplicate bookings after user has booked that exact tour, implement favourite tours
* Advanced authentication features
  
  Signup, confirm user email, login with refresh token, two-factor authentication
