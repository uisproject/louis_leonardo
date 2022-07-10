## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## My App

So as you can see that i built a simple app to display introduction of myself and list of repo. since the goal is just to show the repo list. I was thinking to clonse the github style, It also simplified the design process by doing that. In this app i am using next.js following the requirements and also use redux.js as state management, i also added some libraried into the project to simplified and speed up the process

the libraries that i use there are:
1. next.js
2. reduxjs@/toolkit
3. tailwindcss - for speed up the process of styling
4. moment - for time parser

About folder structure - at least there are 8 folders that i have organized to make the project scallable
1. api -> this folder is used to store anything related about the API but in this case i would just use to store api base url but it can used as well to maintain public and private api with axios with further development, in this app i just use regular method data fetching
2. components -> i like to breakdown components into smaller components in every page if you check the page files you can see mostyle the components are brokedown already into smaller part to make better readibility and maintenance, it also contains general components, it means the components that can be use or be reused again in many places
3. features -> storing redux and some reducers and i use redux for data fetching and storing custom hook value
4. hooks -> creating custom hook, manipulating data or component using react features that's why it's called hook and i integrate it with redux
5. icons -> storing icons that has been made into jsx
6. layouts -> more like storing template that will be used for page, so the design will be consistent
7. pages -> contains page and for routing 
8. styles -> since i use tailwind i depend heavily on tailwindcss for any styles and for the responsive design, so this folder just to keep the global styles
9. utils -> it's a folder that work as helper, it just contains some functions that can be used again in many places just like hooks



