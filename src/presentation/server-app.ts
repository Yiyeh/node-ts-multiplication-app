import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";


interface RunOptions {
    base: number;
    limite: number;
    showTable: boolean;
    name: string;
    destination: string;
}


export class ServerApp {

    static run({base, limite, showTable, name, destination}: RunOptions) {
        console.log('server running...');
        const table = new CreateTable().execute({base, limite});
        const wasCreated = new SaveFile().execute({
            fileContent: table,
            fileDestination: destination,
            fileName: name 
        })

        if (showTable) console.log(table);

        (wasCreated) ? console.log('Archivo escrito exitosamente') : console.log('Archivo no escrito');
    }

}