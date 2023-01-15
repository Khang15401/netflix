import { ArrowBackOutlined } from "@mui/icons-material";
import "./watch.scss";
import video1 from "../../assets/video/LT.mp4"

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src={video1}
      />
    </div>
  );
}
