# service-site

Simple service site.

## Installation

First pull the repo to your local machine and navigate into it.

```
git clone git@github.com:davidshur/service-site.git
cd service-site
```

Now add in our environment file.

```
touch .env
```

Go into the file and add the following. Note: you will see below that there are some fields that have been intentionally omitted. Contact the server administrator for: username, password, and database. When you are given the credentials for these fields, just replace the placeholders and the angle brackets with the provided credentials.

```
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.ewmtd.gcp.mongodb.net/<database>?retryWrites=true&w=majority
```

Now, install all dependencies. We use npm.

```
npm install
cd view
npm install
```

There you go, you are all set! To run the application for development make sure you are in the root folder (i.e. /service-site) and run the following...

```
npm run dev
```

# Usage

To use the site, view the index.js of the root folder. This will show you which API routes are available. From there, check out the view/ folder. This folder contains the frontend website.

Using the site, you will see that it is a simple website that allows saving of notes from guests, features a live stream of the service, and has some additional information for viewing.

# Contributions

To contribute to this project, just ask to be added to the repository. You may ask either davidshur or tashawallage.

If you are contributing, please create a pull request with your changes. Your request will be viewed and then merged in after review. Thank you.

# License

This project was created with the MIT license. Find the license in the repository files.
