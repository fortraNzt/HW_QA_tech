var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",

    getOnlyNumbers() {
        let pricesArray = [];
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                let number = parseInt(this[key]);
                pricesArray.push(number);
            }
        }
        return pricesArray;
    },

    price() {
        const prices = this.getOnlyNumbers();
        let total = 0;
        
        for (let i = 0; i < prices.length; i++) {
            total += prices[i];
        }
        
        return `${total} грн`;
    },

    minPrice() {
    const prices = this.getOnlyNumbers();
    let min = prices[0]; 
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
        }
    }
    return `${min} грн`;
},

    maxPrice() {
    const prices = this.getOnlyNumbers();
    let max = prices[0]; 
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > max) {
            max = prices[i];
        }
    }
    return `${max} грн`;
}
};

console.log("--- ДО додавання нової послуги ---");
console.log("Загальна вартість:", services.price());
console.log("Мінімальна ціна:", services.minPrice());
console.log("Максимальна ціна:", services.maxPrice());

services['Розбити скло'] = "200 грн";
services['Знижка'] = "-50 грн";

console.log("\n--- ПІСЛЯ додавання послуг ---");
console.log("Загальна вартість:", services.price());
console.log("Мінімальна ціна:", services.minPrice());
console.log("Максимальна ціна:", services.maxPrice());