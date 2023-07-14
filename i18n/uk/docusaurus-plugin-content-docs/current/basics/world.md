---
sidebar_position: 105
---

# 🟢 Розуміння мислення ШІ


import Brain from '@site/docs/assets/basics/brain.svg';

<div style={{textAlign: 'center'}}>
  <Brain style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>

Є кілька простих речей, які ви повинні знати про різні штучні інтелекти та їхню роботу, перш ніж почати читати решту курсу.


## Різні ШІ

Існують тисячі, якщо не мільйони ШІ. Деякі кращі за інших. Різні ШІ можуть створити [зображення](https://openai.com/product/dall-e-2), [музику](https://google-research.github.io/seanet/musiclm/examples/), [текст](https://platform.openai.com/playground), навіть [відео](https://makeavideo.studio/). Зауважте, що все це *генеративні* ШІ, тобто ШІ, які *створюють* речі. Існують також *дискримінантні* ШІ, тобто ШІ, які *класифікують* речі. Наприклад, ви можете використовувати класифікатор зображень, щоб визначити, чи є зображення кішкою, чи собакою. У цьому курсі ми не використовуватимемо жодних дискримінантних ШІ.


Лише кілька генеративних ШІ наразі достатньо розвинені, щоб бути особливо корисними для інженерії запитів. У цьому курсі ми в основному використовуємо GPT-3 і ChatGPT. Як ми згадували на останній сторінці, ChatGPT є чат-ботом, а GPT-3 – ні. **Зазвичай вони дають різні відповіді на одне й те саме запитання**. Якщо ви розробник, я рекомендую використовувати GPT-3, оскільки він більш відтворюваний. Якщо ви не розробник, я рекомендую використовувати [ChatGPT](https://learnprompting.org/docs/category/%EF%B8%8F-image-prompting), оскільки він простіший у використанні. Більшість методів у цьому курсі можна застосувати до обох ШІ. Однак деякі з них стосуватимуться лише GPT-3, тому ми рекомендуємо вам використовувати GPT-3, якщо ви хочете користуватися всіма техніками цього курсу.

Ми також використовуватимемо [Stable Diffusion](https://beta.dreamstudio.ai/home) і [DALLE](https://openai.com/product/dall-e-2) у розділі генерація зображень. Перегляньте більше актуальних ШІ [тут](https://learnprompting.org/docs/products#chatbots).

## Як працюють ці ШІ

У цьому розділі описано аспекти популярних генеративних **текстових** штучних інтелектів. Ці штучні інтелекти мають мозок, який складається з мільярдів штучних нейронів. Те, як ці нейрони структуровані, називається трансформером. Це досить складний тип нейронної мережі. Ви повинні розуміти, що:

1. Ці ШІ є просто математичними функціями. Замість $f(x) = x^2$, вони більше схожі на f(тисячі змінних) = тисячі можливих результатів.
2. Ці ШІ розуміють речення, розбиваючи їх на слова / підслова, які називаються токенами (наприклад, ШІ може читати `Мені не подобається` як `"мені", "не", "подобається"`). Потім кожен токен перетворюється на список чисел, щоб ШІ міг його обробити.
3. Ці ШІ передбачають наступне слово / токен у реченні на основі попередніх слів / токенів (наприклад, ШІ може передбачити `яблука` після `Мені не подобаються`). Кожен токен, який вони пишуть, базується на попередніх токенах, які вони бачили та записували; кожного разу, коли вони пишуть новий токен, вони зупиняються, щоб подумати, яким має бути наступний токен.
4. Ці ШІ переглядають кожен токен одночасно. Вони не читають зліва направо чи справа наліво, як люди.

Будь ласка, зрозумійте, що слова «думати», «мозок» і «нейрон» є зооморфізмами, які по суті є метафорами того, що модель насправді робить. Ці моделі насправді не думають, це просто математичні функції. Насправді це не мозок, а просто штучні нейронні мережі. Насправді це не біологічні нейрони, а просто числа.

Це сфера активних досліджень і філософствувань. Цей опис є досить цинічним щодо їхньої природи та має на меті зменшити популярне зображення ШІ як істот, які думають / діють як люди. Зважаючи на це, якщо ви хочете антропоморфізувати ШІ, вперед! Здається, що більшість людей так робить, і це навіть може бути корисним для навчання.


## Примітки

- [d2l.ai](https://www.d2l.ai) є хорошим ресурсом, щоб дізнатися як працює AI

- Зверніть увагу, що автори насправді обожнюють яблука. Вони дуже смачні.