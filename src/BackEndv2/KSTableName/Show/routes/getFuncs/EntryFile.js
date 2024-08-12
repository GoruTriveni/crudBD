import express from 'express';

var router = express.Router();

import {
    GetFunc, GetDataOnlyFunc, GetImagesFunc, GetBodyCheckFunc, GetFromModalFunc,
    GetFromModalUuidFunc
} from '../../controllers/getFuncs/EntryFile.js';


router.get('/', GetFunc);
router.get('/DataOnly', GetDataOnlyFunc);
router.get('/Images', GetImagesFunc);
router.get('/BodyCheck', GetBodyCheckFunc);
router.get('/FromModal', GetFromModalFunc);
router.get('/FromModalUuid', GetFromModalUuidFunc);

export { router };