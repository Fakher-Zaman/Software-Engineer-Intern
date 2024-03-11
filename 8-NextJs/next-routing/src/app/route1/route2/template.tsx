export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <h2 className='bg-blue-300'>This is a Template of route2</h2>
            <div>{children}</div>
        </>
    )
}