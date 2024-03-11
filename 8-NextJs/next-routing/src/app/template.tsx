import Navbar from "@/components/Navbar";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <h2 className='bg-yellow-300'>Main Template</h2>
            <Navbar />
            <div>{children}</div>
        </>
    )
}