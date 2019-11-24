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

export const editDone = (edited, selected) => {
  return {
    type: LIST.DONE,
    diary: {
      title: edited.title,
      date: selected.selectedDiary.date,
      text: edited.text,
    },
    index: selected.selectedIndex
  };
};
