class MainStorage {
    set(name, value) {
        window.localStorage.setItem(name, JSON.stringify(value));
    }
    get(name) {
        let value = window.localStorage.getItem(name);
        if (value) {
            return JSON.parse(value);
        }
    }
    //指定删除
    remove(name) {
        window.localStorage.removeItem(name);
    }
    // 全部删除
    clear() {
        window.localStorage.clear();
    }
}
export default new MainStorage();
