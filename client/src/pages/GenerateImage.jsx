import React, { useState } from "react";
import { Sparkles, Hash, Edit, Loader2, Image as ImageIcon } from "lucide-react";

const GenerateImage = () => {
  const imageStyles = [
    "Realistic",
    "Anime",
    "3D Render",
    "Oil Painting",
    "Watercolor",
    "Sketch",
    "Cyberpunk",
    "Pixel Art",
  ];

  const [selectedStyle, setSelectedStyle] = useState("Realistic");
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("http://localhost:5000/api/generate-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: input,
          style: selectedStyle,
        }),
      });

      if (!res.ok) throw new Error("Image generation failed");

      const data = await res.json();
      setResult(data.imageUrl); // expected backend response
    } catch (err) {
      console.error(err);
      setError("Failed to generate image. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700">
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-[#8E37EB]" />
          <h1 className="text-xl font-semibold">AI Image Generator</h1>
        </div>

        <p className="mt-6 text-sm font-medium">Describe your image</p>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
          className="w-full p-2 px-3 outline-none text-sm rounded-md border border-gray-300"
          placeholder="A futuristic city at sunset..."
          required
        />

        <p className="mt-4 text-sm font-medium">Style</p>
        <div className="mt-3 flex gap-3 flex-wrap">
          {imageStyles.map((item, index) => (
            <span
              key={index}
              onClick={() => setSelectedStyle(item)}
              className={`text-xs px-4 py-1 border rounded-full cursor-pointer transition ${
                selectedStyle === item
                  ? "bg-purple-100 text-purple-700 border-purple-400"
                  : "text-purple-500 border-gray-300 hover:bg-purple-50"
              }`}
            >
              {item}
            </span>
          ))}
        </div>

        <button
          disabled={loading}
          className="mt-6 flex w-full gap-2 items-center justify-center p-2 rounded-md bg-blue-500 hover:bg-blue-600 transition text-white shadow disabled:opacity-60"
        >
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <ImageIcon className="w-5 h-5" />}
          {loading ? "Generating..." : "Generate image"}
        </button>

        {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
      </form>

      <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px]">
        <div className="flex items-center gap-3">
          <Edit className="w-5 h-5 text-[#4A7AFF]" />
          <h1 className="text-xl font-semibold">Generated Image</h1>
        </div>

        <div className="flex-1 flex justify-center items-center">
          {!result && !loading && (
            <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
              <ImageIcon className="w-9 h-9" />
              <p>Enter a prompt and click "Generate image"</p>
            </div>
          )}

          {loading && (
            <div className="flex flex-col items-center gap-3 text-gray-400">
              <Loader2 className="w-8 h-8 animate-spin" />
              <p>Generating your image...</p>
            </div>
          )}

          {result && (
            <img
              src={result}
              alt="Generated"
              className="rounded-lg max-h-[400px] object-contain shadow"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default GenerateImage;
