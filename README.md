# employee-directory

A simple React employee directory using the randomuser API. [Take it for a spin](https://ancient-reef-48449.herokuapp.com/home).

# Installation

1. Clone the repo.

`git clone https:\\github.com\GuyFromHere\employee-directory.git`

2. Run npm install

`npm install`

3. Start the app.

`npm start`

![Screenshot](/snip.png)

# How It Works

Click the column headers to sort.

Select a gender from the drop down to filter results, or select None to remove the filter.

# Special Instructions

At the time of my last commit the RandomUser API was unavailable. I chose to leave the code as though the API were functional on the hope that it will come back online soon. 

However, in order for the app to work in its current state you also need to download the RandomAPI project and follow the instructions [here](https://github.com/RandomAPI/Randomuser.me-Node#how-to-use) to download it and install dependencies. 

Next, open the project files and change the value of the port property in settings.json like so:

`"port": 4000,`

Start the application with `npm start`.

Once the API is running in your environment, swap the comments on these API calls in employee-directory/src/utils/API/API.js to point at the local Mongo database:

Comment the bottom line and uncomment the top to use the published RandomUser API

`return axios.get(BASEURL)`
`//return axios.get(LOCALDB)`

Ditto for these two lines:

`return axios.get(BASEURL +  "&" + filter.filterKey + "=" + filter.filterValue)`
`//return axios.get(LOCALDB +  "&" + filter.filterKey + "=" + filter.filterValue)`



