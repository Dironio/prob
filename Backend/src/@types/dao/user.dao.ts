export interface CreateUserDao {
    first_name?: string
    last_name?: string
    email: string
    password: string
    city?: string
    gender?: string
    img?: string
    role_id?: number
}

export interface OneUserDao {
    id?: string
    first_name?: string
    last_name?: string
    email?: string
    password?: string
    city?: string
    gender?: string
    img?: string
    role_id?: number
}

export interface FindUserDao {
    id?: string
    first_name?: string
    last_name?: string
    email?: string
    password?: string
    city?: string
    gender?: string
    img?: string
    role_id?: number
}