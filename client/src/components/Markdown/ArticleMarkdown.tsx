export const components = {
    h1: (props: any) => (
        <h1 className="text-3xl font-bold pb-2 text-primary" {...props}>
            {props.children}
        </h1>
    ),
    h2: (props: any) => (
        <h2 className="text-2xl font-bold pb-2 text-primary" {...props}>
            {props.children}
        </h2>
    ),
    h3: (props: any) => (
        <h3 className="text-xl font-bold text-primary pb-2" {...props}>
            {props.children}
        </h3>
    ),
    p: (props: any) => (
        <p className="font-normal pb-4 text-lg text-black" {...props}>
            {props.children}
        </p>
    ),
};
