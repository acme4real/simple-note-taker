from flask import Flask, request, jsonify

app = Flask(__name__)
notes = {}

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/save', methods=['POST'])
def save_note():
    data = request.json
    notes['note'] = data['note']
    return jsonify(success=True)

@app.route('/load')
def load_note():
    return jsonify(note=notes.get('note', ''))

if __name__ == '__main__':
    app.run(debug=True)