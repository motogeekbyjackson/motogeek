"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 748:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_linkData_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(847);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_share_social__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55);
/* harmony import */ var react_share_social__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_share_social__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(166);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(185);
/* harmony import */ var _public_Motogeek_Logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_4__, _headlessui_react__WEBPACK_IMPORTED_MODULE_5__]);
([_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_4__, _headlessui_react__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const style = {
  root: {
    borderRadius: 10,
    border: 0
  }
};
function Home({
  jsonItems
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("title", {
        children: "MotoGeek"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "flex justify-center m-10 flex-col items-center gap-2",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        src: _public_Motogeek_Logo_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
        alt: "Motogeek logo",
        height: 80,
        width: 160,
        className: "rounded"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("article", {
        className: "prose text-center mb-4",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("h2", {
          children: "MotoGeek"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("h4", {
          children: "The products listed on this page contain affiliate links.It won't cost you extra"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        className: "max-w-max flex flex-col gap-3 mb-20",
        children: jsonItems.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "alert shadow-lg transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-20 hover:bg-white hover:text-gray-900 duration-200",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("a", {
            href: item.link,
            target: "_blank",
            className: "w-full",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "text-center flex justify-center items-center gap-3",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("img", {
                src: item.imageUrl,
                width: 40,
                height: 40,
                className: "rounded"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                children: item.name
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Popover, {
            className: "relative",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Popover.Button, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_4__.ShareNetwork, {
                size: 32
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Popover.Panel, {
              className: "absolute left-1/2 z-10 mt-3 w-screen mb-20 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_share_social__WEBPACK_IMPORTED_MODULE_3__.ShareSocial, {
                title: "Share this link",
                url: item.link,
                socialTypes: ["facebook", "twitter", "reddit", "linkedin", "whatsapp"],
                onSocialButtonClicked: data => console.log(data),
                style: style
              })
            })]
          })]
        }, index))
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("footer", {
      className: "footer items-center p-4 bg-neutral text-neutral-content fixed bottom-0",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        className: "items-center grid-flow-col",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
          children: ["Copyright \xA9 ", new Date().getFullYear(), " - All right reserved"]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "grid-flow-col gap-4 md:place-self-center md:justify-self-end",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("a", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            className: "fill-current",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
              d: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("a", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            className: "fill-current",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
              d: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("a", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            className: "fill-current",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
              d: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
            })
          })
        })]
      })]
    })]
  });
}
async function getStaticProps(context) {
  return {
    props: {
      jsonItems: _data_linkData_json__WEBPACK_IMPORTED_MODULE_1__
    }
  };
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 30:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Motogeek Logo.d28f6593.png","height":900,"width":3000,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAIAAADq9gq6AAAAOklEQVR42mOIiYmZO2dOf19ff39/b09PZ21pW2drdFQ0Q3BwcHNzc15ubn5eXkVFRUNdbV1drYO9AwBHPxY2tT8YwAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":2});

