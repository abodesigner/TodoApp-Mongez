import Helmet from "@mongez/react-helmet";
import Todo from "apps/front-office/todo/components/Todo";

export default function HomePage() {
  return (
    <div className="bg-gray-950 flex flex-col items-center h-dvh grow">
      <Helmet title="todo app" appendAppName={false} />
      <Todo />
    </div>
  );
}
