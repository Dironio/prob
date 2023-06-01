export interface CreateVacancyDto {
    title: string
    salary: number
    company: string
    city: string
    description?: string
    busyness_id?: number
    experience_id?: number
}

export interface UpdatedVacancyDto {
    id: number
    title?: string
    salary?: number
    company?: string
    city?: string
    description?: string
    busyness_id?: number
    experience_id?: number
}

export interface ResponsesVacancyDto {
    vacancies_id: number
    users_id: number
}