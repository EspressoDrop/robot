const carDealership = {
    dealershipName: 'Winner',
    location: 'Kyiv, Ukraine',
    isOpen: true,

    contactPerson: {
        name: 'Andrii Boiko',
        role: 'General Manager'
    },

    inventory: [
        { id: 1, brand: 'Tesla', model: 'Model S', year: 2023, price: 85000, type: 'Electric' },
        { id: 2, brand: 'BMW', model: 'M5', year: 2024, price: 110000, type: 'Petrol' },
        { id: 3, brand: 'Porsche', model: 'Taycan', year: 2023, price: 130000, type: 'Electric' },
        { id: 4, brand: 'Toyota', model: 'RAV4 Hybrid', year: 2022, price: 38000, type: 'Hybrid' }
    ],

    printCars: function() {
        this.inventory.forEach((car, index) => {
            console.log(`  ${index + 1}. (${car.type}) ${car.brand} ${car.model} (${car.year})`);
            console.log(`     Price: $${car.price.toLocaleString()}`);
        });
    }
};

carDealership.printCars();
