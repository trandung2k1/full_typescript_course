import ListItem from './ListItem';
interface List {
    list: ListItem[];
    load(): void;
    save(): void;
    clearList(): void;
    addItem(item: ListItem): void;
    removeItem(id: string): void;
}

export default class FullList implements List {
    static instance: FullList = new FullList();
    private constructor(private _list: ListItem[] = []) {}
    get list(): ListItem[] {
        return this._list;
    }
    load(): void {
        const storedList: string | null = localStorage.getItem('myList');
        if (typeof storedList !== 'string') return;
        const parseList: { _id: string; _item: string; _checked: boolean }[] =
            JSON.parse(storedList);
        parseList.forEach((item) => {
            const newListItem = new ListItem(item._id, item._item, item._checked);
            FullList.instance.addItem(newListItem);
        });
    }
    save(): void {
        localStorage.setItem('myList', JSON.stringify(this._list));
    }
    clearList(): void {
        this._list = [];
        this.save();
    }
    addItem(item: ListItem): void {
        this._list = [...this._list, item];
        this.save();
    }
    removeItem(id: string): void {
        this._list = this._list.filter((item) => item.id !== id);
        this.save();
    }
}
