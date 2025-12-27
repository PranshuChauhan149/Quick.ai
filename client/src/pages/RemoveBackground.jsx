import React, { useState } from "react";
import { Eraser, Sparkles, Loader2, Image as ImageIcon } from "lucide-react";

const RemoveBackground = () => {
  const [input, setInput] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!input) return;

    setLoading(true);
    setError("");
    setResult(null);

    try {
      // simulate API call
      setTimeout(() => {
        const fakeProcessedImage = URL.createObjectURL(input);
        setResult(fakeProcessedImage);
        setLoading(false);
      }, 1500);
    } catch (err) {
      console.error(err);
      setError("Failed to remove background.");
      setLoading(false);
    }
  };

  return (
    <div className="h-full p-6 flex items-start flex-wrap gap-4 text-slate-700">
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-[#FF4938]" />
          <h1 className="text-xl font-semibold">Background Removal</h1>
        </div>

        <p className="mt-6 text-sm font-medium">Upload Image</p>
        <input
          onChange={(e) => setInput(e.target.files[0])}
          type="file"
          accept="image/*"
          className="w-full p-2 px-3 outline-none text-sm rounded-md border text-gray-600 border-gray-300"
          required
        />
        <p className="text-xs mt-1 text-gray-500">Supports JPG, PNG and other image formats</p>

        <button
          disabled={loading}
          className="mt-6 flex w-full gap-2 items-center justify-center p-2 rounded-md bg-blue-500 hover:bg-blue-600 transition text-white shadow disabled:opacity-60"
        >
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <ImageIcon className="w-5 h-5" />}
          {loading ? "Processing..." : "Remove Background"}
        </button>

        {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
      </form>

      <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px]">
        <div className="flex items-center gap-3">
          <Eraser className="w-5 h-5 text-[#4A7AFF]" />
          <h1 className="text-xl font-semibold">Processed Image</h1>
        </div>

        <div className="flex-1 flex justify-center items-center">
          {!result && !loading && (
            <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
              <ImageIcon className="w-9 h-9" />
              <p>Upload an image and click "Remove Background"</p>
            </div>
          )}

          {loading && (
            <div className="flex flex-col items-center gap-3 text-gray-400">
              <Loader2 className="w-8 h-8 animate-spin" />
              <p>Removing background...</p>
            </div>
          )}

          {result && (
            <img
              src={result}
              alt="Processed"
              className="rounded-lg max-h-[400px] object-contain shadow"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default RemoveBackground;
