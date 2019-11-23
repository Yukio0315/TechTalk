import LIST from './actions';

export const selectDiary = diary => {
  return {
    type: LIST.SELECT,
    diary
  };
};

export const createNewDiary = () => {
  return {
    type: LIST.CREATE,
    diary: {
      title: "",
      date: new Date(),
      text: "",
    }
  };
};
