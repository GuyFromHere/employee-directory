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

At the time of my last commit the RandomUser API was unavailable. In order for the app to work in its current state you also need to download the RandomAPI project and follow the instructions [here](https://github.com/RandomAPI/Randomuser.me-Node#how-to-use) to run it. 

If randomuser comes back online, swap the comments on these API calls in src/utils/API/API.js:

Comment the bottom line and uncomment the top to use the published RandomUser API

`//return axios.get(BASEURL)
return axios.get(TEMPURL)`

Ditto for these two lines:

`//return axios.get(BASEURL +  "&" + filter.filterKey + "=" + filter.filterValue)
return axios.get(TEMPURL +  "&" + filter.filterKey + "=" + filter.filterValue)`



