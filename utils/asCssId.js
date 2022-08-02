import { startCase } from './startCase';

export const asCssId = (str) => {
    if (!!str) {
        return startCase(str).replace(/\d+|\W/gm, '');
    }
    return 'empty';
};
