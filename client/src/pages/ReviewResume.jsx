import React, { useState } from "react";
import { FileText, Sparkles, Loader2 } from "lucide-react";

const ReviewResume = () => {
  const [input, setInput] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!input) {
      setError("Please upload your resume.");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      // simulate API call
      setTimeout(() => {
        setResult({
          score: "78%",
          strengths: [
            "Clear project descriptions",
            "Good technical skills section",
            "Consistent formatting",
          ],
          improvements: [
            "Add measurable achievements",
            "Include GitHub/portfolio links",
            "Improve summary section",
          ],
        });
        setLoading(false);
      }, 1500);
    } catch (err) {
      console.error(err);
      setError("Failed to review resume.");
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
          <h1 className="text-xl font-semibold">Resume Review</h1>
        </div>

        <p className="mt-6 text-sm font-medium">Upload Resume</p>
        <input
          onChange={(e) => setInput(e.target.files[0])}
          type="file"
          accept=".pdf,.doc,.docx,image/*"
          className="w-full p-2 px-3 outline-none text-sm rounded-md border text-gray-600 border-gray-300"
          required
        />
        <p className="text-xs mt-1 text-gray-500">
          Supports PDF, DOC, DOCX or Image formats
        </p>

        <button
          disabled={loading}
          className="mt-6 flex w-full gap-2 items-center justify-center p-2 rounded-md bg-blue-500 hover:bg-blue-600 transition text-white shadow disabled:opacity-60"
        >
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <FileText className="w-5 h-5" />}
          {loading ? "Reviewing..." : "Review Resume"}
        </button>

        {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
      </form>

      <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px]">
        <div className="flex items-center gap-3">
          <FileText className="w-5 h-5 text-[#4A7AFF]" />
          <h1 className="text-xl font-semibold">Review Result</h1>
        </div>

        <div className="flex-1 flex justify-center items-center text-sm">
          {!result && !loading && (
            <div className="flex flex-col items-center gap-5 text-gray-400">
              <FileText className="w-9 h-9" />
              <p>Upload your resume and click "Review Resume"</p>
            </div>
          )}

          {loading && (
            <div className="flex flex-col items-center gap-3 text-gray-400">
              <Loader2 className="w-8 h-8 animate-spin" />
              <p>Analyzing resume...</p>
            </div>
          )}

          {result && (
            <div className="w-full space-y-3 text-slate-700">
              <p className="text-lg font-semibold">Score: {result.score}</p>

              <div>
                <p className="font-medium">Strengths</p>
                <ul className="list-disc ml-5">
                  {result.strengths.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-medium">Improvements</p>
                <ul className="list-disc ml-5">
                  {result.improvements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewResume;
