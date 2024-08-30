export interface AnimeListProps {
    cards: CardProps[]; // Ensure cards is typed as CardProps[]
    title: string;
    id?: string;
}

export interface CardProps {
    type: string;
    status: string;
    age: string;
    title: string;
}