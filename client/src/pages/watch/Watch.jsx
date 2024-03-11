import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./watch.scss";

export default function Watch() {
  const location = useLocation();
  // const navigate = useNavigate();
  const movie = location.state?.movie;
  // console.log("movie", movie);
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video className="video" autoPlay progress controls src={movie.video} />
    </div>
  );
}
