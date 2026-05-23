const licenseManager = {
    salesModule: {
        description: 'Sales Enterprise',
        basePrice: 120,
        currency: 'USD',
        isLegacy: false
    },

    calendarModule: {
        description: 'Scheduler',
        basePrice: 25,
        currency: 'USD',
        isLegacy: true
    },

    get totalPrice() {
        return this.salesModule.basePrice + this.calendarModule.basePrice;
    },

    get salesStatusText() {
        return this.salesModule.isLegacy ? 'Legacy module' : 'Active module';
    },

    get calendarStatusText() {
        return this.calendarModule.isLegacy ? 'Legacy module' : 'Active module';
    },

    get salesPrice() {
        return this.salesModule.basePrice;
    },

    set salesPrice(newPrice) {
        if (typeof newPrice === 'number' && newPrice > 0) {
            this.salesModule.basePrice = newPrice;
        }
    },

    get calendarPrice() {
        return this.calendarModule.basePrice;
    },

    set calendarPrice(newPrice) {
        if (typeof newPrice === 'number' && newPrice > 0) {
            this.calendarModule.basePrice = newPrice;
        }
    },

    getSummary() {
        console.log(
            `Sales Module: ${this.salesModule.description} (${this.salesModule.basePrice} ${this.salesModule.currency}), Status: ${this.salesStatusText}\n` +
`Calendar Module: ${this.calendarModule.description} (${this.calendarModule.basePrice} ${this.calendarModule.currency}), Status: ${this.calendarStatusText}\n` +
`Total Package Price: ${this.totalPrice} ${this.salesModule.currency}`
        );
    }
};

licenseManager.getSummary();
