import Elysia from "elysia";
import StudiesPage from "./page";


const studies = new Elysia({ name: "studies", prefix: "/studies" })
  .get("/", () => {
    return <StudiesPage />;
  })
 

export default studies;
