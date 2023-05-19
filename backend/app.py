from flask import Flask,render_template, request, jsonify
from pymongo import MongoClient
from bson.objectid import ObjectId
from flask_cors import CORS
from bs4 import BeautifulSoup
from model import model

app = Flask(__name__)
client=MongoClient('mongodb://localhost:27017')
db=client['categories']
CORS(app)
history = []

@app.route('/classifier', methods=['POST'])
def scrape():
    data = request.json
    url = data.get('url')
    
    try:
        soup = BeautifulSoup(url, 'html.parser')
        paragraphs = soup.find_all('p')
        article_content = ' '.join([p.text for p in paragraphs])
        predicted_category=model(article_content)
        
        # Store the request and prediction in history
        history.append({
            'url': url,
            'predicted_category': predicted_category
        })

        db['users'].insert_one({
            "url": url,
            "predicted_category": predicted_category
        })

        return jsonify({

            'predictedCategory': predicted_category
            })

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/classifier', methods=['GET'])
def get_history():
    all_data=db['user'].find()
    dataJson=[]
    for data in all_data:
        url=data['url']
        predicted_category=data['predictedCategory']

        dataDict={
            "url":url,
            "predicted_category":predicted_category
        }
        dataJson.append(dataDict)
    return jsonify(dataJson)

if __name__ == '__main__':
    app.run(debug=True)
