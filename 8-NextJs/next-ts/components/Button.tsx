import { FC } from "react";

interface PrimaryButtonProps {
    type: 'primary'
    label: string
}

interface SecondaryButtonProps {
    type: 'secondary'
    label: string
}

type ButtonProps = PrimaryButtonProps | SecondaryButtonProps;

// Type predicate function to check if the button is primary
function isPrimaryButtonProps(props: ButtonProps): props is PrimaryButtonProps {
    return props.type === 'primary';
}

export const PrimaryButtonProps: PrimaryButtonProps = {
    type: 'primary',
    label: 'Primary Button'
}

export const SecondaryButtonProps: SecondaryButtonProps = {
    type: 'secondary',
    label: 'Secondary Button'
}

const Button: FC<ButtonProps> = (props) => {
    if (isPrimaryButtonProps(props)) {
        return (
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
                {props.label}
            </button>
        )
    } else {
        return (
            <button style={{ backgroundColor: 'white', color: 'blue', border: "1px solid black" }}>
                {props.label}
            </button>
        )
    }
}

export default Button;