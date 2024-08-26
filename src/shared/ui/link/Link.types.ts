import { FlagProps } from '@shared/ui/flag/Flag.types';

export interface LinkProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    mode?: 'list' | 'default' | 'primary' | 'secondary';
    fontSize?: Number;
    country?: FlagProps["country"]
}