import pandas as pd
import numpy as np
import re
import nltk
nltk.download('stopwords')
from nltk.stem import WordNetLemmatizer
from nltk.tokenize import word_tokenize
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.model_selection import train_test_split

from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from sklearn.linear_model import LogisticRegression





def remove_tags(text):
    remove = re.compile(r'<.*?>')
    return re.sub(remove, '', text)

def convert_lower(text):
   return text.lower()


def special_char(text):
  reviews = ''
  for x in text:
    if x.isalnum():
      reviews = reviews + x
    else:
      reviews = reviews + ' '
  return reviews

def remove_stopwords(text):
  stop_words = set(stopwords.words('english'))
  words = word_tokenize(text)
  return [x for x in words if x not in stop_words]

def lemmatize_word(text):
  wordnet = WordNetLemmatizer()
  return " ".join([wordnet.lemmatize(word) for word in text])


def model(data):
    dataset = pd.read_csv("Model_colab\BBC News train.csv")
    test_set = pd.read_csv("Model_colab\BBC News Test.csv")
    dataset['CategoryId'] = dataset['Category'].factorize()[0]
    dataset['Text'] = dataset['Text'].apply(remove_tags)
    dataset['Text'] = dataset['Text'].apply(special_char)
    dataset['Text'] = dataset['Text'].apply(convert_lower)
    dataset['Text'] = dataset['Text'].apply(remove_stopwords)
    dataset['Text'] = dataset['Text'].apply(lemmatize_word)
    x = dataset['Text']
    y = dataset['Category']
    x = np.array(dataset.iloc[:,0].values)
    y = np.array(dataset.CategoryId.values)

    cv = CountVectorizer(max_features = 5000)
    x = cv.fit_transform(dataset.Text).toarray()
    x_train, x_test, y_train, y_test = train_test_split(x, y, test_size = 0.3, random_state = 0, shuffle = True)
    model = LogisticRegression()
    model.fit(x_train, y_train)
    y_pred = model.predict(x_test)
    data_modified= cv.fit_transform(data).toarray()
    result=model.predict(data_modified)
    if result==0:
       answer='business'
    if result==1:
       answer='tech'
    if result==2:
       answer='politics'
    if result==3:
       answer='sport'
    if result==4:
       answer='entertainment'
    
    return answer
