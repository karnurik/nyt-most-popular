export const range = (start: number, end: number, step = 1) => {
    if ((start < end && step <= 0) || (start > end && step >= 0)) {
        throw new Error('Invalid range or step');
    }

    const length = Math.floor(Math.abs((end - start) / step)) + 1;
    return Array.from({ length }, (_, index) => start + index * step);
}

export function injectQueryParamsUrl(url: string, data: any) {
    if (!url || !data) {
        return url;
    }

    Object.keys(data).forEach((key) => {
        if (url.includes(`:${key}`)) {
            url = url.replace(`:${key}`, data[key])
        }
    })

    return url;
}

/**
 * set url parameters
 * @param {string} url state.
 * @param {object} urlParams actions to be called.
 */
export const appendUrlSearchParams = (url: string, params: any): string => {
    if (isNull(url) || isNull(params)) {
        return url;
    }

    const urlParams = new URLSearchParams('');
    Object.keys(params).forEach((key) => {
        urlParams.set(key, params[key]);
    });
    url = `${url}?${urlParams.toString()}`;

    return url;
};

/**
* isNull checks that passed value is empty, undefined or null
* @param {any} value
* @returns {boolean}
*/
export const isNull = (value: any) => {
    return value === '' ||
        value === undefined ||
        value === null ||
        (Array.isArray(value) && value.length === 0) ||
        (typeof value === 'object' && Object.keys(value).length === 0);
}