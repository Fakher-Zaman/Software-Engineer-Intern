"use client"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <div>
            <h2>Something went wrong! at Route3 Page</h2>
            <button onClick={() => reset()} className='px-3 py-2 bg-green-200 m-2 rounded'>Try again</button>
        </div>
    )
}