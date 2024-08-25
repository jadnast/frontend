export interface BadgeProps {
    children: React.ReactNode;
    disabled?: boolean;
    mode?: 'solid' | 'ghost' | 'gray';
    fontSize?: Number;
}