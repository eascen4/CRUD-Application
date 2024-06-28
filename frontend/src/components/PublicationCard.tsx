type Publication = {
    id: number;
    studentId: number;
    title: string;
    year: number;
}

const PublicationCard = ({publication} : {publication : Publication}) => {
    const {id, studentId, title, year} = publication

  return (
    <div className="rounded-xl bg-slate-600 p-4">
        <h2 className="">{title}</h2>
        <p>{year}</p>
        <p>{id}</p>
        <p>{studentId}</p>
    </div>
  )
}
export default PublicationCard