import "./Search.css";

// hooks
import { useQuery } from "../../hooks/useQuery";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useResetComponentMessage } from "../../hooks/useResetComponentMessage";

// components
import LikeContainer from "../../components/LikeContainer/LikeContainer";
import PhotoItem from "../../components/PhotoItem/PhotoItem";
import { Link } from "react-router-dom";

// Redux
import { searchPhotos, like } from "../../slices/photoSlice";

const Search = () => {
  const query = useQuery();
  const search = query.get("q");

  const dispatch = useDispatch();

  const resetMessage = useResetComponentMessage(dispatch);

  const { user } = useSelector((state) => state.auth);
  const { photos, loading, error } = useSelector((state) => state.photo);

  // Load all photos
  useEffect(() => {
    dispatch(searchPhotos(search));
    console.log("Searching for photos with query:", search);
  }, [dispatch, search]);

  const handleLike = (photo) => {
    if (photo) {
      dispatch(like(photo._id));
      resetMessage();
    }
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Ocorreu um erro: {error}</p>;
  }

  return (
    <div id="search">
      <h2>Você está buscando por: {search}</h2>
      {Array.isArray(photos) && photos.length > 0 ? (
        photos.map((photo) => (
          <div key={photo._id}>
            <PhotoItem photo={photo} />
            <LikeContainer photo={photo} user={user} handleLike={handleLike} />
            <Link className="btn" to={`/photos/${photo._id}`}>
              Ver mais
            </Link>
          </div>
        ))
      ) : (
        <h2 className="no-photos">
          Não foram encontrados resultados para a sua busca...
          <Link to={`/users/${user._id}`}>clique aqui</Link>
        </h2>
      )}
    </div>
  );
};

export default Search;
