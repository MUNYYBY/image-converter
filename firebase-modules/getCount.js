import { dbRT } from "../Config/firebase";
import { ref, onValue } from "firebase/database";

export default function getImagesCount(setImagesCountData) {
  try {
    const countRef = ref(dbRT, `Count/`);
    onValue(countRef, (snapshot) => {
      const data = snapshot.val();
      setImagesCountData(data);
    });
  } catch (e) {
    console.log("Error Reading count of images from realtime DB:  ", e);
  }
}
