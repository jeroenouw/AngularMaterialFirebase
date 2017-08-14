## Quick start
First clone this repo: `git clone https://github.com/jeroenouw/Angular4MaterialDesign.git`.  
Change directory to this project  
Run `npm install` to install all the dependencies.  
Run `npm start` or `ng serve` to run this project.  
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.  

To build the project run `npm run dist`.

## Development
For own projects please use different keys in `src/app/app.component.ts`:  
``` firebase.initializeApp({ ```   
```     // For other projects use different keys```  
```    apiKey: '[YOUR_KEY]',```  
```     authDomain: '[YOUR_KEY]',```  
```    databaseURL: '[YOUR_KEY]',```  
```    projectId: '[YOUR_KEY]',```  
```   storageBucket: '[YOUR_KEY]',```    
```  messagingSenderId: '[YOUR_KEY]'```  
```    });```  
  
Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