/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 55:
/***/ ((module) => {

module.exports = require("react-share-social");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 166:
/***/ ((module) => {

module.exports = import("@phosphor-icons/react");;

/***/ }),

/***/ 847:
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"Vivo Y56 5G","link":"https://www.amazon.in/Vivo-Shimmer-Storage-Additional-Exchange/dp/B07WJWXHFN?ref_=Oct_DLandingS_D_d80cd76e_60&th=1","imageUrl":"https://m.media-amazon.com/images/I/61CFD796iZL._SL1200_.jpg"},{"name":"Vivo Y56 5G Super model and super car of the year","link":"https://www.amazon.in/Vivo-Shimmer-Storage-Additional-Exchange/dp/B07WJWXHFN?ref_=Oct_DLandingS_D_d80cd76e_60&th=1","imageUrl":"https://m.media-amazon.com/images/I/61CFD796iZL._SL1200_.jpg"},{"name":"V-Guard Self Priming Monoblock Pump, REVO Plus 1 HP, Multicolor","link":"https://www.amazon.in/V-Guard-Self-Priming-Monoblock-Multicolor/dp/B07ZT827C5/ref=pd_rhf_d_ee_s_pd_sbs_rvi_sccl_2_2/262-0292573-6260704?pd_rd_w=PBjOi&content-id=amzn1.sym.0d5f32d5-d8bf-40fc-9298-1b7e0b0b5c8d&pf_rd_p=0d5f32d5-d8bf-40fc-9298-1b7e0b0b5c8d&pf_rd_r=DVCF3EQ035BV40SGYRV3&pd_rd_wg=ntljD&pd_rd_r=62b61a78-a004-4b1f-a8aa-07d748ca424f&pd_rd_i=B07ZT827C5&psc=1","imageUrl":"https://m.media-amazon.com/images/I/417nFSrwb-L.jpg"},{"name":"Vivo Y56 5G Super model and super car of the year","link":"https://www.amazon.in/Vivo-Shimmer-Storage-Additional-Exchange/dp/B07WJWXHFN?ref_=Oct_DLandingS_D_d80cd76e_60&th=1","imageUrl":"https://m.media-amazon.com/images/I/61CFD796iZL._SL1200_.jpg"},{"name":"V-Guard Self Priming Monoblock Pump, REVO Plus 1 HP, Multicolor","link":"https://www.amazon.in/V-Guard-Self-Priming-Monoblock-Multicolor/dp/B07ZT827C5/ref=pd_rhf_d_ee_s_pd_sbs_rvi_sccl_2_2/262-0292573-6260704?pd_rd_w=PBjOi&content-id=amzn1.sym.0d5f32d5-d8bf-40fc-9298-1b7e0b0b5c8d&pf_rd_p=0d5f32d5-d8bf-40fc-9298-1b7e0b0b5c8d&pf_rd_r=DVCF3EQ035BV40SGYRV3&pd_rd_wg=ntljD&pd_rd_r=62b61a78-a004-4b1f-a8aa-07d748ca424f&pd_rd_i=B07ZT827C5&psc=1","imageUrl":"https://m.media-amazon.com/images/I/417nFSrwb-L.jpg"},{"name":"Vivo Y56 5G Super model and super car of the year","link":"https://www.amazon.in/Vivo-Shimmer-Storage-Additional-Exchange/dp/B07WJWXHFN?ref_=Oct_DLandingS_D_d80cd76e_60&th=1","imageUrl":"https://m.media-amazon.com/images/I/61CFD796iZL._SL1200_.jpg"},{"name":"V-Guard Self Priming Monoblock Pump, REVO Plus 1 HP, Multicolor","link":"https://www.amazon.in/V-Guard-Self-Priming-Monoblock-Multicolor/dp/B07ZT827C5/ref=pd_rhf_d_ee_s_pd_sbs_rvi_sccl_2_2/262-0292573-6260704?pd_rd_w=PBjOi&content-id=amzn1.sym.0d5f32d5-d8bf-40fc-9298-1b7e0b0b5c8d&pf_rd_p=0d5f32d5-d8bf-40fc-9298-1b7e0b0b5c8d&pf_rd_r=DVCF3EQ035BV40SGYRV3&pd_rd_wg=ntljD&pd_rd_r=62b61a78-a004-4b1f-a8aa-07d748ca424f&pd_rd_i=B07ZT827C5&psc=1","imageUrl":"https://m.media-amazon.com/images/I/417nFSrwb-L.jpg"},{"name":"Vivo Y56 5G Super model and super car of the year","link":"https://www.amazon.in/Vivo-Shimmer-Storage-Additional-Exchange/dp/B07WJWXHFN?ref_=Oct_DLandingS_D_d80cd76e_60&th=1","imageUrl":"https://m.media-amazon.com/images/I/61CFD796iZL._SL1200_.jpg"},{"name":"V-Guard Self Priming Monoblock Pump, REVO Plus 1 HP, Multicolor","link":"https://www.amazon.in/V-Guard-Self-Priming-Monoblock-Multicolor/dp/B07ZT827C5/ref=pd_rhf_d_ee_s_pd_sbs_rvi_sccl_2_2/262-0292573-6260704?pd_rd_w=PBjOi&content-id=amzn1.sym.0d5f32d5-d8bf-40fc-9298-1b7e0b0b5c8d&pf_rd_p=0d5f32d5-d8bf-40fc-9298-1b7e0b0b5c8d&pf_rd_r=DVCF3EQ035BV40SGYRV3&pd_rd_wg=ntljD&pd_rd_r=62b61a78-a004-4b1f-a8aa-07d748ca424f&pd_rd_i=B07ZT827C5&psc=1","imageUrl":"https://m.media-amazon.com/images/I/417nFSrwb-L.jpg"},{"name":"Vivo Y56 5G Super model and super car of the year","link":"https://www.amazon.in/Vivo-Shimmer-Storage-Additional-Exchange/dp/B07WJWXHFN?ref_=Oct_DLandingS_D_d80cd76e_60&th=1","imageUrl":"https://m.media-amazon.com/images/I/61CFD796iZL._SL1200_.jpg"},{"name":"V-Guard Self Priming Monoblock Pump, REVO Plus 1 HP, Multicolor","link":"https://www.amazon.in/V-Guard-Self-Priming-Monoblock-Multicolor/dp/B07ZT827C5/ref=pd_rhf_d_ee_s_pd_sbs_rvi_sccl_2_2/262-0292573-6260704?pd_rd_w=PBjOi&content-id=amzn1.sym.0d5f32d5-d8bf-40fc-9298-1b7e0b0b5c8d&pf_rd_p=0d5f32d5-d8bf-40fc-9298-1b7e0b0b5c8d&pf_rd_r=DVCF3EQ035BV40SGYRV3&pd_rd_wg=ntljD&pd_rd_r=62b61a78-a004-4b1f-a8aa-07d748ca424f&pd_rd_i=B07ZT827C5&psc=1","imageUrl":"https://m.media-amazon.com/images/I/417nFSrwb-L.jpg"},{"name":"Palmolive Coconut Joy Body Wash, 250ml CrèmeBased Exfoliating Body Scrub based Bodywash Bottle","link":"https://www.amazon.in/Palmolive-Bodywash-Thermal-Renewal-Shower/dp/B00GZG6SSG?pd_rd_w=GOL0S&content-id=amzn1.sym.9f526935-7db9-4bc3-b3a1-e5f1fc192c96&pf_rd_p=9f526935-7db9-4bc3-b3a1-e5f1fc192c96&pf_rd_r=NHGJH21RNEBRF39P0PAP&pd_rd_wg=tVom4&pd_rd_r=7ee6560d-f156-4f43-ae41-8658de4031e6&pd_rd_i=B00GZG6SSG&psc=1&ref_=pd_bap_d_grid_rp_0_2_i","imageUrl":"https://m.media-amazon.com/images/I/61ooGINlsOL._SL1500_.jpg"}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(748)));
module.exports = __webpack_exports__;

})();