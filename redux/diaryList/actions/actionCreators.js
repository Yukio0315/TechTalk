import LIST from './actions';

export const selectDiary = (diary, index) => {
  return {
    type: LIST.SELECT,
    diary,
    selectedIndex: index,
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
    type: LIST.EDIT_TITLE,
    diary
  };
};
