import keras
from keras.models import Model
# from keras.layers import LSTM, Activation, Dense, Dropout, Input, Embedding, Flatten
# from keras.optimizers import RMSprop
from keras.preprocessing.text import Tokenizer
from keras.preprocessing import sequence
# from keras.utils import to_categorical
# from keras.callbacks import EarlyStopping
# from keras import layers
# from tensorflow.keras.callbacks import EarlyStopping
# from keras.preprocessing import sequence

from sklearn.preprocessing import OneHotEncoder

import numpy as np

import pickle

from flask import Flask, jsonify, request

from flask_cors import CORS

app = Flask(__name__)
CORS(app)


# routes
@app.route('/')
def prit():
    return "Hey there"


@app.route('/api/classify', methods=['POST'])
def classify_news():
    if request.method == "POST":

        data = request.get_json()

        news = data["text"]

        # print(data)
        # print(news)

        news = np.array([news])

        # load tokenizer
        tok = pickle.load(open('./News_classifier_CNN_tok.sav', 'rb'))

        max_len = 500

        test_sequences = tok.texts_to_sequences(news)
        test_sequences_matrix = sequence.pad_sequences(
            test_sequences, maxlen=max_len)

        model = keras.models.load_model('./News_classification_CNN.h5')

        prediction = model.predict(test_sequences_matrix)

        # {1:World,2:Sports,3:Business,4:Sci/Tech}

        labels = {0: 'World News', 1: 'Sports News',
                  2: 'Buisness News', 3: 'Science/Technology News'}

        prediction = labels[np.argmax(prediction[0])]

        return jsonify(prediction)


if __name__ == '__main__':
    app.run(port=5000)
