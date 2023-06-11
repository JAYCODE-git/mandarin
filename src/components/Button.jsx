import styled, { css } from "styled-components";


const SIZES = {
    sm: css`
    --button-font-size: var(--font-size-xxs);
    --button-padding: 0.625rem 1rem;
    --button-radius: 0.25rem;
    `,
    md: css`
    --button-font-size: var(--font-size-xxs);
    --button-padding: 1rem 4.25rem;
    --button-radius: 0.25rem;
    `,
    lg: css`
    --button-font-size: var(--font-size-xs);
    --button-padding: 1.25rem 14rem;
    --button-radius: 0.25rem;
    `,
    cta: css`
    --button-font-size: var(--font-size-s);
    --button-padding: 1.25rem 0;
    --button-radius: 0.25rem;
    `,
};

const VARIANTS = {
    primary: css`
    --button-color: var(--color-white);
    --button-background: var(--color-primary);
    --button-border: 1px solid var(--color-primary);
    `,
    white: css`
    --button-color: var(--color-dark);
    --button-background: var(--color-white);
    --button-border: 1px solid var(--color-light);
    `,
    dark: css`
    --button-color: var(--color-white);
    --button-background: var(--color-dark);
    --button-border: 1px solid var(--color-dark);
    `,
    disabled: css`
    --button-color: var(--color-white);
    --button-background: var(--color-light);
    --button-border: 1px solid var(--color-light);
    cursor: not-allowed;
    `
};

function Button({ size, variant, children, icon, ...props }) {
    return (
        <StyledButton
            icon={icon}
            size={size}
            variant={variant}
            {...props}
        >
            <span>{children}</span>
        </StyledButton>
    )
};

const StyledButton = styled.button`
    ${({ size }) => SIZES[size]}
    ${({ variant }) => VARIANTS[variant]}

    font:inherit;
    cursor: pointer;
    margin: 0;
    border: 0;
    font-size: var(--button-font-size, 1rem);
    padding: var(--button-padding, 0.75rem, 1.5rem);
    border-radius: var(--button-radius, 0.5rem);
    color: var(--button-color, var(--color-white));
    background: var(--button-bg-color, var(--color-primary));
    display: flex;
    align-items: center;
    gap: 0.25rem;

    &:active,
    &:hover,
    &:focus {
        opacity: 0.8;
    }

    // icon이 있는 경우
    ${({ icon }) => icon && css`
        &::before {
            content: "";
            background: url(${(props) => props.icon})no-repeat center/1.5rem;
            display: inline-block;
            width: 1.5rem;
            height: 1.5rem;
        }
    `
    }

    // size가 cta인 경우
    ${({ size }) => size === "cta" && css`
        position: fixed;
        bottom: 0;
        width:100%;
        border-radius: 0;
        margin: 0 -1rem;
        align-items: center;
        justify-content: center;
    `
    }
`

export default Button