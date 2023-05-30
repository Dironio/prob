export interface CreateVacancyDao {
    title: string
    salary: number
    company: string
    city: string
    description?: string
    busyness_id?: number
    experience_id?: number
  }