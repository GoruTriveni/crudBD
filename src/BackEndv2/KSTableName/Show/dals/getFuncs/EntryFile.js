import { StartFunc as ReadFromFile } from '../../kLowDb/ReadFromFile/getFunc.js';

let GetFunc = () => {
    return ReadFromFile();
};

let GetDataOnlyFunc = () => {
    let LocalFromLowDb = ReadFromFile();

    if (LocalFromLowDb === false) {
        return false;
    };

    return LocalFromLowDb;
};
let GetImagesFunc = () => {
    let LocalFromLowDb = ReadFromFile();

    if (LocalFromLowDb === false) {
        return false;
    };

    return LocalFromLowDb;
};
let GetBodyCheckFunc = () => {
    let LocalFromLowDb = ReadFromFile();

    if (LocalFromLowDb === false) {
        return false;
    };

    return LocalFromLowDb;
};
let GetFromModalFunc = () => {
    let LocalFromLowDb = ReadFromFile();

    if (LocalFromLowDb === false) {
        return false;
    };

    return LocalFromLowDb;
};
let GetFromModalUuidFunc = () => {
    let LocalFromLowDb = ReadFromFile();

    if (LocalFromLowDb === false) {
        return false;
    };

    return LocalFromLowDb;
};

export {
    GetFunc, GetDataOnlyFunc, GetImagesFunc, GetBodyCheckFunc, GetFromModalFunc,
    GetFromModalUuidFunc
};