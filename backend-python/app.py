from flask import Flask, request, send_file, jsonify
from flask_cors import CORS
from rembg import remove
from PIL import Image
import io

app = Flask(__name__)
CORS(app)  # allow React to call backend

@app.route("/remove-bg", methods=["POST"])
def remove_bg():
    if "image" not in request.files:
        return jsonify({"error": "No image uploaded"}), 400

    file = request.files["image"]

    try:
        input_image = Image.open(file).convert("RGBA")

        # Background removal
        output_image = remove(input_image)

        # Send image back as PNG
        img_io = io.BytesIO()
        output_image.save(img_io, format="PNG")
        img_io.seek(0)

        return send_file(img_io, mimetype="image/png")

    except Exception as e:
        print("❌ Error:", e)
        return jsonify({"error": "Background removal failed"}), 500


if __name__ == "__main__":
    app.run(port=5000, debug=True)