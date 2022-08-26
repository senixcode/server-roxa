"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const categoriesRoutes_1 = __importDefault(require("./routes/categoriesRoutes"));
const productsRoutes_1 = __importDefault(require("./routes/productsRoutes"));
const subcategoriesRoutes_1 = __importDefault(require("./routes/subcategoriesRoutes"));
const salesRoutes_1 = __importDefault(require("./routes/salesRoutes"));
const loginRoutes_1 = __importDefault(require("./routes/loginRoutes"));
const addressRoutes_1 = __importDefault(require("./routes/addressRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    //configurar los puertos
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        //configurar para que el servidor entienda los archivos json
        this.app.use(express_1.default.json());
        //
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    //rutas
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/categories', categoriesRoutes_1.default);
        this.app.use('/api/products', productsRoutes_1.default);
        this.app.use('/api/subcategories', subcategoriesRoutes_1.default);
        this.app.use('/api/sales', salesRoutes_1.default);
        this.app.use('/api/login', loginRoutes_1.default);
        this.app.use('/api/address', addressRoutes_1.default);
    }
    //iniciar el servidor
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server initialize');
        });
    }
}
const server = new Server();
server.start();
