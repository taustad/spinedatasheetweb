export function getPropertyName<T>(property: keyof T): keyof T {
    return property
}
