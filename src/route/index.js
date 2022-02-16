import { createRouter, createWebHashHistory } from "vue-router"
const routes = [
   {
      path: "/",
      component: () => import("../components/layout.vue"),
      children: [
         {
            path: "/home",
            component: () => import("../page/home.vue"),

         },
         {
            path: "/list",
            component: () => import("../page/list/index.vue"),
         },
         {
            path: "/add",
            component: () => import("../page/list/add.vue"),
         },
      ]
   },

]
const toRoute = function(item, pids, route) {
   const { url, isExternal } = parseUrl(item.nodeType !== 3 && item.url);

   if (isExternal) {
      iframeList[item.parameter] = url;
   }
   if (url) {
      item.pids = pids;
      const appUrl = isExternal ? 'http://10.10.71.161:8081/fm/#/login' : null;
      route.push({
         path: `${url}`,
         component: () => import(`../page/${url}/index.js`),
         name: pids.concat(item.id).join('-'),
         icon: '',
         meta: Object.assign(item, {
            pids,
            url: `${url}`,
            appUrl: `${appUrl}`,
            Id: `${item.id}`
         }),
         noDropdown: true
      });

      if (child.hasOwnProperty(url)) {
         [].concat(child[url]).forEach((c, i) => {
            const id = `${item.id}.${i}`;
            c.meta = Object.assign(
               {
                  children: item.children || [],
                  id,
                  pids: pids.concat(item.id),
                  // hideMenu: true,addTag
                  isRouteChild: true,
                  text: c.name
               },
               c.meta || {}
            );

            route.push(c);
         });
      }
   }
   if (item.children && item.children.length) {
      for (let i = 0, len = item.children.length; i < len; i++) {
         toRoute(item.children[i], [...pids, item.id], route);
      }
   }
};
export function menuToRoute(menu) {
   const route = {
      path: '/',
      component: () => import("../components/layout.vue"),
      children: [],
   };
   menu.forEach(item => {
      if (item.type === 'self') {
         return;
      } else {
         toRoute(item, [], route.children);
      }
   });
}
export default function(history = createWebHashHistory()) {
   return createRouter({
      history,
      routes,
   })
}
