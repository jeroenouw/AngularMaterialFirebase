## Quick start
First clone this repo: `git clone https://github.com/jeroenouw/AngularMaterialFirebase.git`.  
Change directory to this project  
Run `npm install` to install all the dependencies.  
Run `npm start` to run this project. This will run with the AoT Compiler.    
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.  

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

To build the development environment, run `npm run dist`.

## Production
To build the default production environment, run `npm run prod`. This will run with the AoT Compiler.   
To build the production environment with reduced file size, run `npm run prod:opt` (Takes extra time to build with build optimizer).  

