import express from 'express';

var router = express.Router();

import {
    GetFunc
} from '../../controllers/getFuncs/EntryFile.js';

router.get('/:inKeyName', GetFunc);

export { router };