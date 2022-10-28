# ‘Qamar’ (qa-mar) / moon 🌕

An API that shows verses from the Qur'an based on emotions.

The `duas.json` has `duas` picked from either `Qur'an` or `Hadith`.
And `emotionBasedVerses.json` has verses picked from `Qur'an` only.

## Endpoint

1. `/verses` returns all of the `verses` that are present.
1. `/verses/:id` returns a `verse` based on the `id`.

1. `/duas` returns all the `duas` that are present.
1. `/duas/:duaid` returns a `dua` based on the `id`.

## Returned Data

### For Verses

```json
{
  "id": 2,
  "title": "Angry",
  "sub_title": "Extinguish",
  "arabic": "ٱلَّذِينَ يُنفِقُونَ فِى ٱلسَّرَّآءِ وَٱلضَّرَّآءِ وَٱلْكَـٰظِمِينَ ٱلْغَيْظَ وَٱلْعَافِينَ عَنِ ٱلنَّاسِ ۗ وَٱللَّهُ يُحِبُّ ٱلْمُحْسِنِينَ",
  "urdu_translation": "جو آسودگی اور تنگی میں (اپنا مال خدا کی راہ میں) خرچ کرتےہیں اور غصے کو روکتے اور لوگوں کے قصور معاف کرتے ہیں اور خدا نیکو کاروں کو دوست رکھتا ہے",
  "english_translation": "Who spend [in the cause of Allah] during ease and hardship and who restrain anger and who pardon the people - and Allah loves the doers of good"
}
```

### For Duas

```json
{
  "id": 1,
  "title": "For Forgiveness",
  "arabic": " رَبِّ إِنِّى ظَلَمْتُ نَفْسِى فَٱغْفِرْ لِى",
  "urdu_translation": " اے پروردگار میں نے اپنے آپ پر ظلم کیا تو مجھے بخش دے",
  "english_translation": "My Lord! I have definitely wronged my soul, so forgive me."
}
```

PS: Some of the `translation` is not present for now, but will be soon added. If you're interested in making a contribution, please do so.

## For Contribution

- Apparently, **Qamar** has **27** verses in `emotionBasedVerses.json`
- And **28** duas in `duas.json`

Please clone this repo by pasting the below code in the terminal

```bash
  git clone https://github.com/realtouseef/qamar.git

  # then

  cd qamar
  yarn

  # to start the server
  yarn start
```

If you wanna add more `duas` or `verses`, please follow this pattern:

### Pattern for Verses

```json
{
  "id": "",
  "title": "",
  "sub_tite": "",
  "arabic": "",
  "urdu_translation": "",
  "english_translation": ""
}
```

### Pattern for Duas

```json
{
  "id": ,
  "title": "",
  "arabic": "",
  "urdu_translation": "",
  "english_translation": ""
}
```
