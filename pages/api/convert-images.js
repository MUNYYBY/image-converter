export default async function handler(req, res) {
  if (req.method == "POST") {
    res.status(405).json({ error: `Method '${req.method}' not allowed! ❌` });
  }

  const { imageUrl, conversionQuality } = req.query;

  console.log(imageUrl, conversionQuality);

  res.status(200).json("convert images end point");
}
