const SET_COUNTRIES = "SET_COUNTRIES";
const CHANGE_SEARCH_WORDS = "CHANGE_SEARCH_WORDS";
const SELECT_CARD_COUNTRY = "SELECT_CARD_COUNTRY";
const CLEAR_SEARCH = "CLEAR_SEARCH";
const DELETE_COUNTRY_CARD = "DELETE_COUNTRY_CARD";

const initialState = {
  countries: [],
  searchWords: "",
  selectedCards: [],
  isClear: false,
};

const cardReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTRIES: {
      return { ...state, countries: [...action.countries] };
    }
    case CHANGE_SEARCH_WORDS: {
      return { ...state, searchWords: action.word };
    }
    case CLEAR_SEARCH: {
      return { ...state, isClear: action.clear };
    }
    case DELETE_COUNTRY_CARD: {
      state.selectedCards.splice(action.index, 1);

      return {
        ...state,

        countries: [action.card, ...state.countries],
        selectedCards: [...state.selectedCards],
      };
    }

    case SELECT_CARD_COUNTRY: {
      state.countries.splice(action.index, 1);
      let selectedArr = [...state.countries];

      return {
        ...state,
        selectedCards: [...state.selectedCards, action.country],
        countries: [...selectedArr],
      };
    }
    default: {
      return state;
    }
  }
};

export const setCountries = (countries) => ({
  type: SET_COUNTRIES,
  countries,
});
export const changeSearchWords = (word) => ({
  type: CHANGE_SEARCH_WORDS,
  word,
});
export const selectCardCountry = (country, index) => ({
  type: SELECT_CARD_COUNTRY,
  country,
  index,
});
export const clearSearch = (clear) => ({
  type: CLEAR_SEARCH,
  clear,
});
export const deleteCountryCard = (card, index) => ({
  type: DELETE_COUNTRY_CARD,
  card,
  index,
});

export default cardReduser;
