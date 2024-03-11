export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <h2 className='bg-slate-300'>This is a Template of route1</h2>
            <div>{children}</div>
        </>
    )
}