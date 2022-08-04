# Spotify Clone

Frontend of Spotify in ReactJS

Note: Readme is in WIP

## API

Used for the data: [Spotify API](https://developer.spotify.com/documentation/web-api/reference/#/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Features

- Pages  
  - Not Found (404)  
  - Home
  - Search Page  
    - Basic search
    - Navigate though categories
    - Recent Searches (persist state comming soon)

- Author Card
- Not logged in user, when clicking green play button will see a modal


### Branches

`Master` is used for production  
`Staging` is used for QA   
`Dev` is used for development  


## Project Setup

### Views

Some views follow concept from Laravel https://laravel.com/docs/9.x/controllers#introduction


`index` - display listing  
`show` - display single listing post  

Usually when you need to display something like `Cars` where you have a listing of cars, and then you click it and it brings you to single page `Car`, the above will be followed.

In terms of naming the classes in those files, possible convention would be `List_Artist` to display a list of artists. `Show_Artist` to display one artist. Then if this convention is followed, it will also gain a support with VS code I believe with the `List_x` or such and just a way for a larger team to work with having one convention, which is all subjective anyway at the end of the day.

`sub-components` - It will contain specific layout/components that will be *only* used in the files and no where else. So we prevent cluttering the global component folder, as it can get long and time consuming to go over on large scale projects.


### Env
Create .env file for development then add:

```
REACT_APP_CLIENT_ID= `spotify username`
REACT_APP_CLIENT_SECRET= `spotify password`
```

### Install packages

```
npm install
```

### Start localhost

```
npm run start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Compile and minify for production

```
npm run build
```


## Developed by Aurelian Spodarec