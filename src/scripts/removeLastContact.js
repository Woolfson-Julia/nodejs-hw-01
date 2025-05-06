import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
    try {
      const contacts = await readContacts();
      const lastContact = contacts[contacts.length - 1];
      const lastContactId = lastContact.id;
      const updatedContacts = contacts.filter(contact => contact.id !== lastContactId);
      await writeContacts(updatedContacts);

    } catch (err) {
      console.error('Помилка додавання контакту:', err);
    }
};

removeLastContact();
