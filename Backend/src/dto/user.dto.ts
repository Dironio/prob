export interface CreateUserDto {
    first_name?: string
    last_name?: string
    email: string
    password: string
    city?: string
    gender?: string
    img?: string
    role_id?: number
}