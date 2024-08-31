export interface InputProps {
    children?: React.ReactNode;
    type?: string;
    name: string;
    minlength?: number;
    pattern?: string;
    disabled?: boolean;
    showLabel?: boolean;
    label?: string;
    showSecondaryLabel?: boolean;
    secondaryLabel?: string;
    required?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string | number | readonly string[] | undefined;
}