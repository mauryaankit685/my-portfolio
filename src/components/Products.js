import { useState } from "react";

function Products() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [outputImage, setOutputImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [results, setResults] = useState([]);

    const handleDownload = () => {
        if (!outputImage) return;

        const link = document.createElement("a");
        link.href = outputImage;
        link.download = "background-removed.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    const handleRemoveBgMultiple = async () => {
        setResults([]);
        setLoading(true);

        for (const file of selectedFiles) {
            const formData = new FormData();
            formData.append("image", file);

            const res = await fetch("https://my-portfolio-i3ge.onrender.com/remove-bg", {
                method: "POST",
                body: formData,
            });

            if (!res.ok) {
                throw new Error("Server failed");
            }

            const blob = await res.blob();
            const url = URL.createObjectURL(blob);

            setResults((prev) => [...prev, { original: file, output: url }]);
        }

        setLoading(false);
    };
    // const handleRemoveBg = async () => {
    //     if (!selectedFile) {
    //         setError("Please select an image");
    //         return;
    //     }

    //     setError("");
    //     setLoading(true);

    //     const formData = new FormData();
    //     formData.append("image", selectedFile);

    //     try {
    //         const res = await fetch("http://localhost:5000/remove-bg", {
    //             method: "POST",
    //             body: formData,
    //         });

    //         if (!res.ok) {
    //             throw new Error("Background removal failed");
    //         }

    //         const blob = await res.blob();
    //         const imageUrl = URL.createObjectURL(blob);
    //         setOutputImage(imageUrl);
    //     } catch (err) {
    //         setError(err.message);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-2xl font-bold mb-4">Background Remover</h1>

            <input
                type="file"
                accept="image/png, image/jpeg"
                multiple
                onChange={(e) => setSelectedFiles([...e.target.files])}
            />

            <button
                onClick={handleRemoveBgMultiple}
                disabled={loading}
                className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
            >
                {loading ? "Processing..." : "Remove Background"}
            </button>

            {error && <p className="text-red-500 mt-3">{error}</p>}

            <div className="mt-6 grid grid-cols-2 gap-6">
                {selectedFile && (
                    <div>
                        <p className="font-medium mb-2">Original</p>
                        <img
                            src={URL.createObjectURL(selectedFile)}
                            alt="original"
                            className="rounded shadow"
                        />
                    </div>
                )}

                {results.map((item, index) => (
                    <div key={index} className="border p-3 rounded">
                        <img src={item.output} className="max-h-32" alt="result" />
                        <button
                            onClick={() => {
                                const a = document.createElement("a");
                                a.href = item.output;
                                a.download = `output-${index}.png`;
                                a.click();
                            }}
                            className="mt-2 bg-green-500 text-white px-3 py-1 rounded"
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