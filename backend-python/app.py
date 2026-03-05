from flask import Flask, request, send_file
from flask_cors import CORS
from rembg import remove
from PIL import Image
import io

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Background Removal API Running"

@app.route("/remove-bg", methods=["POST"])
def remove_bg():
    file = request.files["image"]

    input_image = Image.open(file.stream).convert("RGBA")

    output = remove(input_image)

    img_io = io.BytesIO()
    output.save(img_io, "PNG")
    img_io.seek(0)

    return send_file(img_io, mimetype="image/png")