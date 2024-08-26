/**
 * @typedef {Object} FormErrorMessageProps
 * @property {string} [message]
 */

/** @param {FormErrorMessageProps} props */
function FormErrorMessage({ message }) {
    if (!message) return;

    return <p className="text-xs text-destructive">{message}</p>;
}

export { FormErrorMessage };
