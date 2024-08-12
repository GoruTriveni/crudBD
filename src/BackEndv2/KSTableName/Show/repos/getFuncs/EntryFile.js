import {
    GetFunc as GetFuncDal, GetDataOnlyFunc as GetDataOnlyFuncDal
} from '../../dals/getFuncs/EntryFile.js';

import {
    GetDataOnlyFunc as GetDataOnlyFuncDalsForSequelize
} from '../../dalsForSequelize/getFuncs/EntryFile.js';

import {
    GetDataOnlyFunc as GetDataOnlyFuncDalsForMongoDb
} from '../../dalsForMongoDb/getFuncs/EntryFile.js';

import ConfigJson from '../../../../Config.json' assert {type: 'json'};

let GetFunc = async () => {
    return GetFuncDal();
};

let GetDataOnlyFunc = async () => {
    if (ConfigJson.isSequelize) {
        return await GetDataOnlyFuncDalsForSequelize();
    };

    if (ConfigJson.isMongoDb) {
        return GetDataOnlyFuncDalsForMongoDb();
    };

    return GetDataOnlyFuncDal();
};

export {
    GetFunc, GetDataOnlyFunc
};