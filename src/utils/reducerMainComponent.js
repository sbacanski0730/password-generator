const formFieldsNames = {
  passwordLength: "passwordLength",
  uppercaseLetters: "uppercaseLetters",
  numbers: "numbers",
  symbols: "symbols",
};

const reducerMainComponent = (state, action) => {
  switch (action.type) {
    case "PASSWORD_LENGTH": {
      console.log("state: ", state);
      console.log("action: ", typeof action);
      // TODO: code function so that if user put number bigger than 30 it will automatically change to maximum passible password length which is 30
      console.log("action: ", action.value.slice(action.value.length - 2));
      // if (action.value.length > 3)
      //   return {
      //     ...state,
      //     [formFieldsNames.passwordLength]: action.value.slice(1),
      //   };
      return {
        ...state,
        // [formFieldsNames.passwordLength]: action.value,
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
