export interface CreateVacancyDao {
    title: string
    salary: number
    company: string
    city: string
    description?: string
    busyness_id?: number
    experience_id?: number
  }

  export interface UpdatedVacancyDao {
    id: number
    title?: string
    salary?: number
    company?: string
    city?: string
    description?: string
    busyness_id?: number
    experience_id?: number
  }

  export interface ResponsesVacancyDao {
    vacancyId: number 
    userId: number
  }

  export interface FindVacancyDao {
    id?: number
    title?: string
    salary?: number
    company?: string
    city?: string
    description?: string
    busyness_id?: number
    experience_id?: number
  }