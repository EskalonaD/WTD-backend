import fs from 'fs';

export class DataStorage {
    constructor(private name: string, ) {
        const baseFilePath: string = `${__dirname}/base-data/${this.name}.json`;
        this.filePath = `${__dirname}/data/${this.name}.json`;

        console.log(__dirname);
        console.log(fs.existsSync(this.filePath));

        this._data = fs.existsSync(this.filePath)
            ? JSON.parse(fs.readFileSync(this.filePath, 'utf8'))
            : fs.existsSync(baseFilePath)
                ? JSON.parse(fs.readFileSync(baseFilePath, 'utf8'))
                : null;

        if (!fs.existsSync(this.filePath)) fs.writeFileSync(this.filePath, '{}', 'utf8'); // mb null instead of {}?
    }

    protected filePath: string;
    protected _data: any;

    get data() {
        this._data = JSON.parse(fs.readFileSync(this.filePath, 'utf8'));
        console.log('data parsed');
        return this._data;
    }

    set data(value: any) {
        fs.writeFileSync(this.filePath, JSON.stringify(this._data, null, 2), 'utf8')
        this._data = value; // mb will work w\o this line??
        console.log('data saved')
    }
}
