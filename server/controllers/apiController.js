
// fetch data from an endpoint
export const getData = async (_req, res) => {
  try {
    const data = await fetch("https://api.example.com/data");
    res.status(200).json(data);
    console.log("Data fetched successfully!");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

};
