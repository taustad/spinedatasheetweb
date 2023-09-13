export class User implements Components.Schemas.UserDto {
    userId?: string; // uuid
    displayName?: string | null;

    constructor(init?: Partial<User>) {
        Object.assign(this, init)
    }
}
