import { ThemeProvider } from "@/lib/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "@/pages/LandingPage";
import { EditPage } from "@/pages/EditPage";
import { getContent } from "@/lib/content";
import { Toaster } from "sonner";
import { useMemo } from "react";

function App() {
  const content = useMemo(() => getContent(), []);

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage content={content} />} />
          <Route path="/edit-cards-content" element={<EditPage />} />
        </Routes>
      </Router>
      <Toaster position="top-center" richColors />
    </ThemeProvider>
  );
}

export default App;
