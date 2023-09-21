/**
 * Formats a date string into a user-friendly format.
 * - If the date is within the current day, it returns "Today" with the time.
 * - If the date is from the previous day, it returns "Yesterday" with the time.
 * - If the date is within the last week, it returns the name of the weekday with the time.
 * - Otherwise, it returns a full date and time string.
 *
 * @param {string} dateString - The date string to be formatted.
 * @returns {string} - Formatted date string.
 */
export const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(today.getDate() - 1)
    const oneWeekAgo = new Date(today)
    oneWeekAgo.setDate(today.getDate() - 7)

    const time = date.toLocaleString(undefined, {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    })

    date.setHours(0, 0, 0, 0)
    today.setHours(0, 0, 0, 0)
    yesterday.setHours(0, 0, 0, 0)

    if (date.getTime() === today.getTime()) {
        return `Today ${time}`
    }
    if (date.getTime() === yesterday.getTime()) {
        return `Yesterday ${time}`
    }
    if (date >= oneWeekAgo) {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        return `${days[date.getDay()]} ${time}`
    }
    return date.toLocaleString(undefined, {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
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

/**
 * Processes a string to replace <span> elements with text inside of them wrapped in double curly brackets.
 * Also extracts all of the "data-mention" values and converts any &nbsp; instances into normal spaces.
 *
 * @param {string} input - The input string to process.
 * @returns {Object} An object containing the processed string and an array of mention IDs.
 * @returns {string} processedString - The processed string.
 * @returns {number[]} mentions - An array of mention IDs.
 */
export function processMessageInput(input: string): { processedString: string, mentions: number[] } {
    const regex = /<span data-mention="(\w+-\w+-\w+-\w+-\w+)" contenteditable="false">([^<]+)<\/span>/g

    let match
    const mentions: number[] = []

    let processedString = input.replace(regex, (fullMatch, mentionId, content) => {
        mentions.push(Number(mentionId))
        return `{{${content}}} `
    })

    processedString = processedString.replace(/&nbsp;/g, " ")

    return {
        processedString,
        mentions,
    }
}

/**
 * Converts HTML entities in a string to their corresponding characters.
 *
 * @param {string} str - The string with HTML entities.
 * @returns {string} The string with HTML entities replaced by their corresponding characters.
 */
export function unescapeHtmlEntities(str: string): string {
    const parser = new DOMParser()
    const doc = parser.parseFromString(str, "text/html")
    return doc.documentElement.textContent || ""
}
