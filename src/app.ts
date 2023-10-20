import { yarg } from "./config/plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";

(async() => {
    await main();
    
})();

async function main(){
    
    const {b:base, l:limite, s:showTable, n:name, d:destination} = yarg;

    ServerApp.run({base, limite, showTable, name, destination});


}