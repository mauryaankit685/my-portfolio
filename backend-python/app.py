from flask import Flask, request, send_file
from flask_cors import CORS
from rembg import new_session, remove
from PIL import Image
import io

app = Flask(__name__)
CORS(app)

# Load model only once when server starts
session = new_session("u2netp")

@app.route("/")
def home():
    return "Background Removal API Running"

@app.route("/remove-bg", methods=["POST"])
def remove_bg():
    if "image" not in request.files:
        return {"error": "No image uploaded"}, 400

    file = request.files["image"]

    try:
        input_image = Image.open(file.stream).convert("RGBA")

        # Use already loaded model
        output = remove(input_image, session=session)

        img_io = io.BytesIO()
        output.save(img_io, "PNG")
        img_io.seek(0)

        return send_file(img_io, mimetype="image/png")

    except Exception as e:
        return {"error": str(e)}, 500