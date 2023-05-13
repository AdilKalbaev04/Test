import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Layout from "./Layout";
import { Route, Routes } from "react-router-dom";
import QuestPage from "./page/QuestionPage";
import { AuthPage } from "./Auth/Auth";
import { AdminPage } from "./Admin/Admin";
import Answer from "./page/AnswersPage";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<QuestPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/answer" element={<Answer />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<h1>404 Не найдена страница</h1>} />
      </Routes>
    </Layout>
  );
}

export default App;
