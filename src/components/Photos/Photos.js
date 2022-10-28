import LazyLoad from "react-lazyload";
import { usePhotos } from "../../hooks/usePhotos";

const Photos = ({ params }) => {
  const { status, data, error } = usePhotos(params);
  const img_base64 = "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27230%27%20height=%27200%27/%3e";

  return (
    <>
      {status === "loading" && <p>Loading...</p>}
      {status === "error" && <p>Error: {error}</p>}
      {
        <ul>
          {data?.map((photo) => (
            <li key={photo.id}>
              <h4>{photo.title}</h4>
              <LazyLoad
                  once={true}
                  placeholder={
                    <img src={img_base64} alt="..." />
                  }
                >
                  <img
                    src={photo.thumbnailUrl} alt={photo.title}
                    aria-hidden="true"
                  />
                </LazyLoad>
              <br />
              <button>Delete</button>

              <br />
            </li>
          ))}
        </ul>
      }
    </>
  );
};

export default Photos;
