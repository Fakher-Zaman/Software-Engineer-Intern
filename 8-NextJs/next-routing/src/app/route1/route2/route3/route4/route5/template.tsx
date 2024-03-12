export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <h2 className='bg-red-300'>This is a Template of route5</h2>
            <div>{children}</div>
        </>
    )
}