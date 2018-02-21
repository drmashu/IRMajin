// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDPzi4g1bfk7iey9h5tFtjdJAXjtQyvtK4",
    authDomain: "irkiton.firebaseapp.com",
    databaseURL: "https://irkiton.firebaseio.com",
    projectId: "irkiton",
    storageBucket: "irkiton.appspot.com",
    messagingSenderId: "175919858822"
  }
};
