import { useState } from "react";
import { query } from "./components/APIManeger";

function App() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerateImage = async () => {
    try {
      setLoading(true);
      const imageData = await query(prompt);

      const imageSrc = URL.createObjectURL(imageData)
      setImage(imageSrc);
      setLoading(false);
      console.log(imageSrc);
    } catch (error) {
      setLoading(false);
      console.error("Error generating image:", error);
    }
  };

  if (loading) {
    return (
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-full flex items-center   justify-center text-4xl text-black font-bold">
        Loading...
      </div>
    );
  }
  

  return (
    <div className="container text-center mx-auto py-8">
      <h1 className="text-3xl font-bold my-10 ">Image Generator</h1>
      <div className="flex items-center justify-center">
        <input
          type="text"
          className="w-64 px-4 py-2 border border-gray-300 rounded-md mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter text..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={handleGenerateImage}
        >
          Get Result
        </button>
      </div>

      {image && (
        <div className="flex justify-center mx-auto shadow-black w-[30%] h-[20%]  items-start mt-10"> 
          <img
        src={image}
          className="h-full object-cover w-full"
          alt="Generated Image"
        />
        </div>
      )}
    </div>
  );
}

export default App;
