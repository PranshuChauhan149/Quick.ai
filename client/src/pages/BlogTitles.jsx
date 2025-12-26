import React, { useState } from "react";
import { Hash, Sparkles, Edit, Loader2 } from "lucide-react";

const BlogTitles = () => {
  const blogCategories = [
    "General",
    "Technology",
    "Business",
    "Health",
    "Lifestyle",
    "Education",
    "Travel",
    "Food",
  ];

  const [selectedCategory, setSelectedCategory] = useState("General");
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");

    // simulate API call
    setTimeout(() => {
      setResult(`🔥 Generated title for "${input}" in ${selectedCategory} category.`);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700">
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-[#8E37EB]" />
          <h1 className="text-xl font-semibold">AI Title Generator</h1>
        </div>

        <p className="mt-6 text-sm font-medium">Keyword</p>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
          className="w-full p-2 px-3 outline-none text-sm rounded-md border border-gray-300"
          placeholder="The future of artificial intelligence..."
          required
        />

        <p className="mt-4 text-sm font-medium">Category</p>
        <div className="mt-3 flex gap-3 flex-wrap">
          {blogCategories.map((item, index) => (
            <span
              key={index}
              onClick={() => setSelectedCategory(item)}
              className={`text-xs px-4 py-1 border rounded-full cursor-pointer transition ${
                selectedCategory === item
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
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Hash className="w-5 h-5" />}
          {loading ? "Generating..." : "Generate title"}
        </button>
      </form>

      <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px]">
        <div className="flex items-center gap-3">
          <Edit className="w-5 h-5 text-[#4A7AFF]" />
          <h1 className="text-xl font-semibold">Generated article</h1>
        </div>

        <div className="flex-1 flex justify-center items-center">
          {!result && !loading && (
            <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
              <Edit className="w-9 h-9" />
              <p>Enter a topic and click "Generate title" to get started</p>
            </div>
          )}

          {loading && (
            <div className="flex flex-col items-center gap-3 text-gray-400">
              <Loader2 className="w-8 h-8 animate-spin" />
              <p>Generating your title...</p>
            </div>
          )}

          {result && (
            <div className="text-center text-lg font-medium text-slate-700 px-4">
              {result}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogTitles;
