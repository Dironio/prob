export interface CreateUserDto {
    first_name?: string
    last_name?: string
    email: string
    password: string
    city?: string
    gender?: string
    img?: string
    role_id?: number
    description?: string
}



export interface UpdatedUserDto {
    id: number
    first_name?: string
    last_name?: string
    email?: string
    password?: string
    city?: string
    gender?: string
    img?: string
    description?: string
}

export interface LoginUserDto {
    email: string
    password: string
}