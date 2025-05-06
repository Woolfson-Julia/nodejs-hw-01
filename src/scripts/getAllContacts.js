import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts;
  } catch (err) {
    console.error('Помилка отпримання даних з файлу:', err);
  }
};

console.log(await getAllContacts());
