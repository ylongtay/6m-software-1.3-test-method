/*
    Task
    - Implement a switch statement to check against `env` environmental variable.
    - If `env` is "DEV", no change to `databaseCredential`.
    - If `env` is "STAGE", modify `databaseCredential` to "stageuser:password".
    - If `env` is "PROD", modify `databaseCredential` to "produser:password"
    
*/

const env = "DEV"; // Toggle between these possible values "DEV" | "STAGE" | "PROD"
let databaseCredential = "devuser:password";

switch (env) {
    case "DEV":
    break;
        // databaseCredential = "devuser:password";
        // console.log(`Database credential for environment ${env} is ${databaseCredential}`);
    case "STAGE": 
        databaseCredential = "stageuser:password";
        // console.log(`Database credential for environment ${env} is ${databaseCredential}`);
        break;
    case "PROD": 
        databaseCredential = "produser:password";
        // console.log(`Database credential for environment ${env} is ${databaseCredential}`);
        break;
    // default: 
    //     console.log(`Database credential for environment is unknown`);
}
console.log(`Database credential for environment ${env} is ${databaseCredential}`);
