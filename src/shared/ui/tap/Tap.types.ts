export interface TapProps {
    children: React.ReactNode;
    disabled?: boolean;
    mode?: 'solid' | 'ghost' | 'accent';
    fontSize?: Number;
    href?: string;
}