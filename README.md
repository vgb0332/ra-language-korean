# Korean Translations for react-admin

German translations for react-admin, the frontend framework for building admin applications on top of REST services.

## Installation

```
npm install --save ra-language-korean
```

## Usage

```
import koreanMessages from 'ra-language-korean';

const messages = {
    'kr': koreanMessages,
};
const i18nProvider = locale => messages[locale];

<Admin locale="kr" i18nProvider={i18nProvider}>
  ...
</Admin>
```

## for Korean Users
번역에 문제가 있으면 Issue란에 올려주시거나 Pull request 해주세요.

## License

This translation is licensed under the MIT Licence.
