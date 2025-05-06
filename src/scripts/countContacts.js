import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
    try {
      const contacts = await readContacts();
      return contacts.length;
    } catch (err) {
      console.error('Помилка додавання контакту:', err);
    }
};

console.log(await countContacts());
