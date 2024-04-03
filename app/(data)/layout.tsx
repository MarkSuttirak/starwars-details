"use client"

const DataLayout = ({ children } : { children: React.ReactNode }) => {
  return (
    <main className="p-20 max-w-4xl m-auto flex flex-col gap-y-8">
      <header className="flex flex-col items-center gap-y-2">
        <h1 className="text-4xl font-bold">Welcome to Star Wars Details</h1>
        <p>What would you like to know about Star Wars?</p>
      </header>

      {children}
    </main>
  )
}

export default DataLayout