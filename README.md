# SelfContained

![a hydrocode application](https://firebasestorage.googleapis.com/v0/b/hydrocode-website.appspot.com/o/public%2Fhydrocode_brand.png?alt=media&token=3ec35465-9c1c-48a1-8d3f-2c93549a4ffb)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## About

This is the basic scaffolding needed to run a single page application that is build from self-contained `Components`.
The idea is that a number of elements on the website can be embedded into other websites (like YouTube videos). 
For this, the application is divided into three parts. 

`containers` are a collection of angular modules that export 
a single stateless `Component`, only a few parameters could be set here. These are the self-contained WIdgets, like Charts, numbers, tables.
In this example, there is only a table.

`embed` is basically only a route that loads `container` components based on the URL after `host/embed/...`. These urls can be 
used to embed the components into `<iframe>` on **other** websites.

`page` is the actual website (and should be called pages). it consists of a top-level `PageComponent` that defines the layout (like header etc) 
and handles responsiveness and stuff. If more than one Layout is needed, more top level Components could be added here.
`page` also comes with its own router to load the actual pages that make up the website. 
Right now, there is only one page, `HomeComponent`, which directly imports the self-contained widget here.

Finally, there is a `EmbedderComponent` oin `containers` which is a helper for producing embedding information for the user.