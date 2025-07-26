import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const removeLastContact = async () => {
    try {
        const contacts = await readContacts();
        contacts.splice(-1, 1);
        await writeContacts(contacts);
        console.log('Останній контакт видалено');
    } catch (error) {
        console.error('Помилка видалення останнього контакту:', error);
    }
};

removeLastContact();
