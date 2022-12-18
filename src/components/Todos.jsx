import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import SectionTitle from "./SectionTitle";
import TodoCard from "./TodoCard";

export default function Todos() {
  const { activeIds, all } = useSelector((state) => state.todos);

  return (
    <Box id="todos" sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <SectionTitle hint="they'll make you eco-friendly">
        Todos
      </SectionTitle>

      {activeIds.map((id) => (
        <TodoCard key={id} {...all[id]} />
      ))}
    </Box>
  );
}
