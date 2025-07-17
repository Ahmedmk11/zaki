export class UpdateUserDto {
    password?: string
    address?: {
        street?: string
        city?: string
        area?: string
        zip?: string
        country?: string
    }
}
