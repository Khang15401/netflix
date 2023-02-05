import { ArrowBackOutlined } from "@mui/icons-material";
import "./watch.scss";
import video1 from "../../assets/video/LT.mp4";
import { Link, useLocation } from "react-router-dom";

export default function Watch() {
  const location = useLocation();
  const { movie } = location.state;
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Trang Chủ
        </div>
      </Link>
      <video className="video" autoPlay progress controls src={movie.video} />
    </div>
  );
}
