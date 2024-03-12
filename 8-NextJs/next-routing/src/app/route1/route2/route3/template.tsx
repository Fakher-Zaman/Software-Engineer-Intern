export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <h2 className='bg-green-300'>This is a Template of route3</h2>
            <div>{children}</div>
        </>
    )
}