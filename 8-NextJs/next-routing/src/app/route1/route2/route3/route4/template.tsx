export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <h2 className='bg-orange-300'>This is a Template of route4</h2>
            <div>{children}</div>
        </>
    )
}