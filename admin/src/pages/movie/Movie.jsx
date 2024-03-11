import { Link, useLocation, useNavigate } from "react-router-dom";
import "./movie.css";
import { Publish } from "@material-ui/icons";
import { useContext, useState } from "react";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { updateMovie } from "../../context/movieContext/apiCalls";
export default function Movie() {
  const navigate = useNavigate();

  const location = useLocation();
  const movie = location.state?.movie;
  const { dispatch } = useContext(MovieContext);

  const [title, setTitle] = useState(movie?.title || "");
  const [year, setYear] = useState(movie?.year || "");
  const [genre, setGenre] = useState(movie?.genre || "");
  const [limit, setLimit] = useState(movie?.limit || "");
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [img, setImg] = useState(null);

  const handleUpdate = () => {
    const movieData = {
      title: title || movie.title,
      year: year || movie.year,
      genre: genre || movie.genre,
      limit: limit || movie.limit,
      trailer: trailer || movie.trailer,
      video: video || movie.video,
      img: img || movie.img,
    };

    updateMovie(movie._id, movieData, dispatch);
    navigate("/movies");
  };
  console.log(" the movie", movie);

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Movie</h1>
        <Link to="/newMovie">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={movie?.img} alt="" className="productInfoImg" />
            <span className="productName">{movie?.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{movie?._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">genre:</span>
              <span className="productInfoValue">{movie?.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">year:</span>
              <span className="productInfoValue">{movie?.year}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">limit:</span>
              <span className="productInfoValue">{movie?.limit}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Movie Title</label>
            <input
              type="text"
              placeholder={movie?.title}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Year</label>
            <input
              type="text"
              placeholder={movie?.year}
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
            <label>Genre</label>
            <input
              type="text"
              placeholder={movie?.genre}
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            />
            <label>Limit</label>
            <input
              type="text"
              placeholder={movie?.limit}
              value={limit}
              onChange={(e) => setLimit(e.target.value)}
            />
            <label>Trailer</label>
            <input
              type="file"
              onChange={(e) => setTrailer(e.target.files[0])}
            />
            <label>Video</label>
            <input type="file" onChange={(e) => setVideo(e.target.files[0])} />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={movie?.img} alt="" className="productUploadImg" />
              <label htmlFor="file">
                <Publish />
              </label>
              <input
                onChange={(e) => setImg(e.target.files[0])}
                type="file"
                id="file"
                style={{ display: "none" }}
              />
            </div>
            <button className="productButton" onClick={() => handleUpdate()}>
              Update
            </button>
            {/* {isUpdateSuccessful && (
        <div className="popup">
          <p>Update successful!</p>
          <button onClick={handlePopupClose}>Close</button>
        </div>
      )} */}
          </div>
        </form>
      </div>
    </div>
  );
}
