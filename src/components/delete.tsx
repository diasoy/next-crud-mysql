//components\delete.tsx
import { deleteEmployee } from "@/libs/action";
  
export const DeleteButton = ({ id }: { id: string }) => {
  const DeleteEmployeetWithId = deleteEmployee.bind(null, id);
  return (
    <form action={DeleteEmployeetWithId}>
      <button className="btn btn-error">
        Delete
      </button>
    </form>
  );
};