# DEVELOPER

## Quick start

First clone this repo: `git clone https://github.com/jeroenouw/AngularMaterialFirebase.git`.  
Change directory to this project  
Run `npm install` to install all the dependencies.  
Run `npm start` to run this project. This will run with the AoT Compiler.  
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.  
Run `npm reset` if you want to re-install everything.  

## Development

For own projects please use different keys in `src/app/firebase.config.ts`:  

```typescript

export const firebaseKeys = {
  // For your own projects please use different keys
  apiKey: 'YOUR_KEY',
  authDomain: 'YOUR_DOMAIN',
  databaseURL: 'YOUR_URL',
  projectId: 'YOUR_ID',
  storageBucket: 'YOUR_KEY',
  messagingSenderId: 'YOUR_ID'
}

```

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.  

To build the development environment, run `npm run dist`.

## Production

To build the production environment, run `npm run prod`. This will run with the AoT Compiler.  
To build the production environment without hashing in the files, run `npm run prod:hashless`. This will give packages without a hash.  
Also available: run `npm run prod:src`.
