from flask import Flask, request, jsonify
from bs4 import BeautifulSoup
import requests

app = Flask(__name__)

history = []

@app.route('/', methods=['POST'])
def scrape():
    data = request.get_json()
    url = data['url']
    
    try:
        response = requests.get(url)
        soup = BeautifulSoup(response.content, 'html.parser')
        paragraphs = soup.find_all('p')
        article_content = ' '.join([p.text for p in paragraphs])
        
        # Perform AI model prediction using the article content
        
        # ...

        predicted_category = "Some category"  # Replace with your actual prediction
        
        # Store the request and prediction in history
        history.append({
            'url': url,
            'predicted_category': predicted_category
        })

        return jsonify({'predictedCategory': predicted_category})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/history', methods=['GET'])
def get_history():
    return jsonify(history)

if __name__ == '__main__':
    app.run(debug=True)
