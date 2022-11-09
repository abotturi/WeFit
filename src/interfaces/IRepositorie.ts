export interface IRepositorie{
    id: number,
    full_name: string,
    description: string | null,
    owner: {
        avatar_url: string | null
    },
    stargazers_count: number,
    language: string | null,
    html_url: string | null
}