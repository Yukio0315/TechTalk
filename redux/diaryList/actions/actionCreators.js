import LIST from './actions';

export const selectDiary = (diary, index) => {
  return {
    type: LIST.SELECT,
    diary,
    index,
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

export const editDiary = diary => {
  return {
    type: LIST.EDIT,
    diary
  };
};

export const editDone = () => {
  return {
    type: LIST.DONE,
    selectedIndex: null,
    selectedDiary: null,
  };
};
