from flask import Flask, jsonify
import subprocess

app = Flask(__name__)

@app.route("/")
def home():
    return "Python API çalışıyor ✓"

@app.route("/fiyatcek")
def fiyat_cek():
    try:
        subprocess.run(["python", "get_price.py"], check=True)
        return jsonify({"status": "ok", "message": "Fiyat çekme işlemi başarıyla tamamlandı ✓"})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10000)
