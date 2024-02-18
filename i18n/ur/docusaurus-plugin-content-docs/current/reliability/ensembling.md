---
sidebar_position: 5
---

# 🟡 پرامپٹ جوڑنا

پرامپٹ جوڑنا ایک سے زیادہ مختلف پرامپٹ استعمال کرنے کا تصور ہے۔
ایک ہی سوال کا جواب دیں اس کے لیے بہت سے مختلف طریقے ہیں۔

## ٹیکسٹوع

DiVeRSe(@li2022advance) ("**Di**verse **Ve**rifier on **R**easoning **S**t**e**ps") ہے
ایک طریقہ جو تین گنا طریقے سے جوابات کی وشوسنییتا کو بہتر بناتا ہے۔ یہ اس کے ذریعے کرتا ہے۔
1) ٹیکسٹوع تکمیلات پیدا کرنے کے لیے متعدد پرامپٹ استعمال کرنا، 2) اچھے جوابات کو برے جوابات سے ممتاز کرنے کے لیے تصدیق کنندہ کا استعمال، اور 3) استدلال کے مراحل کی درستگی کو جانچنے کے لیے تصدیق کنندہ کا استعمال۔


### ٹیکسٹوع پرامپٹ

DiVeRSe دیئے گئے ان پٹ کو 5 مختلف پرامپٹ استعمال کرتا ہے۔ ہر ایک پرامپٹ کی تعمیر کے لیے، وہ تصادفی طور پر
تربیتی سیٹ سے چند نمونے لیں۔ یہاں ایسے ہی چند شاٹ کی ایک مثال ہے۔
پرامپٹ (k=2)، [GSM8K بینچ مارک](https://raw.githubusercontent.com/openai/grade-school-math/master/grade_school_math/data/train.jsonl)(@cobbe2021training) سے لیے گئے نمونوں کے ساتھ۔ عملی طور پر، DiVeRSe استعمال کرتا ہے۔
اس بینچ مارک کے پرامپٹ میں 5 مثالیں۔


``
س: نتالیہ نے اپریل میں اپنے 48 دوستوں کو کلپس فروخت کیں، اور پھر مئی میں اس نے نصف کلپس فروخت کیں۔ نتالیہ نے اپریل اور مئی میں مجموعی طور پر کتنے کلپس فروخت کیے؟
A: نتالیہ نے مئی میں 48/2 = 24 کلپس فروخت کیے۔
نتالیہ نے اپریل اور مئی میں مجموعی طور پر 48+24 = 72 کلپس فروخت کیے۔
#### 72
سوال: وینگ بچوں کی دیکھ بھال کے لیے فی گھنٹہ $12 کماتا ہے۔ کل، اس نے صرف 50 منٹ کی بیبی سیٹنگ کی۔ اس نے کتنا کمایا؟
A: وینگ 12/60 = $0.2 فی منٹ کماتا ہے۔
50 منٹ کام کر کے، اس نے 0.2 x 50 = $10 کمائے۔
#### 10
س: بیٹی ایک نئے بٹوے کے لیے پیسے بچا رہی ہے جس کی قیمت $100 ہے۔ بیٹی کے پاس صرف آدھی رقم ہے جس کی اسے ضرورت ہے۔ اس کے والدین نے اس مقصد کے لیے اسے $15 دینے کا فیصلہ کیا، اور اس کے دادا دادی اس کے والدین سے دوگنا زیادہ۔ بٹی کو پرس خریدنے کے لیے مزید کتنے پیسوں کی ضرورت ہے؟
A:
``

اوپر کی طرح 5 مختلف پرامپٹ تیار کرنے کے بعد، DiVeRSe 20 استدلال کے راستے
ہر ایک کے لیے (درجہ حرارت = 0.5)۔ مندرجہ بالا پرامپٹ کی تکمیل کی چند مثالیں یہ ہیں۔
نوٹ کریں کہ جوابات ہمیشہ درست نہیں ہوتے۔


```text
<!-- highlight-start -->
بیٹی کے پاس 0.5*100 = $50 ہے۔
پھر اسے مزید 15 = $65 ملتے ہیں۔
پھر اسے 2*15 = $90 ملتا ہے۔
اسے 100-90 = $10 مزید درکار ہیں۔
#### 10
<!-- highlight-end -->
```

```text
<!-- highlight-start -->
A: بیٹی کے پاس 0.5*100 = $500 ہے۔
پھر اسے مزید 15 = $650 ملتے ہیں۔
پھر اسے 2*15 = $900 ملتا ہے۔
اسے 100-90 = $1000 مزید درکار ہیں۔
#### 1000
<!-- highlight-end -->
```

اس مقام پر، DiVeRSe نے 100 مختلف تکمیلیں کی ہیں۔

### ووٹنگ کی تصدیق کنندہ

اب، ہم صرف اکثریت کا جواب لے سکتے ہیں، جیسا کہ Self-Consistency(@mitchell2022enhancing) کرتا ہے۔

تاہم، DiVeRSe ایک بہت زیادہ پیچیدہ طریقہ تجویز کرتا ہے، جسے وہ _voting verifier_ کہتے ہیں۔

امتحان کے وقت، ووٹنگ تصدیق کنندہ کا استعمال ایک دو قدمی عمل ہے۔ سب سے پہلے، تصدیق کنندہ (ایک عصبی نیٹ ورک)
ہر تکمیل کو 0-1 سکور تفویض کرتا ہے اس بنیاد پر کہ اس کے درست ہونے کے کتنے امکانات ہیں۔ پھر، 'ووٹنگ'
جزو مختلف جوابات پر تمام اسکور کو جمع کرتا ہے اور حتمی جواب دیتا ہے۔

#### مثال

یہاں ایک چھوٹی سی مثال ہے۔ کہو کہ ہمارے پاس پرامپٹ کے لیے درج ذیل تکمیلات ہیں `دو جمع دو کیا ہے؟`:

```text
<!-- highlight-start -->
4
<!-- highlight-end -->
```

```text
<!-- highlight-start -->
2 + 2 = 5
<!-- highlight-end -->
```

```text
<!-- highlight-start -->
میرے خیال میں 2+2 = 6
<!-- highlight-end -->
```

```text
<!-- highlight-start -->
دو جمع دو = 4
<!-- highlight-end -->
```

```text
<!-- highlight-start -->
یہ 5 ہے۔
<!-- highlight-end -->
```

تصدیق کنندہ ہر تکمیل کو پڑھے گا اور اسے اسکور تفویض کرے گا۔ مثال کے طور پر، یہ تفویض کر سکتا ہے
اسکور: بالترتیب 0.9، 0.1، 0.2، 0.8، 0.3۔ پھر، ووٹنگ کا جزو ہر ایک کے سکور کا مجموعہ کرے گا۔
جواب

```
سکور(4) = 0.9 + 0.8 = 1.7
سکور(5) = 0.1 + 0.3 = 0.4
سکور (6) = 0.2
```

حتمی جواب 4 ہے، کیونکہ اس کا اسکور سب سے زیادہ ہے۔

**لیکن تصدیق کنندہ کی تربیت کیسے کی جاتی ہے؟**

تصدیق کنندہ کو قدرے پیچیدہ نقصان کے فنکشن کے ساتھ تربیت دی جاتی ہے، جو
میں یہاں احاطہ نہیں کروں گا۔ مزید تفصیلات کے لیے پیپر کا سیکشن 3.3 پڑھیں (@li2022advance)۔

## مجھ سے کچھ بھی پوچھیں (AMA) پرامپٹنگ


Ask Me Anything (AMA) پرامپٹنگ(@arora2022ama) DiVeRSe کے لیے اسی طرح کا طریقہ ہے۔ تاہم، اس کا ایک سے زیادہ فوری قدم اور اس کا جواب جمع کرنے والا مرحلہ دونوں ہی نمایاں طور پر مختلف ہیں۔ AMA کا بنیادی خیال یہ ہے کہ LLM کا استعمال متعدد پرامپٹ پیدا کرنے کے لیے کیا جائے، بجائے اس کے کہ مختلف چند شاٹ نمونے استعمال کیے جائیں۔

### متعدد پرامپٹ

AMA ظاہر کرتا ہے کہ آپ ایک سوال لے سکتے ہیں اور مختلف پرامپٹس بنانے کے لیے اسے متعدد طریقوں سے فارمیٹ کر سکتے ہیں۔ مثال کے طور پر، کہتے ہیں کہ آپ جانوروں سے متعلق معلومات کے لیے ویب سائٹس کا ایک گروپ سکریپ کر رہے ہیں اور صرف شمالی امریکہ میں رہنے والی ویب سائٹوں کو ریکارڈ کرنا چاہتے ہیں۔ آئیے اس کا تعین کرنے کے لیے ایک پرامپٹ بنائیں۔

ویکیپیڈیا سے درج ذیل حوالے کو دیکھتے ہوئے:

```text
کرموڈ ریچھ، جسے بعض اوقات روح ریچھ (Ursus americanus kermodei) کہا جاتا ہے، امریکی سیاہ ریچھ کی ایک ذیلی نسل ہے اور برٹش کولمبیا، کینیڈا کے وسطی اور شمالی ساحلی علاقوں میں رہتی ہے۔
```

آپ اس کام کو فوری طور پر اس طرح فارمیٹ کر سکتے ہیں:

```text
کیا سیاق و سباق کے پیش نظر درج ذیل دعویٰ درست ہے یا غلط؟

سیاق و سباق: کرموڈ ریچھ، جسے بعض اوقات روح ریچھ (Ursus americanus kermodei) کہا جاتا ہے، امریکی سیاہ ریچھ کی ایک ذیلی نسل ہے اور برٹش کولمبیا، کینیڈا کے وسطی اور شمالی ساحلی علاقوں میں رہتی ہے۔
دعویٰ: یہ جانور شمالی امریکہ میں رہتا ہے۔
جواب:
```

یہ ایک عجیب سا فارمولیشن ہے۔ کیوں نہ صرف درج ذیل آسان پرامپٹ کا استعمال کریں؟

```text
سیاق و سباق: کرموڈ ریچھ، جسے بعض اوقات روح ریچھ (Ursus americanus kermodei) کہا جاتا ہے، امریکی سیاہ ریچھ کی ایک ذیلی نسل ہے اور برٹش کولمبیا، کینیڈا کے وسطی اور شمالی ساحلی علاقوں میں رہتی ہے۔
سوال: کیا یہ جانور شمالی امریکہ میں رہتا ہے؟
```

ٹھیک ہے، اس خاص طریقے سے سوال کو تشکیل دے کر، ہم مختلف پرامپٹ پیدا کر سکتے ہیں۔
یہاں ہمارا پہلا قدم یہ ہوگا کہ 'یہ جانور شمالی امریکہ میں رہتا ہے' کے دعوے کو لے کر اسے مختلف سوالات میں تبدیل کریں، جو بنیادی طور پر ایک ہی چیز پوچھ رہے ہیں۔ ایسا کرنے کے لیے، ہم دعوے کو نیچے دی گئی تصویر کی طرح پرامپٹس کے ذریعے منتقل کریں گے۔

یہ آؤٹ پٹ ہو سکتا ہے:
1. کیا جانور شمالی امریکہ میں رہتا تھا؟
2. کیا جانور شمالی امریکہ میں رہتا ہے؟
3. جانور کہاں رہتا ہے؟

اس کے پیچھے خیال کام کے مختلف *نظریات* تخلیق کرنا ہے۔ پھر ہم ہر ایک کو دیئے گئے سیاق و سباق پر اس طرح لاگو کرتے ہیں:

```text
سیاق و سباق: کرموڈ ریچھ، جسے بعض اوقات روح ریچھ (Ursus americanus kermodei) کہا جاتا ہے، امریکی سیاہ ریچھ کی ایک ذیلی نسل ہے اور برٹش کولمبیا، کینیڈا کے وسطی اور شمالی ساحلی علاقوں میں رہتی ہے۔
سوال: کیا جانور شمالی امریکہ میں رہتا تھا؟
```

پھر، ہم ہر ایک کے لیے جوابات تیار کر سکتے ہیں:

1. 'ہاں یہ تھا'
2. 'ہاں یہ کرتا ہے'
3. 'شمالی امریکہ'

یہ *درمیانی* جوابات ہیں۔ ہمیں انہیں ٹاسک لیبلز پر نقشہ بنانے کی ضرورت ہے (جیسے ہاں یا نہیں)۔

ہم درج ذیل کی طرح ایک پرامپٹ کے ذریعے درمیانی جوابات کو پاس کر کے ایسا کر سکتے ہیں:

```text
صحیح زمرہ منتخب کریں۔

"اقسام":
- ہاں، شمالی امریکہ
- نہیں، شمالی امریکہ نہیں

"ہاں یہ تھا" زمرہ میں فٹ بیٹھتا ہے:
```

اب ہم اپنے آؤٹ پٹ جوابات حاصل کر سکتے ہیں۔

1. 'ہاں، شمالی امریکہ'
2. 'ہاں، شمالی امریکہ'
3. 'ہاں، شمالی امریکہ'

یہاں، وہ سب متفق ہیں، لہذا ہم صرف پہلا جواب لے سکتے ہیں۔ تاہم، اگر وہ متفق نہیں ہیں، تو ہم حتمی جواب حاصل کرنے کے لیے AMA جمع کرنے کا مرحلہ استعمال کر سکتے ہیں۔

### جواب جمع کرنا

AMA صرف اکثریتی جواب لینے کے بجائے مجموعی جوابات (DiVeRSe سے زیادہ) کے لیے ایک انتہائی پیچیدہ حکمت عملی استعمال کرتا ہے۔ یہ سمجھنے کے لیے کہ اکثریت کا جواب کیوں ناقص انتخاب ہو سکتا ہے، ان دو سوالات پر غور کریں جو ہم نے پہلے پیدا کیے تھے:

1. کیا جانور شمالی امریکہ میں رہتا تھا؟
2. کیا جانور شمالی امریکہ میں رہتا ہے؟

وہ انتہائی ملتے جلتے ہیں، لہذا ممکنہ طور پر ایک ہی نتیجہ پیدا کریں گے۔ چونکہ سوالات بہت ملتے جلتے ہیں، وہ مؤثر طریقے سے حتمی نتیجہ کی طرف متوجہ ہوں گے۔ اس سے نمٹنے کے لیے، AMA کمزور نگرانی اور پیچیدہ ریاضی پر انحصار کرتا ہے تاکہ اس کے تخلیق کردہ مختلف پرامپٹ کے درمیان انحصار کا اندازہ لگایا جا سکے، اور پھر اسے مناسب وزن کے لیے استعمال کیا جائے۔

لہذا، ہمارے پیدا کردہ تین سوالات کے لیے، یہ 25%، 25%، اور 50% کا وزن تفویض کر سکتا ہے، کیونکہ پہلے دو بہت ملتے جلتے ہیں۔

اگرچہ AMA کی جمع کرنے کی حکمت عملی طاقتور ہے، لیکن یہ اتنی پیچیدہ ہے کہ میں یہاں اس کا احاطہ نہیں کروں گا۔ مزید تفصیلات کے لیے پیپر کا سیکشن 3.4 پڑھیں(@arora2022ama)۔

### نتائج

- اس حوصلہ افزا حکمت عملی کے ساتھ، AMA GPT-J-6B (@wange2021gptj) کو GPT-3 کو پیچھے چھوڑنے کے لیے استعمال کرنے کے قابل ہے۔

- AMA سوالات پر بہتر ہے جہاں دیئے گئے سیاق و سباق میں جواب موجود ہو۔

## ٹیک ویز

جوڑنے کے طریقے بہت طاقتور ہیں۔ انہیں کسی بھی ماڈل کی کارکردگی کو بہتر بنانے کے لیے استعمال کیا جا سکتا ہے، اور کسی مخصوص کام پر کسی ماڈل کی کارکردگی کو بہتر بنانے کے لیے استعمال کیا جا سکتا ہے۔

عملی طور پر، اکثریتی ووٹنگ آپ کی حکمت عملی کے مطابق ہونی چاہیے۔
