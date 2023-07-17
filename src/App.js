import "./App.css";
import Navbar from "./components/Navbar";
import Work from "./pages/Work";
import VideoResumePage from "./pages/VideoResumePage";
import QualificationPage from "./pages/QualificationPage";
import UpdateStatusPage from "./pages/UpdateStatusPage";
import HighlightsPage from "./pages/HighlightsPage";
import RecommendationPage from "./pages/RecommendationPage";
import { Route, Routes } from "react-router-dom";
import DownloadPage from "./pages/DownloadPage";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Work />} />
        <Route path="/qualifications" element={<QualificationPage />} />
        <Route path="/highlights" element={<HighlightsPage />} />
        <Route path="/recommendations" element={<RecommendationPage />} />
        <Route path="/upload-video-resume" element={<VideoResumePage />} />
        <Route path="/update-status" element={<UpdateStatusPage />} />
        <Route path="/download-resume" element={<DownloadPage />} />
      </Routes>
    </>
  );
}

export default App;
