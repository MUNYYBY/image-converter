import styles from "./Image-Container.module.css";
import { AiOutlineFileImage } from "react-icons/ai";
export default function ImageContainer(props) {
  return (
    <div
      id={styles.ImageContainer}
      className="bg-body w-100 p-3 my-2 rounded shadow"
    >
      <div className="d-flex flex-row justify-content-between align-items-center">
        <div className="d-flex flex-row justify-content-center align-items-center">
          <AiOutlineFileImage size={32} />
          <p className="mb-0 px-2 text-left">{props.imageName}</p>
        </div>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <div
            className="px-2 py-1 rounded "
            style={{ backgroundColor: "#EBEBEB" }}
          >
            <p className="m-0">{props.imageSize}</p>
          </div>
          <div
            className="p-1 ms-4 rounded justify-content-center align-items-center"
            style={{ backgroundColor: "#D9D9D9" }}
          >
            <button
              type="button"
              className="btn-close mb-0"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}
