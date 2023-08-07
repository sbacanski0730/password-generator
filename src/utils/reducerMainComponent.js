const formFieldsNames = {
  passwordLength: "passwordLength",
  uppercaseLetters: "uppercaseLetters",
  numbers: "numbers",
  symbols: "symbols",
};

const reducerMainComponent = (state, action) => {
  switch (action.type) {
    case "PASSWORD_LENGTH": {
      if (action.value === "" || state.length === 1)
        return { ...state, [formFieldsNames.passwordLength]: "0" };

      if (action.value === "" || !state.length === 1) return state;

      if (parseInt(action.value.slice(action.value.length - 2), 10) > 30) {
        return { ...state, [formFieldsNames.passwordLength]: "30" };
      }

      return {
        ...state,
        [formFieldsNames.passwordLength]: action.value.slice(
          action.value.length - 2
        ),
      };
    }

    case "UPPERCASE_LETTERS":
      return {
        ...state,
        [formFieldsNames.uppercaseLetters]: !state.uppercaseLetters,
      };

    case "NUMBERS":
      return {
        ...state,
        [formFieldsNames.numbers]: !state.numbers,
      };
    case "SYMBOLS":
      return {
        ...state,
        [formFieldsNames.symbols]: !state.symbols,
      };
    default:
      return state;
  }
};

export default reducerMainComponent;
