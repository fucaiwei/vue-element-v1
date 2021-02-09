import router from '../../router'

export const common ={
    setStorage(key,obj) {
        localStorage.setItem(key, JSON.stringify(obj));
        return this.getStorage(key);
    },
    getStorage(key) {
        let str = localStorage.getItem(key);
        return JSON.parse(str);
    },
     delStorage(key) {
        localStorage.removeItem(key);
    },
    clearStorage() {
        this.delStorage('siteStorage')
        this.delStorage('menuStorage')

    },
    clearStorageAll() {
        localStorage.clear();
    },
    saveMenuStorage(menuData) {
        this.setStorage('menuStorage',menuData)
    },
    handleSetMenuIndex(toPath) {
        let menu = this.getStorage('menuStorage')
        let active = []
        menu.list.forEach(function (value,index) {
            value.aside.forEach(function (val,key) {
                if(val.path===toPath){
                    active = [index,key]
                }
            })
        })
       if(active.length !== 0){
           menu.activeIndex = active[0].toString()
           menu.activeSubIndex = active[1].toString()
       }
        this.setStorage('menuStorage',menu)

        return menu;

    },
    jumpHone(){
        router.push({ name: 'index'})
    },
    jumpLogin(){
        router.push({ name: 'login'})
    }
};
