import './css/style.css';
import 'toastify-js/src/toastify.css';
import Toastify from 'toastify-js';
import FullList from './model/FullList';
import ListItem from './model/ListItem';
import ListTemplate from './templates/ListTemplate';
const initApp = (): void => {
    const fullList = FullList.instance;
    const template = ListTemplate.instance;
    const itemEntryForm = document.getElementById('itemEntryForm') as HTMLFormElement;
    itemEntryForm.addEventListener('submit', (event: SubmitEvent): void => {
        event.preventDefault();
        const input = document.getElementById('newItem') as HTMLInputElement;
        const newEntryText: string = input.value.trim();
        if (!newEntryText) {
            Toastify({
                text: 'Title is required',
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: 'top', // `top` or `bottom`
                position: 'center', // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                className: 'error', //
                style: {
                    background:
                        'linear-gradient(98.3deg, rgb(0, 0, 0) 10.6%, rgb(255, 0, 0) 97.7%)',
                },
                onClick: function () {}, // Callback after click
            }).showToast();
            return;
        }
        const itemId: number = fullList.list.length
            ? parseInt(fullList.list[fullList.list.length - 1].id + 1)
            : 1;
        const newItem = new ListItem(itemId.toString(), newEntryText);
        fullList.addItem(newItem);
        template.render(fullList);
        input.value = '';
    });
    const clearItems = document.getElementById('clearItemsButton') as HTMLButtonElement;
    clearItems.addEventListener('click', (): void => {
        fullList.clearList();
        template.clear();
    });
    fullList.load();
    template.render(fullList);
};
document.addEventListener('DOMContentLoaded', initApp);
