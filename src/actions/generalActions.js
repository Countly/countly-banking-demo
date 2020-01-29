import { UPDATE_PAGE_LOCATION } from '../types/generalTypes';

export function updatePageLocation(pageLocation) {
    return {
        type : UPDATE_PAGE_LOCATION,
        payload : {
            pageLocation
        }
    }
}