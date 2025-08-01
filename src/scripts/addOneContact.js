import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const addOneContact = async () => {
    try {
        const newContact = createFakeContact();
        const contacts = await readContacts();
        contacts.push(newContact);
        await writeContacts(contacts);
    } catch (error) {
        console.error('Помилка додавання контакту:', error);
    }
};

addOneContact();
