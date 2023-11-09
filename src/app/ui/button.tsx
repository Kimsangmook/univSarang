import clsx from 'clsx'

interface ButtonProps extends React.BaseHTMLAttributes<HTMLButtonElement>{
    children:React.ReactNode;
}

export function Button({children,className,...rest}:ButtonProps){
    return(
        <button
            {...rest}
            className={clsx(
                'flex h-10 bg-blue-500',className,
            )}
        >
            {children}
        </button>

    );
}