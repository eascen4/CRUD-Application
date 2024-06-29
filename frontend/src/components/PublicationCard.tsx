import { Button } from "./ui/button";

type Publication = {
  _id: string;
  title: string;
  student_id: string;
  year: number;
};

const PublicationCard = ({ publication }: { publication: Publication }) => {
  const { title, student_id, year, _id } = publication;

  const onPress = async () => {
    console.log("Delete", _id)
  };

  return (
    <div className="rounded-lg p-3 bg-slate-700 flex justify-between items-center">
      <div>
        <h2>Title: {title}</h2>
        <p>Student ID: {student_id}</p>
        <p>Year: {year}</p>
        <p>ID: {_id}</p>
      </div>
      <Button onClick={onPress}>Delete</Button>
    </div>
  );
};
export default PublicationCard;
