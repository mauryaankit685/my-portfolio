import { useState } from "react";

function Products() {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Handle file selection
    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setSelectedFiles(files);
        setResults([]);
        setError("");
    };

    // Remove background for multiple images
    const handleRemoveBgMultiple = async () => {
        if (selectedFiles.length === 0) {
            setError("Please select images");
            return;
        }

        setLoading(true);
        setError("");
        setResults([]);

        try {
            const promises = selectedFiles.map(async (file) => {
                const formData = new FormData();
                formData.append("image", file);

                const res = await fetch(
                    "https://my-portfolio-i3ge.onrender.com/remove-bg",
                    {
                        method: "POST",
                        body: formData,
                    }
                );

                if (!res.ok) {
                    const text = await res.text();
                    throw new Error(text || "Server error");
                }

                const blob = await res.blob();
                const outputUrl = URL.createObjectURL(blob);

                return {
                    original: URL.createObjectURL(file),
                    output: outputUrl,
                };
            });

            const processed = await Promise.all(promises);
            setResults(processed);
        } catch (err) {
            console.error(err);
            setError("Background removal failed");
        }

        setLoading(false);
    };

    // Download image
    const handleDownload = (url, index) => {
        const a = document.createElement("a");
        a.href = url;
        a.download = `background-removed-${index}.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-2xl font-bold mb-4">AI Background Remover</h1>

            {/* Upload Input */}
            <input
                type="file"
                accept="image/png, image/jpeg"
                multiple
                onChange={handleFileChange}
                className="mb-4"
            />

            {/* Remove Background Button */}
            <button
                onClick={handleRemoveBgMultiple}
                disabled={loading}
                className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
            >
                {loading ? "Processing..." : "Remove Background"}
            </button>

            {/* Error Message */}
            {error && <p className="text-red-500 mt-3">{error}</p>}

            {/* Results */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {results.map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded shadow">
                        <p className="font-medium mb-2">Result</p>

                        <img
                            src={item.output}
                            alt="result"
                            className="rounded mb-3 max-h-64 object-contain"
                        />

                        <button
                            onClick={() => handleDownload(item.output, index)}
                            className="bg-green-500 text-white px-3 py-1 rounded"
                        >
                            Download
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;