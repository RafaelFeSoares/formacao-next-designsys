export type LinkProps = {
    children: React.ReactNode;
    disabled?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Link = ({ children, disabled, className, href, ...rest }: LinkProps) => {
    return (
        <a
            href={disabled ? undefined : href}
            className={`text-primary aria-disabled:text-disabled ${className}`}
            aria-disabled={disabled}
            {...rest}
        >
            {children}
        </a>
    )
}

export default Link