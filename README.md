# The New York Times Best Sellers 

This project provides visualization for different NYT Best Sellers lists. To run it locally, you will need [Node.js](https://nodejs.org/en) installed in your computer and follow the steps:

```
git clone https://github.com/kundlatsch/frontend
cd frontend/frontend
npm install
```

Then you will need to create a .env file in the frontend project directory root (along with the package.json file) and add your [NYT Books API key](https://developer.nytimes.com/docs/books-product/1/overview):

```
REACT_APP_NYT_BOOKS_API_KEY="your key here"
```

Lastly, run the project with the command:

```
npm start
```

The project will be running at localhost:3000.

### Screenshots

![Homepage](/images/home.png)

![Listing page](/images/list.png)