import { dbRT } from "../Config/firebase";
import { set, ref, increment } from "firebase/database";

export default async function setImageCount() {
  await set(ref(dbRT, `Count/`), {
    imageConversionCount: increment(1),
  });
}
