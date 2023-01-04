const appLocale = process.env.REACT_APP_LOCALE;

const dotenvLang = {
  name: 'dotenv',

  lookup() {
    return appLocale;
  },
};

export default dotenvLang;
