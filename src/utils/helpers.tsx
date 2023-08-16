/**
 * Formats a date string to a localized string format.
 * @param {string} dateString - The date string to format.
 * @returns {string} A localized string representation of the date.
 */
export const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleString(undefined, {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    })
}

/**
 * Gets the property name from the provided property key.
 * @template T - The type of the object the property belongs to.
 * @param {keyof T} property - The property key of the object.
 * @returns {keyof T} The name of the property.
 */
export function getPropertyName<T>(property: keyof T): keyof T {
    return property
}
