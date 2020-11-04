(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- Header - Cabezera -->\n<header>\n  <ul>\n    <li><a [routerLink]=\"['/sobre-mi']\" [routerLinkActive]=\"['actived']\">Sobre mi</a></li>\n    <li><a [routerLink]=\"['/proyectos']\" [routerLinkActive]=\"['actived']\">Proyectos</a></li>\n    <li id=\"logo\"><a href=\"#\">SC</a></li>\n    <li><a [routerLink]=\"['/crear-proyecto']\" [routerLinkActive]=\"['actived']\">Crear proyecto</a></li>\n    <li><a [routerLink]=\"['/contacto']\" [routerLinkActive]=\"['actived']\">Contacto</a></li>\n  </ul>\n</header>\n<!-- Cuerpo - Body -->\n<section id=\"content\">\n  <!-- Los componentes se cargaran en la etiqueta router-oulet -->\n  <router-outlet></router-outlet>\n</section>\n\n<!-- Pié de página -->\n<footer>\n  Proyecto portafolio personal - Sergio Carrasco &copy;\n</footer>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div id=\"title\">\n\t<h1>{{title}}</h1>\n\t<h2>{{subtitle}}</h2>\n\t<p>{{email}}</p>\n</div>\n\n<article class=\"about\">\n\t<h2>Sobre mí</h2>\n\t<p>\n\t\tLorem ipsum dolor sit amet consectetur adipiscing elit donec lacinia, quis fames platea aenean congue ultrices pulvinar arcu vulputate commodo, malesuada mattis conubia hendrerit mus praesent ullamcorper turpis. Leo dictumst et tempor auctor enim mauris cras senectus, platea nostra ullamcorper taciti sem risus at. Senectus sagittis elementum libero mauris malesuada molestie posuere pretium faucibus, fringilla varius ornare leo dignissim blandit curae congue euismod dictum, netus sem suscipit cursus ultrices nascetur dis tortor. Habitasse mattis feugiat tortor porttitor fermentum sem commodo, ut sociis duis vehicula neque est massa, consequat et pharetra libero molestie habitant.\n\t\tLorem ipsum dolor sit amet consectetur adipiscing elit donec lacinia, quis fames platea aenean congue ultrices pulvinar arcu vulputate commodo, malesuada mattis conubia hendrerit mus praesent ullamcorper turpis. Leo dictumst et tempor auctor enim mauris cras senectus, platea nostra ullamcorper taciti sem risus at. Senectus sagittis elementum libero mauris malesuada molestie posuere pretium faucibus, fringilla varius ornare leo dignissim blandit curae congue euismod dictum, netus sem suscipit cursus ultrices nascetur dis tortor. Habitasse mattis feugiat tortor porttitor fermentum sem commodo, ut sociis duis vehicula neque est massa, consequat et pharetra libero molestie habitant.\n\t</p>\n</article>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html": 
        /*!*************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html ***!
          \*************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n\t<h2>CONTACTO</h2>\n\t<div class=\"image\">\n\t\t<!-- Mostramos la imagen también si existe -->\n\t\t<img src=\"{{url+'../../assets/img/contacto.jpg'}}\"/>\n\t</div>\t\n\n\t<div>\n\t\t<h2></h2>\n\t\t<div id=\"contactInfo\">\n\t\t\t<h1>Sergio Carrasco</h1>\n\t\t\t<h2>Desarrollador Web Full Stack</h2>\n\t\t\t<p>Teléfono: +34 600000000</p>\n\t\t\t<p>Email: sergio@sergio.com</p>\n\t\t\t<p>Website: www.sergiowebejemplo.com</p>\n\t\t</div>\n\t</div>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/create-project/create-project.component.html": 
        /*!***************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/create-project/create-project.component.html ***!
          \***************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n\t<h2>{{title}}</h2>\n\t\n\t<form #projectForm=\"ngForm\" (ngSubmit)=\"onSubmit(projectForm)\">\n\t\t<p>\n\t\t\t<label for=\"name\">Nombre</label>\n\t\t\t<input type=\"text\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"project.name\" required />\n\t\t\t<span class=\"formError\" *ngIf=\"name.touched && !name.valid\">\n\t\t\t\tEl nombre es obligatorio.\n\t\t\t</span>\n\t\t</p>\n\t\t<p>\n\t\t\t<label for=\"description\">Descripción</label>\n\t\t\t<textarea name=\"description\" #description=\"ngModel\" [(ngModel)]=\"project.description\" required></textarea>  \n\t\t\t<span class=\"formError\" *ngIf=\"description.touched && !description.valid\">\n\t\t\t\tLa descripción es obligatoria.\n\t\t\t</span>\n\t\t</p>\n\t\t<p>\n\t\t\t<label for=\"category\">Categoría</label>\n\t\t\t<input type=\"text\" name=\"category\" #category=\"ngModel\" [(ngModel)]=\"project.category\" required />\n\t\t\t<span class=\"formError\" *ngIf=\"category.touched && !category.valid\">\n\t\t\t\tLa categoría es obligatoria.\n\t\t\t</span>\n\t\t</p>\n\t\t<p>\n\t\t\t<label for=\"year\">Año de creación</label>\n\t\t\t<input type=\"text\" name=\"year\" #year=\"ngModel\" [(ngModel)]=\"project.year\" required />\n\t\t\t<span class=\"formError\" *ngIf=\"year.touched && !year.valid\">\n\t\t\t\tEl año es obligatorio\n\t\t\t</span>\n\t\t</p>\n\t\t<p>\n\t\t\t<label for=\"langs\">Lenguajes utilizados</label>\n\t\t\t<input type=\"text\" name=\"langs\" #langs=\"ngModel\" [(ngModel)]=\"project.langs\" required />\n\t\t\t<span class=\"formError\" *ngIf=\"langs.touched && !langs.valid\">\n\t\t\t\tDetallar los lenguajes utilizados es obligatorio.\n\t\t\t</span>\n\t\t</p>\n\t\t<p>\n\t\t\t<label for=\"image\">Imagen del proyecto</label>\n\t\t\t<!-- En el input de la imagen lanzamos el evento (change) de angular que salta cuando hacemos algún cambio en un input y llama a otro método que tengamos en nuestro componente. En la variable $event tendremos todos los datos que haya capturado ese input. -->\n\t\t\t<input type=\"file\" name=\"image\" placeholder=\"Subir imagen\" (change)=\"fileChangeEvent($event)\" />\n\t\t</p>\n\t\t<input type=\"submit\" value=\"Enviar\" [disabled]=\"!projectForm.form.valid\" />\n\t</form>\n\n\t<!-- Div para mostrar si el guardado de datos ha sido satisfactirio -->\n\t<div class=\"message success\" *ngIf=\"status == 'success'\">\n\t\tEl proyecto se ha creado correctamente, puedes verlo <a [routerLink]=\"['/proyecto/', saveProject._id]\">aquí</a>.\n\t</div>\n\t<!-- Div para mostrar si ha habido un error al crear el proyecto -->\n\t<div class=\"message failed\" *ngIf=\"status == 'failed'\">\n\t\tHa ocurrido un error al crear el proyecto.\n\t</div>\n\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/detail-project/detail-project.component.html": 
        /*!***************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/detail-project/detail-project.component.html ***!
          \***************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- Cargamos la información si project existe, ya que cómo javascript carga antes que Ajax-->\n<div class=\"container\" *ngIf=\"project\">\n\t\n\t<div class=\"projectDetail\" *ngIf=\"project\">\n\t\t<!-- Cargamos la imagen si project existe, ya que cómo javascript carga antes que Ajax-->\n\t\t<div class=\"image\" *ngIf=\"project.image\">\n\t\t\t<!-- Mostramos la imagen también si existe -->\n\t\t\t<img src=\"{{url+'/get-image/'+project.image}}\" *ngIf=\"project.image\" />\n\t\t</div>\n\t\t<div class=\"data\">\n\t\t\t<h1>{{ project.name }}</h1>\n\t\t\t<h4>{{ project.description }}</h4>\n\t\t\t<p>{{ project.category }}</p>\n\t\t\t<p>{{ project.langs }}</p>\n\t\t\t<!-- Si confirm es false -->\n\t\t\t<p *ngIf=\"confirm == false\">\n\t\t\t\t<a [routerLink]=\"['/editar-proyecto', project._id]\" class=\"button_edit\">Editar</a>\n\t\t\t\t<a (click)=\"setConfirm(true)\" class=\"button_delete\">Borrar</a>\n\t\t\t</p>\n\t\t\t<!-- Si confirm es true -->\n\t\t\t<p *ngIf=\"confirm == true\">\n\t\t\t\t<span class=\"confirm\">¿Estás seguro de eliminar este proyecto?</span> <br/>\n\t\t\t\t<a (click)=\"setConfirm(false)\" class=\"button_edit\">Cancelar</a>\n\t\t\t\t<!-- Llama al método deleteProject del componente-->\n\t\t\t\t<a (click)=\"deleteProject(project._id)\" class=\"button_confirm\">Eliminar definitivamente</a>\n\t\t\t</p>\n\t\t</div>\n\t</div>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/edit-project/edit-project.component.html": 
        /*!***********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/edit-project/edit-project.component.html ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- Necesitamos poner un ngIf para que no de error en el componente edit-project porque intente cargar los datos antes que se haya cargado el objeto project. Esto es porque al cargar el componente en el método(ngOnInit) llamamos al método getProject para cargar los datos del proyecto a editar, y cómo javascrit carga antes que Ajax tenemos que poner el ngIf=\"project\" para que solo lo cargue si el objeto project ya contiene algo. -->\n<div class=\"container\" *ngIf=\"project\">\n    <h2>{{title}}</h2>\n\n    <form #projectForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n        <p>\n            <label for=\"name\">Nombre</label>\n            <input type=\"text\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"project.name\" required />\n            <span class=\"formError\" *ngIf=\"name.touched && !name.valid\">\n\t\t\t\tEl nombre es obligatorio.\n\t\t\t</span>\n        </p>\n        <p>\n            <label for=\"description\">Descripción</label>\n            <textarea name=\"description\" #description=\"ngModel\" [(ngModel)]=\"project.description\" required></textarea>\n            <span class=\"formError\" *ngIf=\"description.touched && !description.valid\">\n\t\t\t\tLa descripción es obligatoria.\n\t\t\t</span>\n        </p>\n        <p>\n            <label for=\"category\">Categoría</label>\n            <input type=\"text\" name=\"category\" #category=\"ngModel\" [(ngModel)]=\"project.category\" required />\n            <span class=\"formError\" *ngIf=\"category.touched && !category.valid\">\n\t\t\t\tLa categoría es obligatoria.\n\t\t\t</span>\n        </p>\n        <p>\n            <label for=\"year\">Año de creación</label>\n            <input type=\"text\" name=\"year\" #year=\"ngModel\" [(ngModel)]=\"project.year\" required />\n            <span class=\"formError\" *ngIf=\"year.touched && !year.valid\">\n\t\t\t\tEl año es obligatorio\n\t\t\t</span>\n        </p>\n        <p>\n            <label for=\"langs\">Lenguajes utilizados</label>\n            <input type=\"text\" name=\"langs\" #langs=\"ngModel\" [(ngModel)]=\"project.langs\" required />\n            <span class=\"formError\" *ngIf=\"langs.touched && !langs.valid\">\n\t\t\t\tDetallar los lenguajes utilizados es obligatorio.\n\t\t\t</span>\n        </p>\n        <p>\n            <label for=\"image\">Imagen del proyecto</label>\n            <!-- Cargamos la imagen si project existe, ya que javascript carga antes que Ajax-->\n            <span class=\"image\" *ngIf=\"project.image\">\n\t\t\t\t<!-- Mostramos la imagen también si existe -->\n\t\t\t\t<img src=\"{{url+'/get-image/'+project.image}}\" width=\"100px\" />\n\t\t\t</span>\n            <br/>\n            <!-- En el input de la imagen lanzamos el evento (change) de angular llamamos al método fileChangeEvent pasándole lo que contiene el input con la variable $event -->\n            <input type=\"file\" name=\"image\" placeholder=\"Subir imagen\" (change)=\"fileChangeEvent($event)\" />\n        </p>\n        <input type=\"submit\" value=\"Enviar\" [disabled]=\"!projectForm.form.valid\" />\n    </form>\n\n    <!-- Div para mostrar si la actualización ha sido satisfactoria -->\n    <div class=\"message success\" *ngIf=\"status == 'success'\">\n        El proyecto se ha actualizado correctamente, puedes verlo <a [routerLink]=\"['/proyecto/', saveProject]\">aquí</a>.\n    </div>\n    <!-- Div para mostrar si ha habido un error al actualizar el proyecto -->\n    <div class=\"message failed\" *ngIf=\"status == 'failed'\">\n        Ha ocurrido un error al actualizar el proyecto.\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/error/error.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/error/error.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>error works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/projects/projects.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/projects/projects.component.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- Listamos los proyectos obtenidos en el componente -->\n<div class=\"container\">\n\t<h2>Proyectos</h2>\n\n\t<ul>\n\t\t<!-- Recorremos los proyectos obtenidos para mostrarlos. Y además le aplicamos la pipe paginate del componente ngx-pagination instalado en el proyecto. Podemos cambiar el número de proyectos por página cambiando el valor de itemsPerPage -->\n\t\t<li *ngFor=\"let project of projects | paginate: {itemsPerPage: 6, currentPage: actualPage}\" class=\"project\">\n\t\t\t<!-- Hacemos que todo sea un enlace al componente 'project-detail' pasándole el id del proyecto y que nos mostrará toda la información del proyecto -->\n\t\t\t<a [routerLink]=\"['/proyecto', project._id]\">\n\t\t\t\t<!-- Metemos la imagen en un div para crear una máscara(class image), así conseguiremos que todo lo que sobresalga del div lo recorte -->\n\t\t\t\t<div class=\"image\">\n\t\t\t\t\t<!-- Mostramos la imagen también si existe -->\n\t\t\t\t\t<img src=\"{{url+'/get-image/'+project.image}}\" *ngIf=\"project.image\" />\n\t\t\t\t</div>\n\t\t\t\t<h3>{{project.name}}</h3>\n\t\t\t\t<p>{{project.category}}</p>\n\t\t\t</a>\n\t\t</li>\n\t</ul>\n\t<!-- Div para incluir el componente de paginación ngx-pagination -->\n\t<div class=\"pagination\">\t\n\t\t<pagination-controls (pageChange)=\"actualPage = $event\"></pagination-controls>\n\t</div>\t\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
            /* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");
            /* harmony import */ var _components_create_project_create_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/create-project/create-project.component */ "./src/app/components/create-project/create-project.component.ts");
            /* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
            /* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/error/error.component */ "./src/app/components/error/error.component.ts");
            /* harmony import */ var _components_detail_project_detail_project_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/detail-project/detail-project.component */ "./src/app/components/detail-project/detail-project.component.ts");
            /* harmony import */ var _components_edit_project_edit_project_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/edit-project/edit-project.component */ "./src/app/components/edit-project/edit-project.component.ts");
            //Importamos nuestros componentes
            var routes = [
                { path: '', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
                { path: 'sobre-mi', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
                { path: 'proyectos', component: _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"] },
                { path: 'crear-proyecto', component: _components_create_project_create_project_component__WEBPACK_IMPORTED_MODULE_5__["CreateProjectComponent"] },
                { path: 'contacto', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"] },
                { path: 'proyecto/:id', component: _components_detail_project_detail_project_component__WEBPACK_IMPORTED_MODULE_8__["DetailProjectComponent"] },
                { path: 'editar-proyecto/:id', component: _components_edit_project_edit_project_component__WEBPACK_IMPORTED_MODULE_9__["EditProjectComponent"] },
                { path: '**', component: _components_error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'portafolio-angular-frontend';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
            /* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");
            /* harmony import */ var _components_create_project_create_project_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/create-project/create-project.component */ "./src/app/components/create-project/create-project.component.ts");
            /* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
            /* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/error/error.component */ "./src/app/components/error/error.component.ts");
            /* harmony import */ var _components_detail_project_detail_project_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/detail-project/detail-project.component */ "./src/app/components/detail-project/detail-project.component.ts");
            /* harmony import */ var _components_edit_project_edit_project_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/edit-project/edit-project.component */ "./src/app/components/edit-project/edit-project.component.ts");
            /* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
            //Módulos necesarios
            //Necesario para poder hacer peticiones Ajax
            //Necesario para usar Two data binding y formularios
            //Configuración de rutas
            //Componentes aplicación
            //Componente ngx-pagination
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                        _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                        _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"],
                        _components_create_project_create_project_component__WEBPACK_IMPORTED_MODULE_9__["CreateProjectComponent"],
                        _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
                        _components_error_error_component__WEBPACK_IMPORTED_MODULE_11__["ErrorComponent"],
                        _components_detail_project_detail_project_component__WEBPACK_IMPORTED_MODULE_12__["DetailProjectComponent"],
                        _components_edit_project_edit_project_component__WEBPACK_IMPORTED_MODULE_13__["EditProjectComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                        ngx_pagination__WEBPACK_IMPORTED_MODULE_14__["NgxPaginationModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/components/about/about.component.css": 
        /*!******************************************************!*\
          !*** ./src/app/components/about/about.component.css ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#title{\n\twidth: 70%;\n\tmargin: 0px auto;\n\ttext-align: center;\n\tmargin-bottom: 70px;\n\tmargin-top: 20px;\n}\n\n/* Encabezado h1 del título*/\n\n#title h1{\n\t/* Fuente importada en styles.css */\n\tfont-family: \"finger\";\n\tfont-size: 60px;\n\tborder-bottom: 1px solid #ccc;\n\tpadding-bottom: 5px;\n}\n\n/* Encabezado h2 del título (subtitle) */\n\n#title h2{\n\tfont-size: 25px;\n\tcolor: gray;\n\tmargin-top: 5px;\n\tmargin-bottom: 5px;\n}\n\n/* Contenido de about (etiqueta article con clase about) */\n\narticle.about{\n\twidth: 70%;\n\tmargin: 0px auto;\n\tmargin-bottom: 0px;\n\tpadding-bottom: 15px;\n\tfont-size: 23px;\n}\n\n/* Título Sobre mí */\n\n.about h2{\n\tborder-bottom: 1px solid #ccc;\n\tpadding-bottom: 5px;\n\tmargin-bottom: 5px;\n}\n\n/* Párrafo de Sobre mí */\n\n.about p{\n\tpadding-top: 20px;\n\ttext-align: justify;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsVUFBVTtDQUNWLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLGdCQUFnQjtBQUNqQjs7QUFFQSw0QkFBNEI7O0FBQzVCO0NBQ0MsbUNBQW1DO0NBQ25DLHFCQUFxQjtDQUNyQixlQUFlO0NBQ2YsNkJBQTZCO0NBQzdCLG1CQUFtQjtBQUNwQjs7QUFFQSx3Q0FBd0M7O0FBQ3hDO0NBQ0MsZUFBZTtDQUNmLFdBQVc7Q0FDWCxlQUFlO0NBQ2Ysa0JBQWtCO0FBQ25COztBQUVBLDBEQUEwRDs7QUFDMUQ7Q0FDQyxVQUFVO0NBQ1YsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixvQkFBb0I7Q0FDcEIsZUFBZTtBQUNoQjs7QUFFQSxvQkFBb0I7O0FBQ3BCO0NBQ0MsNkJBQTZCO0NBQzdCLG1CQUFtQjtDQUNuQixrQkFBa0I7QUFDbkI7O0FBRUEsd0JBQXdCOztBQUN4QjtDQUNDLGlCQUFpQjtDQUNqQixtQkFBbUI7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGl0bGV7XG5cdHdpZHRoOiA3MCU7XG5cdG1hcmdpbjogMHB4IGF1dG87XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0bWFyZ2luLWJvdHRvbTogNzBweDtcblx0bWFyZ2luLXRvcDogMjBweDtcbn1cblxuLyogRW5jYWJlemFkbyBoMSBkZWwgdMOtdHVsbyovXG4jdGl0bGUgaDF7XG5cdC8qIEZ1ZW50ZSBpbXBvcnRhZGEgZW4gc3R5bGVzLmNzcyAqL1xuXHRmb250LWZhbWlseTogXCJmaW5nZXJcIjtcblx0Zm9udC1zaXplOiA2MHB4O1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcblx0cGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLyogRW5jYWJlemFkbyBoMiBkZWwgdMOtdHVsbyAoc3VidGl0bGUpICovXG4jdGl0bGUgaDJ7XG5cdGZvbnQtc2l6ZTogMjVweDtcblx0Y29sb3I6IGdyYXk7XG5cdG1hcmdpbi10b3A6IDVweDtcblx0bWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4vKiBDb250ZW5pZG8gZGUgYWJvdXQgKGV0aXF1ZXRhIGFydGljbGUgY29uIGNsYXNlIGFib3V0KSAqL1xuYXJ0aWNsZS5hYm91dHtcblx0d2lkdGg6IDcwJTtcblx0bWFyZ2luOiAwcHggYXV0bztcblx0bWFyZ2luLWJvdHRvbTogMHB4O1xuXHRwYWRkaW5nLWJvdHRvbTogMTVweDtcblx0Zm9udC1zaXplOiAyM3B4O1xufVxuXG4vKiBUw610dWxvIFNvYnJlIG3DrSAqL1xuLmFib3V0IGgye1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcblx0cGFkZGluZy1ib3R0b206IDVweDtcblx0bWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4vKiBQw6FycmFmbyBkZSBTb2JyZSBtw60gKi9cbi5hYm91dCBwe1xuXHRwYWRkaW5nLXRvcDogMjBweDtcblx0dGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/about/about.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/components/about/about.component.ts ***!
          \*****************************************************/
        /*! exports provided: AboutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function () { return AboutComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AboutComponent = /** @class */ (function () {
                function AboutComponent() {
                    this.title = "Sergio Carrasco";
                    this.subtitle = "Desarrollador Web";
                    this.email = "chechucarrasco@gmail.com";
                }
                AboutComponent.prototype.ngOnInit = function () {
                };
                return AboutComponent;
            }());
            AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-about',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")).default]
                })
            ], AboutComponent);
            /***/ 
        }),
        /***/ "./src/app/components/contact/contact.component.css": 
        /*!**********************************************************!*\
          !*** ./src/app/components/contact/contact.component.css ***!
          \**********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".image{\n\twidth: 100%;\n\theight: 100%;\n\toverflow: hidden;\n}\n\n#contactInfo{\n\twidth: 100%;\n\tmargin: 0px auto;\n\t\n\tmargin-bottom: 70px;\n\tmargin-top: 40px;\n}\n\n/* Encabezado h1 del título*/\n\n#contactInfo h1{\n\t/* Fuente importada en styles.css */\n\tfont-family: \"finger\";\n\tfont-size: 30px;\n\n\tpadding-bottom: 5px;\n}\n\n/* Encabezado h2 del título (subtitle) */\n\n#contactInfo h2{\n\tfont-size: 25px;\n\tcolor: gray;\n\tmargin-top: 5px;\n\tmargin-bottom: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsV0FBVztDQUNYLGdCQUFnQjs7Q0FFaEIsbUJBQW1CO0NBQ25CLGdCQUFnQjtBQUNqQjs7QUFFQSw0QkFBNEI7O0FBQzVCO0NBQ0MsbUNBQW1DO0NBQ25DLHFCQUFxQjtDQUNyQixlQUFlOztDQUVmLG1CQUFtQjtBQUNwQjs7QUFFQSx3Q0FBd0M7O0FBQ3hDO0NBQ0MsZUFBZTtDQUNmLFdBQVc7Q0FDWCxlQUFlO0NBQ2Ysa0JBQWtCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZXtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI2NvbnRhY3RJbmZve1xuXHR3aWR0aDogMTAwJTtcblx0bWFyZ2luOiAwcHggYXV0bztcblx0XG5cdG1hcmdpbi1ib3R0b206IDcwcHg7XG5cdG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi8qIEVuY2FiZXphZG8gaDEgZGVsIHTDrXR1bG8qL1xuI2NvbnRhY3RJbmZvIGgxe1xuXHQvKiBGdWVudGUgaW1wb3J0YWRhIGVuIHN0eWxlcy5jc3MgKi9cblx0Zm9udC1mYW1pbHk6IFwiZmluZ2VyXCI7XG5cdGZvbnQtc2l6ZTogMzBweDtcblxuXHRwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4vKiBFbmNhYmV6YWRvIGgyIGRlbCB0w610dWxvIChzdWJ0aXRsZSkgKi9cbiNjb250YWN0SW5mbyBoMntcblx0Zm9udC1zaXplOiAyNXB4O1xuXHRjb2xvcjogZ3JheTtcblx0bWFyZ2luLXRvcDogNXB4O1xuXHRtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/contact/contact.component.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/components/contact/contact.component.ts ***!
          \*********************************************************/
        /*! exports provided: ContactComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function () { return ContactComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/project.service */ "./src/app/services/project.service.ts");
            /* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global */ "./src/app/services/global.ts");
            //Servicio del componente
            //Archivo de configuracion global
            var ContactComponent = /** @class */ (function () {
                function ContactComponent(_projectService) {
                    this._projectService = _projectService;
                    this.url = _services_global__WEBPACK_IMPORTED_MODULE_3__["Global"].url;
                }
                ContactComponent.prototype.ngOnInit = function () {
                };
                return ContactComponent;
            }());
            ContactComponent.ctorParameters = function () { return [
                { type: _services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"] }
            ]; };
            ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-contact',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.css */ "./src/app/components/contact/contact.component.css")).default]
                })
            ], ContactComponent);
            /***/ 
        }),
        /***/ "./src/app/components/create-project/create-project.component.css": 
        /*!************************************************************************!*\
          !*** ./src/app/components/create-project/create-project.component.css ***!
          \************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JlYXRlLXByb2plY3QvY3JlYXRlLXByb2plY3QuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/create-project/create-project.component.ts": 
        /*!***********************************************************************!*\
          !*** ./src/app/components/create-project/create-project.component.ts ***!
          \***********************************************************************/
        /*! exports provided: CreateProjectComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProjectComponent", function () { return CreateProjectComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/project */ "./src/app/models/project.ts");
            /* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/project.service */ "./src/app/services/project.service.ts");
            /* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/upload.service */ "./src/app/services/upload.service.ts");
            /* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/global */ "./src/app/services/global.ts");
            //Modelo del componente
            //Servicio del componente
            //Servicio encargado de subir archivos
            //Archivo de configuracion global
            var CreateProjectComponent = /** @class */ (function () {
                function CreateProjectComponent(
                //Creamos las propiedades del Servicio
                _projectService, _uploadService) {
                    this._projectService = _projectService;
                    this._uploadService = _uploadService;
                    //Inicializamos las propiedades
                    this.title = "Crear nuevo proyecto";
                    this.year = new Date();
                    //Creamos una instancia de objeto Project (modelo componente)
                    this.project = new _models_project__WEBPACK_IMPORTED_MODULE_2__["Project"]('', '', '', '', this.year.getFullYear(), '', '');
                    this.status = "";
                }
                CreateProjectComponent.prototype.ngOnInit = function () {
                };
                //método para recoger los datos del formulario del componente y llamar al método que guarda los datos
                //en la base de datos
                CreateProjectComponent.prototype.onSubmit = function (form) {
                    var _this = this;
                    /*Llamamos al método creado en nuestro servicio, que realiza la petición POST, y además lo
                    suscribimos a un Observable para controlar la respuesta o error que devuelve */
                    //Guardar datos básicos
                    this._projectService.saveProject(this.project).subscribe(function (response) {
                        console.log(response);
                        //Si nos llega una respuesta satisfactoria
                        if (response.project) {
                            /*Si los datos se han guardado correctamente, subimos las imágenes*/
                            //Subir la imagen o imágenes seleccionadas
                            /* 1º parámetro es la url del método de nuestro backend('/upload-image'),en response.project._id tenemos
                               el id del proyecto creado. 2º parámetro lo dejamos vacío porque es opcional. 3º parámetro son los archivos
                               a subir. Y el último parámetro es el nombre del campo que va a recibir el backend(Lo tenemos en el archivo
                               backend/controller/project.js y el método uploadImage) y vemos que el nombre del campo es 'image'
                            */
                            //Además sólo lo hacemos si filesToUpload tiene algo
                            if (_this.filesToUpload) {
                                _this._uploadService.makeFileRequest(_services_global__WEBPACK_IMPORTED_MODULE_5__["Global"].url + "/upload-image/" + response.project._id, [], _this.filesToUpload, 'image')
                                    .then(function (result) {
                                    //Guardamos proyecto guardado para crear el enlace en la vista con su id
                                    _this.saveProject = result.project;
                                    _this.status = 'success';
                                    form.reset();
                                    console.log("Resultado petición ajax subir imágenes proyecto", result);
                                });
                                //Si no hay archivos para subir en filesToUpload también guardamos el enlace
                            }
                            else {
                                //Guardamos proyecto guardado para crear el enlace en la vista con su id
                                _this.saveProject = response.project;
                                _this.status = 'success';
                                form.reset();
                                console.log("Resultado petición ajax subir imágenes proyecto", response);
                            }
                        }
                    }, function (error) {
                        console.log(error);
                        _this.status = 'failed';
                    });
                };
                //método que recoge los archivos seleccionados en el input de subir imágenes y que invocamos desde else
                //formulario cada vez que salta el evento (change) del input.
                CreateProjectComponent.prototype.fileChangeEvent = function (fileInput) {
                    //forzamos a que filesToUpload sea un Array de tipo File que es otro array, esto se llama Castear.
                    //Y le asignamos los archivos que se han seleccionado en el input y que estamos recibiendo como parámetro
                    //con fileInput. Para ver todo el objeto y lo que guarda podemo hacer un cosole.log(fileInput).
                    this.filesToUpload = fileInput.target.files;
                };
                return CreateProjectComponent;
            }());
            CreateProjectComponent.ctorParameters = function () { return [
                { type: _services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"] },
                { type: _services_upload_service__WEBPACK_IMPORTED_MODULE_4__["UploadService"] }
            ]; };
            CreateProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-create-project',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-project.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/create-project/create-project.component.html")).default,
                    //Cargamos servicio del componente
                    providers: [_services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"], _services_upload_service__WEBPACK_IMPORTED_MODULE_4__["UploadService"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-project.component.css */ "./src/app/components/create-project/create-project.component.css")).default]
                })
            ], CreateProjectComponent);
            /***/ 
        }),
        /***/ "./src/app/components/detail-project/detail-project.component.css": 
        /*!************************************************************************!*\
          !*** ./src/app/components/detail-project/detail-project.component.css ***!
          \************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/* Estilos página detalle del proyecto (Componente project-detail) */\n\n/* Flotamos a la izquierda la imagen del detalle del proyecto de la página project-detail, y le damos\nun width dentro del contenedor del 47% y a los datos que mostramos(.data). Así dividimos el contenedor\npara la imagen y para los datos */\n\n.container .projectDetail .image{\n\tfloat: left;\n\twidth: 47%;\n}\n\n.container .projectDetail .image img{\n\t/* A la imagen le damos el 100% del 47% del contenedor */\n\twidth: 100%;\n}\n\n.container .projectDetail .data{\n\tfloat: left;\n\twidth: 47%;\n\tmargin-left: 20px;\n}\n\n/* Botones editar y borrar de la pagína detalle proyecto (Componente project-detail) */\n\n.button_edit, .button_delete, .button_confirm{\n\tdisplay: block;\n\tfont-size: 17px;\n\tpadding: 5px;\n\tmargin-top: 15px;\n\tcolor: white;\n\tborder: 1px solid rgba(13, 67, 133, 1);\n\tcursor: pointer;\n\twidth: 35%;\n\tfloat: left;\n\tmargin-right: 10px;\n\ttext-align: center;\n\ttext-decoration: none;\n}\n\n.button_edit{\n\tbackground: #e2d40a;\n}\n\n.button_delete{\n\tbackground: #f02929;\n}\n\n.button_confirm{\n\tbackground: #f02929;\n\twidth: auto;\n}\n\n.confirm{\n\tdisplay: block;\n\tfont-weight: bold;\n\tmargin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXRhaWwtcHJvamVjdC9kZXRhaWwtcHJvamVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9FQUFvRTs7QUFFcEU7O2lDQUVpQzs7QUFDakM7Q0FDQyxXQUFXO0NBQ1gsVUFBVTtBQUNYOztBQUVBO0NBQ0Msd0RBQXdEO0NBQ3hELFdBQVc7QUFDWjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxVQUFVO0NBQ1YsaUJBQWlCO0FBQ2xCOztBQUNBLHNGQUFzRjs7QUFDdEY7Q0FDQyxjQUFjO0NBQ2QsZUFBZTtDQUNmLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLHNDQUFzQztDQUN0QyxlQUFlO0NBQ2YsVUFBVTtDQUNWLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsaUJBQWlCO0NBQ2pCLGdCQUFnQjtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGV0YWlsLXByb2plY3QvZGV0YWlsLXByb2plY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEVzdGlsb3MgcMOhZ2luYSBkZXRhbGxlIGRlbCBwcm95ZWN0byAoQ29tcG9uZW50ZSBwcm9qZWN0LWRldGFpbCkgKi9cblxuLyogRmxvdGFtb3MgYSBsYSBpenF1aWVyZGEgbGEgaW1hZ2VuIGRlbCBkZXRhbGxlIGRlbCBwcm95ZWN0byBkZSBsYSBww6FnaW5hIHByb2plY3QtZGV0YWlsLCB5IGxlIGRhbW9zXG51biB3aWR0aCBkZW50cm8gZGVsIGNvbnRlbmVkb3IgZGVsIDQ3JSB5IGEgbG9zIGRhdG9zIHF1ZSBtb3N0cmFtb3MoLmRhdGEpLiBBc8OtIGRpdmlkaW1vcyBlbCBjb250ZW5lZG9yXG5wYXJhIGxhIGltYWdlbiB5IHBhcmEgbG9zIGRhdG9zICovXG4uY29udGFpbmVyIC5wcm9qZWN0RGV0YWlsIC5pbWFnZXtcblx0ZmxvYXQ6IGxlZnQ7XG5cdHdpZHRoOiA0NyU7XG59XG5cbi5jb250YWluZXIgLnByb2plY3REZXRhaWwgLmltYWdlIGltZ3tcblx0LyogQSBsYSBpbWFnZW4gbGUgZGFtb3MgZWwgMTAwJSBkZWwgNDclIGRlbCBjb250ZW5lZG9yICovXG5cdHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGFpbmVyIC5wcm9qZWN0RGV0YWlsIC5kYXRhe1xuXHRmbG9hdDogbGVmdDtcblx0d2lkdGg6IDQ3JTtcblx0bWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4vKiBCb3RvbmVzIGVkaXRhciB5IGJvcnJhciBkZSBsYSBwYWfDrW5hIGRldGFsbGUgcHJveWVjdG8gKENvbXBvbmVudGUgcHJvamVjdC1kZXRhaWwpICovXG4uYnV0dG9uX2VkaXQsIC5idXR0b25fZGVsZXRlLCAuYnV0dG9uX2NvbmZpcm17XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRmb250LXNpemU6IDE3cHg7XG5cdHBhZGRpbmc6IDVweDtcblx0bWFyZ2luLXRvcDogMTVweDtcblx0Y29sb3I6IHdoaXRlO1xuXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEzLCA2NywgMTMzLCAxKTtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHR3aWR0aDogMzUlO1xuXHRmbG9hdDogbGVmdDtcblx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmJ1dHRvbl9lZGl0e1xuXHRiYWNrZ3JvdW5kOiAjZTJkNDBhO1xufVxuXG4uYnV0dG9uX2RlbGV0ZXtcblx0YmFja2dyb3VuZDogI2YwMjkyOTtcbn1cblxuLmJ1dHRvbl9jb25maXJte1xuXHRiYWNrZ3JvdW5kOiAjZjAyOTI5O1xuXHR3aWR0aDogYXV0bztcbn1cblxuLmNvbmZpcm17XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0bWFyZ2luLXRvcDogMTVweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/detail-project/detail-project.component.ts": 
        /*!***********************************************************************!*\
          !*** ./src/app/components/detail-project/detail-project.component.ts ***!
          \***********************************************************************/
        /*! exports provided: DetailProjectComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailProjectComponent", function () { return DetailProjectComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/project */ "./src/app/models/project.ts");
            /* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/project.service */ "./src/app/services/project.service.ts");
            /* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/global */ "./src/app/services/global.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            //Modelo del componente
            //Servicio del componente
            //Archivo de configuracion global
            //Módulos necesarios para poder acceder a los parámetros recibidos por URL
            var DetailProjectComponent = /** @class */ (function () {
                function DetailProjectComponent(
                //Cargamos servicios necesarios en el constructor
                _projectService, _router, _route) {
                    this._projectService = _projectService;
                    this._router = _router;
                    this._route = _route;
                    this.url = _services_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url;
                    this.project = new _models_project__WEBPACK_IMPORTED_MODULE_2__["Project"]("", "", "", "", 0, "", "");
                    this.confirm = false;
                }
                DetailProjectComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    //Al cargar el componente recogemos el parámetro que nos llega por la URL y llamamos al método 
                    //del componente getProject pasándole el parámetro recogido
                    this._route.params.subscribe(function (params) {
                        var id = params.id;
                        //llámamos al método del componente pasandole ya el parámetro recogido
                        _this.getProject(id);
                    });
                };
                //Método que llama al método del servicio del componente que realiza la petición al backend para 
                //obtener la información de un proyecto especifico
                /* Éste método recibe un parámetro (id del proyecto) que nos llega por la url y que recogemos en
                   el ngOnInit()
                */
                DetailProjectComponent.prototype.getProject = function (id) {
                    var _this = this;
                    //Ahora invocamos al método de nuestro servicio para obtener la información del proyecto con
                    //el id recibido por parámetro
                    this._projectService.getProject(id).subscribe(function (response) {
                        //Si todo ha ido bien recogemos el objeto con la información del proyecto para poder
                        //mostrarla en la vista del componente
                        _this.project = response.project;
                        //console.log("Proyecto devuelto: ",response.project);
                    }, function (error) {
                        console.log(error);
                    });
                };
                /* Método para borrar un proyecto, llama al método deleteProject del servicio del componente (project.service.ts) */
                DetailProjectComponent.prototype.deleteProject = function (id) {
                    var _this = this;
                    this._projectService.deleteProject(id).subscribe(function (response) {
                        //si todo ha ido bien hacemos una redirección a la página de proyectos
                        if (response.project) {
                            _this._router.navigate(['/proyectos']);
                        }
                    }, function (error) {
                        console.log("Error al eliminar el proyecto: ", error);
                    });
                };
                //Método que controla la confirmación de borrado del proyecto
                DetailProjectComponent.prototype.setConfirm = function (confirm) {
                    this.confirm = confirm;
                };
                return DetailProjectComponent;
            }());
            DetailProjectComponent.ctorParameters = function () { return [
                { type: _services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
            ]; };
            DetailProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-detail-project',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detail-project.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/detail-project/detail-project.component.html")).default,
                    providers: [_services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detail-project.component.css */ "./src/app/components/detail-project/detail-project.component.css")).default]
                })
            ], DetailProjectComponent);
            /***/ 
        }),
        /***/ "./src/app/components/edit-project/edit-project.component.css": 
        /*!********************************************************************!*\
          !*** ./src/app/components/edit-project/edit-project.component.css ***!
          \********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC1wcm9qZWN0L2VkaXQtcHJvamVjdC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/edit-project/edit-project.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/components/edit-project/edit-project.component.ts ***!
          \*******************************************************************/
        /*! exports provided: EditProjectComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProjectComponent", function () { return EditProjectComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/project.service */ "./src/app/services/project.service.ts");
            /* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/upload.service */ "./src/app/services/upload.service.ts");
            /* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/global */ "./src/app/services/global.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            //Servicio del componente
            //Servicio encargado de subir archivos
            //Archivo de configuracion global
            //Módulos necesarios para poder acceder a los parámetros recibidos por URL
            var EditProjectComponent = /** @class */ (function () {
                function EditProjectComponent(
                //Creamos las propiedades de los Servicios necesarios
                _projectService, _uploadService, 
                //Servicio de rutas
                _route) {
                    this._projectService = _projectService;
                    this._uploadService = _uploadService;
                    this._route = _route;
                    this.title = "Editar proyecto";
                    this.url = _services_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url;
                }
                EditProjectComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    //Al cargar el componente recogemos el parámetro que nos llega por la URL y llamamos al método 
                    //del componente getProject() creado abajo pasándole el parámetro recogido para cargar la información
                    //del proyecto a editar
                    this._route.params.subscribe(function (params) {
                        //recogemos el id que nos llega por la url
                        var id = params.id;
                        //llámamos al método del componente pasandole ya el parámetro recogido
                        _this.getProject(id);
                    });
                };
                //Método que llama al método del servicio del componente que realiza la petición al backend para 
                //obtener la información de un proyecto especifico
                EditProjectComponent.prototype.getProject = function (id) {
                    var _this = this;
                    //Ahora invocamos al método de nuestro servicio para obtener la información del proyecto con
                    //el id recibido por parámetro
                    this._projectService.getProject(id).subscribe(function (response) {
                        //Si todo ha ido bien recogemos el objeto con la información del proyecto para poder
                        //mostrarla en la vista del componente
                        _this.project = response.project;
                        //console.log("Proyecto devuelto: ",response.project);
                    }, function (error) {
                        console.log(error);
                    });
                };
                //En el evento onSubmit llamamos al método de nuestro servicio updateProject pasandole los datos
                //del formulario para actualizar el proyecto
                EditProjectComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this._projectService.updateProject(this.project).subscribe(function (response) {
                        //Si nos llega una respuesta satisfactoria
                        if (response.project) {
                            /*Si los datos se han actualizado correctamente, subimos las imágenes*/
                            //Subir la imagen o imágenes seleccionadas
                            /* 1º parámetro es la url del método de nuestro backend('/upload-image'),en response.project._id tenemos
                               el id del proyecto creado. 2º parámetro lo dejamos vacío porque es opcional. 3º parámetro son los archivos
                               a subir. Y el último parámetro es el nombre del campo que va a recibir el backend(Lo tenemos en el archivo
                               backend/controller/project.js y el método uploadImage) y vemos que el nombre del campo es 'image'
                            */
                            //Además sólo lo hacemos si filesToUpload tiene algo
                            if (_this.filesToUpload) {
                                _this._uploadService.makeFileRequest(_services_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + "/upload-image/" + response.project._id, [], _this.filesToUpload, 'image')
                                    .then(function (result) {
                                    //Guardamos el id del proyecto guardado para crear el enlace en la vista
                                    _this.saveProject = result.project._id;
                                    _this.status = 'success';
                                });
                                //Si no hay archivos para subir en filesToUpload también guardamos el enlace
                            }
                            else {
                                //Guardamos el id del proyecto guardado para crear el enlace en la vista
                                _this.saveProject = response.project._id;
                                _this.status = 'success';
                            }
                        }
                        else {
                            _this.status = 'failed';
                        }
                    }, function (error) {
                        console.log(error);
                        _this.status = 'failed';
                    });
                };
                //Además necesitamos el fileChangeEvent igual que en el create-projects
                //método que recoge los archivos seleccionados en el input de subir imágenes y que invocamos desde el
                //formulario cada vez que salta el evento (change) del input.
                EditProjectComponent.prototype.fileChangeEvent = function (fileInput) {
                    //Casteamos el fileInput a que sea un array de tipo File. fileInput es el objeto que se recibe
                    //cómo parámetro con los archivos seleccionados en el input file. console.log(fileInput) para más información
                    //sobre el objeto recibido
                    this.filesToUpload = fileInput.target.files;
                };
                return EditProjectComponent;
            }());
            EditProjectComponent.ctorParameters = function () { return [
                { type: _services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"] },
                { type: _services_upload_service__WEBPACK_IMPORTED_MODULE_3__["UploadService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
            ]; };
            EditProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-edit-project',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-project.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/edit-project/edit-project.component.html")).default,
                    //Cargamos servicio que creamos para trabajar con los proyectos
                    providers: [_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"], _services_upload_service__WEBPACK_IMPORTED_MODULE_3__["UploadService"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-project.component.css */ "./src/app/components/edit-project/edit-project.component.css")).default]
                })
            ], EditProjectComponent);
            /***/ 
        }),
        /***/ "./src/app/components/error/error.component.css": 
        /*!******************************************************!*\
          !*** ./src/app/components/error/error.component.css ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/error/error.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/components/error/error.component.ts ***!
          \*****************************************************/
        /*! exports provided: ErrorComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () { return ErrorComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ErrorComponent = /** @class */ (function () {
                function ErrorComponent() {
                }
                ErrorComponent.prototype.ngOnInit = function () {
                };
                return ErrorComponent;
            }());
            ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-error',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/error/error.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./error.component.css */ "./src/app/components/error/error.component.css")).default]
                })
            ], ErrorComponent);
            /***/ 
        }),
        /***/ "./src/app/components/projects/projects.component.css": 
        /*!************************************************************!*\
          !*** ./src/app/components/projects/projects.component.css ***!
          \************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".projects{\n\tdisplay: block;\n\tmargin-left: 20px;\n}\n\n/* Estilos de cada <li> del listado de proyectos */\n\n.project{\n\tlist-style: none;\n\tdisplay: block;\n\tfloat: left;\n\twidth: 27%;\n\ttext-align: center;\n\tmargin-left: 20px;\n\tmargin-right: 20px;\n\tmargin-bottom: 30px;\n}\n\n/* Clase CSS .image que hay dentro de la .project, con ella hacemos la máscara para que corte todo\nlo que sobresale de lo que indicamos en ella, en este caso el 100% del ancho y 150px de alto. */\n\n.project .image{\n\twidth: 100%;\n\theight: 150px;\n\toverflow: hidden;\n}\n\n/* Imágenes dentro de la clase CSS project */\n\n.project img{\n\twidth: 100%;\n}\n\n/* Enlaces dentro de la clase CSS project*/\n\n.project a{\n\ttext-decoration: none;\n\tcolor: black;\n}\n\n/* Div de paginación */\n\n.pagination{\n\twidth: 100%;\n\tdisplay: block;\n\tfloat: left;\n\tjustify-content: center;\n\ttext-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsY0FBYztDQUNkLGlCQUFpQjtBQUNsQjs7QUFFQSxrREFBa0Q7O0FBQ2xEO0NBQ0MsZ0JBQWdCO0NBQ2hCLGNBQWM7Q0FDZCxXQUFXO0NBQ1gsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLG1CQUFtQjtBQUNwQjs7QUFHQTsrRkFDK0Y7O0FBQy9GO0NBQ0MsV0FBVztDQUNYLGFBQWE7Q0FDYixnQkFBZ0I7QUFDakI7O0FBRUEsNENBQTRDOztBQUM1QztDQUNDLFdBQVc7QUFDWjs7QUFFQSwwQ0FBMEM7O0FBQzFDO0NBQ0MscUJBQXFCO0NBQ3JCLFlBQVk7QUFDYjs7QUFFQSxzQkFBc0I7O0FBQ3RCO0NBQ0MsV0FBVztDQUNYLGNBQWM7Q0FDZCxXQUFXO0NBQ1gsdUJBQXVCO0NBQ3ZCLGtCQUFrQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWN0c3tcblx0ZGlzcGxheTogYmxvY2s7XG5cdG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4vKiBFc3RpbG9zIGRlIGNhZGEgPGxpPiBkZWwgbGlzdGFkbyBkZSBwcm95ZWN0b3MgKi9cbi5wcm9qZWN0e1xuXHRsaXN0LXN0eWxlOiBub25lO1xuXHRkaXNwbGF5OiBibG9jaztcblx0ZmxvYXQ6IGxlZnQ7XG5cdHdpZHRoOiAyNyU7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0bWFyZ2luLWxlZnQ6IDIwcHg7XG5cdG1hcmdpbi1yaWdodDogMjBweDtcblx0bWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuXG4vKiBDbGFzZSBDU1MgLmltYWdlIHF1ZSBoYXkgZGVudHJvIGRlIGxhIC5wcm9qZWN0LCBjb24gZWxsYSBoYWNlbW9zIGxhIG3DoXNjYXJhIHBhcmEgcXVlIGNvcnRlIHRvZG9cbmxvIHF1ZSBzb2JyZXNhbGUgZGUgbG8gcXVlIGluZGljYW1vcyBlbiBlbGxhLCBlbiBlc3RlIGNhc28gZWwgMTAwJSBkZWwgYW5jaG8geSAxNTBweCBkZSBhbHRvLiAqL1xuLnByb2plY3QgLmltYWdle1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxNTBweDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLyogSW3DoWdlbmVzIGRlbnRybyBkZSBsYSBjbGFzZSBDU1MgcHJvamVjdCAqL1xuLnByb2plY3QgaW1ne1xuXHR3aWR0aDogMTAwJTtcbn1cblxuLyogRW5sYWNlcyBkZW50cm8gZGUgbGEgY2xhc2UgQ1NTIHByb2plY3QqL1xuLnByb2plY3QgYXtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRjb2xvcjogYmxhY2s7XG59XG5cbi8qIERpdiBkZSBwYWdpbmFjacOzbiAqL1xuLnBhZ2luYXRpb257XG5cdHdpZHRoOiAxMDAlO1xuXHRkaXNwbGF5OiBibG9jaztcblx0ZmxvYXQ6IGxlZnQ7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/projects/projects.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/components/projects/projects.component.ts ***!
          \***********************************************************/
        /*! exports provided: ProjectsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () { return ProjectsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/project.service */ "./src/app/services/project.service.ts");
            /* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global */ "./src/app/services/global.ts");
            //Servicio del componente
            //Archivo de configuracion global
            var ProjectsComponent = /** @class */ (function () {
                function ProjectsComponent(_projectService) {
                    this._projectService = _projectService;
                    this.url = _services_global__WEBPACK_IMPORTED_MODULE_3__["Global"].url;
                    this.actualPage = 1;
                }
                ProjectsComponent.prototype.ngOnInit = function () {
                    //Llámamos al método que lista los proyectos al cargar el componente
                    this.getProjects();
                };
                //Método que llama al método con el mismo nombre del servicio del componente project.service,
                //encargado de devolver todos los proyectos que hay en la colección 'projects' de la base de datos
                ProjectsComponent.prototype.getProjects = function () {
                    var _this = this;
                    this._projectService.getProjects().subscribe(function (response) {
                        console.log(response);
                        //Si la petición ha ido bien, recogemos  la información de los proyectos en this.projects
                        if (response.projects) {
                            _this.projects = response.projects;
                        }
                    }, function (error) {
                        console.log(error);
                    });
                };
                return ProjectsComponent;
            }());
            ProjectsComponent.ctorParameters = function () { return [
                { type: _services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"] }
            ]; };
            ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-projects',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/projects/projects.component.html")).default,
                    providers: [_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projects.component.css */ "./src/app/components/projects/projects.component.css")).default]
                })
            ], ProjectsComponent);
            /***/ 
        }),
        /***/ "./src/app/models/project.ts": 
        /*!***********************************!*\
          !*** ./src/app/models/project.ts ***!
          \***********************************/
        /*! exports provided: Project */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function () { return Project; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* Definimos el modelo de la entidad Proyecto (Project)*/
            var Project = /** @class */ (function () {
                function Project(_id, name, description, category, year, langs, image) {
                    this._id = _id;
                    this.name = name;
                    this.description = description;
                    this.category = category;
                    this.year = year;
                    this.langs = langs;
                    this.image = image;
                }
                return Project;
            }());
            /***/ 
        }),
        /***/ "./src/app/services/global.ts": 
        /*!************************************!*\
          !*** ./src/app/services/global.ts ***!
          \************************************/
        /*! exports provided: Global */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function () { return Global; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // ** Archivo creado para configuraciones globales
            var Global = {
                //url Api-Rest
                //url: 'http://localhost:3700/api/'
                url: 'https://portafolio-angular-nodejs.herokuapp.com/api/'
            };
            /***/ 
        }),
        /***/ "./src/app/services/project.service.ts": 
        /*!*********************************************!*\
          !*** ./src/app/services/project.service.ts ***!
          \*********************************************/
        /*! exports provided: ProjectService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function () { return ProjectService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global */ "./src/app/services/global.ts");
            /** Servicio de la entidad Project **/
            //Importamos módulos necesarios
            //Para poder hacer peticiones Ajax
            //Fichero de configuración global que hemos creado
            var ProjectService = /** @class */ (function () {
                function ProjectService(_http) {
                    this._http = _http;
                    this.url = _global__WEBPACK_IMPORTED_MODULE_3__["Global"].url;
                }
                //Método de prueba
                ProjectService.prototype.testService = function () {
                    return 'Probando el servicio de la entidad Project';
                };
                //Guarda un nuevo proyecto en la colección projects de la base de datos 'portafolio'
                //Declaramos que devuelve un Observable de cualquier tipo
                ProjectService.prototype.saveProject = function (project) {
                    //convertimos los datos recibidos en un objeto JSON para tratarlos con la Api
                    var params = JSON.stringify(project);
                    //Establecemos las cabezeras(cómo se va a enviar la información, es decir, en qué formato)
                    //Así, establecemos que el Content-Type es de tipo 'application/json'
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
                    //hacemos la petición POST
                    return this._http.post(this.url + '/save-project', params, { headers: headers });
                };
                //Método que obtiene todos los proyectos de la base de datos usando el método para ello de nuestra Api
                //de la aplicación(backend)
                ProjectService.prototype.getProjects = function () {
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
                    return this._http.get(this.url + 'get-projects', { headers: headers });
                };
                //Método que devuelve un objeto con toda la información de un proyecto en concreto. Para ello usa el método
                //get '/project/:id?' del backend de la aplicación
                ProjectService.prototype.getProject = function (idProject) {
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
                    return this._http.get(this.url + '/project/' + idProject, { headers: headers });
                };
                //Método que envía una petición Ajax delete Http con el id del proyecto a borrar
                ProjectService.prototype.deleteProject = function (idProject) {
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
                    //.delete es el método Http que nos permite borrar
                    return this._http.delete(this.url + 'delete-project/' + idProject, { headers: headers });
                };
                //Método que envía una petición Ajax put para actualizar la información de un proyecto 
                ProjectService.prototype.updateProject = function (project) {
                    //Convertimos el objeto project recibido con los datos del objeto a actualizar, a un JSON String y pasamos el proyecto entero posteriormente
                    var params = JSON.stringify(project);
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
                    //Usamos el método .put que sirve para actualizar un recurso en el backend
                    return this._http.put(this.url + '/update-project/' + project._id, params, { headers: headers });
                };
                return ProjectService;
            }());
            ProjectService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], ProjectService);
            /***/ 
        }),
        /***/ "./src/app/services/upload.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/services/upload.service.ts ***!
          \********************************************/
        /*! exports provided: UploadService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function () { return UploadService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global */ "./src/app/services/global.ts");
            var UploadService = /** @class */ (function () {
                function UploadService() {
                    this.url = _global__WEBPACK_IMPORTED_MODULE_2__["Global"].url;
                }
                //Método que realiza una petición AJAX clásica en la que adjuntamos un archivo para subir
                UploadService.prototype.makeFileRequest = function (url, params, files, name) {
                    //si nos devuelve resolve es que la promesa se ha resuelto y si llega reject es que ha devuelto un
                    //error
                    return new Promise(function (resolve, reject) {
                        //para la petición necesitamos simular un formulario clásico
                        //FormData() nos permite crear un objeto de tipo formulario, en este caso detallamos que será
                        //de tipo any para no tener ningún problema
                        var formData = new FormData();
                        //Creamos variable xhr, qué es sinónimo de ajax, que contendrá un objeto de tipo XMLHttpRequest
                        //qué es el tipo de objeto de peticiones asíncronas que siempre ha habido en javascript 
                        var xhr = new XMLHttpRequest();
                        //Bucle que recorre el array de archivos<File> que puede estar llegando
                        /* Es decir: Recorre todos los archivos que me llegan, y adjuntalo al formulario con el nombre que
                           se recibe cómo parámetro "name", se añade el archivo(ruta) "files[i]" y recoge su nombre también
                           files[i].name
                        */
                        for (var i = 0; i < files.length; i++) {
                            //A formData se le añade el name del campo del formulario, el archivo que se añaderá en la
                            //petición, y el nombre del archivo. Así podremos hacer una petición para subir vario archivos
                            formData.append(name, files[i], files[i].name);
                        }
                        //Definimos al objeto XMLHttpRequest la función que se encarga de procesar la respuesta de la
                        //petición
                        xhr.onreadystatechange = function () {
                            if (xhr.readyState == 4) {
                                if (xhr.status == 200) {
                                    resolve(JSON.parse(xhr.response));
                                }
                                else {
                                    reject(xhr.response);
                                }
                            }
                        };
                        //Se realiza la petición Ajax por POST enviandole el formulario
                        //mediante post, a la url indicada, El tercer parámetro establece si la petición es asíncrona. Si se 
                        //define TRUE, la ejecución de la función de JavaScript continuará aún cuando la respuesta del servidor 
                        //no haya llegado. Por esta capacidad es la A en AJAX.
                        xhr.open('POST', url, true);
                        xhr.send(formData);
                    });
                };
                return UploadService;
            }());
            UploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], UploadService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /home/sergio/Escritorio/Nueva carpeta/proyectos/angular/portafolio-angular-frontend/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map