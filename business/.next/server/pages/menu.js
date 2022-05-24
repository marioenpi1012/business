"use strict";
(() => {
var exports = {};
exports.id = 934;
exports.ids = [934];
exports.modules = {

/***/ 6360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ menu),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Layout.js + 1 modules
var Layout = __webpack_require__(9049);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./src/components/MenuItem.jsx

function MenuItem({ product , subcat  }) {
    console.log(product);
    const { _id , title , desc , price , subcategory  } = product;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            subcat && subcat,
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "item",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "titleAndPrice",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "name",
                                children: title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "price",
                                children: [
                                    "$",
                                    price
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "description",
                        children: desc && desc
                    })
                ]
            }, _id)
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/Menu.jsx




function Menu({ products  }) {
    console.log(products);
    const { 0: category , 1: setCategory  } = (0,external_react_.useState)("pupusas");
    const filterMenu = (event)=>{
        console.log(event.target.getAttribute("data-value"));
        setCategory(event.target.getAttribute("data-value"));
        const filterBtns = document.querySelectorAll(".filterBtn");
        filterBtns.forEach((btn)=>{
            btn.classList.remove("active");
        });
        event.target.classList.add("active");
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "Menu",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "title",
                children: "Menu"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "filterMenu",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        "data-value": "pupusas",
                        className: "filterBtn active",
                        onClick: filterMenu,
                        children: "pupusas"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        "data-value": "breakfast",
                        className: "filterBtn",
                        onClick: filterMenu,
                        children: "breakfast"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        "data-value": "lunch",
                        className: "filterBtn",
                        onClick: filterMenu,
                        children: "lunch"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        "data-value": "mexican food",
                        className: "filterBtn",
                        onClick: filterMenu,
                        children: "Tacos/Gorditas"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "title",
                        children: category === "breakfast" && "Breakfast Tacos" || category === "mexican food" && "tacos"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "items",
                        children: products.map((product)=>category === product.category && product.subcategory === "tacos" && /*#__PURE__*/ jsx_runtime_.jsx(MenuItem, {
                                product: product
                            })
                        )
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "title",
                        children: category === "breakfast" && "Breakfast " || category === "mexican food" && "Gorditas"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "items",
                        children: products.map((product)=>category === product.category && product.subcategory !== "tacos" && /*#__PURE__*/ jsx_runtime_.jsx(MenuItem, {
                                product: product
                            })
                        )
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/pages/menu.js






function menu({ data  }) {
    console.log("menu", data);
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Menu, {
            products: data
        })
    });
};
const getServerSideProps = async ()=>{
    const res = await external_axios_default().get("http://localhost:3000/api/products");
    return {
        props: {
            data: res.data
        }
    };
};


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,49], () => (__webpack_exec__(6360)));
module.exports = __webpack_exports__;

})();