import { StartFunc as Show } from './Show/EntryFile.js';
import { StartFunc as Create } from './Create/EntryFile.js';
import { StartFunc as Alter } from './Alter/EntryFile.js';
import { StartFunc as Delete } from './Delete/EntryFile.js';

let StartFunc = ({ inTablesCollection, inTo, inFrom, inConfigJson }) => {
    Show({ inTablesCollection, inTo });
    Create({ inTablesCollection, inTo, inConfigJson });
    Alter({ inTablesCollection, inTo, inConfigJson });
    Delete({ inTablesCollection, inTo });
};

export { StartFunc };