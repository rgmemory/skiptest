import React from "react";
import List from "./List";
import axios from 'axios';

let twenty = []


/*
You need to load an array of images from this url:
    https://picsum.photos/list

Once you have them loaded, format the array so it has the
four properties listed in EXAMPLE_ARRAY below.

This url responds with a list of 998 of images.
Please only pick the first 20 from the list.
*/
const EXAMPLE_ARRAY = [
  {
    id: 0,
    author: "Alejandro Escamilla",
    authorUrl: "https://unsplash.com/@alejandroescamilla",
    //   ^^^ notice author_url is changed to authorUrl
    postUrl: "https://unsplash.com/photos/yC-Yzbqy7PY"
    // ^^^ notice post_url is changed to postUrl
  },
  {
    id: 1,
    author: "Alejandro Escamilla",
    authorUrl: "https://unsplash.com/@alejandroescamilla",
    postUrl: "https://unsplash.com/photos/LNRyGwIJr5c"
  }
];

/*
Once you have the list loaded, pass your array via props
to the <List> component. Feel free to change this file
however you would like.
*/




// export default () => <List items={EXAMPLE_ARRAY} />;




/*
Note, Axios is installed for you to use:
import axios from 'axios';

You may, however, use any library you would like.
*/




//I performed an axios call, looped through the first 20 values and then created a new object with the data that was required
axios.get('https://picsum.photos/list').then(res => {
  
  let tempAuthor = {}
  
  for(let i = 0; i < 20; i++){
    
    tempAuthor = {
      id: res.data[i].id,
      author: res.data[i].author,
      authorUrl: res.data[i].author_url,
      postUrl: res.data[i].post_url
    }
    
    twenty.push(tempAuthor);
  }
  
})

export default () => <List items={twenty} />;


