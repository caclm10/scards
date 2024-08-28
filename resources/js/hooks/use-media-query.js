// https://github.com/mantinedev/mantine/blob/master/packages/@mantine/hooks/src/use-media-query/use-media-query.ts
import { useEffect, useRef, useState } from 'react';

/**
 * @typedef {object} UseMediaQueryOptions
 * @property {boolean} getInitialValueInEffect=true
 * 
 * @callback MediaQueryCallback
 * @param {{ matches: boolean; media: string }} event
 * @returns {void}
 */

/**
 * Older versions of Safari (shipped withCatalina and before) do not support addEventListener on matchMedia
 * https://stackoverflow.com/questions/56466261/matchmedia-addlistener-marked-as-deprecated-addeventlistener-equivalent
 * 
 * @function attachMediaListener
 * @param {MediaQueryList} query
 * @param {MediaQueryCallback} callback
 * @returns {() => void}
 */
function attachMediaListener(query, callback) {
    try {
        query.addEventListener('change', callback);
        return () => query.removeEventListener('change', callback);
    } catch (e) {
        query.addListener(callback);
        return () => query.removeListener(callback);
    }
}

/**
 * 
 * @function getInitialValue
 * @param {string} query 
 * @param {boolean} [initialValue]
 * @returns {boolean}
 */
function getInitialValue(query, initialValue) {
    if (typeof initialValue === 'boolean') {
        return initialValue;
    }

    if (typeof window !== 'undefined' && 'matchMedia' in window) {
        return window.matchMedia(query).matches;
    }

    return false;
}

/**
 * 
 * @function useMediaQuery
 * @param {string} query
 * @param {boolean} [initialValue]
 * @param {UseMediaQueryOptions} [options]
 * @return {boolean}
 */
export function useMediaQuery(
    query,
    initialValue,
    { getInitialValueInEffect } = {
        getInitialValueInEffect: true,
    }
) {
    const [matches, setMatches] = useState(
        getInitialValueInEffect ? initialValue : getInitialValue(query)
    );

    /** @type {ReturnType<typeof useRef<MediaQueryList>>} */
    const queryRef = useRef();

    useEffect(() => {
        if ('matchMedia' in window) {
            queryRef.current = window.matchMedia(query);
            setMatches(queryRef.current.matches);
            return attachMediaListener(queryRef.current, (event) => setMatches(event.matches));
        }

        return undefined;
    }, [query]);

    return matches;
}