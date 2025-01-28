export default function Container({
    children
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="mx-auto w-full max-w-[192rem] px-[1.6rem]">
            {children}
        </div>
    );
}
