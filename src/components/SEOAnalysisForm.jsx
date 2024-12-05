import React, { useState } from "react";
import axios from "axios";

const SEOAnalysisForm = () => {
    const [url, setUrl] = useState("");
    const [report, setReport] = useState(null);

    const handleAnalyze = async () => {
        try {
            const response = await axios.post("http://localhost:5268/api/Seo/analyze", {url});
            setReport(response.data);
        } catch (error) {
            console.error("Error analyzing URL:", error);
        }
    };

    return (
        <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-md">
            <h1 className="text-2xl font-bold mb-4">SEO Health Check</h1>
            <input
                type="text"
                placeholder="Enter URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full p-2 border rounded mb-4"
            />
            <button
                onClick={handleAnalyze}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Analyze
            </button>

            {report && (
                <div className="mt-4">
                    <h2 className="text-xl font-semibold">Analysis Report</h2>
                    <p>Page Speed: {report.pageSpeed}</p>
                    <p>Meta Tag Issues: {report.metaTagIssues}</p>
                    <p>Broken Links: {report.brokenLinks}</p>
                    <p>Recommendations: {report.recommendations}</p>
                </div>
            )}
        </div>
    );
};

export default SEOAnalysisForm;
