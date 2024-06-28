import PublicationCard from "./components/PublicationCard"

const App = () => {
  const dummyPublications = [
    {
      id: 1,
      studentId: 1,
      title: "Publication 1",
      year: 2021,
    },
    {
      id: 2,
      studentId: 1,
      title: "Publication 2",
      year: 2022,
    },
    {
      id: 3,
      studentId: 2,
      title: "Publication 3",
      year: 2023,
    },
    {
      id: 4,
      studentId: 2,
      title: "Publication 4",
      year: 2024,
    },
    {
      id: 4,
      studentId: 2,
      title: "Publication 4",
      year: 2024,
    },
    {
      id: 4,
      studentId: 2,
      title: "Publication 4",
      year: 2024,
    },
    {
      id: 4,
      studentId: 2,
      title: "Publication 4",
      year: 2024,
    },
    {
      id: 4,
      studentId: 2,
      title: "Publication 4",
      year: 2024,
    },
    {
      id: 4,
      studentId: 2,
      title: "Publication 4",
      year: 2024,
    },
    {
      id: 4,
      studentId: 2,
      title: "Publication 4",
      year: 2024,
    },
    {
      id: 4,
      studentId: 2,
      title: "Publication 4",
      year: 2024,
    },
  ]

  return (
    <main className="bg-slate-700 text-slate-50 min-h-screen relative">
      <h1 className="text-3xl text-center font-semibold pt-10 pb-5">Publications</h1>
      <section className=" mx-auto flex flex-col gap-2 p-4 max-w-screen-xl">
        {dummyPublications.map(publication => (<PublicationCard publication={publication} />))}
      </section>
    </main>
  )
}
export default App