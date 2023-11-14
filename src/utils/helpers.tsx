import DOMPurify from "dompurify"
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
export function processMessageInput(input: string): { processedString: string, mentions: string[] } {
    const mentions: string[] = []
    const mentionRegex = /<span data-mention="(\w+-\w+-\w+-\w+-\w+)" contenteditable="false">([^<]+)<\/span>/g

    let processedString = input.replace(mentionRegex, (fullMatch, mentionId, content) => {
        mentions.push(mentionId)
        return `{{${content}}} `
    })

    const nonMentionRegex = /<span(?: [^>]*)?>([^<]+)<\/span>/g

    processedString = processedString.replace(nonMentionRegex, (fullMatch, content) => `{{${content}}} `)
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

/**
 * The function will identify any text located between double curly braces and wrap
 * it with a <span> HTML element, with the `contenteditable` attribute set to `false`.
 * This makes the enclosed content appear visually distinct and uneditable in content-editable areas.
 *
 * input: 'Hello {{World}}'
 * output: 'Hello <span contenteditable="false">World</span>'
 *
 * @param {string} inputString - The input string possibly containing content within {{}} to be wrapped in <span> elements.
 * @returns {string} - The processed string with content within {{}} wrapped in non-editable <span> elements.
 */
export function wrapInSpan(inputString: string): string {
    const parts = inputString.split(/{{(.*?)}}/)

    let isNextSpan = false
    const partsWithSpan = parts.map((part, index) => {
        if (isNextSpan) {
            isNextSpan = false
            return `<span contenteditable="false">${part}</span>`
        }
        isNextSpan = true
        return part
    })
    return partsWithSpan.join("")
}

/**
 * Sanitizes the text content using DOMPurify.
 * Removes all HTML elements that are not <span>.
 *
 * @param {string} content - The text content to sanitize.
 * @returns {string} The sanitized text content.
 */
export const sanitizeContent = (content: string): string => {
    const config = { ALLOWED_TAGS: ["span"] }
    const sanitizedContent = DOMPurify.sanitize(content, config)

    return sanitizedContent
}

/**
 * Format a camelCase string by adding a space before each uppercase letter and capitalizing the first letter of the string.
 *
 * @function
 * @param {string} property - The string to be formatted.
 * @returns {string} - The formatted string.
 */
export function formatCamelCase(property: string) {
    return property
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase())
}

export function getDueInDays(dateTime: string, days: number): number {
    const startDate = new Date(dateTime)

    const futureDate = new Date(startDate)
    futureDate.setDate(startDate.getDate() + days)

    const currentDate = new Date()

    const differenceInTime = futureDate.getTime() - currentDate.getTime()
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24))

    return differenceInDays
}