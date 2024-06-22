# Get Started
* download nodejs
* clone this repo
* run ```npm install```
* run ```npm run dev```
* go to browser and see website on ```localhost:3000```


## how to create a new page
use this [PR](https://github.com/EdgeTechRepo/GymAppWebsite/pull/1/files) as a reference
* create a new react layout component at ```layouts/<Layout>.js``` (using uppercase for layout name)
* import this layout component in ```pages/[regular].js``` and config the route
* create a yaml file with same name as layout name under ```content/<layout>.yaml```, this is the data sending to layout
* hit the route with ```localhost:3000/<layout>``` so you can see the new page
* finally update ```layouts/<Layout>.js``` and ```content/<layout>.yaml``` with the ui you want