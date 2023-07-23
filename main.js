"use script"
Vue.createApp({
    data() {
        return {
            newId: 4,
            newItem: {
                id: "",
                text: "",
                done: false,
            },
            todoList: [
                {
                    id: 1,
                    text: "Portare a spasso il gatto",
                    done: false,
                },
                {
                    id: 2,
                    text: "Far correre sulla ruota il criceto",
                    done: false,
                },
                {
                    id: 3,
                    text: "Giocare a scacchi con il cane",
                    done: false,
                },
            ]
        };
    },
    methods: {
        addItem() {
            //creo un clone per sviare il problema della reattività e lo pusho
            const itemClone = {...this.newItem,
                                id: this.newId++
            }
            this.todoList.push(itemClone)
        },
        deleteItem(idItem) {
            console.log(idItem)
            //faccio ciclo for per cercare tra i miei indici
            let indexToDelete = this.todoList.findIndex((todoItem) => todoItem.id === idItem);
            console.log(indexToDelete)

            //indico cosa cancellare   indice   elementi da cancellare
            this.todoList.splice(indexToDelete, 1)
        },
        barra(todoItem) {
            if (todoItem.done === true) {
                todoItem.done = false;
            } else {
                todoItem.done = true;
            }
        },

    }
}).mount("#app")

