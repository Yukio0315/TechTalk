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

export const back = () => {
  return {
    type: LIST.BACK_EDITED
  };
}
export const backNoEdited = index => {
  return {
    type: LIST.BACK_NO_EDITED,
    index,
  };
}

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
}

export const saveAutomatically = (edited, selected) => {
  return {
    type: LIST.AUTO_SAVE,
    diary: {
      title: edited.title,
      date: selected.selectedDiary.date,
      text: edited.text,
    },
    index: selected.selectedIndex
  };
};

export const addNewDiary = (date, index) => {
  return {
    type: LIST.ADD,
    diary: {
      title: '',
      date,
      text: '',
    },
    index
  };
};
