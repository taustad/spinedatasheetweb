export class User implements Components.Schemas.UserDto {
    userId?: string; // uuid
    userName?: string | null;

    constructor(init?: Partial<User>) {
        Object.assign(this, init)
    }
}
