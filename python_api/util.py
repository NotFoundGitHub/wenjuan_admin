from flask import Flask
from flask_restful import Api, Resource, reqparse
import jieba

app = Flask(__name__)
api = Api(app)


parser = reqparse.RequestParser()
parser.add_argument('data', type=str)


def cutTxt(txt):
    words = jieba.lcut(str(txt))     # 使用精确模式对文本进行分词
    counts = {}     # 通过键值对的形式存储词语及其出现的次数
    for word in words:
        if len(word) == 1:    # 单个词语不计算在内
            continue
        else:
            counts[word] = counts.get(word, 0) + 1    # 遍历所有词语，每出现一次其对应的值加 1
    items = list(counts.items())  # 将键值对转换成列表
    items.sort(key=lambda x: x[1], reverse=True)    # 根据词语出现的次数进行从大到小排序
    wordlist = []
    topN = 10
    if len(items) > 200:
        topN = int(len(items)/5) if int(len(items)/5) <= 100 else 100
    else:
        topN = int(len(items)/4) if len(items) > 40 else len(items)

    for i in range(topN):
        word, count = items[i]
        wordlist.append({"word": word, "count": count})

    return wordlist


class WordCloud(Resource):
    def get(self):
        return {"name": 'wordcloud'}

    def post(self):
        args = parser.parse_args()
        return {'data': cutTxt(args.data)}


api.add_resource(WordCloud, '/')

if __name__ == '__main__':
    app.run(port=12344, debug=False)
