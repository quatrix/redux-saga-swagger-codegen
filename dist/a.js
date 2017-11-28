"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class pingAction {
    get REQUEST() { return 'API//ping//REQUEST'; }
    get SUCCESS() { return 'API//ping//SUCCESS'; }
    get FAILURE() { return 'API//ping//FAILURE'; }
    request(parameters) {
        return Object.assign({}, parameters, { type: 'API//ping//REQUEST' });
    }
    success() {
        return {
            type: 'API//ping//SUCCESS',
        };
    }
    failure() {
        return {
            type: 'API//ping//FAILURE',
        };
    }
}
exports.pingAction = pingAction;
class createUserAction {
    get REQUEST() { return 'API//createUser//REQUEST'; }
    get SUCCESS() { return 'API//createUser//SUCCESS'; }
    get FAILURE() { return 'API//createUser//FAILURE'; }
    request(parameters) {
        return Object.assign({}, parameters, { type: 'API//createUser//REQUEST' });
    }
    success() {
        return {
            type: 'API//createUser//SUCCESS',
        };
    }
    failure() {
        return {
            type: 'API//createUser//FAILURE',
        };
    }
}
exports.createUserAction = createUserAction;
//# sourceMappingURL=a.js.map